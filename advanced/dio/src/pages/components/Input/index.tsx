import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from './style';
import { Controller } from "react-hook-form";
import { IInput } from "./types";

const Input = ({ leftIcon, name, controlInput ,errorMessage, type, placeholder ,defaultValue,...rest } : IInput) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer> {leftIcon} </IconContainer>) : null}
            <Controller
                name={name}
                control={controlInput}
                rules={{ required: true }}
                defaultValue={defaultValue}
                render={({ field }) => <InputText placeholder={placeholder} type="text" {...field} {...rest} />}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}


export { Input }