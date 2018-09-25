import React from 'react'
import {Input, Layout} from 'antd'

import Drawer from '../../components/Drawer'

import styles from './index.less'

export default class Portal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      drawerVisible: this.props.visible,
    }

  }

  UNSAFE_componentWillReceiveProps({visible}) {
    this.setState({
      drawerVisible: visible,
    })
  }

  render() {

    const drawerProps = {
      visible: this.state.drawerVisible,
      placement: 'left',
      mask: false,
      width: '100%',
      style: {
        backgroundColor: 'rgba(0,0,0, 0.6)',
        borderRadius: '10px',
      },
    }
    const Search = Input.Search
    const {Header, Content, Sider} = Layout

    return (
      <Drawer className={styles.portal} {...drawerProps}>
        <Layout>
          <Header>
            <Search
              className={styles.search}
              placeholder="搜索"
              style={{ width: 200 }}
            />
          </Header>
          <Layout>
            <Content className={styles.appMap}>

            </Content>
            <Sider></Sider>
          </Layout>
        </Layout>
      </Drawer>
    )
  }
}