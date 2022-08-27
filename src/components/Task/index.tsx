import styles from './styles.module.css'

import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from 'react-icons/fa'

interface TaskProps {
  id: string
  task: string
  isChecked: boolean
  onDeleteTask: (id: string) => void
  onCheckTask: (id: string) => void
}

export function Task({ id, task, onDeleteTask, onCheckTask, isChecked }: TaskProps) {
  function handleCheck() {
    onCheckTask(id)
  }

  function HandleDelete() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.container}>
      <button
        onClick={handleCheck}
      >
        {
          isChecked
            ? <div className={styles.backgroundCircle}>
              <div></div>
              <FaCheckCircle className={styles.checkedCircle} />
              </div>
            : 
              
              <FaRegCircle className={styles.circle} />
             
        }

      </button>
      <p className={isChecked ? styles.checkedTaskText : styles.unCheckedTaskText}>
        {task}
      </p>
      <button
        onClick={HandleDelete}
      ><FaRegTrashAlt className={styles.trash} /></button>
    </div>
  )
}