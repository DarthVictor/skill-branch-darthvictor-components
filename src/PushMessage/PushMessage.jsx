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
    
  }
  render() { 
    //console.log(this.props)
    return (
      <div styleName="push_message">

        <div styleName="push_message__avatar">  
          <Avatar src={this.props.user.avatar} title={this.props.user.fullName}>
            {
              this.props.user.online  
              ?<Avatar.Badge right bottom>
                <div style={{ width: 10, height: 10, backgroundColor: '#4CAF50', borderRadius: '50%', border: '2px solid #fff' }} />
              </Avatar.Badge>
              :<Avatar.Badge right bottom>
                <div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', border: '2px solid #fff' }} />
              </Avatar.Badge>
            }            
          </Avatar>
        </div>

        <div styleName="push_message__text">

        </div>
      </div>
    ) 
  }
}
