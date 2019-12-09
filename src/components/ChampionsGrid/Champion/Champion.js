import React from 'react';
import classes from './Champion.module.css'
import ChampionCard from './ChampionCard/ChampionCard'
import Tooltip from '@material-ui/core/Tooltip';





const Champion = (props) => {

  const {name,icon,title} = props.champion;

  return (
    <div className={classes.Avatar}>
        <Tooltip title={title} >
          <img alt={name} src={icon} className={classes.AvatarImage}  />
        </Tooltip>
        <span className={classes.AvatarName}>{name}</span>
        <ChampionCard champion={props}/>
    </div>
  );
}

export default Champion;
