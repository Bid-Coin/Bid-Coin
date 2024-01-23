'use client';

import { useReducer } from 'react';

type Props = {
  title: string;
};
export const Heading = ({ title }: Props) => {
  const [count, plusCount] = useReducer((prev) => prev + 1, 0);
  return (
    <div className='w-52 h-52 bg-red-500 '>
      <h1>{title}</h1>
      <button className='btn btn-accent' onClick={plusCount}>
        Accent
      </button>
      <br />
      <strong>{count}</strong>
    </div>
  );
};
