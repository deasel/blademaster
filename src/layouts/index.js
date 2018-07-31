import withRouter from 'umi/withRouter'
import System from './system'

export default withRouter((props) => {
  return (
    <div style={{height: '100%'}}>
      <System>
        { props.children }
      </System>
    </div>
  )
})
