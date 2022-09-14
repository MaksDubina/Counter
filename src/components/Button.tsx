import React from 'react';

type TypeProps = {
    children: string
    onClick: () => void
    disabled: boolean
}

const Button = (props:TypeProps) => {
    return (
        <button

            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;