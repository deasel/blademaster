import withRouter from 'umi/withRouter'
import App from './app'
import '../themes/index.less'

export default withRouter((props) => {
  return (
    <div style={{height: '100%'}}>
      <App>
        { props.children }
      </App>
    </div>
  )
})
