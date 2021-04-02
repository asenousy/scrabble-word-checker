import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../constants.json";

const points: any = {
  C: "3",
  O: "1",
  R: "1",
  E: "1",
  T: "1",
  W: "4",
  N: "1",
  G: "2",
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
    <Text style={styles.point}>{points[value]}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10 },
  block: {
    backgroundColor: colors.block,
    borderRadius: 5,
    padding: 10,
    margin: 3,
  },
  letter: {
    fontSize: 15,
  },
  point: {
    position: "absolute",
    bottom: 2,
    right: 3,
    fontSize: 10,
  },
});

export default Blocks;
