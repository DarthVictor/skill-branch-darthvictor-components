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
    ));
};