import { formatDate } from "../utils/formatDate";
import { ClockStyled } from "./styled";

export const Clock = ({ date }) => {
  const formattedDate = formatDate(date);
  const { dayOfWeek, day, month, time } = formattedDate;

  return <ClockStyled>{`${dayOfWeek}, ${day} ${month}, ${time}`}</ClockStyled>;
};
