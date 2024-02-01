import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick, children, className, ...restProps } = props;

  return (
    <button className={cn("", className)} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
