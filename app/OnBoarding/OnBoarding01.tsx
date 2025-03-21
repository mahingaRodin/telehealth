

import React from 'react'

import Onboarding from 'react-native-onboarding-swiper'

import { useRouter } from 'expo-router'
import DotComponent from './DotComponent'
import Start from './start'
import OnBoarding02 from './OnBoarding02'
import OnBoarding03 from './OnBoarding03'
import Onboarding04 from './Onboarding04'
import Onboarding05 from './Onboarding05'
const OnBoarding01 = () => {
  const router=useRouter()
  

  return (
    <Onboarding
    onSkip={()=>router.replace('/Authentication')}
    onDone={()=>router.replace('/Authentication')}
    DotComponent={DotComponent}

  pages={[
    {
      backgroundColor: '#fff',
      image:  <Start/>,
      title:'' ,
      subtitle: '',
    },
    {
      backgroundColor: '#fff',
      image: <OnBoarding02/>,
       title:'',

      subtitle: '',
    },

    {
      backgroundColor: '#fff',
      image: <OnBoarding03/>
       
    ,
      title: '',
      subtitle: '',
    },
    {
      backgroundColor: '#fff',
      image: <Onboarding04/> 
   ,
      title: '',
      subtitle: '',
    },
    {
      backgroundColor: '#fff',
      image: <Onboarding05/> ,
    
      title: '',
      subtitle: '',
    },
    
  ]}
/>
  )
}


export default OnBoarding01