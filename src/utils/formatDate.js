export const formatDate = (date) => {
  const dayOfWeek = date.toLocaleDateString(undefined, { weekday: "long" });
  const day = String(date.getDay()).padStart(2, "0");
  const month = date.toLocaleDateString(undefined, { month: "long" });
  const monthNumeric = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.toLocaleDateString(undefined, { year: "numeric" });
  const time = date.toLocaleTimeString(undefined);

  return {
    dayOfWeek,
    day,
    month,
    time,
    year,
    monthNumeric,
  };
};
