import React from "react";
import { View } from "react-native";
import {
  Lato_700Bold,
  Lato_400Regular,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { PieChart } from "./src/components";
import { PieChartData } from "./src/types";

export default function App() {
  const data = [
    { value: 10, label: "Fora do prazo" },
    { value: 13, label: "Dentro do prazo" },
  ];
  const colors = ["#FCCB83", "#F89907"];
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const fonts = {
    regular: "Lato_400Regular",
    bold: "Lato_700Bold",
    black: "Lato_900Black",
  };

  const pieData: PieChartData[] = data.map((item, index) => ({
    value: item.value,
    label: item.label,
    color: colors[index],
    onPress: (value) => console.log(value),
    //featured: index === 0,
  }));

  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        margin: "auto",
      }}
    >
      <PieChart
        data={pieData}
        sub={"Leads"}
        chartConfig={{ fontFamily: fonts }}
      />
    </View>
  );
}
