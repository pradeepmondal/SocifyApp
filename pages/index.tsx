import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BackGround from './bg.js'
import SignUp from './signUp.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Socify App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <label htmlFor="email">Email</label>
          <input type="textbox" name='email' className={styles.txtbx}></input>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' className={styles.txtbx}></input>  
          <button type="button" className={styles.logbtn}>Login</button>
          
        </nav>
      </header>


      <main className={styles.main}>

      <div className={styles.bg}>
        <BackGround />
      </div>
      <SignUp />
        
      </main>

      <footer className={styles.footer}>
        <p>
          Developed with <span id={styles.footemp}>love</span> by Pradeep Mondal
        </p>

      </footer>
    </>
  )
}
