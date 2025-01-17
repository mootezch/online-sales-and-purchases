import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price} DT</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/pr.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
