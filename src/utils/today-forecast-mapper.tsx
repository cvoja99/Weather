import { format } from 'date-fns';

export const todayForecastMapper = (time: string[] | number[]) => {
  const currentTime = new Date();
  const dateArray = time.map((timeElement) => new Date(timeElement));
  const startIndex = dateArray.findIndex((element) => element.getHours() > currentTime.getHours()) - 1;
  const mappedDateArray = dateArray.slice(startIndex, startIndex + 6);
  const returnDateObject = {
    timeData: mappedDateArray.map((element: Date) => format(element, 'HH:mm')),
    startIndex: startIndex,
    endIndex: startIndex + 6,
  };
  return returnDateObject;
};
