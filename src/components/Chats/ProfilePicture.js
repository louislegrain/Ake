import { useContext } from 'react';
import { languageContext } from '../../contexts/languages/language';
import { User } from '../svg/User';

import '../../styles/ProfilePicture.css';

export function ProfilePicture({ id, name }) {
   const txt = useContext(languageContext).language.icons;

   const alt = name ? name : txt.profilePicture;

   return id ? (
      <img className="profile-picture" src="photohere.png" alt={alt} />
   ) : (
      <User className="profile-picture" title={alt} />
   );
}
