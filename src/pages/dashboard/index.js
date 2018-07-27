import React from 'react'
import { connect } from 'dva'


function Dashboard({dispatch, dashboard}) {
  return (
    <div>
      Wellcome
    </div>
  )
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)