/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>vadimnotjustdev</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>lgrinevicius</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Pariatur quo aspernatur
          ratione hic ducimus ad corrupti nobis! Qui inventore repellat at
          quidem, nihil ullam, magnam eos, fugiat laudantium labore temporibus.
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>

        {/* Posted date */}
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
};

export default FeedPost;
