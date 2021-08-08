import { useCallback, useContext } from 'react';
import { languageContext } from '../../contexts/languages/language';

export function usePrettyDate() {
   const txt = useContext(languageContext).language.date;

   const prettyDate = useCallback(
      date => {
         const now = new Date();
         now.setHours(0, 0, 0, 0);
         date.setHours(0, 0, 0, 0);

         const diff = (now.getTime() - date.getTime()) / 86400000;

         return diff <= 0
            ? txt.today
            : diff === 1
            ? txt.yesterday
            : diff < 7
            ? txt.days[date.getDay()]
            : `${txt.days[date.getDay()]} ${date.getDate()} ${txt.months[date.getMonth()]}`;
      },
      [txt]
   );

   return prettyDate;
}
