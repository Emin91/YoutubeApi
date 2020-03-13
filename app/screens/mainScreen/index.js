import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import CardView from './cardView';

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
    <View style={{flex: 1}}>
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
              <CardView
                key={id}
                source={{uri: url}}
                title={title}
                description={description}
                onPress={() => navigation.navigate('YoutubeScreen', videoId)}
              />
            );
          },
        )}
      </ScrollView>
    </View>
  );
};

export default MainScreen;
