import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerTask: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    paddingRight: 30,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    alignItems: 'flex-start',
  },
  containerCheckbox: {
    paddingTop: 2,
  },
  containerInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: '#202020',
    fontWeight: 'bold',
    flex: 1,
  },
  description: {
    fontSize: 14,
    flex: 1,
  },
})
