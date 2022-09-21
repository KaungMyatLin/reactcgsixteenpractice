import { useEffect, useRef, useState } from 'react'

const simpleInput = (props) => {
    const [entEmail, setEntEmail] = useState('')
    const [entEmailIsValid, setEmailIsValid] = useState(false)
    const [entEmailTouched, setEmailTouched] = useState(false)
    const emInp = useRef();

    useEffect( () => {
        if (entEmailIsValid) {
            // ! to do
        }
    }, [entEmailIsValid])
    const formSubHandler = (e) => {
        e.preventDefault();
        
    }
    const InvalidIsEmailInp = !entEmailIsValid && entEmailTouched;
    const emailInpClasses = InvalidIsEmailInp ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubHandler}>
            <div className={emailInpClasses}>
                <label htmlFor="name">Email</label>
                <input
                type="text"
                id="name"
                onChange={emailInpChangeHandler}
                onBlur={emailInputBlurHandler}
                value={entEmail}
                ref={emInp}
                />
                {nameInpHasError && <p className="error-text">Not empty</p>}
            </div>
            {/* <div className={emInputClasses}>
                <label htmlFor="name">Password</label>
                <input
                type="text"
                id="name"
                onChange={pwInpChangeHandler}
                onBlur={pwInpBlurHandler}
                value={entPw}
                />
                {emInpHasError && <p className="error-text">Not empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div> */}
        </form>
    )
}

export default simpleInput