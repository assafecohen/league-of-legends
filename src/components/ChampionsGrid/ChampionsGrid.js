import React from 'react';
import Champion from './Champion/Champion'
import classes from './ChampionsGrid.module.css'
import LoadChampions from '../Loader/Loader'


const ChampionsGrid = (props) => {
  const { champions } = props;
  let championsIcons = null
  if (champions) {
     championsIcons = champions.map( champion => {
      return <Champion champion={champion} key={champion.key}/>
    });
  } 

  return (
    <div>
       {championsIcons ? (
       <div className= {classes.ChampionsGrid}> {championsIcons} </div> ) 
        :(
          <LoadChampions/>
        )}
    </div>
  );
}

export default ChampionsGrid;
