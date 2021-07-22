import { Link } from 'react-router-dom';

const en = {
   registration: {
      logoAlt: "Ake's logo",
      titles: {
         register: (
            <>
               Free register to chat <strong>privately</strong>.
            </>
         ),
         login: (
            <>
               Login to chat <strong>privately</strong>.
            </>
         ),
      },
      labels: {
         fullname: 'Full name',
         email: 'Email',
         password: 'Password',
         retypePassword: 'Confirm password',
      },
      helpers: {
         strongPassword: 'Make sure your password is strong',
      },
      errors: {
         fullname: 'Please enter your full name.',
         email: 'Please respect the required format.',
         passwordMin8Caracts: 'The password must contain at least 8 characters.',
         passwordMin1Number: 'The password must contain at least 1 number.',
         passwordMin1MajLetter: 'Password must contain at least 1 uppercase letter.',
         passwordMin1MinLetter: 'Password must contain at least 1 lowercase letter.',
         passwordMin1SpecialCaract: 'Password must contain at least 1 special character.',
         retypePassword: 'Passwords do not match.',
         emptyField: 'Please complete this field.',
      },
      register: 'Register',
      login: 'Login',
      eyeIcon: {
         visible: 'Visible eye',
         hidden: 'Hidden eye',
      },
      termsOfUse: (
         <>
            By clicking <span className="italic">Register</span>, you agree to our{' '}
            <a
               href="#"
               onClick={e => {
                  e.preventDefault();
                  alert('En cliquant sur ce lien on devra atterir sur la page des conditions');
               }}
            >
               Terms of Service
            </a>
            .<br />
            Already have an account ? <Link to="/login/">Login</Link>.
         </>
      ),
      loginFooter: (
         <>
            Forgot your password ? Don't worry,{' '}
            <a
               href="#"
               onClick={e => {
                  e.preventDefault();
                  alert(
                     'En cliquant sur ce lien on devra atterir sur la page de changement de mot de passe'
                  );
               }}
            >
               click here
            </a>
            .<br />
            Don’t have an account ? <Link to="/register/">Register</Link>.
         </>
      ),
   },
};

export default en;
