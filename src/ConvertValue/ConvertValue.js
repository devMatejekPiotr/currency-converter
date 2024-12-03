import { LabelSelect, Select } from "./Styled";

export const ConvertValue = ({ value, nameDirection, onSelectValue }) => {
  return (
    <div>
      <LabelSelect htmlFor={nameDirection}>Choose currency</LabelSelect>
      <Select
        onChange={(e) => onSelectValue(e.target.name, e.target.value)}
        id={nameDirection}
        name={nameDirection}
        value={value}
      >
        <option>PL</option>
        <option>EUR</option>
        <option>USD</option>
        <option>CNY</option>
      </Select>
    </div>
  );
};
