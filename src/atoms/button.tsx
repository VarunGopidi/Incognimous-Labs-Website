import React from "react";
import { Button as MuiButton } from "@mui/material";
export interface ButtonProps {
  backgroundColor ?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, backgroundColor, color }) => {
  return (
    <button style={{ backgroundColor, borderRadius: "10px", border: '1px solid' , borderColor:'#01487E' }} onClick={onClick} >
      <MuiButton sx={{color: {color}}}>{text}</MuiButton>
    </button>
  );
};

export default Button;

/*import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  buttonVariant: "primary" | "secondary";
  width?: string;
}

const StyledButton = styled(MuiButton)((props: ButtonProps) => ({
  width: props.width,
}));

const Button: React.FC<ButtonProps> = ({
  width = "8.45rem",
  ...props
}) => {
  return (
    <StyledButton
      disableRipple
      data-testid="button"*/