import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Card = ({children, title}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        {children}
      </View>
    </View>
  )
};

export default Card;