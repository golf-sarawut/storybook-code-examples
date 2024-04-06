type TextboxProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const Textbox = ({
  label,
  placeholder,
  value,
  onChange,
}: TextboxProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
