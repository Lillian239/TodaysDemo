import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, List, Switch, Snackbar, Button} from 'react-native-paper';
import { ThemeContext } from '../ThemeContext';


export default function SettingsScreen() {
  const {isDark, toggleTheme} = React.useContext(ThemeContext);

  const [sounds, setSounds] = React.useState(true);
  const [snack, setSnack] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.mb16}>Settings</Text>
      
      <List.Section>
        <List.Item
          title="Dark Mode"
          description={isDark ? 'Enabled' : 'Disabled'}
          right={() => (
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
            />
          )}
        />

        <List.Item
          title="Sounds"
          description={sounds ? 'On' : 'Off'}
          right={()=>(
            <Switch
              value={sounds}
              onValueChange={() => setSounds(!sounds)}
            />
          )}
        />
      </List.Section>
        
      <Button mode="contained" onPress={() => setSnack(true)}>
        Save Settings
      </Button>
      <Snackbar
        visible={snack}
        onDismiss={() => setSnack(false)}
        duration={1500}
        >
          Settings Saved
        </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  mb16:{marginBottom: 16},
});