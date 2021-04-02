import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  content: string;
};

const Meaning = (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Meaning:</Text>
    <Text style={styles.description}>{props.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: "white",
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    margin: 10,
    fontSize: 18,
  },
});

export default Meaning;
