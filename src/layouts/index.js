import withRouter from 'umi/withRouter'
import Toolbar from '../components/Toolbar'
import styles from './index.less'

export default withRouter((props) => {
  return (
    <div className={styles.app}>
      <Toolbar />
      <div className={styles.content}>
        { props.children }
      </div>
    </div>
  )
})
