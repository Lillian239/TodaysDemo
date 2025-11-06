// NOTE IMPORTED Libs FROM react
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Divider, TextInput} from 'react-native-paper'


// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation}) {
    //STEATE INPUT
    const [user,setUser] = React.useState('');

        return (
            <View style={styles.container}>
                <Text variant='headlineMedium' style={styles.homeMarg}>Home</Text>
                
                <Divider style={styles.divider}/>
                <View style={styles.inputContainer}>
                    <TextInput
                        label='Enter Your Name'
                        value={user}
                        onChangeText={setUser}
                        mode='outlined'
                        left={<TextInput.Icon icon="account"/>}
                        maxLength={20}
                        placeholder='Enter Name Here'
                    />
                </View>

                <Button mode='contained' onPress={ () => navigation.navigate('Details', {user: user})}>
                    Go to Details
                </Button>

                <Divider style={styles.divider}/>

                <Button mode='outlined' icon='camera' onPress={() => {}}>
                    go to Gallert
                </Button>

            </View>
        );
}


// NOTE MAIN Styles ref
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  divider: {marginVertical: 16},
  homeMarg: {marginBottom: 16},

  inputContainer: {width: '60%', alightContent: 'center', marginBottom: 24}
});

/*CODE GRAVE
    *Old title CSS for text on react native
    *title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },

*/