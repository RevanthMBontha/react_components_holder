import React from 'react';
import { compsData } from './Data';
import CompItems from './CompItems';

const Comps = () => {
  return (
    <div className="comp__container container grid">
      {compsData.map((item) => {
        return <CompItems item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Comps;
