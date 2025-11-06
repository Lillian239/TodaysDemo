import * as react from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, List, Divider, TextInput, Button, IconButton} from 'react-native-paper';

//*SECTION - Task screen page
export default function TasksScreen() {
    //Mock data start
    const [tasks, setTasks] = react.useState([
        {id:1, text: 'Finish assessment'},
        {id:2, text: "Review Git commits"},
        {id:3, text: 'Scrimble the Blimble'},
        {id:4, text: 'DIE DIE DIE'}
    ]);
    //ANCHOR - Task Add
    const [taskText, setTaskText] = react.useState('');
    const addTask = () => {
        const trimmed = taskText.trim();
        if (!trimmed) {
        Alert.alert('Validation', 'Task cannot be empty.');
        return;
        }
        if (trimmed.length > 30) {
        Alert.alert('Validation', 'Task must be 30 characters or less.');
        return;
        }
        setTasks((prev) => [...prev, { id: Date.now(), text: trimmed }]);
        setTaskText('');
        //Keyboard.dismiss();
    };


    return(
        <View style ={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks List</Text>
            <View style={styles.formRow}>
                <TextInput
                    label="Add a task"
                    value={taskText}
                    onChangeText={setTaskText}
                    mode="outlined"
                    left={<TextInput.Icon icon="pencil" />}
                    style={styles.input}
                    maxLength={30}
                />
                <Button mode="contained" onPress={addTask} accessibilityLabel='Add Task Button'>
                    Add Task
                </Button>
            
            </View>  
            <List.Section>
                {tasks.length === 0 && <Text>No Tasks Added</Text>}
                {tasks.map((item, index) => (
                    <View key={item.id}>
                        <List.Item 
                            title={item.text}
                            left={props => <List.Icon {...props} icon="checkbox-blank-circle-outline" />}
                            accessibilityLabel={`Task ${item.text}`}
                            right={(props) => (
                                <IconButton
                                    {...props}
                                    icon="delete-outline"
                                    onPress={() => setTasks((prev) => prev.filter((t) => t.id !== item.id))

                                    }
                                />
                            )}
                        />
                        {index <tasks.length -1 && <Divider style={styles.marg16}/>}
                    </View>   
                ))}
                
            </List.Section>
        </View>
    );
}
//!SECTION

//*SECTION - Styles section
const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 50, justifyContent: 'top', alignItems: 'center'},
    formRow: {flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 16 },
    marg16:{marginBottom: 16},
    input: {flex: 1, margin: 5}
})
//!SECTION