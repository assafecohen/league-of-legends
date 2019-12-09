import React from 'react';
import Loader from 'react-loader-spinner'

const LoadChampions = () => {
  return (
    <div>
       <Loader
         type="Grid"
         color="#000099"
         height={200}
         width={200}
         timeout={500000}      />
    </div>
  );
}

export default LoadChampions;
