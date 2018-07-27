import React from 'react'
import Datetime from '../Datetime'
import styles from './index.less'

import {Icon} from 'antd'

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.partLeft}>
        <Icon type="apple" />
      </div>

      <div className={styles.partRight}>
        <Datetime />
      </div>
    </div>
  )
}

export default Toolbar