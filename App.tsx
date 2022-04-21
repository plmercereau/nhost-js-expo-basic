import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

import { NhostClient } from '@nhost/nhost-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const nhost = new NhostClient({
  backendUrl: 'https://gfambeospnuqjpvlvtku.nhost.run',
  clientStorageType: 'react-native',
  clientStorage: AsyncStorage,
  refreshIntervalTime: 10,
})

nhost.auth.onTokenChanged(e => {
  console.log('New access token', e?.accessToken)
})

export default function App() {
  console.log('App component')

  const signUp = async () => {
    console.log('SIGNUP')
    const result = await nhost.auth.signUp({
      email: 'pilou@pilou.com',
      password: 'Pilette1',
    })
    console.log(result)
  }
  const signIn = async () => {
    console.log('SIGN IN')
    const result = await nhost.auth.signIn({
      email: 'pilou@pilou.com',
      password: 'Pilette1',
    })
    console.log(result)
  }

  return (
    <View style={styles.container}>
      <Text>Voila</Text>
      <Button onPress={signUp} title='Sign up'>
        Sign Up!
      </Button>
      <Button onPress={signIn} title='Sign In'>
        Sign In!
      </Button>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
