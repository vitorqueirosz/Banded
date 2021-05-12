export const getLocalHourFromDate = (date: string) => {
  const hourFromDate = new Date(date).toLocaleTimeString();
  return hourFromDate;
};

export const removeSecondsFromTime = (time: string) => {
  const [hour, minute] = time.split(':');

  return `${hour}:${minute}`;
};
