export function prettyHour(date) {
   const hours = date.getHours();
   const minutes = date.getMinutes();

   return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
}
