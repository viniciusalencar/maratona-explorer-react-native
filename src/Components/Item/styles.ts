import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen')


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  price: {
    fontSize: 18,
    fontWeight: '700'
  }
});

export default styles;