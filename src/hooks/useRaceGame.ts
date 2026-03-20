import { useState, useCallback, useRef, useEffect } from 'react';
import { Player, GamePhase, Animal, ANIMALS, PenaltySettings } from '@/types/game';

const UPDATE_INTERVAL = 50; // 20 FPS

// 속도 설정 - 모든 캐릭터 동일
const BASE_SPEED = 15; // 모두 동일한 기본 속도 (% per second)

// 가속 버프 설정
const BOOST_COUNT_PER_GAME = 4;      // 게임당 4회 버프
const MIN_BOOST_AMOUNT = 1.5;        // 최소 가속량 (+1.5%/s)
const MAX_BOOST_AMOUNT = 3.5;        // 최대 가속량 (+3.5%/s)
const BOOST_DURATION = 800;          // 버프 지속 시간 (0.8초)
const BOOST_ZONE_START = 0;          // 버프 구간 시작 (0%)
const BOOST_ZONE_END = 85;           // 버프 구간 종료 (85%)

// 돌멩이 이벤트 설정
const STONE_EVENT_PROBABILITY = 0.5; // 50% 확률
const STONE_APPEAR_POSITION = 80;    // 80% 지점에서 돌멩이 나타남
const STONE_POSITION = 85;           // 85% 지점에서 충돌

interface PlayerBoostState {
  currentSpeed: number;           // 현재 속도
  boostPositions: number[];       // 버프 발동 위치들 (4개, 미리 결정)
  usedBoosts: number;             // 사용한 버프 개수
  boostEndTime: number;           // 현재 버프 종료 시간
  currentBoostAmount: number;     // 현재 버프량
  isFallen: boolean;              // 넘어진 상태
}

