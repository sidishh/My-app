import { StyleSheet, Text, View } from "react-native";
import React from "react";


import BackgroundImg from "../../../../../assets/svg/loading_background.svg";                                                                                                                                                                

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <BackgroundImg/>
      </View>
    </View>
  );
}
