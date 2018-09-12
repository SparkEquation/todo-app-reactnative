import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: '#ededed',
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  firstContainer: {
    borderTopWidth: 1,
  },
  innerContainer: {
    flex: 1,
    height: 24,
    flexDirection: 'row',
  },
  left: {
    flex: 0,
    marginRight: 12,
  },
  center: {
    flex: 1,
  },
  right: {
    marginLeft: 12,
    flex: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    height: 24,
  },
  input: {
    width: null,
    marginLeft: 36,
  },
  status: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 12,
  },
  tickImage: {
    width: 16,
    height: 16,
    margin: 4
  },
  completedStatus: {
    borderColor: '#5dc2af',
  },
  crossImage: {
    width: 24,
    height: 24,
  }
})
