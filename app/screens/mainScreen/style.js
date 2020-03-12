import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 80,
    margin: 2,
    backgroundColor: '#d2d2d2',
    flexDirection: 'row',
  },
  imgView: {
    flex: 0.3,
    height: 80,
  },
  titlesView: {
    flex: 0.7,
    height: 80,
  },
  title: {
    flex: 0.5,
    height: 80,
    paddingLeft: 5,
    justifyContent: 'center',
  },
  subTitle: {
    flex: 0.5,
    height: 80,
    paddingLeft: 5,
  },
});

export default style;
