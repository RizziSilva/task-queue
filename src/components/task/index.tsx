import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from '../checkbox'

type props = {
  title: string
  description?: string
}

export function Task({ title, description }: props) {
  function handleCheckboxChange() {}

  function renderDescription() {
    if (!description) return null

    return <Text style={styles.description}>{description}</Text>
  }

  return (
    <View style={styles.containerTask}>
      <View style={styles.containerCheckbox}>
        <Checkbox checked={false} onChange={handleCheckboxChange} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        {renderDescription()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTask: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
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
  },
  description: {
    fontSize: 14,
  },
})
