import React, { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, description: 'Comprar pão', done: false},
    {id: 2, description: 'Comprar um bolo na padaria', done: true},
  ])

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header >
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </Area>
    </Container>
  );
}

export default App;
