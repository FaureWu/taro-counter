import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import zoro from 'roronoa-zoro'
import counter from './models/counter'
import Index from './pages/index'
import './app.less'

const app = zoro()
app.model(counter)
const store = app.start(false)

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentWillMount() {
    app.setup() // 启动初始化
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
)
