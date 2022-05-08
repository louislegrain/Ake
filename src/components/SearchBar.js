import { useRef } from 'react';

import searchIcon from '../assets/icons/search.svg';
import '../styles/SearchBar.css';

export function SearchBar({ ...args }) {
   const input = useRef();

   const focusInput = () => input.current.focus();

   return (
      <div className="searchbar-container message-bubble" onClick={focusInput}>
         <img src={searchIcon} />
         <input ref={input} type="text" placeholder="Rechercher" {...args} />
      </div>
   );
}
