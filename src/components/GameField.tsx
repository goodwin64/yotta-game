import React from 'react';
import './GameField.css';
import { ICard, CardColor, CardShape, CardNumber } from '../interfaces/ICard';
import { Card } from './Card/Card';


function integerDivisionBy4(num: number) {
  return Math.floor(num / 4);
}

function detectCardColor(index: number): CardColor {
  if (index % 4 === 0) return CardColor.blue;
  if (index % 4 === 1) return CardColor.green;
  if (index % 4 === 2) return CardColor.red;
  return CardColor.yellow;
}

function detectCardShape(index: number): CardShape {
  const dividedBy4 = integerDivisionBy4(index);
  if (dividedBy4 % 4 === 0) return CardShape.circle;
  if (dividedBy4 % 4 === 1) return CardShape.cross;
  if (dividedBy4 % 4 === 2) return CardShape.square;
  return CardShape.triangle;
}

function detectCardNumber(index: number): CardNumber {
  const dividedBy16 = integerDivisionBy4(integerDivisionBy4(index));
  if (dividedBy16 % 4 === 0) return 1;
  if (dividedBy16 % 4 === 1) return 2;
  if (dividedBy16 % 4 === 2) return 3;
  return 4;
}

const cards: ICard[] = new Array(64)
  // @ts-ignore
  .fill(0)
  .map((_, i) => {
    const card: ICard = {
      color: detectCardColor(i),
      number: detectCardNumber(i),
      shape: detectCardShape(i),
    };
    return card;
  });

export function GameField() {
  return (
    <main className="board">
      {
        cards.map((card, i) => (
          <Card card={card} key={i} />
        ))
      }
    </main>
  );
}
