import { useContext, useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-web';
import { themeContext } from '../contexts/theme/theme';
import darkModeAnim from '../assets/lottie/dark_mode.json';

export function DarkModeToggle() {
   const [lottieAnim, setLottieAnim] = useState();
   const lottieContainer = useRef();
   const { theme, setTheme } = useContext(themeContext);
   const isLight = theme === 'light';

   const total = 481;
   const speed = 2;
   const crop = 30;

   useEffect(() => {
      const anim = Lottie.loadAnimation({
         container: lottieContainer.current,
         animationData: darkModeAnim,
         renderer: 'svg',
         loop: false,
         autoplay: false,
      });
      anim.setSpeed(speed);
      anim.goToAndStop(isLight ? 0 : total / 2, true);
      setLottieAnim(anim);
      // eslint-disable-next-line
   }, []);

   const toggleTheme = () => {
      lottieAnim.playSegments(
         isLight ? [crop, total / 2 - crop] : [total / 2 + crop, total - crop],
         true
      );
      setTheme(isLight ? 'dark' : 'light');
   };

   return (
      <button ref={lottieContainer} onClick={toggleTheme} style={{ height: '38px' }}></button>
   );
}
