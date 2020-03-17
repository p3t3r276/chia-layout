import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupA}>
        <View style={{...styles.groupAChild, backgroundColor: '#fe2200'}}>
          <Text style={{fontSize: 20}}>A</Text>
        </View>
        <View style={{...styles.groupAChild, backgroundColor: '#359b2d'}}>
          <Text style={{fontSize: 20}}>B</Text>
        </View>
        <View style={{...styles.groupAChild, backgroundColor: '#7f9e12'}}>
          <Text style={{fontSize: 20}}>C</Text>
        </View>
        <View style={{...styles.groupAChild, backgroundColor: '#4149ec'}}>
          <Text style={{fontSize: 20}}>D</Text>
        </View>
      </View>
      <View style={styles.groupB}>
        <View style={{...styles.groupBChild, backgroundColor: '#d2ca65'}}>
          <Text style={{fontSize: 20}}>A</Text>
        </View>
        <View style={{...styles.groupBChild, backgroundColor: '#829079'}}>
          <Text style={{fontSize: 20}}>B</Text>
        </View>
        <View style={{...styles.groupBChild, backgroundColor: '#8228be'}}>
          <Text style={{fontSize: 20}}>C</Text>
        </View>
        <View style={{...styles.groupBChild, backgroundColor: '#5d1442'}}>
          <Text style={{fontSize: 20}}>D</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  groupA: {
    flex: 1,
    flexDirection: 'column',
  },
  groupAChild: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    fontSize: 64,
  },
  groupB: {
    flex: 1,
    flexDirection: 'row',
  },
  groupBChild: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    fontSize: 64,
  },
});

export default App;
