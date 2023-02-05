
import {View, Text, StyleSheet} from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TO-DO LIST</Text>

    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
