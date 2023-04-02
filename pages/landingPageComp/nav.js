import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Nav = ()=>{

    const [active, setActive] = useState(false);

    function logClick() {
        setActive(!active);
    }




    return (
        <nav>
          <img />
          {!active?<button type="button" className={styles.logbtn} onClick={logClick}>Login</button>:null}
          {active?<span className={[styles.logicon]}>
            <a href='#'><button name='signUpWithGoogle' className={styles.signUpPageBtnGoogle}><FaGoogle /></button></a>
            <a href='#'><button name='signUpWithGithub' className={styles.signUpPageBtnGitHub}><FaGithub /></button></a>
            </span>:null} 
          {active?<label htmlFor="email" >Email</label>:null}
          {active?<input type="textbox" name='email' className={styles.txtbx}></input>:null}
          {active?<label htmlFor="password">Password</label>:null}
          {active?<input type="password" name='password' className={styles.txtbx}></input>:null}  
          {active?<button type="button" className={styles.logbtn}>Login</button>:null}
          
          
        </nav>
    )
}

export default Nav;
