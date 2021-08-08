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
         username: 'Username',
         email: 'Email',
         password: 'Password',
         retypePassword: 'Confirm password',
         description: 'Description',
         stcp: 'Security question',
         darkMode: 'Dark mode',
      },
      helpers: {
         strongPassword: 'Make sure your password is strong',
         optional: 'Optional',
      },
      errors: {
         username: 'The username must contain at least 3 characters.',
         email: 'Please respect the required format.',
         passwordMin8Caracts: 'The password must contain at least 8 characters.',
         passwordMin1Number: 'The password must contain at least 1 number.',
         passwordMin1MajLetter: 'Password must contain at least 1 uppercase letter.',
         passwordMin1MinLetter: 'Password must contain at least 1 lowercase letter.',
         passwordMin1SpecialCaract: 'Password must contain at least 1 special character.',
         retypePassword: 'Passwords do not match.',
         emptyField: 'Please complete this field.',
         stcp: 'The security question must contain at least 3 characters.',
      },
      register: 'Register',
      login: 'Login',
      termsOfUse: (
         <>
            Already have an account ? <Link to="/login/">Login</Link>.
         </>
      ),
      loginFooter: (
         <>
            Don’t have an account ? <Link to="/register/">Register</Link>.
         </>
      ),
   },
   chats: {
      writeMsg: 'Type a message',
      errors: {
         titles: {
            emptyChats: 'No discussion yet',
            noSelectedChat: 'No selected discussion',
            notFoundChat: "This discussion doesn't exist",
         },
         errors: {
            emptyChats: 'Add some friends to start a new discussion.',
            noSelectedChat: 'Please select a discussion.',
            notFoundChat: 'Please select a different one.',
         },
      },
   },
   time: {
      now: 'now',
      min: 'min',
      hour: 'h',
      day: 'd',
      month: 'm',
      year: { sing: 'y', plur: 'y' },
   },
   date: {
      today: 'Today',
      yesterday: 'Yesterday',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
      months: [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December',
      ],
   },
   modals: {
      account: {
         account: 'Account',
      },
   },
   icons: {
      eye: {
         visible: 'Visible eye',
         hidden: 'Hidden eye',
      },
      cross: 'Cross',
      paperplane: 'Paper plane',
      profilePicture: 'Profile picture',
   },
   statusErrors: {
      400: "A required field isn't provided",
      401: 'Invalid username / password',
      409: 'This email address is already in use',
      412: 'Password is not secure enough',
      default: 'An error occurred',
   },
};

export default en;
