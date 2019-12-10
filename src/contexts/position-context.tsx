import * as React from 'react';

import { Position } from '../types/location';

interface PositionContextValue {
  readonly position: Position;
  readonly setPosition: (position: Position) => void;
}

interface PositionProviderProps {
  readonly children: React.ReactNode;
}

const defaulPosition: Position = { lat: 33.7676338, lng: -84.5606888 };

export const PositionContext = React.createContext<PositionContextValue>({
  position: defaulPosition,
  setPosition: () => { return; },
});

export const PositionProvider = ({ children }: PositionProviderProps) => {
  const [position, setPosition] = React.useState<Position>(defaulPosition);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  )
}
