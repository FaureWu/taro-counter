import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actions } from 'roronoa-zoro'
import './index.less'

const counter = actions('counter')

@connect(
  state => ({
    count: state.counter,
  }),
  dispatch => ({
    add: () => dispatch(counter.add()),
  })
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { count, add } = this.props
    return (
      <View className='index'>
        <Text>{count}</Text>
        <View onClick={add}>Click</View>
      </View>
    )
  }
}

