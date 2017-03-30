import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import classnames from 'classnames';
import _ from 'lodash';

import defaultImageFile from './public/default_avatar.png'

const SPINNER_RADIUS = 20
/**
  Какие основные кейсы приходится решать очень часто, хоть и не в каждом проекте:
  Само собой разумеется, что компонент может
    Placeholder. Изображение которое мы показываем в случае если аватарки пользователя нет, изображение не удалось загрузить изза проблем с сервером или изображение в процессе загрузки.
    Бейджи. Придумать механизм передачи для передачи бейджа (елемент который крикрепляется поверх аватарки, обычно с какого-то угла). Частый кейс: пользователей, которые онлайн маркеруют бейджем с зеленой точкой или администраторам/модераторам устанавливают бейдж со звездой.
    Поддержки экранов повышенной плотности пикселей (ретины): <img src="low-res.jpg" srcset="high-res.jpg 2x">
    Включение/выключение накладываемых фильтров на аватар. Очень частый кейс наложение черно-белого css фильтра для пользователей (которые например в оффлайне).
    Включение/выключение тени под аватаркой.
    Включение/выключение рамки и установка ее цвета. Например у текущего пользователя рамка зеленая, а у всех остальных серая.
    Поддержка форм аватарки. Основная форма это квадрат и круг, но в идеале было бы круто разработать механизм для передачи формы гекса с скругленными краями.
    Ну и само собой разуммется, что помимо изображения, в аватарку можно передать alt и title для "странных" браузеров, выключенных картинок и ботов поисковиков.

 */


@importcss(require('./Avatar.css'))
export default class Avatar extends Component {
  
  constructor(){
    super()
    this.state = { 
      loadError: false,
      loading: true
    }
  }

  static defaultProps = {
    src: defaultImageFile,
    onErrorSrc: defaultImageFile,
    size: 128,
    form: 'default'
  }

  static propTypes = {
    src: PropTypes.string,
    onErrorSrc: PropTypes.string,
    size: PropTypes.number,
    form: PropTypes.string
  }

  handleImageLoaded(){
    if(!this.state.loadError)this.setState({
      loadError: false,
      loading: false
    })
  }

  handleImageErrored(){
    this.setState({
      loadError: true,
      loading: false
    })
  }

  render() {
    const { src, onErrorSrc, size } = this.props;
    const spinnerStyle = {
      left: size/2 - SPINNER_RADIUS,
      bottom: size/2 - SPINNER_RADIUS
    }

    const frameStyle = {
      width: size + 'px',
      height: size + 'px'
    }

    const imgClassNames = classnames({
      'avatar__img--square': this.props.form == 'square',
      'avatar__img--circle': this.props.form == 'circle',
      'avatar__img': this.props.form != 'circle' && this.props.form != 'square'
    })

    return (
      <div styleName="avatar" style={frameStyle}>        
        {this.state.loading && <div styleName="sk-fading-circle" style={spinnerStyle}>
          <div styleName="sk-circle1 sk-circle"></div>
          <div styleName="sk-circle2 sk-circle"></div>
          <div styleName="sk-circle3 sk-circle"></div>
          <div styleName="sk-circle4 sk-circle"></div>
          <div styleName="sk-circle5 sk-circle"></div>
          <div styleName="sk-circle6 sk-circle"></div>
          <div styleName="sk-circle7 sk-circle"></div>
          <div styleName="sk-circle8 sk-circle"></div>
          <div styleName="sk-circle9 sk-circle"></div>
          <div styleName="sk-circle10 sk-circle"></div>
          <div styleName="sk-circle11 sk-circle"></div>
          <div styleName="sk-circle12 sk-circle"></div>
        </div>}
        <img 
          styleName={imgClassNames}
          src={this.state.loadError ? onErrorSrc: src} 
          width={size} height={size}        
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
    );
  }
}