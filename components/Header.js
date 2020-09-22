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
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Sneakercard from './Sneakercard';
import Sneakercardsmall from './Sneakercardsmall';
import { MonoText } from '../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';

export default function ListScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Text style={styles.heading}>Shoes</Text>
          <AntDesign
            style={{
              fontSize: 30,
              paddingTop: 10,
              paddingLeft: 200,
            }}
            name="search1"
            size={24}
            color="black"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyProfile');
            }}
          >
            <AntDesign
              style={{
                fontSize: 30,
                paddingTop: 10,
                paddingLeft: 20,
              }}
              name="user"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    paddingLeft: 20,
  },
  sections: {
    fontSize: 25,
    paddingRight: 35,
    paddingTop: 28,
    color: 'grey',
    paddingBottom: 30,
  },
});
