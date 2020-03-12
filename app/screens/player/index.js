import React, {useState} from 'react';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './style';

const youtubePlayer = id => {
  const [isPlaying] = useState(false);
  const [isLooping] = useState(true);
  return (
    <YouTube
      apiKey="AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0"
      videoId={id}
      play={isPlaying}
      loop={isLooping}
      controls={1}
      style={{flex: 1}}></YouTube>
  );
};

const YoutubeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>{youtubePlayer(navigation.state.params)}</View>
  );
};

export default YoutubeScreen;
//finish
