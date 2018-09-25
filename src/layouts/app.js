/**
 * 全局入口
 * 
 */
import React from 'react'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import {Icon,} from 'antd'

import Datetime from '../application/Datetime'
import Portal from '../system/Portal'

import styles from './app.less'

function App({dispatch, app, children}) {

  const {
    drawerVisible,
  } = app
  
  //Drawer
  const showDrawer = () => {
    dispatch({type: 'app/updateState', payload: {drawerVisible: !drawerVisible}})
  }

  
  return (
    <div className={styles.system}>
      <div className={styles.toolbar}>
        <div className={styles.partLeft} onClick={showDrawer}>
          <Icon type="apple" />
        </div>

        <div className={styles.partRight}>
          <Datetime />
        </div>
      </div>
      <div className={styles.content}>
        <Portal visible={drawerVisible}/>
        { children }
      </div>
    </div>
  )
}

export default withRouter(connect(({ app }) => ({ app }))(App))