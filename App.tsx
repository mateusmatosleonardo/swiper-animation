import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { Card } from './src/components/Card/Card';
import Swiper from 'react-native-deck-swiper';

export interface ICard {
  id: string,
  name: string,
  picture: any;
  age: number;
}

export default function App() {

  const [cards, setCards] = useState<ICard[]>([
    {
      id: '0',
      name: 'Maria',
      age: 21,
      picture: require('./src/Maria.png')
    },
    // {
    //   id: '1',
    //   name: 'string',
    //   picture: require('./src/Julia.png')
    // },
    // {
    //   id: '2',
    //   name: 'string',
    //   picture: require('./src/Maria.png')
    // },
  ]);

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        cardIndex={index}
        renderCard={(card) => (
          <Card {...card} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
