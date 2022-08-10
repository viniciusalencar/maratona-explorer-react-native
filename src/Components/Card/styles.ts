import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen')


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDD5',
    alignItems: 'center',
  },
  header: {
    width: width - 20,
    marginTop: 40,
    backgroundColor: '#FED7AA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
  }
});

export default styles;