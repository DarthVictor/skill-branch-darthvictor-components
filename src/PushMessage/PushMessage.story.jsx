import React, { Component, PropTypes } from 'react';
import PushMessage from './PushMessage'
import userImageFile from './public/user_avatar.png';
import Avatar from 'lsk-general/Avatar'




module.exports = ({ storiesOf, action }) => {
    const onlineUser = {
        avatar: userImageFile,
        fullName: 'Валентин Самойлов',
        online: true
    }
    return storiesOf('PushMessage', module)
        .add('PushMessage comment', () => {
            
            return (
                <div style={{width: '20em'}}>
                    <PushMessage user={onlineUser}>
                            <strong>Валентин Самойлов</strong> прокомментировал вашу сделку <a href="#">Преролл для ролика Победителя</a>
                    </PushMessage>
                </div>
            )
            
        })  
        .add('PushMessage comment with ellipsis', () => {
            
            return (
                <Avatar>
                    <Avatar.Badge left top >
                        <div style={{ width: 10, height: 10, backgroundColor: '#4CAF50', borderRadius: '50%', border: '2px solid #fff' }} />
                    </Avatar.Badge>
                    <Avatar.Badge right top >
                        <div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', border: '2px solid #fff' }} />
                    </Avatar.Badge>
                    <Avatar.Badge left bottom >
                        <div style={{ width: 10, height: 10, backgroundColor: '#574caf', borderRadius: '50%', border: '2px solid #fff' }} />
                    </Avatar.Badge>
                    <Avatar.Badge right bottom >
                        <div style={{ width: 10, height: 10, backgroundColor: '#c6972f', borderRadius: '50%', border: '2px solid #fff' }} />
                    </Avatar.Badge>
                </Avatar>
            )
            
        })  
    
};