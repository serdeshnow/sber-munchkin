import React, { createContext, useContext, ReactNode } from 'react'
import { useGameModel } from '@features/game';

// Тип возвращаемого значения вашего хука
type GameContextType = ReturnType<typeof useGameModel>

const GameContext = createContext<GameContextType | null>(null)

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const game = useGameModel()
  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  )
}

// Хук для получения контекста
export const useGame = (): GameContextType => {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be inside GameProvider')
  return ctx
}
