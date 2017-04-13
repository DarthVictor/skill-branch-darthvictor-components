import React from 'react'
import {Comment, CommentForm} from './Comment'
import userImageFile from './public/user_avatar.png';

module.exports = ({ storiesOf, action }) => {
    const commentProps = {
    userId: PropTypes.number,
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    text: PropTypes.string,
    // ? Content
    // ? images / attachments (?)
    //  ? подумать про упомянания 
    repliesCount: PropTypes.number,
    onReplyClick: PropTypes.function,
    likesCount: PropTypes.number,
    onLikeClick: PropTypes.function,
    date: React.PropTypes.instanceOf(Date),
    onReport: PropTypes.function,
    // ? редактирование что должно происходить при onEditClick?
    onSave: PropTypes.function
  }
  return storiesOf('Comment', module)
    
    .add('Standart', () => (
        <Comment src={userImageFile}>></Comment>
    ))  
    .add('Nothing Form', () => (
        <CommentForm></CommentForm>
    ))  

};