import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.Header}>
      
      <header className={classes.HeaderCoverImage}></header>
      <h1 className={classes.HeaderTitle}>League Of Legends</h1>
    </div>
  );
}

export default Header;
