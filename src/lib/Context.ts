import { PlayerInfo } from '@/types';
import { createContext } from 'react';

type PlayerInfoContext = {
  playerInfo: PlayerInfo | null;
  setPlayerInfo: (playerInfo: PlayerInfo) => void;
};


export const playerInfoContext = createContext<PlayerInfoContext>({
  playerInfo: null,
  setPlayerInfo: () => { },
});

