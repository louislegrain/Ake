export function MsgStatus({ distributed = false, read = false }) {
   return (
      <svg
         viewBox={distributed || read ? '0 0 24 13' : '5 0 19 13'}
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         style={{ color: read ? 'var(--electric-blue)' : 'inherit' }}
         className="icon"
      >
         <path
            d="M6.40234 6.41667L11.8045 11.8333L22.6087 1"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         {(distributed || read) && (
            <path
               d="M11.8042 6.41667L17.2063 1M1 6.41667L6.40211 11.8333L1 6.41667Z"
               stroke="currentColor"
               strokeWidth="1.35"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         )}
      </svg>
   );
}
