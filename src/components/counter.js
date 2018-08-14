import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Counter extends Component {
  render() {
    const { count, onAdd } = this.props
    return (
      <View className='counter'>
        <Text>{count}</Text>
        <View onClick={onAdd}>Click</View>
      </View>
    )
  }
}
