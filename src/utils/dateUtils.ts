import moment from "moment";

export const formatToTimeZone = (dateTime: string, format:string, zone: string = '+0000') => {
  return moment(dateTime).utcOffset(zone).format(format);
};

export const sortByDate = (list: Array<any>, dateKey: string, order: string = 'ASC'):Array<any> => {
  list.sort((a, b) => {
    if (typeof a[dateKey] === 'function') {
      return a[dateKey]() - b[dateKey]();
    }
    return a - b;
  });
  if (order === 'DESC') {
    list = list.reverse();
  }
  return list;
};