import { useState } from 'react'
import { Pressable, View } from 'react-native'
import { CheckboxProps } from './types'
import { styles } from './styles'

export function Checkbox({ checked, onChange }: CheckboxProps) {
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
