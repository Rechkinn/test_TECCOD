import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./button.module.css";
import type { TStyleTypeButton } from "../../utils/types";

type TButton = {
  styleType: TStyleTypeButton;
  extraClass?: string;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButton> = ({ children, styleType, extraClass, ...props }) => {
  return (
    <button className={`${styles[styleType]} ${extraClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
