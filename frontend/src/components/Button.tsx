import type { ReactElement } from "react";

interface ButtonProps {
  disabled?: boolean;
  content?: string;
  children?: ReactElement;
  className?: string;
  onClick?: () => void;
}

export function Button({
  content,
  onClick,
  className,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {content && content}
      {children && children}
    </button>
  );
}
