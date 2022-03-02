import { useStore } from '../store/useStore';
// hooks
import { usePagination } from '../hooks/usePagination';
// components
import Todo from './Todo';
import AddTodo from './AddTodo';
import Pagination from './Pagination';
// styles
import './TodoList.css';

export default function TodoList() {
    const { todos, error } = useStore();
    const { pageNums, paginate, currentItems } = usePagination(todos);

    return (
        <div className='wrapper'>
            <div>
                {!todos.length && <h2 className='info'>There is no todo.</h2>}
                {todos && currentItems.map(todo => (
                    <div className='todo-container' key={todo.id}>
                        <Todo todo={todo} />
                    </div>
                ))}
            </div>
            <div>
                <Pagination pageNums={pageNums} paginate={paginate} />
                <AddTodo />
                {error && <span className='error'>{error}</span>}
            </div>
        </div>
    );
}