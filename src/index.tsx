import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';
import { AppState } from './stores/app';

const appState = new AppState();
ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
