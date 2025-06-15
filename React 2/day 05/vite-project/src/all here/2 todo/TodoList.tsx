import { useState } from "react";


interface forToDos{
    id: number;
    task: string;
    completed: boolean
}

const TodoList = () => {

    const [todos, setTodos] = useState<forToDos[]>([]);

    const addTodo = (task: string) => {
        const newTodo: forToDos = {
            id: todos.length + 1,
            task,
            completed: false
        };

        setTodos(pr => [...pr, newTodo]);
    };


  return (
    <>
        <div>
            <h2>Todo LIst</h2>

            <button onClick={() => addTodo('New Todo')}>add Todo</button>
        

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task} {String(todo.completed)}</li>
            ))}
        </ul>
        </div>
    </>
  );
};

export default TodoList;