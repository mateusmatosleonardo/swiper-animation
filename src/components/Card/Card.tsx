import React from 'react';
import { View, Image, Text } from 'react-native';
import { ICard } from '../../../App';
import { styles } from './styles';
import Reload from '@expo/vector-icons/MaterialCommunityIcons';
import Close from '@expo/vector-icons/Fontisto';
import Star from '@expo/vector-icons/Entypo';

export function Card({ picture, name, age }: ICard) {
  return (
    <View style={styles.container}>
      <Image source={picture} style={{ width: 250, height: 250 }} />
    </View>
  );
}