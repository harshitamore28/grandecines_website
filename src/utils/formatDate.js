import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export const formatReleaseDate = (date) => {
  if (!date) return '';
  return dayjs(date).format('Do MMM');
};
