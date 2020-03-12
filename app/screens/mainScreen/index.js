import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import PlaylistSummary from 'youtube-playlist-summary';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([
    {name: 'zzzz', key: '1'},
    {name: 'zsxsxzzz', key: '2'},
    {name: 'zzsxsxzz', key: '3'},
  ]);

  const config = {
    GOOGLE_API_KEY: 'AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0', // require
    PLAYLIST_ITEM_KEY: [
      // 'publishedAt',
      'title',
      // 'description',
      // 'videoId',
      // 'videoUrl',
    ], // option
  };

  const ps = new PlaylistSummary(config);
  const CHANNEL_ID = 'UCQCaS3atWyNHEy5PkDXdpNg';
  const PLAY_LIST_ID = 'PLR9tbNj0VLOOn9P48-OBUB5c8T4E5XFfs';

  const itemsRender = () => {
    fetch(
      'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&key=AIzaSyASEhqwHiMLA-YZsqbpkPwwKbyq_7FnRh0&id=UCQCaS3atWyNHEy5PkDXdpNg',
      {
        method: 'get',
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        console.log('Thiiiiiiiiiiiiiiiiiiiiissxsxs', data);
      })
      .catch(error => {
        //console.error(error);
      });
  };

  return (
    <View>
      <Button title="Click" onPress={itemsRender} />
      <FlatList
        data={data.items}
        // keyExtractor={data.id}
        renderItem={({item}) => {
          return <Text>{item.etag}</Text>;
        }}
      />
    </View>
  );
};

export default MainScreen;
// {
//   "kind": "youtube#playlist",
//   "etag": etag,
//   "id": string,
//   "snippet": {
//     "publishedAt": datetime,
//     "channelId": string,
//     "title": string,
//     "description": string,
//     "thumbnails": {
//       (key): {
//         "url": string,
//         "width": unsigned integer,
//         "height": unsigned integer
//       }
//     },
//     "channelTitle": string,
//     "tags": [
//       string
//     ],
//     "defaultLanguage": string,
//     "localized": {
//       "title": string,
//       "description": string
//     }
//   },
//   "status": {
//     "privacyStatus": string
//   },
//   "contentDetails": {
//     "itemCount": unsigned integer
//   },
//   "player": {
//     "embedHtml": string
//   },
//   "localizations": {
//     (key): {
//       "title": string,
//       "description": string
//     }
//   }
// }

// {
//   "etag": "\"SJZWTG6xR0eGuCOh2bX6w3s4F94/aRMMufx7nKyuBvvxunBgWYbXhsY\"",
//   "items": [
//               {
//                 "contentDetails": [Object],
//                 "etag": "\"SJZWTG6xR0eGuCOh2bX6w3s4F94/bur2rLGzok-9oP9AhjybqkNgynI\"",
//                 "id": "UCQCaS3atWyNHEy5PkDXdpNg",
//                 "kind": "youtube#channel"
//               }
//             ],
//                 "kind": "youtube#channelListResponse",
//                 "pageInfo": {
//                               "resultsPerPage": 1,
//                               "totalResults": 1
//                             }
// }
