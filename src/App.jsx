// components
import TodoList from './components/TodoList';
// styles
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <h1 className='heading'>Todos</h1>
      <TodoList />
    </div>
  );
}