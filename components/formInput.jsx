import React, {useState} from "react";
import styles from "../styles/formInput.module.css";

// const FormInput = (props) => { /// for useRef

//     console.log(props)
//     return(
//         <div className="formInput">
//             <input name={props.name} placeholder={props.placeholder}/>
//             {/* <input ref={props.refer} placeholder={props.placeholder}/> */} {/*just for the userName */}
//             {/* <input placeholder={props.placeholder} onChange={e=>props.setUserName(e.target.value)} /> */} {/*for the useState */}
//         </div>
//     );
// }

// export default FormInput;

const FormInput = (props) => {              
    // console.log(values)
    // console.log(props);
    const {label, errorMessage, onChange, id, ...inputProps} = props; /// destructuring props
    
    const [focused, setFocused] = useState(false); /// for onBlur
    
    const handleFocus = (e) => {
        console.log(e);
        setFocused(true);
        // console.log(focused.toString());
    };

    return( /// onFocus - there is an issue when the focus is in the last
        <div className={styles.formInput}>
            <label>{label}</label>
            {/* the onBlur event occurs when an event looses focus */}
            <input
                className={styles.input}
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassWord" && setFocused(true)}
                focused={focused.toString()} 
            />
            <span className={styles.span}>{errorMessage}</span>
        </div>
    );
}

export default FormInput;   