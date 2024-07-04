import { Control } from 'react-hook-form'
import { ReactElement } from 'react';

export interface IInput {
    leftIcon: ReactElement,
    name: string,
    controlInput: Control<any>,
    errorMessage: string | undefined,
    defaultValue: string,
    type: string, 
    placeholder: string
}


