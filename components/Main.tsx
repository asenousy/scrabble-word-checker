import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable, Keyboard, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import Constants from "expo-constants";
import dict from "../db/csw.json";
import { colors, heightBreakPoints } from "../constants.json";
import MsgResult from "./MsgResult";
import Meaning from "./Meaning";

const Main = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("");

  const meaning = (dict as any)[word.trim()];
  const incorrect = !!word && !meaning;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: incorrect
            ? colors.background.incorrect
            : colors.background.correct,
        },
      ]}
    >
      <AdMobBanner
        bannerSize={"mediumRectangle"}
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds
      />
      <Pressable style={styles.content} onPress={Keyboard.dismiss}>
        <TextInput
          style={styles.input}
          placeholder="Enter Word"
          value={input}
          onChangeText={setInput}
          onEndEditing={() => setWord(input.toLowerCase())}
          clearButtonMode="always"
        />
        {word ? <MsgResult status={!incorrect} /> : null}
        {meaning ? <Meaning content={meaning} /> : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  success: {
    backgroundColor: colors.background.correct,
  },
  fail: {
    backgroundColor: colors.background.incorrect,
  },
  input: {
    margin: 40,
    fontSize: 16,
    borderRadius: 2,
    borderWidth: 0.3,
    backgroundColor: "white",
    textAlign: "center",
    height: 40,
    width: 250,
  },
});

export default Main;
