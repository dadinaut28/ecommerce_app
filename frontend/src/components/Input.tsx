interface InputProps {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  type?: string;
}

export function Input({
  className,
  placeholder,
  value,
  onChange,
  type,
}: InputProps) {
  const inputType = type ? type : "text";
  return (
    <input
      className={className}
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}
