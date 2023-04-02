import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from './landingPageComp/nav'
import BackGround from './landingPageComp/bg.js'
import SignUp from './landingPageComp/signUp.js'
import SignUpOpts from './landingPageComp/signUpOptsComp.js' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LeeWay.social</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>


      <main className={styles.main}>

      <div className={styles.bg}>
        <BackGround />
      </div>
      <SignUpOptsCond />

        
      </main>

      <footer className={styles.footer}>
        <p>
          Developed with <span id={styles.footemp}>love</span> by Pradeep Mondal
        </p>

      </footer>
    </>
  )
}

const SignUpOptsCond = () => {
  const [showComp, setShowComp] = useState(false);
  const [chText, setText] = useState(false)
  const btnClick = () => {
    setShowComp(!(showComp));
    setText(!(chText))
  };



  return (
    <div>
      {chText?<SignUp propSignUpOpts = {btnClick} text = 'Back' />:<SignUp propSignUpOpts = {btnClick} text = 'Sign Up' />}
      <div>
        {showComp?<SignUpOpts />:null}
      </div>
      
    </div>
    )
}

