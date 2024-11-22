import "./style.css";

export const InputValue = ({ onInputValue, value }) => {
  return (
    <>
      <div className="form__valueNumber">
        <input
          className="form__inputNumber"
          id="convertValue"
          type="number"
          name="value"
          onChange={(e) => onInputValue(e.target.name, e.target.value)}
          value={value}
          min="0"
          step="any"
          placeholder="Enter value"
        />
      </div>
    </>
  );
};
