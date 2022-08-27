import { FormEvent, useState } from 'react'
import plusImg from '../../assets/plus.svg'

import styles from './styles.module.css'


interface AddTaskFormProps {
  onCreateNewTask: (task: string) => void
}

export function AddTaskForm({ onCreateNewTask }: AddTaskFormProps) {

  function handleAddTask(e:FormEvent){
    e.preventDefault()
   
    onCreateNewTask(newTaskText)
    setNewTaskText('')
  }

  const [newTaskText, setNewTaskText] = useState('')
  
  return (
    <form
    onSubmit={handleAddTask}
    className={styles.inputForm}>
      <input
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder='Adicione uma nova tarefa'
        type="text"
      />
      <button
        type="submit"
      >
        Criar<img src={plusImg} alt=""/>
      </button>
    </form>
  )
}