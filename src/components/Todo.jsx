import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
// styles & assets
import { checkIcon, closeIcon, editIcon, deleteIcon } from '../assets';
import './Todo.css';

export default function Todo({ todo }) {
    const [editMode, setEditMode] = useState(false);
    const { deleteTodo, toggleTodo, toggleEditMode, isEditing } = useStore();

    const handleToggle = () => toggleTodo(todo.id);
    const handleDelete = () => deleteTodo(todo.id);

    const handleEdit = () => {
        setEditMode(!editMode);
        toggleEditMode(todo?.id);
    };

    useEffect(() => {
        !isEditing && setEditMode(false);
    }, [isEditing]);

    return (
        <>
            <div className='icon-wrapper'>
                <img
                    className='check-icon icon'
                    src={todo.completed ? checkIcon : closeIcon}
                    alt={todo.completed ? 'check icon' : 'close icon'}
                    onClick={handleToggle}
                />
            </div>
            <p
                style={{ color: 'lightgrey' }}
                className={`${todo.completed && 'completed'}`}
                onClick={handleToggle}
            >
                {todo.body}
            </p>
            <div className="icon-wrapper">
                {(!editMode && !isEditing) && (
                    <button onClick={handleEdit}>
                        <img className='icon' src={editIcon} alt={'edit icon'} />
                    </button>)}
                {editMode && (
                    <button onClick={handleEdit}>
                        <img className='icon' src={closeIcon} alt={'close icon'} />
                    </button>
                )}
                <button onClick={handleDelete}>
                    <img className='icon' src={deleteIcon} alt="delte icon" />
                </button>
            </div>
        </>
    );
}