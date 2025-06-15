import React from 'react';
import "./Todo.css"
import { useId } from 'react';

function Todo() {
    const [todos, setTodos] = React.useState(() => {
          const stored = localStorage.getItem("todos");
          return stored ? JSON.parse(stored) : [];
      });


    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    });


    function createTask(event){
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const txt = formData.get("text");
        if(txt !== ""){
          setTodos(pr => [...pr, txt]);
        };

        formEl.reset();
    };

    function deleteTask(indexToDelete) {
      setTodos(prev => prev.filter((_, index) => index !== indexToDelete));
    }


  return (
    <>
        <form onSubmit={createTask} className='form'>
            <input type="text" name="text" id="text" />
            <button type='submit' className='addbut'>add Task</button>
        </form>

        <div className='TasksDivp'>
          {todos.map((el, index) => {
            return (
              <div key={index} className='taskDiv'>
                <p className='taskP'>{el}</p>
                <button className='deletTask' onClick={() => deleteTask(index)}>X</button>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default Todo;