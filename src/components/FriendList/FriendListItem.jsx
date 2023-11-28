import React from 'react';

import { FriendItem, Status, Image, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

// function FriendListItem({ avatar, name, isOnline }) {
//   return (
//     <li className="item">
//       <span className="status">{isOnline}</span>
//       <img className="avatar" src={avatar} alt="User avatar" width="48" />
//       <p className="name">{name}</p>
//     </li>
//   );
// }

export default FriendListItem;
