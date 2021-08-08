export function Button({ primary, children, action = null, ...args }) {
   return (
      <button className={primary ? 'btn-primary' : ''} onClick={action} {...args}>
         {children}
      </button>
   );
}
