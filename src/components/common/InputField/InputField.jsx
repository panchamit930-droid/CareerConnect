import { inputFieldStyles as styles } from "./inputFieldStyles";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  disabled = false,
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
        disabled={disabled}
        className={`${styles.input} ${error ? styles.errorInput : ""} ${
          disabled
            ? "bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300 cursor-not-allowed"
            : ""
        }`}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputField;
