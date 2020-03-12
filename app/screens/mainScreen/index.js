import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './style';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const GOOGLE_API_KEY = 'AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0';
const PLAYLIST_ID = 'RD_VONMkKkdf4';

const MainScreen = ({navigation}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `${YOUTUBE_API_URL}?part=snippet&playlistId=${PLAYLIST_ID}&key=${GOOGLE_API_KEY}&maxResults=50`,
    )
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        console.log('My data------->>>', data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  const {items} = data;

  return !items ? null : (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <ScrollView>
        {items.map(
          ({
            id,
            snippet: {
              title,
              description,
              resourceId: {videoId},
              thumbnails: {
                default: {url},
              },
            },
          }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                key={id}
                onPress={() => navigation.navigate('YoutubeScreen', videoId)}
                style={styles.mainView}>
                <View style={styles.imgView}>
                  <Image style={{flex: 1}} source={{uri: url}} />
                </View>
                <View style={styles.titlesView}>
                  <View style={styles.title}>
                    <Text>{title}</Text>
                  </View>
                  <View style={styles.subTitle}>
                    <Text numberOfLines={2}>{description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
    </View>
  );
};

export default MainScreen;
