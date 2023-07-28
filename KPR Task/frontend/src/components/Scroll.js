import React from 'react';
import data from '../data';
import Card from './Card';
import './style/scroll.css';

const HorScroll = () => {
  return (
    <>
      {data.store.map(info => (
        <div className="horScroll" key={info.category}>
          <h2>BRAND : {info.category}</h2>
          <div className="scroll-wrapper">
            <Card category={info.category} />
          </div>
        </div>
      ))}
    </>
  );
};

export default HorScroll;
