import { COLORS } from '@constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerCheckbox: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  checkbox: {
    borderColor: COLORS.dustyGray,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    cursor: 'pointer',
    height: 22,
    padding: 3,
    width: 22,
  },
  check: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: COLORS.dustyGray,
    borderRadius: '50%',
  },
})
