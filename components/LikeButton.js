import React from 'react';
import { FavoriteContext } from './FavoriteContext';
import { ItemsContext } from './ItemsContext';
import { AntDesign } from '@expo/vector-icons';
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
import { useLinkProps } from '@react-navigation/native';
export default function LikeButton(props) {
  const [isChecked, setChecked] = React.useState(false);
  const { favorites, addFavorite } = React.useContext(FavoriteContext);
  const { item, setCurrentItem } = React.useContext(ItemsContext);
  const toggle = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      addFavorite(favorites.concat(item));
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        toggle();
      }}
    >
      <View>
        {isChecked ? (
          <AntDesign
            style={{
              color: props.color,
              fontSize: 30,
            }}
            name="heart"
            size={props.size}
            color="black"
          />
        ) : (
          <AntDesign
            style={{
              color: props.color,
              fontSize: 30,
            }}
            name="hearto"
            size={props.size}
            color="black"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
