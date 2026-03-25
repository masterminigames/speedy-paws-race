import { Player } from '@/types/game';
import { Button } from '@/components/ui/button';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';


interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  onRestart: () => void;
  onReplay: () => void;
  players: Player[];
  penaltyRanks: number[];
  isPileOn?: boolean;
  onPileOn?: () => void;
  originalPenaltyCount?: number;
}

export function ResultModal({ open, onClose, onRestart, onReplay, players, penaltyRanks, isPileOn = false, onPileOn, originalPenaltyCount = 0 }: ResultModalProps) {
  const sortedPlayers = [...players].sort((a, b) => (a.rank || 0) - (b.rank || 0));
  const penaltyPlayers = sortedPlayers.filter(p => penaltyRanks.includes(p.rank || 0));
  
  // Group players into rows of 5
  const playerRows: Player[][] = [];
  for (let i = 0; i < sortedPlayers.length; i += 5) {
    playerRows.push(sortedPlayers.slice(i, i + 5));
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-card border-0 rounded-3xl shadow-modal">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {isPileOn ? '🔥 몰아주기 결과 🔥' : '🏆 경주 결과 🏆'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Penalty Players Only */}
          {penaltyPlayers.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-center text-destructive flex items-center justify-center gap-2">
                💣 벌칙 당첨자 💣
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {penaltyPlayers.map(player => (
                  <div
                    key={player.id}
                    className="text-center p-4 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl border-2 border-destructive/30 animate-pulse"
                  >
                    <div className="text-4xl mb-2">{player.animal.emoji}</div>
                    <div className="text-destructive font-bold flex items-center justify-center gap-1">
                      💣 {player.rank}등
                    </div>
                    <div className="text-muted-foreground text-sm">플레이어 {player.id}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 몰아주기 버튼 - 벌칙 인원 2명 이상이고, 아직 몰아주기 전일 때 */}
          {!isPileOn && originalPenaltyCount >= 2 && penaltyPlayers.length >= 2 && onPileOn && (
            <div className="flex justify-center">
              <Button
                onClick={onPileOn}
                size="lg"
                className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 text-lg shadow-lg"
              >
                🔥 몰아주기 🔥
              </Button>
            </div>
          )}

          {/* Full Rankings - Rows of 5 */}
          <div className="bg-muted/50 rounded-xl p-4">
            <h4 className="font-semibold mb-3 text-center text-sm text-muted-foreground">전체 순위</h4>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {playerRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2">
                  {row.map(player => (
                    <div
                      key={player.id}
                      className={cn(
                        "flex flex-col items-center p-2 rounded-lg min-w-[50px]",
                        penaltyRanks.includes(player.rank || 0)
                          ? "bg-destructive/20 border-2 border-destructive"
                          : "bg-card"
                      )}
                    >
                      <span className="text-xl">{player.animal.emoji}</span>
                      <span className="text-xs font-bold flex items-center gap-0.5">
                        {player.rank === 1 && '🥇'}
                        {player.rank === 2 && '🥈'}
                        {player.rank === 3 && '🥉'}
                        {(player.rank || 0) > 3 && `${player.rank}등`}
                        {penaltyRanks.includes(player.rank || 0) && <span>💣</span>}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder />

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 rounded-xl"
            >
              닫기
            </Button>
            <Button
              onClick={onReplay}
              className="flex-1 rounded-xl bg-primary hover:bg-primary/90"
            >
              🔄 다시 시작
            </Button>
            <Button
              variant="outline"
              onClick={onRestart}
              className="flex-1 rounded-xl"
            >
              🏠 첫화면
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
