import React from 'react';
import './Grid.css';

const Grid = (props) => {
  const arr = [0,1,2,3,4,5,6,7,8];
  console.log(arr);
  const click = () => {

  }
  return (
    <div className='grid'>
      {arr.map((e) => {
        return <div className='board' key={e} onClick={click}></div>
      })}
    </div>
  );
}

export default Grid;
