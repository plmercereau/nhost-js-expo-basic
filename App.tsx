import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

import { NhostClient } from '@nhost/nhost-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const email = 'react@native.com'
const password = 'MyBirthDate'

const nhost = new NhostClient({
  backendUrl: 'https://xxx.nhost.run',
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
      email,
      password,
    })
    console.log(result)
  }
  const signIn = async () => {
    console.log('SIGN IN')
    const result = await nhost.auth.signIn({
      email,
      password,
    })
    console.log(result)
  }
  const signOut = async () => {
    console.log('SIGN OUT')
    const result = await nhost.auth.signOut()
    console.log(result)
  }

  return (
    <View style={styles.container}>
      <Text>Voila</Text>
      <Button onPress={signUp} title='Sign up' />
      <Button onPress={signIn} title='Sign In' />
      <Button onPress={signOut} title='Sign Out' />
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
