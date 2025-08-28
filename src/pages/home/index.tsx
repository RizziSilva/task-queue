import { View } from 'react-native'
import { Task } from '@components'
import { MOCK_TASKS } from '@constants'

export function HomePage() {
  function renderTasks() {
    return MOCK_TASKS.map((task, index) => <Task key={index} title={task.title} description={task.description} />)
  }

  return <View>{renderTasks()}</View>
}
