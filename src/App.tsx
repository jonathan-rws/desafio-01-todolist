import { useState } from 'react'
import { v4 } from 'uuid'

import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'
import styles from './app.module.css'
import './global.css'

export interface ITask {
  id: string
  isChecked: boolean
  task: string
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask(task: string) {
    setTasks([...tasks, { id: v4(), isChecked: false, task: task }])
  }
  function deleteTask(id: string) {
    const data = tasks.filter(task => {
      if (task.id !== id) {
        return { task }
      }
    })
    setTasks(data)
  }

  function checkTask(id: string) {
    const data = tasks.map(task => {
      if (task.id === id) {
        return { id: task.id, isChecked: !task.isChecked, task: task.task }
      } else {
        return task
      }
    })
    setTasks(data)
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper} >
        <AddTaskForm
          onCreateNewTask={createNewTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCheckTask={checkTask}
        />
      </main>
    </>
  )
}
