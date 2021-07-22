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
         fullname: 'Nom complet',
         email: 'Adresse mail',
         password: 'Mot de passe',
         retypePassword: 'Confirmer le mot de passe',
      },
      helpers: {
         strongPassword: 'Assurez-vous que votre mot de passe soit fort',
      },
      errors: {
         fullname: 'Veuillez entrer votre nom complet.',
         email: 'Veuillez respecter le format requis.',
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
      eyeIcon: {
         visible: 'Œil visible',
         hidden: 'Œil caché',
      },
      termsOfUse: (
         <>
            En cliquant sur <span className="italic">Inscription</span>, vous acceptez nos{' '}
            <a
               href="#"
               onClick={e => {
                  e.preventDefault();
                  alert('En cliquant sur ce lien on devra atterir sur la page des conditions');
               }}
            >
               Conditions d'utilisation
            </a>
            .<br />
            Vous avez déjà un compte ? <Link to="/login/">Connexion</Link>.
         </>
      ),
      loginFooter: (
         <>
            Mot de passe oublié ? Pas d'inquiétude,{' '}
            <a
               href="#"
               onClick={e => {
                  e.preventDefault();
                  alert(
                     'En cliquant sur ce lien on devra atterir sur la page de changement de mot de passe'
                  );
               }}
            >
               cliquez ici
            </a>
            .<br />
            Vous n'avez pas de compte ? <Link to="/register/">Inscription</Link>.
         </>
      ),
   },
};

export default fr;
