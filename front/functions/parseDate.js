const parseDate = (date) => {
  const koreaDate = new Date(date);
  const answer = `${koreaDate.getMonth() + 1}월${koreaDate.getDate()}일${koreaDate.getHours()}시${koreaDate.getMinutes()}분`;
  return answer;
};

export default parseDate;
