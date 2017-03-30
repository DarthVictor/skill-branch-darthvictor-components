import React from 'react';
import Avatar from './Avatar';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Avatar', module)
    
    .add('First test', () => (
      <Avatar>          
      </Avatar>
    ))
    

    .add('Last test', () => (
      <Avatar>
      </Avatar>
    ));
};