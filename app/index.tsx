import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import React from 'react';
import CustomText from './CustomText';


export default function App() {
  const router=useRouter()

  return (
    <SafeAreaView className=" flex-1 justify-center align-center m-auto font-[Montserrat-Regular]">
      <View className="flex -top-9">
        <Image source={require("../assets/Diagnoss/logo.png")} />
        <CustomText
          style={{
            fontSize: 20,
            color: "#91CE59",
            textAlign: "center",
            bottom: -8,
          }}
        >
          Diagnoss
        </CustomText>
      </View>
      <TouchableOpacity
        onPress={() => navigator.navigate("OnBoarding")}
        className="p-4 bg-[#36BE69] rounded-lg mt-5 -bottom-12"
      >
        <CustomText
          style={{ textAlign: "center", fontWeight: "300", fontSize: 24 }}
        >
          Welcome
        </CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

