import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import classnames from 'classnames';
import _ from 'lodash';

/**
Довольно часто front-end разработчикам в своих проектах приходится решать проблему асинхронных состояний. Рассмотрим такой пример: форма заказа.

Пользователь выбирает товар, выбирает его количество и нажимает кнопку заказать. В этот момент фронт должен сделать запрос к бекэнду и подтвердить успешность заказа, или выдать ошибку указав на причину отказа. Естественно необходимо предусмотреть такие проблемы как, медленный или даже отвалившийся интернет у пользователя.

Чтобы решить такой кейс можно воспользоваться различными UX способами, один из них: анимированная кнопка с состояниями.

Вот несколько примеров с Dribbble, как это может выглядеть:

https://dribbble.com/shots/2551579-Download-Button
https://dribbble.com/shots/1461540-Organic-Loading-State
https://dribbble.com/shots/2201051-Activate-Button
https://dribbble.com/shots/1673204-Submit-Button 

Внутри компонента должено хранится состояние, которое может быть одним из следующих:
    none
    loading
    success
    error
Каждому этому состоянию должен соответствовать внешний вид (View). 
Компонент должен иметь какой-то механизм работы с промежуточными состояниями (transitions). 
Компонент должен предоставить интерфейс для прокидывания состояния сверху, а также интерфейса для прокидывания промиса.

Задача: реализовать такой компонент.
 */
const STATE_NONE = 'none'
const STATE_LOADING = 'loading'
const STATE_SUCCESS = 'success'
const STATE_ERROR = 'error'

@importcss(require('./StatusButton.scss'))
export default class StatusButton extends Component {
  
  constructor(){
    super()
    this.state = { 
      buttonState: null,
      buttonText: null
    }
  }

  static defaultProps = {
    defaultState: STATE_NONE,
    onClickPromise: null
  }

  static propTypes = {
    defaultState: PropTypes.string,
    onClickPromise: PropTypes.func
  }

  onButtonClick(e){
    e.preventDefault
    if(this.props.onClickPromise){
        window.setTimeout(() =>{
            if(this.state.buttonState === null) this.setState({
                buttonState: STATE_LOADING, 
                buttonText: null
            })
        }, 100)
        this.props.onClickPromise().then(
          (response) => {
            this.setState({
                buttonState: STATE_SUCCESS, 
                buttonText: response
            })
          },
          (reason) => {
            this.setState({
                buttonState: STATE_ERROR, 
                buttonText: reason
            })
          }
        )
    }
  }

  render() {
    const { } = this.props
    const state = this.state.buttonState || this.props.defaultState
    const buttonClasses = classnames({
        'status-button': true,
        'none': state === STATE_NONE,
        'loading': state === STATE_LOADING,
        'success': state === STATE_SUCCESS,
        'error': state === STATE_ERROR,
    })
    return (
        <button onClick={this.onButtonClick.bind(this)} styleName={buttonClasses}> 
        {this.state.buttonText ? this.state.buttonText : this.props.children}
        </button>
    )
  }
}
StatusButton.STATE_NONE = STATE_NONE
StatusButton.STATE_LOADING = STATE_LOADING
StatusButton.STATE_SUCCESS = STATE_SUCCESS
StatusButton.STATE_ERROR = STATE_ERROR