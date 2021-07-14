const fr = {
   registration: {
      leftSide: {
         title: (
            <>
               Discutez
               <br />
               en toute
               <br />
               sécurité.
            </>
         ),
         logoAlt: 'Logo de Ake',
      },
      rightSide: {
         placeholders: {
            fullname: 'Nom complet',
            email: 'Adresse mail',
            password: 'Mot de passe',
            retypePassword: 'Confirmer le mot de passe',
         },
         errors: {
            fullname: 'Veuillez entrer votre nom complet.',
            email: 'Veuillez respecter le format requis.',
            passwordMin8Caracts: 'Le mot de passe doit contenir au moins 8 caractères.',
            passwordMin1Number: 'Le mot de passe doit contenir au moins 1 chiffre.',
            passwordMin1MajLetter:
               'Le mot de passe doit contenir au moins 1 lettre majuscule.',
            passwordMin1MinLetter:
               'Le mot de passe doit contenir au moins 1 lettre minuscule.',
            passwordMin1SpecialCaract:
               'Le mot de passe doit contenir au moins 1 caractère spécial.',
            retypePassword: 'Les mots de passe ne correspondent pas.',
            emptyField: 'Veuillez compléter ce champ.',
         },
         or: 'OU',
         register: 'Inscription',
         login: 'Connexion',
         eyeIcon: {
            visible: 'Œil visible',
            hidden: 'Œil caché',
         },
      },
   },
};

export default fr;
