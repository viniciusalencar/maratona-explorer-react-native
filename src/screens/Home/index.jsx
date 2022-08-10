import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Card from '../../Components/Card';
import Item from '../../Components/Item';

import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Rocket<Text style={styles.subTitle}>Coffee</Text></Text>
          <Text style={styles.description}>Aberto todos os dias. 8h até 21h</Text>
      </View>

      <Card title="Brunch">
        <Item title="Maça verde" price="R$31.50" description="Aqui vem descriçççççção" />
      </Card>
    </SafeAreaView>
  )
};

export default Home;