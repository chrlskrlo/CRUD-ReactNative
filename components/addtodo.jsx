import {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const AddToDo = ( {submitHandler} ) => {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);

  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new Todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};
export default AddToDo;
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 3,
  },
});
