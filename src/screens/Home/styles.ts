import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDD5',
    alignItems: 'center',
    padding: 20
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: '700'
  },
  subTitle: {
    color: '#995000',
  },
  description: {
    fontSize: 18
  }
});

export default styles;