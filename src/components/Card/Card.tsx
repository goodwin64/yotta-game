import React from 'react';
import { ICard } from '../../interfaces/ICard';
import './Card.css';

interface IProps {
  card: ICard;
}

export function Card(props: IProps) {
  return (
    <div
      style={{
        backgroundColor: props.card.color,
      }}
      className={`card ${props.card.shape}`}
    >
      {props.card.number}
    </div>
  )
}
