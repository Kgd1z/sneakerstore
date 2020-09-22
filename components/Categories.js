import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Categories = () => {
  const categories = ['Basketball', 'Sandals', 'Hiking', 'Slides'];
  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 20, paddingLeft: 20 }}></View>
        <ScrollView>
          {categories.map((category) => {
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
                <Text style={{ fontSize: 28, fontWeight: '500' }}>{category}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
