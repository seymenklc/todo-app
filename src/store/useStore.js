import create from "zustand";
import { v4 as uuid } from 'uuid';

const initialState = [
    { body: 'Eggs for breakfast!', completed: false, id: uuid() },
    { body: 'Go to the gym', completed: true, id: uuid() },
    { body: 'Do homework', completed: false, id: uuid() },
    { body: 'Grab some coffe', completed: true, id: uuid() }
];

export const useStore = create(set => ({
    todos: initialState,
    todo: null,
    error: null,
    isEditing: false,

    addTodo: (newTodo) => set(state => {
        if (!newTodo) return { error: 'Cannot be empty!' };
        if (newTodo.length < 3) return { error: 'Todo must be at least 3 chars.' };
        return {
            error: null,
            isEditing: false,
            todos: [
                ...state.todos,
                { body: newTodo, completed: false, id: uuid() }
            ]
        };
    }),

    deleteTodo: (id) => set(state => {
        if (!id) return { error: 'There was an error.' };
        return {
            error: null,
            todos: state.todos.filter(todo => todo.id !== id)
        };
    }),

    toggleTodo: (id) => set(state => {
        if (!id) return { error: 'There was an error.' };
        return {
            error: null,
            isEditing: false,
            todos: state.todos.map(todo => todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        };
    }),

    toggleEditMode: (id) => set(state => {
        if (!id) return { error: 'There was an error.' };
        const todoIndex = state.todos.findIndex(todo => todo.id === id);
        return {
            error: null,
            isEditing: !state.isEditing,
            todo: state.todos[todoIndex]
        };
    }),

    updateTodo: (id, update) => set(state => {
        if (!id) return { error: 'There was an error.' };
        return {
            error: null,
            isEditing: false,
            todos: state.todos.map(todo => todo.id === id
                ? { ...todo, body: update }
                : todo
            )
        };
    })
}));