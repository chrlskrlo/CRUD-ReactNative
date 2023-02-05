import {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';




const App = () => {
  
  const [todos, setTodos] = useState([
    {text: 'buy a coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play valorant', key: '3'},
  ]);

  const submitHandler = text => {
    if (text.length >= 3) {
      Keyboard.dismiss();
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be 3 Chars Long', [
        {text: 'UNDERSTOOD', onPress: () => console.log('alert closed')},
      ]);
    }
    
  };

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
