import styles from '../styles/Home.module.css'

const SignUp = () => {
    return (
        <div className={styles.signUp}>
            <label htmlFor='signUpBtn'>
                New Here? Lets Start the Journey 
            </label>
            <br></br>
            <button name='signUpBtn'>Sign Up</button>
        </div>

    )
}

export default SignUp;