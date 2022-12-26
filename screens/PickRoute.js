import React from 'react';
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
  Item,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class PickRouteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busData: [],
      stopsData: [],
    };
  }

  getBusData = (busData) => {
    db.collection('Routes')
      .get()
      .then((bus) => {
        bus.docs.map((doc) => {
          this.setState({
            busData: [...this.state.busData, { id: doc.id, ...doc.data() }],
          });
        });
      });
  };

  getStopDetails = (item) => {
    console.log(item);
    this.setState({
            stopsData: [],
          });
    db.collection(`Routes/${item.id}/Stops`)
      .get()
      .then((location) => {
        location.docs.map((doc) => {
          console.log(doc.data());
          this.setState({
            stopsData: [...this.state.stopsData, doc.data()],
          });
        });
      });
  };

  componentDidMount = async () => {
    this.getBusData();
  };
  renderStopsItem = ({ item, i }) => {
    console.log('renderStopsItem');
    console.log(item)
    return (
      <View>
        <Text style = {styles.locationText}> {item.Location} </Text>
      </View>
    );
  };
  renderItem = ({ item, i }) => {
    console.log('renderItem');
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          this.getStopDetails(item);
        }}>
        <View>
          <Text style={styles.stops}> {item.Bus}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const { busData } = this.state;
    const { stopsData } = this.state;
    console.log(stopsData);
    return (
      <View style={styles.container}>
          <Text style = {styles.header}>Busses</Text>
          <FlatList
            data={busData}
            renderItem={this.renderItem}
            horizontal = {true}
            keyExtractor={(item, index) => index.toString()}
          />
        <View>
          <FlatList
            data={stopsData}
            extraData = {this.state}
            renderItem={this.renderStopsItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5653D4',
    justifyContent:'center',
    alignItems:'center',
  },
  stops: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize:20,
    marginRight:40,
    marginLeft:10,
    marginTop: 30,
    textAlign:'center',
  },
  header: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize:30,
    textAlign: 'center',
  },
  locationText: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize:20,
    textAlign: 'left',
    marginBottom:40,
  },
});
