export const countDays = (date1, date2) => {
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(
    date1.getTime() - date2.getTime()
  );
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
};
