import React, { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, description: 'Comprar pão', done: false},
    {id: 2, description: 'Comprar um bolo na padaria', done: true},
  ])

  const handleAddTask = (task: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      description: task,
      done: false
    })
    setList(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done
      }
    }
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header >
        <AddItem handleAddTask={handleAddTask}/>
        {list.map((item, index)=>(
          <ListItem key={index} item={item} onChange={handleTaskChange}/>
        ))}
      </Area>
    </Container>
  );
}

export default App;
