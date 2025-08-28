import { PAGES } from '@constants'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name={PAGES.HOME}
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  )
}
