import { useContext, useEffect, useState } from 'react';
import { languageContext } from '../contexts/languages/language';

function convertMillisecondsToMinutes(milliseconds) {
   return Math.floor(milliseconds / 60000);
}

export function TimeFromNow({ date }) {
   const txt = useContext(languageContext).language.time;

   const [now, setNow] = useState(convertMillisecondsToMinutes(new Date().getTime()));

   useEffect(() => {
      const interval = setInterval(() => {
         setNow(convertMillisecondsToMinutes(new Date().getTime()));
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   let timeBetween = now - convertMillisecondsToMinutes(new Date(date).getTime());

   if (timeBetween <= 0) {
      timeBetween = txt.now;
   } else if (timeBetween < 60) {
      timeBetween = `${timeBetween}${txt.min}`;
   } else {
      timeBetween = Math.floor(timeBetween / 60);
      if (timeBetween < 24) {
         timeBetween = `${timeBetween}${txt.hour}`;
      } else {
         timeBetween = Math.floor(timeBetween / 24);
         if (timeBetween < 30.5) {
            timeBetween = `${timeBetween}${txt.day}`;
         } else if (timeBetween < 365) {
            timeBetween = `${Math.floor(timeBetween / 30.5)}${txt.month}`;
         } else {
            timeBetween = `${Math.floor(timeBetween / 365)}${
               timeBetween < 730 ? txt.year.sing : txt.year.plur
            }`;
         }
      }
   }

   return timeBetween;
}
