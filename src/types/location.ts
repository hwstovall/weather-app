export interface Position {
  readonly lat: number;
  readonly lng: number;
}

export interface City {
  readonly name: string;
  readonly position: Position;
}
