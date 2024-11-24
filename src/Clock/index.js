import "./style.css";
import { formatDate } from "../utils/formatDate";

export const Clock = ({ date }) => {
  const formattedDate = formatDate(date);
  const { dayOfWeek, day, month, time } = formattedDate;
  return <p className="clock">{`${dayOfWeek}, ${day} ${month}, ${time}`}</p>;
};
