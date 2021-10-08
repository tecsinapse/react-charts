import React from 'react';
import { View } from 'react-native';
import {
  Lato_700Bold,
  Lato_400Regular,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { PieChartData, PieChart } from './src';

export default function App() {
  const data = [
    { value: 10, label: 'Fora do prazo' },
    { value: 13, label: 'Dentro do prazo' },
  ];
  const colors = ['#FCCB83', '#F89907'];
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const fonts = {
    regular: 'Lato_400Regular',
    bold: 'Lato_700Bold',
    black: 'Lato_900Black',
  };

  const pieData: PieChartData[] = data.map((item, index) => ({
    value: item.value,
    label: item.label,
    color: colors[index],
    onPress: (value, label) => console.log(value, label),
    //featured: index === 0,
  }));

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
      }}
    >
      <PieChart
        data={pieData}
        sub={'People'}
        chartConfig={{ fontFamily: fonts }}
      />
    </View>
  );
}
