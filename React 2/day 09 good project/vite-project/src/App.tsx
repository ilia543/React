import React, { useState } from 'react'
import './App.css'

interface forTasks {
  id: string,
  name: string,
  elements: string[],
}

function App() {

  const [tasksSections, setTasksSections] = useState<forTasks[]>(JSON.parse(localStorage.getItem("everySectionAndTask") || "[]"));

  function addNewList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const title = formData.get("title");

    const newList = {
      id: crypto.randomUUID(),
      name: typeof title === "string" ? title : "",
      elements: [],
    };

    setTasksSections(pr => {
      const updated = [...pr, newList];
      localStorage.setItem("everySectionAndTask", JSON.stringify(updated));

      return updated
    });

    formEl.reset();
  }

  function deleteSection(index: number) {
    setTasksSections(prev => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem("everySectionAndTask", JSON.stringify(updated));
      return updated;
    });
  }

  function addTask(e: React.FormEvent<HTMLFormElement>, currentEl: forTasks) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const task = formData.get("task");

    if (typeof task !== "string" || task.trim() === "") return;

    setTasksSections(prev => {
      const updated = prev.map(el =>
          el.id === currentEl.id ? { ...el, elements: [...el.elements, task] } : el
        )
      localStorage.setItem("everySectionAndTask", JSON.stringify(updated));

      return updated
    })

    formEl.reset();
  }

  function deleteTask(sectionId: string, taskIndex: number) {
    setTasksSections(prev => {
      const updated = prev.map(section =>
          section.id === sectionId
            ? {
                ...section,
                elements: section.elements.filter((_, i) => i !== taskIndex)
              }
            : section
        )
      localStorage.setItem("everySectionAndTask", JSON.stringify(updated));
      
      return updated
    });

  }

  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={addNewList} className='border-2 rounded-xl flex flex-col items-center justify-center gap-6 p-6'>

          <label className='flex gap-2'>
            title :
            <input className='border-2 rounded-lg' type="text" placeholder='not required' defaultValue={""} name="title" />
          </label>

          <button className='border-2 rounded-lg p-1' type='submit'>submit</button>

        </form>
      </div>

      <div className='flex flex-wrap justify-around'>
        {tasksSections.map((el, index) => (
          <div className='border-2 rounded-2xl w-[400px] flex flex-wrap flex-col gap-2 p-2' key={el.id}>
            <p className='text-xl font-bold break-words title'>{el.name}</p>

            <form onSubmit={(e) => addTask(e, el)} className='flex flex-wrap gap-2'>
              <input className='border-2 rounded-lg' type="text" name='task' />
              <button className='border-2 rounded-lg p-1 text-green-700 font-bold bg-emerald-200' type='submit'>add task</button>
            </form>

            <div className='flex flex-wrap flex-col gap-2 p-2'>
              {el.elements.map((task, taskIndex) => (
                <div key={taskIndex} className='flex flex-wrap flex-col gap-2 border-2 rounded-xl border-gray-500 p-2 break-words'>
                  <p className='break-words'>{task}</p>
                  <button onClick={() => deleteTask(el.id, taskIndex)} className='text-red-600 w-22 font-bold'>delete task</button>
                </div>
              ))}
            </div>

            <button onClick={() => deleteSection(index)} className='w-[130px] p-1 border-2 rounded-lg text-red-600 font-bold bg-red-100'>delete section</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App