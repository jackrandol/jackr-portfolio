import React from 'react';
import Ticker from 'react-ticker';

function Banner() {
  return (
    <div>
      <Ticker>
        {({ index }) => (
          <>
            <h1>Jack Randol...............</h1>
          </>
        )}
      </Ticker>
    </div>
  );
}

export default Banner;
