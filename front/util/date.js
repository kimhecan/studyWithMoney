import moment from 'moment';

moment.locale('ko');

const date = (createdAt) => {
  const hour = moment(createdAt).startOf('hour').fromNow();
  return hour;
};
export default date;
