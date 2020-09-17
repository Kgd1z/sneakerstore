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
import { ImagePropTypes } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Sneakercardsmall(props) {
  return (
    <View style={{ marginRight: 30 }}>
      <Image style={{ width: 170, height: 85 }} source={props.img} />
      <View
        style={{
          backgroundColor: "#fff",
          height: 70,
          marginTop: 10,
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 18, paddingBottom: 5, fontWeight: "bold" }}>
          {props.name}
        </Text>
        <Text>{props.price}</Text>
      </View>
      <AntDesign
        style={{
          position: "absolute",
          right: 20,
          top: 130,
          color: "black",
          fontSize: 20,
        }}
        name="hearto"
        size={24}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
