import styles from '../../styles/Home.module.css'

const SignUp = () => {
    return (
        <div className={[styles.signUp]}>
            <label htmlFor='signUpBtn'>
                New Here? Lets Start the Journey 
            </label>
            <br></br>
            <a href='/signUp'><button className = {styles.hover}name='signUpBtn'>Sign Up</button></a>
        </div>

    )
}

export default SignUp;