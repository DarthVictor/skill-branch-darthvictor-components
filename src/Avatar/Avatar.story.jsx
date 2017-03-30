import React from 'react';
import Avatar from './Avatar';

import userImageFile from './public/user_avatar.png';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Avatar', module)
    
    .add('Standart Avatar', () => (
        <Avatar src={userImageFile}>
        </Avatar>
    ))   

    .add('Default Image', () => (
      <Avatar>
      </Avatar>
    ))

    .add('Large Image and Spinner', () => (
      <Avatar src={'https://edmullen.net/test/rc.jpg'}>
      </Avatar>
    ))

    .add('Fallback from wrong src', () => (
      <Avatar src={'https://no-data.jpg'} onErrorSrc={"https://avatars2.githubusercontent.com/u/2578541?v=3&u=d3c98f7f889e30a133848ca0fd51e2b58bbb9b79&s=400"}>
      </Avatar>
    ))

    
    .add('Square Avatar', () => (
        <Avatar src={userImageFile} form={'square'}>
        </Avatar>
    ))
    
    .add('Circle Avatar', () => (
        <Avatar src={userImageFile} form={'circle'}>
        </Avatar>
    ))
};