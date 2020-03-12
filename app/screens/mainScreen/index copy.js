import React, {useEffect, useState} from 'react';
import {View, Button, Text, FlatList, AsyncStorage} from 'react-native';
import YouTube, {YouTubeStandaloneAndroid} from 'react-native-youtube';

const API_KEY = 'AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0';

const MainScreen = () => {
  const [isReady, setIsReady] = useState(false);
  // const [data, setData] = useState([
  //   {key: '1', name: 'QRt7LjqJ45k'},
  //   {key: '2', name: 'iMCM1NceGJY'},
  // ]);
  const [data, setData] = useState([]);

  // fetchData = async () => {
  //   const response = await fetch(
  //     'https://www.googleapis.com/youtube/v3/playlists',
  //   );
  //   const json = await response.json();
  //   console.log('json is::::::', json.results);
  //   setData(json.results);
  // };

  someList = term => {
    YouTubeStandaloneAndroid.playPlaylist({
      apiKey: 'AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0',
      playlistId: 'PL06z42zB6YZ8v_Rop4ym29KANKKhc1zhw',
    });
    console.log('playeddddd', term);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <View style={{flex: 0.4, backgroundColor: '#412566'}}>
        <YouTube
          apiKey={API_KEY}
          play={true}
          // videoId="KVZ-P-ZI6W4"
          playlistId={'OLAK5uy_kfJxeBjJm_UWARioKkdpTailYs_pmQphg!!'}
          style={{flex: 1}}
        />
      </View>
      <View style={{flex: 0.6, backgroundColor: '#124563'}}>
        <Button title="Click" onPress={someList()} />
      </View>
    </View>
  );
};

export default MainScreen;
