import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ShadowPropTypesIOS,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Sneakercard from './Sneakercard';
import Sneakercardsmall from './Sneakercardsmall';
import { MonoText } from '../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tabs from '../components/StyledText';
import Header from './Header';

export default function Popular() {
  const items = [
    {
      name: 'Kyrie 6',
      color: '#337AFF',
      price: '$350.00',
      img: require('../assets/images/blue.png'),
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor id sem.',
      sizes: ['UK8', 'UK9', 'UK10'],
      selectedSize: '',
    },
    {
      name: 'AirMAx 270',
      color: '#C69B95',
      price: '$200.00',
      img: require('../assets/images/air270.png'),
      about:
        'Lorem ipsum dolor sit amet,  A , viverra nunc vitae, facilisis odio.r varius elit, non lobortis mauris dolor id sem.',
      sizes: ['UK7', 'UK9', 'UK11'],
      selectedSize: '',
    },
    {
      name: 'Jordan 1',
      color: '#91D9CC',
      price: '$190.00',
      img: require('../assets/images/jordan.png'),
      about:
        'Lorem ipsum dolor sit amet,et condimentum tristique, metus dolor varius elit, non lobortis mauris dolor id sem.',
      sizes: ['UK8', 'UK9', 'UK10', 'UK11'],
      selectedSize: '',
    },
  ];
  return (
    <View style={{ paddingLeft: 20, paddingTop: 25 }}>
      <View style={{ flexDirection: 'row' }}></View>

      <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map((item) => {
          return (
            <Sneakercard
              name={item.name}
              color={item.color}
              price={item.price}
              img={item.img}
              about={item.about}
              sizes={item.sizes}
            />
          );
        })}
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            paddingTop: 30,
            fontWeight: 'bold',
            fontSize: 25,
            color: 'grey',
            paddingBottom: 40,
          }}
        >
          DISCOVER
        </Text>
        <Feather
          style={{
            paddingTop: 30,
            fontWeight: 'bold',

            paddingLeft: 220,
          }}
          name="list"
          size={29}
          color="black"
        />
      </View>
      <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Sneakercardsmall img={require('../assets/images/green.png')} name="SB1 low" price="$140.00" />
        <Sneakercardsmall img={require('../assets/images/nike.png')} name="Tubular" price="$130.00" />
      </ScrollView>

      <TouchableOpacity style={styles.floatButton} activeOpacity={0.5}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: '50%',
            padding: 5,
            borderColor: '#404143',
            backgroundColor: '#404143',
          }}
        >
          <MaterialCommunityIcons name="home-outline" size={35} color="#fff" />
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            fontSize: 18,
            color: '#fff',
            fontWeight: '600',
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
  },
  sections: {
    fontSize: 25,
    paddingRight: 35,
    paddingTop: 28,
    color: 'grey',
    paddingBottom: 30,
  },
  floatButton: {
    position: 'absolute',
    bottom: -67,
    left: '50%',
    borderWidth: 1,
    marginLeft: -60,
    padding: 5,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#262A2D',
    backgroundColor: '#262A2D',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
