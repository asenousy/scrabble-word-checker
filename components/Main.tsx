import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable, Keyboard, View } from "react-native";
import dict from "../db/csw.json";
import { colors } from "../constants.json";
import responsive from "../helpers/responsive";
import MsgResult from "./MsgResult";
import Meaning from "./Meaning";
import Footer from "./Footer";
import Feedback from "./Feedback";

const Main = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const meaning = (dict as any)[word.trim()];
  const incorrect = !!word && !meaning;

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <View
          style={[styles.layer, incorrect && { backgroundColor: colors.error }]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter Word"
            value={input}
            onChangeText={setInput}
            onEndEditing={() => setWord(input.toLowerCase())}
            clearButtonMode="always"
            autoCorrect={false}
          />
          {word ? <MsgResult status={!incorrect} /> : <Filler />}
        </View>
        {meaning ? <Meaning content={meaning} /> : <Filler />}
      </View>
      <Footer onFeedback={() => setShowFeedback((prev) => !prev)} />
      {showFeedback && (
        <Feedback onBackgroundPress={() => setShowFeedback((prev) => !prev)} />
      )}
    </Pressable>
  );
};

const Filler = () => <View style={responsive({ padding: 50 })} />;

const styles = StyleSheet.create(
  responsive({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    input: {
      margin: 20,
      fontSize: 16,
      borderRadius: 2,
      borderWidth: 0.3,
      backgroundColor: "white",
      textAlign: "center",
      height: 40,
      width: 250,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    layer: {
      borderRadius: 20,
    },
  })
);

export default Main;
