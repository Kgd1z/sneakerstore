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
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation, useLinkProps } from '@react-navigation/native';
import { ItemsContext } from '../components/ItemsContext';
import { CartContext } from '../components/CartContext';
import LikeButton from '../components/LikeButton';
import { FavoriteContext } from '../components/FavoriteContext';
import { ScrollView } from 'react-native-gesture-handler';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MyProfileScreen from './MyProfileScreen';
import HomeScreen from './HomeScreen';

export default function ShoeDetailScreen() {
  const navigation = useNavigation();
  const { item, setCurrentItem } = React.useContext(ItemsContext);
  const { favorites, addFavorite } = React.useContext(FavoriteContext);
  const [isChecked, setChecked] = React.useState(false);
  const { cart, addCart } = React.useContext(CartContext);

  const toggle = () => {
    setChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 0 }}>
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
              <Ionicons name="md-arrow-back" size={37} color="black" />
            </TouchableOpacity>
            <View style={{ marginLeft: 310, marginTop: 4 }}>
              <LikeButton color="black" size={40} />
            </View>

            {/* <Ionicons name="ios-heart-empty" size={35} color="black" style={{ marginLeft: 320 }} /> */}
          </View>
          <View>
            <Image resizeMode="contain" style={{ width: 360, height: 180, marginTop: 40 }} source={item.img} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 55 }}>
            <View style={styles.colorways}>
              <Image />
            </View>
            <View style={styles.colorways}>
              <Image />
            </View>
            <View style={styles.colorways}>
              <Image />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 23, color: 'grey', paddingRight: 240 }}>Select Size</Text>
            <Entypo name="info-with-circle" size={24} color="grey" />
          </View>

          <View style={{ height: 180 }}>
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={{ height: 90 }}>
              <View style={{ flexDirection: 'row' }}>
                {item.sizes.map((itemo) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (!isChecked) {
                          item.selectedSize = itemo;
                          toggle();
                        }
                      }}
                    >
                      {!isChecked ? (
                        <View style={styles.sizes}>
                          <Text
                            style={{
                              alignSelf: 'center',
                              paddingTop: 25,
                              fontSize: 20,
                            }}
                          >
                            {itemo}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.sizesSelected}>
                          <Text
                            style={{
                              alignSelf: 'center',
                              paddingTop: 25,
                              fontSize: 20,
                              color: 'white',
                            }}
                          >
                            {itemo}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            addCart(cart.concat(item));
          }}
        >
          <View
            style={{
              backgroundColor: 'black',
              width: 350,
              height: 60,
              borderRadius: 20,
              alignSelf: 'center',
              paddingTop: 20,
              marginBottom: 25,
            }}
          >
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}>Add to bag</Text>
          </View>
        </TouchableOpacity>

        <SlidingUpPanel>
          <View style={styles.slider}>
            <View
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                height: 7,
                width: 40,
                alignSelf: 'center',
                borderRadius: 40,
              }}
            ></View>
            <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 20 }}>
              <Text style={{ paddingRight: 210, fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 18, paddingTop: 10 }}>{item.price}</Text>
            </View>
            <View style={{ marginLeft: 20, paddingTop: 25 }}>
              <Text style={{ fontSize: 16 }}>{item.about}</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f9',
    paddingLeft: 0,
    paddingRight: 0,
  },
  slider: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    borderRadius: 30,
    paddingRight: 0,
  },
  colorways: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10,
    height: 75,
    width: 80,
    marginTop: 40,
    marginBottom: 30,
  },
  sizes: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 15,
    height: 75,
    width: 80,
    marginTop: 40,
    marginBottom: 5,
  },
  sizesSelected: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 15,
    height: 75,
    width: 80,
    marginTop: 40,
    marginBottom: 5,
    backgroundColor: 'black',
    color: 'white',
  },
});
