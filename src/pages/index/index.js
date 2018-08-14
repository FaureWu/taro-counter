import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actions } from 'roronoa-zoro'
import Counter from '../../components/counter'
import './index.less'

const counter = actions('counter')
@connect(
  state => ({
    count: state.counter,
  }),
  dispatch => ({
    onAdd: () => dispatch(counter.add()),
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

  onAdd = () => {
    this.props.onAdd()
  }

  render () {
    const { count } = this.props
    return (
      <View className='index'>
        <Counter count={count} onAdd={this.onAdd.bind(this)} />
      </View>
    )
  }
}

