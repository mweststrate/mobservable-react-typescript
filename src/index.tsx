import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';

import TodoList from './TodoList';

import ObservableTodoStore from './ObservableTodoStore';

const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";

const peopleStore = observable([
  {name: 'Michel'},
  {name: 'Alex'},
  {name: 'Michkey'},
]);
observableTodoStore.todos[0].assignee = peopleStore[0];
observableTodoStore.todos[1].assignee = peopleStore[1];

ReactDOM.render(
  <TodoList store={observableTodoStore}/>,
  document.getElementById('root')
);
