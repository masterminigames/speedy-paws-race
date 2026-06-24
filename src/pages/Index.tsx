import { useState, useEffect, useRef } from 'react';
import { SetupScreen } from '@/components/SetupScreen';
import { RaceTrack } from '@/components/RaceTrack';
import { ResultModal } from '@/components/ResultModal';
import { Footer } from '@/components/Footer';
import { useRaceGame } from '@/hooks/useRaceGame';
import { Animal, PenaltySettings, GameMode } from '@/types/game';
import { Button } from '@/components/ui/button';
import { recordPenalties } from '@/lib/penaltyStats';

const Index = () => {
  const {
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
    isPileOn,
    startPileOnRace,
    stoneEventEnabled,
    stoneAppeared,
    stoneTargetPlayerId,
    boatEventEnabled,
    boatLanePlayerId,
    boatConsumed,
  } = useRaceGame();

  const [showResultModal, setShowResultModal] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('swimming');
  const hasShownModal = useRef(false);
  const originalPenaltyCountRef = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle('swimming-mode', gameMode === 'swimming');
  }, [gameMode]);

  const handleStart = (selectedAnimals: Animal[], penalty: PenaltySettings) => {
    hasShownModal.current = false;
    originalPenaltyCountRef.current = penalty.penaltyCount;
    setPenaltySettings(penalty);
    initializePlayers(playerCount, selectedAnimals, penalty, gameMode);
    setTimeout(() => {
      startCountdown();
    }, 100);
  };

  // Show result modal when race finishes (only once)
  useEffect(() => {
    if (gamePhase === 'finished' && !hasShownModal.current && players.length > 0) {
      hasShownModal.current = true;
      // 벌칙 당첨 동물 통계 기록
      const penalized = players.filter(p => penaltySettings.penaltyRanks.includes(p.rank || 0));
      recordPenalties(penalized.map(p => ({ emoji: p.animal.emoji, name: p.animal.name })));
      const timer = setTimeout(() => setShowResultModal(true), 500);
      return () => clearTimeout(timer);
    }
  }, [gamePhase, players.length]);

  const handleRestart = () => {
    setShowResultModal(false);
    hasShownModal.current = false;
    resetGame();
  };

  const handleReplay = () => {
    setShowResultModal(false);
    hasShownModal.current = false;
    replayGame();
  };

  const handleCloseModal = () => {
    setShowResultModal(false);
  };

  const handlePileOn = () => {
    // 현재 벌칙 대상자들의 ID 추출
    const penaltyPlayerIds = players
      .filter(p => penaltySettings.penaltyRanks.includes(p.rank || 0))
      .map(p => p.id);

    setShowResultModal(false);
    hasShownModal.current = false;
    startPileOnRace(penaltyPlayerIds);
  };

  if (gamePhase === 'setup') {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <SetupScreen
            playerCount={playerCount}
            setPlayerCount={setPlayerCount}
            onStart={handleStart}
            gameMode={gameMode}
            onGameModeChange={setGameMode}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <RaceTrack
          players={players}
          gamePhase={gamePhase}
          countdown={countdown}
          elapsedTime={elapsedTime}
          onStartRace={startCountdown}
          penaltyRanks={penaltySettings.penaltyRanks}
          stoneEventEnabled={stoneEventEnabled}
          stoneAppeared={stoneAppeared}
          stoneTargetPlayerId={stoneTargetPlayerId}
          gameMode={gameMode}
          boatEventEnabled={boatEventEnabled}
          boatLanePlayerId={boatLanePlayerId}
          boatConsumed={boatConsumed}
        />
        <ResultModal
          open={showResultModal}
          onClose={handleCloseModal}
          onRestart={handleRestart}
          onReplay={handleReplay}
          players={players}
          penaltyRanks={penaltySettings.penaltyRanks}
          isPileOn={isPileOn}
          onPileOn={handlePileOn}
          originalPenaltyCount={originalPenaltyCountRef.current}
          gameMode={gameMode}
        />
        {gamePhase === 'finished' && !showResultModal && (
          <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-3">
            <Button
              onClick={handleReplay}
              size="lg"
              className="text-lg px-8 py-4 rounded-2xl shadow-button"
            >
              🔄 다시 시작
            </Button>
            <Button
              onClick={handleRestart}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 rounded-2xl"
            >
              🏠 첫화면으로
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
