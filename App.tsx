import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import Constants from "expo-constants";
import { AdMobBanner } from "expo-ads-admob";
import Main from "./components/Main";
import { colors, heightBreakPoints, testAdUnitID } from "./constants.json";
import responsive from "./helpers/responsive";

const height = Dimensions.get("screen").height;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.banner}>
          <AdMobBanner
            bannerSize={
              height > heightBreakPoints.small &&
              height < heightBreakPoints.large
                ? "mediumRectangle"
                : "smartBannerPortrait"
            }
            adUnitID={testAdUnitID}
            servePersonalizedAds
          />
        </View>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  responsive({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },
    banner: {
      alignItems: "center",
    },
    content: {
      flex: 1,
      backgroundColor: colors.background,
    },
  })
);
