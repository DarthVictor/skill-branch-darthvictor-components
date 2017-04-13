import React from 'react'
import {Comment, CommentForm} from './Comment'
import userImageFile from './public/user_avatar.png';

module.exports = ({ storiesOf, action }) => {
    
  return storiesOf('Comment', module)
    
    .add('Standart', () => {
        const commentProps = {
            userId: 1,
            avatarSrc: userImageFile,
            userName: 'userName',
            text: 'PropTypes.string',
            // ? Content
            // ? images / attachments (?)
            //  ? подумать про упомянания 
            repliesCount: 0,
            onReplyClick: () => console.log('On Reply'),
            likesCount: 0,
            onLikeClick: () => console.log('On Like'),
            date: new Date,
            onReport: () => console.log('On Report'),
            // ? редактирование что должно происходить при onEditClick?
            onSave: () => console.log('On Save'),
        }
        return <Comment {...commentProps}></Comment>
    })  
    .add('Nothing Form', () => (
        <CommentForm></CommentForm>
    ))  

};