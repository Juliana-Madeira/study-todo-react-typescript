import React from 'react';
import { Container } from '../AddItem/styles';

export const AddItem = () => {
  return (
    <Container>
        <div className='image'>➕</div>     {/*emoji plus no goole*/}
        <input 
            type="text" 
            placeholder='Adicione uma tarefa'
        />
    </Container>
  )
}
