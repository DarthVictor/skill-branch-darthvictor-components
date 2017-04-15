import React, { Component, PropTypes } from 'react';

import _ from 'lodash';
import importcss from 'importcss';
import classnames from 'classnames';

import MdThumbUp from 'react-icons/lib/md/thumb-up';
import FaMailReply from 'react-icons/lib/fa/mail-reply'
import FaBan from 'react-icons/lib/fa/ban'

import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Avatar from '../Avatar'
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
const AVATAR_SIZE = 120
const REPORT_TEXT = 'Пожаловаться'
const WRITTEN_TEXT = 'написал'
const LIKE_TEXT = 'Нравится'
const ANSWER_TEXT = 'Ответить'
const DATE_FORMATTER = buildFormatter(ruStrings)

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
        return (
        <div styleName="comment">
          <div styleName="comment__avatar">  
            <Avatar src={this.props.avatarSrc} size={AVATAR_SIZE}> </Avatar>
          </div>
          <div styleName="comment__right">

            <div styleName="comment__header"> 

              <div styleName="comment__info">

                <div styleName="comment__username">
                  {this.props.userName}
                </div>
                <div styleName="comment__date">
                  {WRITTEN_TEXT} <TimeAgo date={this.props.date}  formatter={DATE_FORMATTER} />
                </div>

              </div>{/*comment__info*/}

              <div styleName="comment__upper-right-toolbar">
                <button styleName="comment__report comment__button" onClick={this.props.onReport.bind(this)}>
                  <FaBan /> {REPORT_TEXT}
                </button>
              </div>
            </div>{/*comment__header*/}

            <div styleName="comment__body">
              {this.props.text}
            </div>

            <div styleName="comment__bottom-toolbar">
                <button styleName="comment__likes comment__button" onClick={this.props.onLikeClick.bind(this)}>
                  <MdThumbUp /> {LIKE_TEXT} {this.props.likesCount}
                </button>

                <button styleName="comment__replies comment__button" onClick={this.props.onReplyClick.bind(this)}>
                  <FaMailReply /> {ANSWER_TEXT} {this.props.repliesCount} 
                </button>
            </div>
          </div>{/*comment__right*/}
        </div>
      ) 
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
