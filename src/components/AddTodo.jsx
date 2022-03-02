import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
// styles & assets
import { sendIcon } from '../assets';
import './AddTodo.css';

export default function AddTodo() {
    const [body, setBody] = useState('');
    const { addTodo, isEditing, todo, updateTodo } = useStore();

    const handleClick = () => {
        !isEditing && addTodo(body);
        isEditing && updateTodo(todo.id, body);
        setBody('');
    };

    useEffect(() => {
        todo && setBody(todo.body);
        !isEditing && setBody('');
    }, [isEditing]);

    return (
        <div className='input-container'>
            <input
                type="text"
                className="todo-input"
                placeholder='What do you have for today?'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button onClick={handleClick}>
                <img src={sendIcon} alt="send icon" />
            </button>
        </div>
    );
}