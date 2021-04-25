import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  AppState,
  AppStateStatus,
} from "react-native";
import Constants from "expo-constants";
import * as Updates from "expo-updates";
import { AdMobBanner } from "expo-ads-admob";
import Main from "./components/Main";
import {
  colors,
  heightBreakPoints,
  testAdUnitID,
  prodAdUnitID,
} from "./constants.json";
import responsive from "./helpers/responsive";
import storeReview from "./helpers/storeReview";

const height = Dimensions.get("screen").height;
const AD_UNIT_ID = __DEV__ ? testAdUnitID : (prodAdUnitID as any)[Platform.OS];

export default function App() {
  const appState = useState(AppState.currentState);
  const handleAppStateChangeCurried = handleAppStateChange.bind(null, appState);

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChangeCurried);
    return () => {
      AppState.removeEventListener("change", handleAppStateChangeCurried);
    };
  });

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
            adUnitID={AD_UNIT_ID}
            servePersonalizedAds
          />
        </View>
        <Main />
      </View>
    </View>
  );
}

const handleAppStateChange = async (
  [appState, setAppState]: [
    AppStateStatus,
    React.Dispatch<React.SetStateAction<AppStateStatus>>
  ],
  nextAppState: AppStateStatus
) => {
  if (
    appState.match(/inactive|background/) &&
    nextAppState === "active" &&
    !__DEV__
  ) {
    storeReview();
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      if (__DEV__) throw error;
    }
  }
  setAppState(nextAppState);
};

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
