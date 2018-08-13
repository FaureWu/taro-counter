export default {
  namespace: 'counter',

  state: 0,

  reducers: {
    add(action, state) {
      return state + 1
    },
  },
}
