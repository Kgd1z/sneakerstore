import React from 'react';
import { FavoriteContext } from '../components/FavoriteContext';
import { View, Text, SafeAreaView, Button, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Favorites() {
  const { favorites, addFavorite } = React.useContext(FavoriteContext);
  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 30 }}>My Favorites</Text>
        </View>
        <ScrollView>
          {favorites.map((favorite) => {
            return (
              <View
                style={{
                  borderTopColor: 'grey',
                  borderTopWidth: 0,
                  marginBottom: 30,
                  flexDirection: 'row',
                  backgroundColor: '#D3D2D2',
                  height: 165,
                  alignItems: 'center',
                }}
              >
                <AntDesign
                  onPress={() => {
                    {
                      const result = favorites.filter((favoriteNew) => favoriteNew.name != favorite.name);
                      addFavorite(result);
                    }
                  }}
                  style={{ position: 'absolute', left: 340, top: 10 }}
                  name="delete"
                  size={24}
                  color="black"
                />

                <Image style={{ width: 190, height: 100, marginLeft: 14, marginRight: 20 }} source={favorite.img} />
                <View>
                  <Text style={{ fontSize: 19 }}>{favorite.name}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{favorite.price}</Text>
                  <Text>{favorite.size}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
