import { StyleSheet } from 'react-native';

const preBattleSequenceStyle = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    overflowY: 'auto',
    padding: '20px',
    paddingBottom: '70px', // Added padding to ensure the last element is fully visible
  },
  list: {
    marginBottom: '10px',
  },
});

export default preBattleSequenceStyle;
