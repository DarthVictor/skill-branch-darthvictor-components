import React from 'react';
import Avatar from './Avatar';

import userImageFile from './public/user_avatar.png';
import badge1_ImageFile from './public/badge_1.png';
import badge2_ImageFile from './public/badge_2.png';
import badge3_ImageFile from './public/badge_3.png';

module.exports = ({ storiesOf, action }) => {
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
        <Avatar src={userImageFile} form='square'>
        </Avatar>
    ))
    
    .add('Circle Avatar', () => (
        <Avatar src={userImageFile} form='circle'>
        </Avatar>
    ))

    .add('Border Avatar', () => {
        const styleValue = {marginBottom: '20px'}
        return (
            <div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} border='3px solid red'>
                </Avatar>
              </div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} border={'3px solid green'}>
                </Avatar>
              </div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} border={'3px dashed blue'}>
                </Avatar>
              </div>
            </div>
        )
    })

    .add('Bage Avatar', () => {
        const styleValue = {margin: '20px 0px'}
        return (
            <div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} badgeSrc={badge1_ImageFile}>
                </Avatar>
              </div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} badgeSrc={badge2_ImageFile}>
                </Avatar>
              </div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} badgeSrc={badge3_ImageFile}>
                </Avatar>
              </div>
            </div>
        )
    })

};