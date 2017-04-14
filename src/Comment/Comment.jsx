import React, { Component, PropTypes } from 'react';
import Avatar from '../Avatar'
import importcss from 'importcss';
import classnames from 'classnames';
import _ from 'lodash';
/**

## 1 задача - Один комментарий

Сущность комментарий:
*   userid:
*   аватарка
*   имя
*   Content
*   text
*   images / attachments (?)
*   подумать про упомянания ?
*   reply ?
*   лайк ???
*   дата
*   REPORT
*   редактирование

форма написания комментария
*   Аватарка
*   textarea + autosize
*   attachment ???

Отображение комментариия

### На что посмотреть:

*  https://dribbble.com/shots/1471366-The-Loop

 */
const AVATAR_SIZE = 40
const REPORT_TEXT = 'Пожаловаться модератору'
@importcss(require('./Comment.scss'))
export class Comment extends Component {
  
  constructor(){
    super()
  }

  static defaultProps = {
    
            onReplyClick: () => {},
            onLikeClick: () => {},
            onReport: () => {},
            onSave: () => {},
  }

  static propTypes = {
    userId: PropTypes.number,
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    text: PropTypes.string,
    // ? Content
    // ? images / attachments (?)
    //  ? подумать про упомянания 
    repliesCount: PropTypes.number,
    onReplyClick: PropTypes.func,
    likesCount: PropTypes.number,
    onLikeClick: PropTypes.func,
    date: React.PropTypes.instanceOf(Date),
    onReport: PropTypes.func,
    // ? редактирование что должно происходить при onEditClick?
    onSave: PropTypes.func
  }

  render() { 
        console.log(this.props)
        return (<div styleName="comment"> 
          <div styleName="comment__header"> 
            <Avatar styleName="comment__avatar" src={this.props.avatarSrc} size={AVATAR_SIZE}> </Avatar>
            <div styleName="comment__info"> 
              <div styleName="comment__username">{this.props.userName}</div>
              <div styleName="comment__toolbar">
                <button styleName="comment__replies" onClick={this.props.onReplyClick.bind(this)}>{this.props.repliesCount}</button>
                <button styleName="comment__likes" onClick={this.props.onLikeClick.bind(this)}>{this.props.likesCount}</button>
                <button styleName="comment__report" onClick={this.props.onReport.bind(this)}>{REPORT_TEXT}</button>
              </div>
            </div>
          </div>
          <div styleName="comment__body">
            {this.props.text}
          </div>
        </div>) 
  }
}

@importcss(require('./Comment.scss'))
export class CommentForm extends Component {
  
  constructor(){
    super()
    this.state = {}
  }

  static defaultProps = {
    
  }

  static propTypes = {
    userId: PropTypes.number,
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    // ? редактирование что должно происходить при onSubmit?
    onSubmit: PropTypes.function
  }

  render() { 
        <div styleName="comment-form"> 
            {this.props.text}
        </div>    
  }
}
