import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function MyProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop: 20 }}>My Profile</Text>
        <View style={{ marginTop: 20, paddingTop: 40, paddingLeft: 40 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Favorites');
              }}
            >
              <View
                style={{
                  marginRight: 90,
                  backgroundColor: '#D3D2D2',
                  borderRadius: 15,
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Feather name="heart" size={70} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
            >
              <View
                style={{
                  backgroundColor: '#D3D2D2',
                  borderRadius: 15,
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign style={{}} name="shoppingcart" size={70} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const stles = StyleSheet.create({});
