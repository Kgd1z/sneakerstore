import React from 'react';
import { CartContext } from '../components/CartContext';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
export default function Cart() {
  const { cart, addCart } = React.useContext(CartContext);
  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 30 }}>My Cart</Text>
        </View>
        <ScrollView>
          {cart.map((item) => {
            return (
              <View
                style={{
                  marginBottom: 30,
                  borderRadius: 10,
                  flexDirection: 'row',
                  backgroundColor: '#D3D2D2',
                  height: 165,
                  alignItems: 'center',
                }}
              >
                <AntDesign
                  onPress={() => {
                    {
                      const result = cart.filter((itemNew) => itemNew.name != item.name);
                      addCart(result);
                    }
                  }}
                  style={{ position: 'absolute', left: 340, top: 10 }}
                  name="delete"
                  size={24}
                  color="black"
                />

                <Image style={{ width: 190, height: 100, marginLeft: 14, marginRight: 20 }} source={item.img} />
                <View>
                  <Text style={{ fontSize: 19 }}>{item.name}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.price}</Text>
                  <Text>{item.size}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
