export function Button({ primary, children, ...args }) {
   return (
      <button className={primary ? 'btn-primary' : ''} {...args}>
         {children}
      </button>
   );
}
