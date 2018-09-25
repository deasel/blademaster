
import modelExtend from 'dva-model-extend'
import {model} from '../utils'

export default modelExtend(model.model, {
  namespace: 'app',
  state: {
    drawerVisible: false,
  },
})