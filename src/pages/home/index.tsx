import { Task } from '@components'
import { MOCK_TASK } from '@constants'
import { View } from 'react-native'

export function HomePage() {
  return (
    <View>
      <Task title={MOCK_TASK.title} description={MOCK_TASK.description} />
    </View>
  )
}
