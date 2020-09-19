import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

import ListScreen from '../components/ListScreen.js';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ListScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f9',
    paddingLeft: 20,
    paddingRight: 0,
  },
});
