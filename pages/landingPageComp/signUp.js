import styles from '../../styles/Home.module.css'

const SignUp = (props) => {
    return (
        <div className={[styles.signUp]}>
            <label htmlFor='signUpBtn'>
                New Here? Lets Start the Journey 
            </label>
            <br></br>
            <button className = {styles.hover}name='signUpBtn' onClick={props.propSignUpOpts}>{props.text}</button>
        </div>

    )
}

export default SignUp;