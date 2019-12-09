import React from 'react';
import classes from './Champion.module.css'
import ChampionCard from './ChampionCard/ChampionCard'



const Champion = (props) => {
  const {name,icon} = props.champion;

  return (
    <div className={classes.Avatar}>
        <img alt={name} src={icon} className={classes.AvatarImage}  />
        <span className={classes.AvatarName}>{name}</span>
        <ChampionCard champion={props}/>
    </div>
  );
}

export default Champion;
