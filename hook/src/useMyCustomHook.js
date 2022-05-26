// import React, { useContext, useDebugValue, useState } from 'react';
// import { ItemContext } from '../App';
// import { Item } from './Item';
// import './ItemList.css';

// function useMyCustomHook() {
//   const [isOnline, setIsOnline] = useState<boolean>(true);
//   useDebugValue(isOnline ? 'is online-(debug)' : ' is offline-(debug)');
//   return isOnline;
// }

// export const ItemList: React.FC = () => {
//   const value = useContext(ItemContext);
//   const isOnline = useMyCustomHook();

//   if (typeof value === 'string') return null;

//   return (
//     <div className=''>
//       <div className='item-list'>Item 리스트</div>
//       {value.items.map((a) => {
//         return <Item key={a.name} item={a} />;
//       })}
//     </div>
//   );
// };

// export default useMyCustomHook;