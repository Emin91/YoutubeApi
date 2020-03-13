import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardView: {
    flex: 0.9,
    height: 130,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 5,
    paddingLeft: 4,
    paddingRight: 10,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2,
  },
  imgView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    flex: 1,
    borderRadius: 2,
  },
  titlesView: {
    flex: 0.5,
  },

  title: {
    flex: 0.5,
    paddingLeft: 5,
  },
});

export default styles;
