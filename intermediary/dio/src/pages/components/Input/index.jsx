import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from './style';
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control,errorMessage, defaultValue,...rest }) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer> {leftIcon} </IconContainer>) : null}
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                defaultValue={defaultValue}
                render={({ field }) => <InputText value={defaultValue} type="text" {...field} {...rest} />}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}


export { Input }