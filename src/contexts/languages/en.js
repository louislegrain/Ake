const en = {
   registration: {
      leftSide: {
         title: (
            <>
               Chat safely.
               <br />
               Freely
               <br />
               Encrypted
            </>
         ),
         logoAlt: "Ake's logo",
      },
      rightSide: {
         placeholders: {
            fullname: 'Full name',
            email: 'Email',
            password: 'Password',
            retypePassword: 'Confirm password',
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
         or: 'OR',
         register: 'Register',
         login: 'Login',
         eyeIcon: {
            visible: 'Visible eye',
            hidden: 'Hidden eye',
         },
      },
   },
};

export default en;
