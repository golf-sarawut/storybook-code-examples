import './index.css'; // Make sure the path to the CSS file is correct


type TextboxProps = {
  /**
   * The label for the textbox.
   */
  label: string;

  /**
   * The placeholder text for the textbox.
   */
  placeholder: string;

  /**
   * The current value of the textbox.
   */
  value: string;

  /**
   * The function to be called when the value of the textbox changes.
   * @param value - The new value of the textbox.
   */
  onChange: (value: string) => void;
};

/**
 * A simple textbox component.
 */
export const Textbox = ({
  label,
  placeholder,
  value,
  onChange,
}: TextboxProps) => {
  return (
    <div className='textbox-container'>
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
