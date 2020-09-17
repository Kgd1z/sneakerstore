import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from "../components/ItemsContext";
export default function Sneakercard(props) {
  const navigation = useNavigation();
  const { item, setCurrentItem } = React.useContext(ItemsContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentItem({
          name: props.name,
          price: props.price,
          img: props.img,
          about: props.about,
        });
        navigation.navigate("ShoeDetail");
      }}
    >
      <View
        style={{
          backgroundColor: props.color,
          height: 290,
          width: 250,
          borderRadius: 20,
          marginRight: 35,
        }}
      >
        <Text style={styles.name}>{props.name}</Text>
        <AntDesign
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            color: "white",
            fontSize: 30,
          }}
          name="hearto"
          size={24}
          color="black"
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingBottom: 25,
            color: "white",
            fontSize: 17,
          }}
        >
          {props.price}
        </Text>
        <Image style={styles.sneaker} source={props.img} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#337AFF",
    height: 290,
    width: 250,
    borderRadius: 20,
    marginRight: 35,
  },
  sneaker: {
    height: 130,
    width: 250,

    transform: [{ rotate: "340deg" }],
  },
  name: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 21,
  },
});
