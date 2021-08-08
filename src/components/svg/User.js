export function User({ title, ...args }) {
   return (
      <svg
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 600 600"
         fill="white"
         {...args}
      >
         {title && <title>{title}</title>}
         <defs>
            <clipPath id="circular-border">
               <circle cx="300" cy="300" r="250" />
            </clipPath>
         </defs>
         <circle cx="300" cy="300" r="280" fill="currentColor" />
         <circle cx="300" cy="230" r="100" />
         <circle cx="300" cy="550" r="190" clipPath="url(#circular-border)" />
      </svg>
   );
}
