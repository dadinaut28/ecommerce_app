interface InputProps<T extends string | number> {
  className?: string;
  placeholder?: string;
  onChange?: (value: T) => void;
  value?: T;
  type?: string;
}

export function Input<T extends string | number>({
  className,
  placeholder,
  value,
  onChange,
  type,
}: InputProps<T>) {
  const inputType = type ? type : "text";
  return (
    <input
      className={className}
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        if (onChange) {
          const val =
            type === "number"
              ? (Number(e.target.value) as T)
              : (e.target.value as T);
          onChange(val);
        }
      }}
    />
  );
}
