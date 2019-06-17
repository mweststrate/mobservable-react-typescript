import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import TodoList from './TodoList';

import ObservableTodoStore from './ObservableTodoStore';

const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";

ReactDOM.render(
  <TodoList store={observableTodoStore}/>,
  document.getElementById('root')
);
