import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Item = ({title, price,description}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
      </View>
    </View>
  )
};

export default Item;