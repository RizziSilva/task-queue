import { Text, View } from 'react-native'
import { Checkbox } from '../checkbox'
import { styles } from './style'
import { TaskProps } from './types'

export function Task({ title, description }: TaskProps) {
  function handleCheckboxChange() {}

  function renderDescription() {
    if (!description) return null

    return (
      <Text numberOfLines={1} style={styles.description}>
        {description}
      </Text>
    )
  }

  return (
    <View style={styles.containerTask}>
      <View style={styles.containerCheckbox}>
        <Checkbox checked={false} onChange={handleCheckboxChange} />
      </View>
      <View style={styles.containerInfo}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {renderDescription()}
      </View>
    </View>
  )
}
