import React, { Component, PropTypes } from 'react';

import _ from 'lodash'
import importcss from 'importcss'
import classnames from 'classnames'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import FaMailReply from 'react-icons/lib/fa/mail-reply'
import FaBan from 'react-icons/lib/fa/ban'
import FaEdit from 'react-icons/lib/fa/edit'
import FaCheck from 'react-icons/lib/fa/check'
import FaComment from 'react-icons/lib/fa/comment'

import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Avatar from 'lsk-general/Avatar'

const DATE_FORMATTER = buildFormatter(ruStrings)

@importcss(require('./PushMessage.scss'))
export default class PushMessage extends Component {
  
  constructor(){
    super()
    this.state = {}
  }

  static defaultProps = {
    
  }

  static propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        online: PropTypes.bool.isRequired
    }),
    children: React.PropTypes.any
  }
  render() { 
    return (
      <div styleName="push_message">

        <div styleName="push_message__avatar">  
          <Avatar src={this.props.user.avatar} title={this.props.user.fullName} size={50}></Avatar>
          
        </div>

        <div styleName="push_message__text">
            {this.props.children}
        </div>
      </div>
    ) 
  }
}

/*<Avatar.Badge right bottom>
              <div styleName="push_message__avatar-badge-online"></div>
            </Avatar.Badge>            */