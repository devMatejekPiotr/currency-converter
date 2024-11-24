export const formatDate = (date) => {
  return date.toLocaleTimeString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
