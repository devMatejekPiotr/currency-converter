import "./style.css";

export const RenderValue = ({ resultValue, error }) => {
  return (
    <p className="form__equalRender" aria-live="polite">
      {error || resultValue}
    </p>
  );
};
