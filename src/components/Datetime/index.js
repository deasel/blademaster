import React from 'react'
import { Menu, Dropdown} from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import styles from './index.less'


export default class Datetime extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      methods: [{
        text: '时间',
        format: 'HH:mm:ss',
      }, {
        text: '星期 + 时间',
        format: 'dddd HH:mm:ss',
      }, {
        text: '日期 + 星期 + 时间',
        format: `YYYY年MM月DD  dddd  HH:mm:ss`,
      },],
      now: '',
    }

  }

  tick() {
    this.setState(prevState => ({
      now: dayjs().locale('zh-cn').format(prevState.methods[prevState.selected].format),
    }))
  }

  onMenuClick({key}) {
    this.setState(prevState => ({
      selected: key,
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    
    const menu = (
      <Menu onClick={this.onMenuClick.bind(this)} style={{textAlign: 'right'}}>
        {
          this.state.methods.map((m, index) => {
            return (
              <Menu.Item key={index}>
                {m.text}
              </Menu.Item>
            )
          })
        }
      </Menu>
    )

    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <span className={styles.text}>{this.state.now}</span>
      </Dropdown>
    )
  }
}