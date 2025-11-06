import * as react from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper';

//*SECTION - Task screen page
export default function TasksScreen() {
    //Mock data start
    const [tasks, setTasks] = react.useState([
        {id:1, text: 'Finish assessment'},
        {id:2, text: "Review git commits"}
    ]);

    return(
        <View style ={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks heading PlaceHolder</Text>
            <Text>
                Put Task List here</Text>
        </View>
    );
}
//!SECTION

//*SECTION - Styles section
const styles = StyleSheet.create({
    container: {flex:1,paddingTop: 50, justifyContent:'top', alignItems:'center'},
    marg16:{marginBottom: 16}
})
//!SECTION