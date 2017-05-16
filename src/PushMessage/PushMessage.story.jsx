import React, { Component, PropTypes } from 'react';
import PushMessage from './PushMessage'
import userImageFile from './public/user_avatar.png';




module.exports = ({ storiesOf, action }) => {
  return storiesOf('Comment', module)
    .add('PushMessage comment', () => {
        return <PushMessage></PushMessage>
    })  
    
};