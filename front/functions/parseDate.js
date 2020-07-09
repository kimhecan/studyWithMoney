const parseDate = (date) => {
  const koreaDate = new Date(date);
  const hour = koreaDate.getHours() > 12 ? `오후 ${koreaDate.getHours() % 12}` : koreaDate.getHours();
  const answer = `${koreaDate.getMonth() + 1}월${koreaDate.getDate()}일${hour}시${koreaDate.getMinutes()}분`;
  return answer;
};

export default parseDate;
