import * as react from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import {Text, List, Divider, TextInput, Button, IconButton, ActivityIndicator, Snackbar} from 'react-native-paper';

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
    const[editingId, setEditId] = react.useState(null);
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
    //ANCHOR - Edit item
    const startEdit = (item) => {
        setEditId(item.id);
        setTaskText(item.text);
    }

    //ANCHOR - validation helper
    const validate = (value) => {
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
    }

    //ANCHOR - Update Task
    const updateTask = () => {
        const trimmed = validate(taskText);
        if(!trimmed) return; //if empty dont do anything
        setTasks((prev) => prev.map((t) => (t.id === editingId === item.id ? {...t, text:trimmed} : t )))
        setEditId(null);
        setTaskText('');
        //keyboard dissmiss
    }
//ANCHOR - Search Filter
    const [q, setQ] = react.useState('');
    const filtered = tasks.filter((t) =>
        (t.text ?? '').toLowerCase().includes(q.toLowerCase())
    );

    



    return(
        <View style ={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks List</Text>
            
            
            <TextInput
                label="Search tasks"
                value={q}
                onChangeText={setQ}
                mode="outlined"
                left={<TextInput.Icon icon="magnify" />}
                style={[styles.input, styles.searchInput]}
            />
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
                {editingId ? (
                    <Button mode='contained' onPress={updateTask} accessibilityLabel='Update Task button'>
                        Update Task
                    </Button>
                ):(
                    <Button mode="contained" onPress={addTask} accessibilityLabel='Add Task Button'>
                    Add Task
                    </Button>
                )}
            </View>  
            <List.Section>
                {tasks.length === 0 && <Text>No Tasks Added</Text>}
                {filtered.map((item, index) => (
                    <View key={item.id}>
                        <List.Item 
                            title={item.text}
                            onPress={() => startEdit(item)}
                            left={props => 
                                <IconButton 
                                {...props} 
                                icon={editingId === item.id ? 'pencil' : "checkbox-blank-circle-outline" }/>}
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
    


    //ANCHOR - Loading UI DOES'T WORK AS NO REMOTE DATA IS BEING USEDTAFETTAFEFFF
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator animating size="large" />
                <Text style={styles.marg16}>Loading remote Tasks...</Text> 
            </View>
        )
    }

}
//!SECTION

//*SECTION - Styles section
const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 50, justifyContent: 'top', alignItems: 'center'},
    formRow: {flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 16 },
    marg16:{marginBottom: 16},
    input: {alignSelf: 'stretch', margin: 5},
    searchInput:{ marginTop: 8, marginBottom: 24}
})
//!SECTION