import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = key => {
    setTodo(prepTodo => {
      return prepTodo.filter(todos => todos.key != key);
    });
  };

  const submit = (text) => {

    setTodo((prevtodo) => {
      return[
        {text: text, key:Math.random().toString()},
        ...prevtodo
      ];
    })
  }

  return (
    <View style={styles.container}>
      {/* header*/}
      <Header />
      <View style={styles.content}>
        <AddTodo submit={submit}/>
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
