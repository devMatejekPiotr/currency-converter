import "./style.css";
import { formatDate } from "../utils/formatDate";

export const Clock = ({ date }) => {
  const formattedDate = formatDate(date);
  return <p className="clock">{formattedDate}</p>;
};
