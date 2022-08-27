import { useEffect, useState } from 'react'
import { Task } from '../Task'

import clipboardImg from '../../assets/clipboard.svg'

import styles from './styles.module.css'

import { ITask } from '../../App'

interface TaskListProps {
  tasks: ITask[]
  onDeleteTask: (id: string) => void
  onCheckTask: (id: string) => void
}

export function TaskList({ onCheckTask, onDeleteTask, tasks }: TaskListProps) {


  const [completeCounter, setCompleteCounter] = useState(0)

  useEffect(() => {
    const counter = tasks.reduce((value, task) => task.isChecked ? value + 1 : value, 0)
    setCompleteCounter(counter)
  }, [tasks])

  return (
    <section className={styles.container}>
      <header className={styles.headerList}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter} >{tasks.length}</span>
        </div>
        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span className={styles.counter} >{completeCounter} {completeCounter > 0 && `de ${tasks.length}`}</span>
        </div>
      </header>
      {
        tasks.map(task => {
          return (
            <Task
              id={task.id}
              task={task.task}
              isChecked={task.isChecked}
              onCheckTask={onCheckTask}
              onDeleteTask={onDeleteTask}
              key={task.id}
            />
          )
        })
      }
      {
        (tasks.length <= 0) && <div className={styles.emptyAlert}>
          <img src={clipboardImg} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      }
    </section>
  )
}