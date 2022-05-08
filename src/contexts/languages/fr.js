import { Link } from 'react-router-dom';

const fr = {
   registration: {
      logoAlt: 'Logo de Ake',
      titles: {
         register: (
            <>
               Inscrivez-vous gratuitement pour discuter en <strong>privé</strong>.
            </>
         ),
         login: (
            <>
               Connectez-vous pour discuter en <strong>privé</strong>.
            </>
         ),
      },
      labels: {
         username: 'Pseudo',
         email: 'Adresse mail',
         description: 'Description',
         password: 'Mot de passe',
         retypePassword: 'Confirmer le mot de passe',
         darkMode: 'Thème sombre',
      },
      helpers: {
         strongPassword: 'Assurez-vous que votre mot de passe soit fort',
         optional: 'Optionnel',
      },
      errors: {
         username: 'Le pseudo doit contenir au moins 3 caractères.',
         email: 'Veuillez respecter le format requis.',
         description: 'La description doit contenir au moins 1 caractère.',
         passwordMin8Caracts: 'Le mot de passe doit contenir au moins 8 caractères.',
         passwordMin1Number: 'Le mot de passe doit contenir au moins 1 chiffre.',
         passwordMin1MajLetter: 'Le mot de passe doit contenir au moins 1 lettre majuscule.',
         passwordMin1MinLetter: 'Le mot de passe doit contenir au moins 1 lettre minuscule.',
         passwordMin1SpecialCaract:
            'Le mot de passe doit contenir au moins 1 caractère spécial.',
         retypePassword: 'Les mots de passe ne correspondent pas.',
         emptyField: 'Veuillez compléter ce champ.',
      },
      register: 'Inscription',
      login: 'Connexion',
      termsOfUse: (
         <>
            Vous avez déjà un compte ? <Link to="/login/">Connexion</Link>.
         </>
      ),
      loginFooter: (
         <>
            Vous n'avez pas de compte ? <Link to="/register/">Inscription</Link>.
         </>
      ),
   },
   chats: {
      writeMsg: 'Taper un message',
      errors: {
         titles: {
            emptyChats: 'Aucune discussion',
            noSelectedChat: 'Pas de discussion sélectionnée',
            notFoundChat: "Cette discussion n'existe pas",
         },
         errors: {
            emptyChats: 'Ajoutez des amis pour démarrer une nouvelle discussion.',
            noSelectedChat: 'Veuillez sélectionner une discussion.',
            notFoundChat: 'Veuillez en sélectionner une autre.',
         },
      },
   },
   time: {
      now: 'maintenant',
      min: 'min',
      hour: 'h',
      day: 'j',
      month: 'm',
      year: {
         sing: 'an',
         plur: 'ans',
      },
   },
   date: {
      today: "Aujourd'hui",
      yesterday: 'Hier',
      days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      months: [
         'janvier',
         'février',
         'mars',
         'avril',
         'mai',
         'juin',
         'juillet',
         'août',
         'septembre',
         'octobre',
         'novembre',
         'décembre',
      ],
   },
   modals: {
      account: {
         account: 'Compte',
      },
   },
   icons: {
      eye: {
         visible: 'Œil visible',
         hidden: 'Œil caché',
      },
      cross: 'Croix',
      paperplane: 'Avion en papier',
      profilePicture: 'Photo de profil',
   },
   statusErrors: {
      400: "Un champ demandé n'est pas fourni",
      401: 'Identifiant / mot de passe invalide',
      409: 'Cette adresse mail est déjà utilisée',
      412: "Le mot de passe n'est pas assez sécurisé",
      default: 'Une erreur est survenue',
   },
};

export default fr;
