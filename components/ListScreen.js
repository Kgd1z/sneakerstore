import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ShadowPropTypesIOS,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Sneakercard from "./Sneakercard";
import Sneakercardsmall from "./Sneakercardsmall";
import { MonoText } from "../components/StyledText";
import { ScrollView } from "react-native-gesture-handler";

export default function ListScreen() {
  const items = [
    {
      name: "Kyrie 6",
      color: "#337AFF",
      price: "$350.00",
      img: require("../assets/images/blue.png"),
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor id sem.",
      sizes: ["UK8", "UK9", "UK10"],
    },
    {
      name: "AirMAx 270",
      color: "#C69B95",
      price: "$200.00",
      img: require("../assets/images/air270.png"),
      about:
        "Lorem ipsum dolor sit amet,  A , viverra nunc vitae, facilisis odio.r varius elit, non lobortis mauris dolor id sem.",
      sizes: ["UK7", "UK9", "UK11"],
    },
    {
      name: "Jordan 1",
      color: "#91D9CC",
      price: "$190.00",
      img: require("../assets/images/jordan.png"),
      about:
        "Lorem ipsum dolor sit amet,et condimentum tristique, metus dolor varius elit, non lobortis mauris dolor id sem.",
      sizes: ["UK8", "UK9", "UK10", "UK11"],
    },
  ];
  const navigation = useNavigation();
  return (
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
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.sections}>Popular</Text>
        <Text style={styles.sections}>Categories</Text>
        <Text style={styles.sections}>Brands</Text>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item) => {
          return (
            <Sneakercard
              name={item.name}
              color={item.color}
              price={item.price}
              img={item.img}
              about={item.about}
              sizes={item.sizes}
            />
          );
        })}
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            paddingTop: 30,
            fontWeight: "bold",
            fontSize: 25,
            color: "grey",
            paddingBottom: 40,
          }}
        >
          DISCOVER
        </Text>
        <Feather
          style={{
            paddingTop: 30,
            fontWeight: "bold",

            paddingLeft: 220,
          }}
          name="list"
          size={29}
          color="black"
        />
      </View>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Sneakercardsmall
          img={require("../assets/images/green.png")}
          name="SB1 low"
          price="$140.00"
        />
        <Sneakercardsmall
          img={require("../assets/images/nike.png")}
          name="Tubular"
          price="$130.00"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
  },
  sections: {
    fontSize: 25,
    paddingRight: 35,
    paddingTop: 28,
    color: "grey",
    paddingBottom: 30,
  },
});
