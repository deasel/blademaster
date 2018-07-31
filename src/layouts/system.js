/**
 * 全局入口
 * 
 */
import React from 'react'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import {Icon} from 'antd'
import Datetime from '../components/Datetime'
import styles from './system.less'

function System({dispatch, system, children}) {

  return (
    <div className={styles.system}>
      <div className={styles.toolbar}>
        <div className={styles.partLeft}>
          <Icon type="apple" />
        </div>

        <div className={styles.partRight}>
          <Datetime />
        </div>
      </div>
      <div className={styles.content}>
        { children }
      </div>
    </div>
  )
}

export default withRouter(connect(({ system }) => ({ system }))(System))