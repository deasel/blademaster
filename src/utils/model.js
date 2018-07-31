export default {
  model: {
    reducers: {
      updateState (state, { payload }) {
        return {
          ...state,
          ...payload,
        }
      },
    },
  }
}
