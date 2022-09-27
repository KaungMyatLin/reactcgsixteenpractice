import useInp from '../hooks/useInputHook'

const isNotEmpty = val => val.trim() !== '';
const isAEmail = val => val.includes('@')

const BasicForm = (props) => {
    const { value: entFName
        , entValIsValid: fnmValIsValid
        , inpFiIsWrong: fnmInpFiIsWrong
        , inpChangeHdl: fnmmInpChangeHdl
        , inpBlurHdl: fnmInpBlurHdl
        , resetInpFiValXTouched: resetFnmInpFiStates } = useInp(isNotEmpty)
    const { value: entLName
        , entValIsValid: lnmValIsValid
        , inpFiIsWrong: lnmInpFiIsWrong
        , inpChangeHdl: lnmmInpChangeHdl
        , inpBlurHdl: lnmInpBlurHdl
        , resetInpFiValXTouched: resetLnmInpFiStates } = useInp(isNotEmpty)
    const { value: entEmail
        , entValIsValid: emailValIsValid
        , inpFiIsWrong: emailInpFiIsWrong
        , inpChangeHdl: emailInpChangeHdl
        , inpBlurHdl: emailInpBlurHdl
        , resetInpFiValXTouched: resetEmInpFiStates } = useInp(isAEmail)

    let formIsValid = false;
    if (fnmValIsValid && lnmValIsValid && emailValIsValid) {
        formIsValid = true;
    }

    const onSubmitChngHdl = (e) => {
        e.preventDefault();
        if (!formIsValid) {
        return
        }

        resetFnmInpFiStates();
        resetLnmInpFiStates();
        resetEmInpFiStates();
    }

    const fnmClasses = fnmInpFiIsWrong? 'form-control invalid' : 'form-control'
    const lnmClasses = lnmInpFiIsWrong? 'form-control invalid' : 'form-control'
    const emailClasses = emailInpFiIsWrong? 'form-control invalid' : 'form-control'


    return (
        <form onSubmit={onSubmitChngHdl}>
        <div className='control-group'>
            <div className={fnmClasses}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' 
            value={entFName} 
            onChange={fnmmInpChangeHdl} 
            onBlur={fnmInpBlurHdl} />
            {fnmInpFiIsWrong && <p>Must not be empty for first name</p>}
            </div>
            <div className={lnmClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name'
            value={entLName} 
            onChange={lnmmInpChangeHdl} 
            onBlur={lnmInpBlurHdl} />
            {lnmInpFiIsWrong && <p>Must not be empty for last name</p>}
            </div>
        </div>
        <div className={emailClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input type='text' id='name'
            value={entEmail} 
            onChange={emailInpChangeHdl} 
            onBlur={emailInpBlurHdl}  />
            {emailInpFiIsWrong && <p>Must be valid email address</p>}
        </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
        </form>
    );
};

export default BasicForm;
