import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ededed',
    backgroundColor: '#fff',
  },
  count: {
    position: 'absolute',
    left: 16,
    top: 20,
    padding: 3,
    color: '#777',
    fontSize: 10,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filter: {
    margin: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'transparent',
  },
  filterText: {
    color: '#777',
    fontSize: 10,
  },
  activeFilter: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
  clearContainer: {
    position: 'absolute',
    right: 16,
    top: 20,
  },
  clear: {
    padding: 3,
    color: '#777',
    fontSize: 10,
  }
})
