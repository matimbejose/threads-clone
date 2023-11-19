import * as React from 'react'
import { SafeAreaView , ScrollView,RefreshControl,Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Lottie from 'lottie-react-native'
// import { createRandomUser } from '../../utils/generete-dommy-data';

// const user  = createRandomUser();


// console.log(JSON.stringify(user, null, 2))

export default function TabOneScreen() {
  const animationRef  = React.useRef<Lottie>(null);
  return (
    <SafeAreaView>
      <ScrollView
       contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30})
       }}
       refreshControl={
        <RefreshControl 
        refreshing={false}
        onRefresh={ () => { animationRef.current?.play()}}
        tintColor={ 'transparent'}
        />
       }
      >
        <Lottie
        ref={ animationRef }
        source={ require('../../assets/animations/Threads.json') }
        loop={false}
        autoPlay
        style={{
          width: 90,
          height: 90,
          alignSelf: 'center'
        }} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}
