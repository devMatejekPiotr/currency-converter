import { formatDate } from "../utils/formatDate";
import { ClockStyled, Bold } from "./styled";

export const Clock = ({ date, isExchange }) => {
  let currencyData;

  if (isExchange) {
    const dateOfRates = date && date.last_updated_at;
    currencyData = new Date(dateOfRates);
  } else {
    currencyData = date;
  }

  const formattedDate = formatDate(currencyData);
  const { dayOfWeek, day, month, time, year, monthNumeric } = formattedDate;

  return (
    <ClockStyled isExchange={isExchange}>
      {!isExchange ? (
        `${dayOfWeek}, ${day} ${month}, ${time}`
      ) : (
        <>
          Current as of: <Bold>{`${year}-${monthNumeric}-${day}`}</Bold>
        </>
      )}
    </ClockStyled>
  );
};
