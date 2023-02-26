import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { ICard } from '../../../App';
import { styles } from './styles';
import Reload from '@expo/vector-icons/MaterialCommunityIcons';
import Close from '@expo/vector-icons/Fontisto';
import Star from '@expo/vector-icons/Entypo';

export function Card({ picture, name, age }: ICard) {
  return (
    <View style={styles.container}>
      <ImageBackground source={picture} style={{ flex: 1 }} imageStyle={{ borderRadius: 8 }}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <View style={styles.boxIcons}>
          <View style={[styles.wrapperIcon, { borderColor: 'yellow' }]}>
            <Reload name='reload' size={31} color='yellow' />
          </View>
          <View style={[styles.wrapperIcon, { borderColor: 'red', width: 70, height: 70, borderRadius: (70 / 2) }]}>
            <Close name='close-a' size={31} color='red' />
          </View>
          <View style={[styles.wrapperIcon, { borderColor: 'blue', }]}>
            <Star name='star' size={31} color='blue' />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}