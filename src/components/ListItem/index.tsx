import React, { useState } from 'react';
import { Container } from './styles'; 
import {Item} from '../../types/Item';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
  // const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done} 
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label >{item.description}</label>
    </Container>
  )
}
