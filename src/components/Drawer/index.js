import React from 'react'
import _ from 'lodash'

import styles from './index.less'

export default class Drawer extends React.Component{
  constructor(props) {
    super(props)
    this.state = _.assign({}, props)
  }

  UNSAFE_componentWillReceiveProps({visible}) {
    this.setState({
      visible: visible,
    })
  }
  
  onHideDrawer() {
    this.setState({
      visible: false,
    })
  }

  render() {
    const {
      visible,
      placement,
      mask,
      style,
      className,
    } = this.state

    let width = this.state.width
    width = _.isString(width) && width.indexOf('%') > 0 ? width : (width || 256) + 'px'

    const contentStyle = {
      width: width,
      [placement === 'left' ? 'left' : 'right']: 0,
      ...style,
    }

    return (
      <div 
        style={{display: visible === true ? 'block' : 'none'}}
        className={styles.drawer + ' ' + className}
      >
        <div 
          onClick={this.onHideDrawer.bind(this)}
          className={styles.mask} 
          style={{opacity: mask === false ? '0' : '0.3'}} 
        />

        <div 
          className={styles.content}
          style={contentStyle}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}