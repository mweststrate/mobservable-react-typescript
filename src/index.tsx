import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

class AppState {
  @observable timer = 0

  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1)
  }

  resetTimer() {
    this.timer = 0
  }
}

@observer
class TimerView extends Component<{ appState: AppState }, {}> {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Miliseconds passed: {this.props.appState.timer}
        </button>
        <DevTools />
      </div>
    )
  }

  onReset = () => {
    this.props.appState.resetTimer()
  }
}

const appState = new AppState()
render(<TimerView appState={appState} />, document.getElementById('root'))
