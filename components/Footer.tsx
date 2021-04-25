import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import responsive from "../helpers/responsive";
import { colors } from "../constants.json";

type Props = {
  onFeedback(): void;
};

const Footer = (props: Props) => (
  <View style={styles.container}>
    <Pressable style={styles.icon} onPress={props.onFeedback}>
      <AntDesign
        name="form"
        size={responsive(35)}
        color={colors.feedback.icon}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    padding: 30,
  },
});

export default Footer;
