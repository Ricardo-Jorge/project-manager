import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        required
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
      >
        <option value="">Selecione uma opção</option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option required value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
