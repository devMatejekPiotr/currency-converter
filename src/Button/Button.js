import "./style.css";

export const Button = ({ text }) => {
  return (
    <button className="form__button" type="submit">
      {text}
    </button>
  );
};
