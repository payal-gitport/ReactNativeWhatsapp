import { View, Text, Button } from 'react-native'
import { Auth } from 'aws-amplify'

const SettingScreen = () => {
  return (
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}} >  
      <Button onPress={()=>Auth.signOut()} title='Sign out'/>
    </View>
  )
}

export default SettingScreen