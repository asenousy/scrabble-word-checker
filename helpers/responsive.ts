import { Dimensions } from "react-native";
import { heightBreakPoints } from "../constants.json";

const height = Dimensions.get("screen").height;

const scale = height / heightBreakPoints.large;

const responsive = (oldStyle: any) => {
  if (typeof oldStyle === "number") return scale * oldStyle;
  if (typeof oldStyle === "object") {
    const newStyle: any = {};
    for (const key in oldStyle) {
      const value = oldStyle[key];
      newStyle[key] = key !== "flex" ? responsive(value) : value;
    }
    return newStyle;
  }
  return oldStyle;
};

export default responsive;
