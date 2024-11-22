import "./style.css";

export const ConvertValue = ({
  title,
  value,
  nameDirection,
  onSelectValue,
}) => {
  return (
    <>
      <div>
        <p className="form__paragraf">{title}</p>
        <label className="form__label" htmlFor={nameDirection}>
          Choose currency
        </label>
        <select
          onChange={(e) => onSelectValue(e.target.name, e.target.value)}
          id={nameDirection}
          name={nameDirection}
          className="form__select"
          value={value}
        >
          <option>PL</option>
          <option>EUR</option>
          <option>USD</option>
          <option>CNY</option>
        </select>
      </div>
    </>
  );
};
