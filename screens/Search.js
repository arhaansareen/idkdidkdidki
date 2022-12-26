import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';



export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { bus, routeName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.bus5}>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Bus 5</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{ flex: 1, alignself: 'stretch', flexDirection: 'column' }}>
          <Text style={styles.stop1}>Stop 1</Text>
          <Text style={styles.stop1location}>
            Location:AYLESBURY DR & BLEASDALE AVE at PARK{' '}
          </Text>
          <Text style={styles.stop1ETA}>ETA: 7:42</Text>
          <Text style={styles.stop1Reached}>Reached:False</Text>

          <Text style={styles.stop2}>Stop 2</Text>
          <Text style={styles.stop2location}>
            Location:BLEASDALE & BEVINGTON at CONCRETE PAD{' '}
          </Text>
          <Text style={styles.stop2ETA}>ETA: 7:44</Text>
          <Text style={styles.stop2Reached}>Reached:False</Text>

          <Text style={styles.stop3}>Stop 3</Text>
          <Text style={styles.stop3location}>
            Location:FANDANGO DR & KIRKHAVEN WAY
          </Text>
          <Text style={styles.stop3ETA}>ETA: 7:48</Text>
          <Text style={styles.stop3Reached}>Reached:False</Text>

          <Text style={styles.stop4}>Stop 4</Text>
          <Text style={styles.stop4location}>
            Location:GEORGIAN RD & JAMES POTTER RD
          </Text>
          <Text style={styles.stop4ETA}>ETA: 7:50</Text>
          <Text style={styles.stop4Reached}>Reached:False</Text>

          <Text style={styles.stop5}>Stop 5</Text>
          <Text style={styles.stop5location}>Location:Ingleborough PS</Text>
          <Text style={styles.stop5ETA}>ETA: 7:55</Text>
          <Text style={styles.stop5Reached}>Reached:False</Text>
        </View>

        
        <View style={styles.lowerContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5653D4',
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bus5: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: '##9DFD24',
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stop1: {
    color: 'white',
    alignItems: 'flex-start',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: 275,
    marginTop: 70,
  },
  stop1location: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: '50',
    textAlign: 'center',
  },
  stop1ETA: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop1Reached: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop2: {
    color: 'white',
    alignItems: 'flex-start',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: 275,
    marginTop: 20,
  },
  stop2location: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: '50',
    alignItems: 'center',
    textAlign: 'center',
  },
  stop2ETA: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop2Reached: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop3: {
    color: 'white',
    alignItems: 'flex-start',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: 275,
    marginTop: 20,
  },
  stop3location: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: '50',
    alignItems: 'center',
    textAlign: 'center',
  },
  stop3ETA: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop3Reached: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop4: {
    color: 'white',
    alignItems: 'flex-start',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: 275,
    marginTop: 20,
  },
  stop4location: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: '50',
    alignItems: 'center',
    textAlign: 'center',
  },
  stop4ETA: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop4Reached: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop5: {
    color: 'white',
    alignItems: 'flex-start',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: 275,
    marginTop: 20,
  },
  stop5location: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginRight: '50',
    alignItems: 'center',
    textAlign: 'center',
  },
  stop5ETA: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
  stop5Reached: {
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign: 'center',
  },
   tablecontainer: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#fcba03' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10,
    color:'black',
  }
});
