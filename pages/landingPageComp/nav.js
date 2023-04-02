import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';

const Nav = ()=>{

    const [active, setActive] = useState(false);

    function logClick() {
        setActive(!active);
    }




    return (
        <nav>
          <img />
          <button type="button" className={!(active)?[styles.logbtn]:styles.disNone} onClick={logClick}>Login</button> 
          <label htmlFor="email" className={active?styles.disYes:styles.disNone}>Email</label>
          <input type="textbox" name='email' className={active?[styles.txtbx, styles.disYes]:styles.disNone}></input>
          <label htmlFor="password" className={active?styles.disYes:styles.disNone}>Password</label>
          <input type="password" name='password' className={active?[styles.txtbx, styles.disYes]:styles.disNone}></input>  
          <button type="button" className={active?[styles.logbtn]:styles.disNone}>Login</button>  
        </nav>
    )
}

export default Nav;
