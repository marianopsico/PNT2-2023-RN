import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const User = (props) => {
  return (
    <View>
      <Image source={{ uri: props.image }} style={styles.avatar} />
      <Text>{props.name}</Text>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
});

export default User;
