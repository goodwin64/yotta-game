export enum CardShape {
  circle = 'circle',
  cross = 'cross',
  square = 'square',
  triangle = 'triangle',
}

export enum CardColor {
  blue = '#2196f3',
  green = '#4caf50',
  red = '#f44336',
  yellow = '#cddc39',
}

export type CardNumber = 1 | 2 | 3 | 4;

export interface ICard {
  color: CardColor;
  number: CardNumber;
  shape: CardShape;
}
