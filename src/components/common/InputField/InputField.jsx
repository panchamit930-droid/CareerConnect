import { inputFieldStyles as styles } from "./inputFieldStyles";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputField;
