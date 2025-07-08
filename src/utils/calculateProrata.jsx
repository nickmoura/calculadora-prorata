const msPerDay = 1000 * 60 * 60 * 24;

export function calculateProrata(startStr, endStr, consumption) {
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const start = new Date(startStr);
  const end = new Date(endStr);
  const realStart = new Date(start);
  realStart.setDate(start.getDate() + 1);

  const totalDays = (end - realStart) / msPerDay + 1;
  if (totalDays <= 0) return null;

  let endOfFirstMonth = realStart.getMonth() === 11
    ? new Date(realStart.getFullYear(), 11, 31)
    : new Date(realStart.getFullYear(), realStart.getMonth() + 1, 0);

  const daysInFirstMonth = Math.max(0, Math.floor((endOfFirstMonth - realStart) / msPerDay) + 1);
  const daysInSecondMonth = totalDays - daysInFirstMonth;

  const consumptionFirstMonth = (daysInFirstMonth / totalDays) * consumption;
  const consumptionSecondMonth = (daysInSecondMonth / totalDays) * consumption;

  return [
    { month: monthNames[realStart.getMonth()], value: consumptionFirstMonth },
    { month: monthNames[end.getMonth()], value: consumptionSecondMonth }
  ];
}
