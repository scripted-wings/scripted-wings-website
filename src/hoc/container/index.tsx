import { HTMLAttributes, ReactNode } from "react";

const Container = ({ children, className, ...rest }: ContainerProps) => {
    return (
        <div className={`container mx-auto ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default Container;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
