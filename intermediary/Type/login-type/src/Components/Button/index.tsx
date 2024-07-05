import React, { useEffect, useState } from "react";
import {ButtonContainer} from "./styles";
import {IButtonProps} from "./types";



const Button: React.FC<IButtonProps> = ({title, onClick, isValid}) => {
    const [isClickable, setIsClickable] = useState(true);
    useEffect(() => {
      setIsClickable(isValid ?? false);
    }, [isValid]);
    return (
      <ButtonContainer onClick={isClickable ? onClick : undefined} disabled={!isClickable}>
        {title}
      </ButtonContainer>
    );
}

export default Button;