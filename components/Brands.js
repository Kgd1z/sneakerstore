import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Brands = () => {
  const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Skechers'];
  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 20, paddingLeft: 20 }}></View>
        <ScrollView>
          {brands.map((brand) => {
            return (
              <View
                style={{
                  borderTopColor: 'grey',
                  borderTopWidth: 0,
                  marginBottom: 30,
                  flexDirection: 'row',
                  backgroundColor: '#D3D2D2',
                  height: 95,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 28, fontWeight: '500' }}>{brand}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Brands;