export function useRaceGame() {
  const [playerCount, setPlayerCount] = useState(4);
  const [players, setPlayers] = useState<Player[]>([]);
  const [gamePhase, setGamePhase] = useState<GamePhase>('setup');
  const [countdown, setCountdown] = useState(3);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [penaltySettings, setPenaltySettings] = useState<PenaltySettings>({
    penaltyCount: 1,
    penaltyRanks: [4],
  });
  
  const raceStartTime = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishOrder = useRef<number>(0);
  const boostStatesRef = useRef<Map<number, PlayerBoostState>>(new Map());
  const stoneEventTriggeredRef = useRef<boolean>(false);
  const stoneEventEnabledRef = useRef<boolean>(false);
  const stoneAppearedRef = useRef<boolean>(false);
  const stoneTargetPlayerIdRef = useRef<number | null>(null);
  
  // RaceTrack에 전달할 state (렌더링 트리거용)
  const [stoneEventEnabled, setStoneEventEnabled] = useState(false);
  const [stoneAppeared, setStoneAppeared] = useState(false);
  const [stoneTargetPlayerId, setStoneTargetPlayerId] = useState<number | null>(null);

  const initializePlayers = useCallback((count: number, selectedAnimals: Animal[], penalty: PenaltySettings) => {
    const newPlayers: Player[] = [];
    for (let i = 0; i < count; i++) {
      newPlayers.push({
        id: i + 1,
        name: `플레이어 ${i + 1}`,
        animal: selectedAnimals[i] || ANIMALS[i],
        position: 0,
        finished: false,
        finishTime: null,
        rank: null,
      });
    }
    setPlayers(newPlayers);
    setPenaltySettings(penalty);
    finishOrder.current = 0;
    
    // 돌멩이 이벤트 발생 여부 결정 (40% 확률)
    const stoneEnabled = Math.random() < STONE_EVENT_PROBABILITY;
    stoneEventEnabledRef.current = stoneEnabled;
    stoneAppearedRef.current = false;
    stoneTargetPlayerIdRef.current = null;
    stoneEventTriggeredRef.current = false;
    
    // State도 설정 (렌더링 트리거)
    setStoneEventEnabled(stoneEnabled);
    setStoneAppeared(false);
    setStoneTargetPlayerId(null);
    
    console.log('🎲 돌멩이 이벤트:', stoneEnabled ? '활성화 (50%)' : '비활성화');
    
    // 각 플레이어의 버프 상태 초기화
    const boostStates = new Map<number, PlayerBoostState>();
    newPlayers.forEach(player => {
      // 0~85% 구간에서 4개의 랜덤한 버프 위치 생성 (정렬됨)
      const positions: number[] = [];
      for (let i = 0; i < BOOST_COUNT_PER_GAME; i++) {
        positions.push(BOOST_ZONE_START + Math.random() * (BOOST_ZONE_END - BOOST_ZONE_START));
      }
      positions.sort((a, b) => a - b); // 오름차순 정렬
      
      boostStates.set(player.id, {
        currentSpeed: BASE_SPEED,
        boostPositions: positions,
        usedBoosts: 0,
        boostEndTime: -1,
        currentBoostAmount: 0,
        isFallen: false,
      });
    });
    boostStatesRef.current = boostStates;
  }, []);

  const startCountdown = useCallback(() => {
    setGamePhase('countdown');
    setCountdown(3);
    
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(countdownInterval);
        startRace();
      }
    }, 1000);
  }, []);

  const startRace = useCallback(() => {
    setGamePhase('racing');
    raceStartTime.current = Date.now();
    finishOrder.current = 0;
    setElapsedTime(0);

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - raceStartTime.current;
      setElapsedTime(elapsed);

      setPlayers(prev => {
        const activePlayers = prev.filter(p => !p.finished);
        
        // 돌멩이 나타남 체크 (1등이 75% 지점 도달하면) - Ref 사용!
        if (stoneEventEnabledRef.current && !stoneAppearedRef.current && activePlayers.length > 0) {
          const leadersAt75 = activePlayers.filter(p => p.position >= 75);
          if (leadersAt75.length > 0) {
            // 75% 지점의 1등을 찾아서 저장
            const leader = leadersAt75.reduce((max, p) => p.position > max.position ? p : max, leadersAt75[0]);
            stoneTargetPlayerIdRef.current = leader.id;
            stoneAppearedRef.current = true;
            
            // State도 업데이트 (렌더링 트리거)
            setStoneTargetPlayerId(leader.id);
            setStoneAppeared(true);
            
            console.log('🪨 돌멩이 나타남! 대상:', leader.name, 'ID:', leader.id);
          }
        }
        
        // 돌멩이 충돌 체크 (대상 플레이어가 85% 지점 도달하면) - Ref 사용!
        if (stoneAppearedRef.current && stoneTargetPlayerIdRef.current && !stoneEventTriggeredRef.current) {
          const targetPlayer = activePlayers.find(p => p.id === stoneTargetPlayerIdRef.current);
          
          if (targetPlayer && targetPlayer.position >= STONE_POSITION) {
            // 대상 플레이어를 넘어뜨림!
            const leaderState = boostStatesRef.current.get(targetPlayer.id);
            if (leaderState) {
              leaderState.isFallen = true;
              stoneEventTriggeredRef.current = true;
              console.log('💥 넘어짐!', targetPlayer.name);
            }
          }
        }

        const updatedPlayers = prev.map(player => {
          const boostState = boostStatesRef.current.get(player.id);
          if (!boostState) return player;

          // 넘어진 상태면 87% 위치에 고정
          if (boostState.isFallen) {
            return {
              ...player,
              position: 87, // 87% 위치에 멈춤
              isFallen: true,
            };
          }

          if (player.finished) return player;

          // 위치 기반 버프 발동 체크
          if (boostState.usedBoosts < BOOST_COUNT_PER_GAME) {
            const nextBoostPosition = boostState.boostPositions[boostState.usedBoosts];
            
            // 다음 버프 위치에 도달했는지 체크
            if (player.position >= nextBoostPosition && elapsed >= boostState.boostEndTime) {
              // 버프 발동!
              boostState.usedBoosts++;
              
              // 랜덤한 가속량 (좁은 범위)
              boostState.currentBoostAmount = MIN_BOOST_AMOUNT + Math.random() * (MAX_BOOST_AMOUNT - MIN_BOOST_AMOUNT);
              boostState.boostEndTime = elapsed + BOOST_DURATION;
            }
          }

          // 현재 버프 적용 여부 체크
          let currentSpeed = BASE_SPEED;
          if (elapsed < boostState.boostEndTime) {
            // 버프 활성화 중
            currentSpeed = BASE_SPEED + boostState.currentBoostAmount;
          }

          boostState.currentSpeed = currentSpeed;

          // 위치 업데이트
          const speedPerFrame = currentSpeed * (UPDATE_INTERVAL / 1000);
          const newPosition = Math.min(player.position + speedPerFrame, 100);

          // 결승선 체크
          if (newPosition >= 100) {
            finishOrder.current++;
            return {
              ...player,
              position: 100,
              finished: true,
              finishTime: elapsed,
              rank: finishOrder.current,
            };
          }

          return {
            ...player,
            position: newPosition,
            isFallen: false,
          };
        });

        // 모든 플레이어 도착 체크 (넘어진 선수 제외)
        const notFallenPlayers = updatedPlayers.filter(p => {
          const state = boostStatesRef.current.get(p.id);
          return state && !state.isFallen;
        });
        const allNotFallenFinished = notFallenPlayers.every(p => p.finished);
        
        if (allNotFallenFinished && notFallenPlayers.length > 0) {
          // 넘어진 선수에게 꼴찌 순위 부여
          const fallenPlayers = updatedPlayers.filter(p => {
            const state = boostStatesRef.current.get(p.id);
            return state && state.isFallen;
          });
          
          fallenPlayers.forEach(fallenPlayer => {
            finishOrder.current++;
            fallenPlayer.finished = true;
            fallenPlayer.rank = finishOrder.current;
            fallenPlayer.finishTime = elapsed;
          });
          
          if (intervalRef.current) clearInterval(intervalRef.current);
          setGamePhase('finished');
          
          return updatedPlayers;
        }

        // 일반적인 경우: 모든 플레이어 도착
        const allFinished = updatedPlayers.every(p => p.finished);
        if (allFinished) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setGamePhase('finished');
        }

        return updatedPlayers;
      });
    }, UPDATE_INTERVAL);
  }, []);

  const resetGame = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setGamePhase('setup');
    setPlayers([]);
    setCountdown(3);
    setElapsedTime(0);
    finishOrder.current = 0;
    boostStatesRef.current.clear();
    
    // Ref 초기화
    stoneEventEnabledRef.current = false;
    stoneAppearedRef.current = false;
    stoneTargetPlayerIdRef.current = null;
    stoneEventTriggeredRef.current = false;
    
    // State 초기화
    setStoneEventEnabled(false);
    setStoneAppeared(false);
    setStoneTargetPlayerId(null);
  }, []);

  const replayGame = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setPlayers(prev => {
      const resetPlayers = prev.map(player => ({
        ...player,
        position: 0,
        finished: false,
        finishTime: null,
        rank: null,
      }));
      
      // 돌멩이 이벤트 재설정
      const newStoneEnabled = Math.random() < STONE_EVENT_PROBABILITY;
      
      // Ref 설정
      stoneEventEnabledRef.current = newStoneEnabled;
      stoneAppearedRef.current = false;
      stoneTargetPlayerIdRef.current = null;
      stoneEventTriggeredRef.current = false;
      
      // State 설정
      setStoneEventEnabled(newStoneEnabled);
      setStoneAppeared(false);
      setStoneTargetPlayerId(null);
      
      console.log('🎲 돌멩이 이벤트 (재시작):', newStoneEnabled ? '활성화' : '비활성화');
      
      // 버프 상태 재초기화
      const boostStates = new Map<number, PlayerBoostState>();
      resetPlayers.forEach(player => {
        // 0~85% 구간에서 4개의 랜덤한 버프 위치 생성
        const positions: number[] = [];
        for (let i = 0; i < BOOST_COUNT_PER_GAME; i++) {
          positions.push(BOOST_ZONE_START + Math.random() * (BOOST_ZONE_END - BOOST_ZONE_START));
        }
        positions.sort((a, b) => a - b); // 오름차순 정렬
        
        boostStates.set(player.id, {
          currentSpeed: BASE_SPEED,
          boostPositions: positions,
          usedBoosts: 0,
          boostEndTime: -1,
          currentBoostAmount: 0,
          isFallen: false,
        });
      });
      boostStatesRef.current = boostStates;
      
      return resetPlayers;
    });
    
    setCountdown(3);
    setElapsedTime(0);
    finishOrder.current = 0;
    
    setGamePhase('countdown');
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(countdownInterval);
        startRace();
      }
    }, 1000);
  }, [startRace]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    playerCount,
    setPlayerCount,
    players,
    gamePhase,
    countdown,
    elapsedTime,
    initializePlayers,
    startCountdown,
    resetGame,
    replayGame,
    penaltySettings,
    setPenaltySettings,
    stoneEventEnabled,
    stoneAppeared,
    stoneTargetPlayerId,
  };
}
