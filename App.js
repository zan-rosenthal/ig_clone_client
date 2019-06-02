import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from 'screens/Profile/index.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile userId={1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
