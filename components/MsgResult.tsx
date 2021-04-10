import React from "react";
import { StyleSheet, View } from "react-native";
import Blocks from "./Blocks";
import responsive from "../helpers/responsive";

type Props = {
  status: boolean;
};

const MsgResult = (props: Props) => {
  const msg = props.status ? "correct" : "try again";
  const words = msg.split(" ");
  return (
    <View style={styles.container}>
      {words.map((word, i) => (
        <Blocks key={`blocks-${word}-${i}`} msg={word} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create(
  responsive({
    container: {
      margin: 20,
      alignItems: "center",
    },
  })
);

export default MsgResult;
