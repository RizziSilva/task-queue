import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

type props = {
  checked: boolean
  onChange: () => void
}

export function Checkbox({ checked, onChange }: props) {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  function handlePress() {
    setIsChecked((oldValue) => !oldValue)
    onChange()
  }

  return (
    <Pressable onPress={handlePress} style={styles.containerCheckbox}>
      <View style={[styles.checkbox]}>
        <View style={[styles.check, isChecked ? styles.checked : null]} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerCheckbox: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  checkbox: {
    borderColor: '#000',
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
    backgroundColor: '#000',
    borderRadius: '50%',
  },
})
