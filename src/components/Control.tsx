import React from 'react';
import classes from "./Counter.module.css";
import Button from "./Button";

type PropsType = {
    state: number
    setState: (state: number)=> void

}


const Control = (props:PropsType) => {

    const {state, setState} = props

    const incrementHandler = () => {
        if (state < 5) setState(state+1);
    }

    const resetHandler = () => {
        setState(0);
    }

    return (

        <div className={classes.control}>
            <button
                onClick={incrementHandler}
                disabled={state===5?true:false}

            >
                inc
            </button>

            <button
                onClick={resetHandler}
                disabled={state===0?true:false}

            >
                reset
            </button>

            {/*<Button*/}
            {/*    onClick={incrementHandler}*/}
            {/*    disabled={state===5?true:false}*/}
            {/*    children={'inc'}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    onClick={resetHandler}*/}
            {/*    disabled={state===0?true:false}*/}
            {/*    children={'reset'}*/}
            {/*/>*/}

        </div>
    );
};

export default Control;