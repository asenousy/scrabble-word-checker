import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../constants.json";
import responsive from "../helpers/responsive";

const points: any = {
  C: "3",
  W: "4",
  G: "2",
  Y: "4",
};

type Props = {
  msg: string;
};

const Blocks = ({ msg }: Props) => (
  <View style={styles.container}>
    {msg
      .toUpperCase()
      .split("")
      .map((letter, i) => (
        <Block key={`block-${letter}-${i}`} value={letter} />
      ))}
  </View>
);

type BlockProps = {
  value: string;
};

const Block = ({ value }: BlockProps) => (
  <View style={styles.block}>
    <Text style={styles.letter}>{value}</Text>
    <Text style={styles.point}>{points[value] || 1}</Text>
  </View>
);

const styles = StyleSheet.create(
  responsive({
    container: {
      flexDirection: "row",
      margin: 5,
    },
    block: {
      backgroundColor: colors.block,
      borderRadius: 5,
      padding: 10,
      margin: 3,
    },
    letter: {
      fontSize: 15,
      fontWeight: "bold",
    },
    point: {
      position: "absolute",
      bottom: 2,
      right: 3,
      fontSize: 10,
    },
  })
);

export default Blocks;
