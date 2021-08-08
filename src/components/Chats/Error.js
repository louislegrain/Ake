import '../../styles/Chats/Error.css';

export function Error({ title, error }) {
   return (
      <div className="doesnt-exist-container">
         <div>
            <div className="title">{title}</div>
            <p>{error}</p>
         </div>
      </div>
   );
}
