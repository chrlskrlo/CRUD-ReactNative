
import {View, Text, StyleSheet,  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ToDoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
             <Icon name='delete' size={20} color='#333'/>
             <Text style={styles.itemText}>{item.text}</Text>
            </View>
           
        </TouchableOpacity>

    )
}
export default ToDoItem;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 14,
        backgroundColor: 'pink',
        fontSize: 20,
        flexDirection: 'row',
    },
    itemText: {
    marginLeft: 10
    }
})