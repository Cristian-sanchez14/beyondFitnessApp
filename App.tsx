/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <EditProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 35,
  },
});

export default App;
