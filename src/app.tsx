import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { AppState } from './stores/app';

import './index.less';

@observer
export class App extends React.Component<{ appState: AppState }, {}> {
    render() {
        return (
            <div>
                <div className="nir-class" />
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};