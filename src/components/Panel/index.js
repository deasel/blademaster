import React from 'react'
import { Modal,Button, Icon,} from 'antd'

import styles from './index.less'


export default class Panel extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      visible: true,
    }

  }



  render() {
    return (
      <div
        className={styles.window}
      >
        <div className={styles.title}>
          <span>
            <Button className={styles.close} shape="circle" />
            <Button className={styles.mini} shape="circle" />
            <Button className={styles.max} shape="circle" />
          </span>
          
          <span>{this.props.title || ''}</span>

          <span>
            <Icon type={this.props.icon} />
          </span>
        </div>

        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}