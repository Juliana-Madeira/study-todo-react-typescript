import React, { useState, KeyboardEvent } from 'react';
import { Container } from '../AddItem/styles';

type AddProps = {
    handleAddTask: (task: string) => void              /*tenho uma função que nao retorna nada, mas recebe uma task que é string*/
}

export const AddItem = ({ handleAddTask } : AddProps) => {
    const [inputTask, setInputTask] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputTask !== ''){
            handleAddTask(inputTask)
        }
        // setInputTask('')
    }
 
  return (
    <Container>
        <div className='image'>➕</div>     {/*emoji plus no goole*/}
        <input 
            type="text" 
            placeholder='Adicione uma tarefa'
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            onKeyUp={handleKeyUp}
        />
    </Container>
  )
}
