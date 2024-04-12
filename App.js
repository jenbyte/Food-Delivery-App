import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store';
import Navigation from './Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}