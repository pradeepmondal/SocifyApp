import styles from '../styles/Home.module.css'
import { FaFacebook, FaGithub, FaGoogle, FaKeyboard } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div >
            <h1 className={styles.pageHeading}>
                We have got few options for you, choose anyone 
            </h1>
            <br />
            <div className={styles.signUp}>
                <a href='#'><button name='signUpWithGoogle' className={styles.signUpPageBtnGoogle}><pre> <FaGoogle /> Sign Up with Google  </pre></button></a>
                <a href='#'><button name='signUpWithGithub' className={styles.signUpPageBtnGitHub}><pre> <FaGithub /> Sign Up with GitHub  </pre></button></a>
                <a href='#'><button name='signUpManually' className={styles.hover}><pre><FaKeyboard /> Sign Up with Manually </pre></button></a>
            </div>
            
        </div>

    )
}

export default SignUp;