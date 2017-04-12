import React from 'react'
import {Comment, CommentForm} from './Comment'

module.exports = ({ storiesOf, action }) => {
    
  return storiesOf('Comment', module)
    
    .add('Nothing', () => (
        <Comment></Comment>
    ))  
    .add('Nothing Form', () => (
        <CommentForm></CommentForm>
    ))  

};