import { Label, Select } from "./styled";

export const ConvertValue = ({
  value,
  nameDirection,
  onSelectValue,
  currencyData,
}) => {
  return (
    <div>
      <Label htmlFor={nameDirection}>Choose currency</Label>
      <Select
        onChange={(e) => onSelectValue(e.target.name, e.target.value)}
        id={nameDirection}
        name={nameDirection}
        value={value}
      >
        {currencyData.rates &&
          Object.keys(currencyData.rates).map((rate) => {
            return <option key={rate}>{rate}</option>;
          })}
      </Select>
    </div>
  );
};
