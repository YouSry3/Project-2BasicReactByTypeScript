import type { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Buttom = ({ children, className, ...rest }: IProps) => {
  return (
    <button
      className={`font-serif text-2xl rounded-lg  text-amber-50 ${className} hover:cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Buttom;
