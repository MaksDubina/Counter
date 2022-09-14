import React, {useState} from 'react';
//import * as css from './component.css'
import classes from './Counter.module.css';
import Control from "./Control";

const Counter = () => {


    const [state, setState] = useState<number>(0);


    return (
        <div className={classes.wrapper}>

            <div className={classes.count}>
                <h2 className={state===5?`${classes.red}`:''}>{state}</h2>

            </div>

            <Control
                state={state}
                setState={setState}
            />

        </div>
    );
};

export default Counter;