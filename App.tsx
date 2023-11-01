
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ borderWidth: 1, marginHorizontal: 20 }}>
          <TextInput />
        </View>
        <Pressable style={{ borderWidth: 1, width: 100, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}


export default App;
