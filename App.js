/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaView} from 'react-native-safe-area-context'; // react-native-safe-area-context에서 가져옴
import {SafeAreaProvider} from 'react-native-safe-area-context'; // SafeAreaProvider 추가
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
