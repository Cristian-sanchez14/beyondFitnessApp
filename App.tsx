/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
<<<<<<< HEAD
=======
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
>>>>>>> UI
import EditProfileScreen from './src/screens/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
<<<<<<< HEAD
      {/* <HomeScreen /> */}
=======
>>>>>>> UI
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
