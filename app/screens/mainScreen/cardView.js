import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardView = ({onPress, title, description, source}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.cardView}>
      <View style={styles.imgView}>
        <Image style={styles.img} resizeMode="stretch" source={source} />
      </View>
      <View style={styles.titlesView}>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
        <View style={styles.title}>
          <Text numberOfLines={3}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardView;
