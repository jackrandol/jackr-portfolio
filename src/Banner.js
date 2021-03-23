import React from 'react';
import Ticker from 'react-ticker';
import nameImage from './assets/logoticker.png';

function Banner() {
  return (
    <div>
      <Ticker speed={4}>
        {({ index }) => (
          <>
            <img src={nameImage} alt='jack randol' />
          </>
        )}
      </Ticker>
    </div>
  );
}

export default Banner;
