// NOTE IMPORTED Libs FROM react
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper'


// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.homeMarg}>Home</Text>
            <button mode='contained' color='Red' onPress={() => {}}>
                Go to Details
            </button>

            <Divider style={StyleSheet.divider}/>

            <button mode='outlined' icon='camera' onPress={() => {}}>
                go to Gallert
            </button>

        </View>
    );
}


// NOTE MAIN Styles ref
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  divider: {marginVertical: 16},
  homeMarg: {marginBottom: 16},
});

/*CODE GRAVE
    *Old title CSS for text on react native
    *title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },

*/