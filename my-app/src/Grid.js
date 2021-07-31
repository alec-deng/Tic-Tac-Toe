import React from 'react';

const Grid = (props) => {
  const arr = [0,1,2,3,4,5,6,7,8];
  return (
    <div className='grid'>
      {
      arr.map((e) => {
        return <div className='board' key={e}></div>
      })}
    </div>
  );
}