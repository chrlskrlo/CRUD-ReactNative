import {View, Text, StyleSheet,} from 'react-native';

const Sandbox = () => {
    return (
   <View style={styles.container}>
    <Text>SANDBOX</Text>
   </View>
    )
}
export default Sandbox;

const styles = StyleSheet.create ({
    container: {
flex: 1,
backgroundColor: '#ddd'
    }
})