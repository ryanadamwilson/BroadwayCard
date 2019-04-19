export default function getRemainingPerformances(dates, offset = 0) {
  return dates
    .slice() // needed so I don't directly mutate dates array; Not typically necessary when dealing with a real store
    .splice(offset)
    .reduce(
      (total, date) =>
        total + date.times.filter(time => time.tickets_available).length,
      0
    );
}
