import { useState } from 'react';
import { Animal, ANIMALS, SetupStep, PenaltySettings, GameMode } from '@/types/game';
import { Button } from '@/components/ui/button';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Shuffle, Plus, Minus } from 'lucide-react';

interface SetupScreenProps {
  playerCount: number;
  setPlayerCount: (count: number) => void;
  onStart: (selectedAnimals: Animal[], penaltySettings: PenaltySettings) => void;
  gameMode: GameMode;
  onGameModeChange: (mode: GameMode) => void;
}

export function SetupScreen({ playerCount, setPlayerCount, onStart, gameMode, onGameModeChange }: SetupScreenProps) {
  const [currentStep, setCurrentStep] = useState<SetupStep>('playerCount');
  const [selectedAnimals, setSelectedAnimals] = useState<(Animal | null)[]>(
    Array(15).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [penaltySettings, setPenaltySettings] = useState<PenaltySettings>({
    penaltyCount: 1,
    penaltyRanks: [playerCount],
  });

  const handleAnimalSelect = (animal: Animal) => {
    const existingIndex = selectedAnimals.findIndex(a => a?.id === animal.id);
    
    if (existingIndex !== -1) {
      // Deselect if already selected
      const newSelected = [...selectedAnimals];
      newSelected[existingIndex] = null;
      setSelectedAnimals(newSelected);
    } else {
      // Find the first empty slot to assign
      const newSelected = [...selectedAnimals];
      const emptySlot = newSelected.findIndex((a, i) => a === null && i < playerCount);
      if (emptySlot !== -1) {
        newSelected[emptySlot] = animal;
        setSelectedAnimals(newSelected);
      }
    }
  };

  const handleRandomAssign = () => {
    // Shuffle all animals and assign to all players (complete random reassignment)
    const shuffled = [...ANIMALS].sort(() => Math.random() - 0.5);
    const newSelected = [...selectedAnimals];
    
    for (let i = 0; i < playerCount; i++) {
      newSelected[i] = shuffled[i];
    }
    setSelectedAnimals(newSelected);
    setCurrentPlayer(playerCount - 1);
  };

  const handlePlayerCountChange = (count: number) => {
    setPlayerCount(count);
    setSelectedAnimals(Array(15).fill(null));
    setCurrentPlayer(0);
    setPenaltySettings({
      penaltyCount: 1,
      penaltyRanks: [count],
    });
  };

  const handlePenaltyCountChange = (count: number) => {
    // Keep existing selected ranks if possible, otherwise reset
    const currentRanks = penaltySettings.penaltyRanks.slice(0, count);
    const newRanks = currentRanks.length > 0 ? currentRanks : [playerCount];
    setPenaltySettings({
      penaltyCount: count,
      penaltyRanks: newRanks.slice(0, count),
    });
  };

  const handleRandomPenaltyRanks = () => {
    const allRanks = Array.from({ length: playerCount }, (_, i) => i + 1);
    const shuffled = allRanks.sort(() => Math.random() - 0.5);
    const randomRanks = shuffled.slice(0, penaltySettings.penaltyCount);
    setPenaltySettings({
      ...penaltySettings,
      penaltyRanks: randomRanks,
    });
  };

  const handlePenaltyRankToggle = (rank: number) => {
    const { penaltyRanks, penaltyCount } = penaltySettings;
    if (penaltyRanks.includes(rank)) {
      // Deselect if already selected (only if more than 1 selected)
      if (penaltyRanks.length > 1) {
        setPenaltySettings({
          ...penaltySettings,
          penaltyRanks: penaltyRanks.filter(r => r !== rank),
        });
      }
    } else if (penaltyRanks.length < penaltyCount) {
      // Add to end (preserves insertion order)
      setPenaltySettings({
        ...penaltySettings,
        penaltyRanks: [...penaltyRanks, rank],
      });
    } else {
      // FIFO: remove the first (oldest) inserted rank, append new one at end
      const newRanks = [...penaltyRanks.slice(1), rank];
      setPenaltySettings({
        ...penaltySettings,
        penaltyRanks: newRanks,
      });
    }
  };

  const canStart = selectedAnimals.slice(0, playerCount).every(a => a !== null);
  const canGoToAnimals = playerCount >= 2;
  const canGoToPenalty = canStart;
  const isPenaltyValid = penaltySettings.penaltyRanks.length === penaltySettings.penaltyCount;

  const handleStart = () => {
    const validAnimals = selectedAnimals.slice(0, playerCount).filter((a): a is Animal => a !== null);
    onStart(validAnimals, penaltySettings);
  };

  const goToStep = (step: SetupStep) => {
    setCurrentStep(step);
  };

  const steps: { key: SetupStep; label: string; number: number }[] = [
    { key: 'playerCount', label: '인원 선택', number: 1 },
    { key: 'animalSelect', label: '동물 선택', number: 2 },
    { key: 'penaltySetup', label: '벌칙 설정', number: 3 },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-6">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <button
            onClick={() => {
              if (index === 0) goToStep(step.key);
              else if (index === 1 && canGoToAnimals) goToStep(step.key);
              else if (index === 2 && canGoToPenalty) goToStep(step.key);
            }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all",
              currentStepIndex === index
                ? "bg-primary text-primary-foreground scale-110"
                : currentStepIndex > index
                ? "bg-success text-white"
                : "bg-muted text-muted-foreground"
            )}
          >
            {step.number}
          </button>
          {index < steps.length - 1 && (
            <div className={cn(
              "w-8 h-1 mx-1 rounded",
              currentStepIndex > index ? "bg-success" : "bg-muted"
            )} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-track-bg p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            {gameMode === 'swimming' ? '🏊 수영 경주 🏊' : '☕ 커피 달리기 경주 ☕'}
          </h1>
          <p className="text-muted-foreground text-lg">
            친구들과 함께 신나는 경주를 즐겨보세요!
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={() => onGameModeChange('running')}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-200",
              gameMode === 'running'
                ? "bg-primary text-primary-foreground shadow-button scale-105"
                : "bg-card text-muted-foreground hover:bg-muted border border-border"
            )}
          >
            <span className="text-xl">🏃</span>
            <span>달리기</span>
          </button>
          <button
            onClick={() => onGameModeChange('swimming')}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-200",
              gameMode === 'swimming'
                ? "bg-primary text-primary-foreground shadow-button scale-105"
                : "bg-card text-muted-foreground hover:bg-muted border border-border"
            )}
          >
            <span className="text-xl">🏊</span>
            <span>수영</span>
          </button>
        </div>

        {renderStepIndicator()}

        {currentStep === 'playerCount' && (
          <div className="bg-card rounded-2xl p-6 shadow-soft mb-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">
              👥 Step 1: 참여 인원 선택
            </h2>
            <p className="text-muted-foreground mb-4">
              경주에 참여할 인원 수를 선택하세요 (2~15명)
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handlePlayerCountChange(Math.max(2, playerCount - 1))}
                disabled={playerCount <= 2}
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                  playerCount <= 2
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                )}
              >
                <Minus className="w-6 h-6" />
              </button>
              <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-button">
                {playerCount}
              </div>
              <button
                onClick={() => handlePlayerCountChange(Math.min(15, playerCount + 1))}
                disabled={playerCount >= 15}
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                  playerCount >= 15
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                )}
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => goToStep('animalSelect')}
                disabled={!canGoToAnimals}
                className="rounded-xl"
              >
                다음 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'animalSelect' && (
          <div className="bg-card rounded-2xl p-6 shadow-soft mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-card-foreground">
                🐾 Step 2: 동물 선택
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRandomAssign}
                className="rounded-xl"
              >
                <Shuffle className="w-4 h-4 mr-1" /> 랜덤 배정
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">
              {playerCount}마리의 동물을 선택하세요 ({selectedAnimals.filter((a, i) => a !== null && i < playerCount).length}/{playerCount})
            </p>

            <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
              {ANIMALS.map(animal => {
                const selectedByPlayer = selectedAnimals.findIndex(a => a?.id === animal.id);
                const isSelected = selectedByPlayer !== -1 && selectedByPlayer < playerCount;
                
                return (
                  <button
                    key={animal.id}
                    onClick={() => handleAnimalSelect(animal)}
                    className={cn(
                      "aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200",
                      isSelected
                        ? "bg-primary/20 border-2 border-primary shadow-button scale-105"
                        : "bg-animal-card hover:bg-animal-card-hover hover:scale-105 hover:shadow-animal cursor-pointer"
                    )}
                  >
                    <span
                      className="text-3xl md:text-4xl"
                      style={['🦄', '🐔'].includes(animal.emoji) ? { display: 'inline-block', transform: 'scaleX(-1)' } : undefined}
                    >{animal.emoji}</span>
                    <span className="text-xs text-muted-foreground hidden md:block">
                      {animal.name}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-bold text-primary">
                        P{selectedByPlayer + 1}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => goToStep('playerCount')}
                className="rounded-xl"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> 이전
              </Button>
              <Button
                onClick={() => goToStep('penaltySetup')}
                disabled={!canGoToPenalty}
                className="rounded-xl"
              >
                다음 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'penaltySetup' && (
          <div className="bg-card rounded-2xl p-6 shadow-soft mb-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">
              💣 Step 3: 벌칙 설정
            </h2>
            <p className="text-muted-foreground mb-6">
              벌칙을 받을 인원 수와 등수를 선택하세요
            </p>

            <div className="mb-6">
              <h3 className="font-medium mb-3 text-card-foreground">벌칙 인원 수 (최대 3명)</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handlePenaltyCountChange(Math.max(1, penaltySettings.penaltyCount - 1))}
                  disabled={penaltySettings.penaltyCount <= 1}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
                    penaltySettings.penaltyCount <= 1
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  )}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shadow-button", gameMode === 'swimming' ? "bg-blue-600 text-white" : "bg-destructive text-destructive-foreground")}>
                  {penaltySettings.penaltyCount}
                </div>
                <button
                  onClick={() => handlePenaltyCountChange(Math.min(3, Math.min(playerCount, penaltySettings.penaltyCount + 1)))}
                  disabled={penaltySettings.penaltyCount >= 3 || penaltySettings.penaltyCount >= playerCount}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
                    penaltySettings.penaltyCount >= 3 || penaltySettings.penaltyCount >= playerCount
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  )}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-card-foreground">
                  벌칙 등수 선택 ({penaltySettings.penaltyRanks.length}/{penaltySettings.penaltyCount}개 선택)
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRandomPenaltyRanks}
                  className="rounded-xl"
                >
                  <Shuffle className="w-4 h-4 mr-1" /> 랜덤 지정
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: playerCount }, (_, i) => i + 1).map(rank => {
                  const isSelected = penaltySettings.penaltyRanks.includes(rank);
                  
                  return (
                    <button
                      key={rank}
                      onClick={() => handlePenaltyRankToggle(rank)}
                      className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-xl font-bold transition-all duration-200",
                        isSelected
                          ? cn(gameMode === 'swimming' ? "bg-blue-600 text-white" : "bg-destructive text-destructive-foreground", "shadow-button scale-110")
                          : "bg-secondary text-secondary-foreground hover:bg-accent"
                      )}
                    >
                      {rank}등
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <h3 className="font-medium mb-3 text-card-foreground">참가자 미리보기</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAnimals.slice(0, playerCount).map((animal, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card"
                  >
                    <span
                      className="text-xl"
                      style={animal && ['🦄', '🐔'].includes(animal.emoji) ? { display: 'inline-block', transform: 'scaleX(-1)' } : undefined}
                    >{animal?.emoji}</span>
                    <span className="text-xs">P{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                💣 벌칙 대상 등수: {[...penaltySettings.penaltyRanks].sort((a, b) => a - b).join(', ')}등
              </p>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => goToStep('animalSelect')}
                className="rounded-xl"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> 이전
              </Button>
              <Button
                onClick={handleStart}
                disabled={!isPenaltyValid}
                size="lg"
                className="text-xl px-8 py-4 rounded-2xl shadow-button hover:shadow-button-hover transition-all duration-200"
              >
                🏁 경주 시작!
              </Button>
            </div>
          </div>
        )}
      </div>
      <AdPlaceholder />
    </div>
  );
}
