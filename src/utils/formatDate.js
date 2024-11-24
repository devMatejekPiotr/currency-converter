export const formatDate = (date) => {
  const dayOfWeek = date.toLocaleDateString(undefined, { weekday: "long" });
  const day = date.toLocaleDateString(undefined, { day: "numeric" });
  const month = date.toLocaleDateString(undefined, { month: "long" });
  const time = date.toLocaleTimeString(undefined);

  return {
    dayOfWeek,
    day,
    month,
    time,
  };
};
