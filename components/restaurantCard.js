import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

import { categoriesMap } from '../constants'

export default function RestaurantCard({item}) {
    const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {...item})}>
        <View style={{
                shadowColor: '#000', //themeColors.bgColor(0.5)
                shadowRadius: 7
            }} 
            className="mr-6 bg-white rounded-3xl shadow-lg"
        >
            <Image className="h-36 w-64 rounded-t-3xl" source={item.photo} />
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2">{item.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image className="h-4 w-4" source={require('../assets/images/star.png')} />
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.rating}</Text>
                        <Text className="text-gray-700">
                                {
                                    item.categories.map((category, index) => {
                                        return (
                                            <Text key={index}> · {categoriesMap(category)}</Text>
                                        )
                                    })
                                }
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width="15" height="15" />
                    <Text className="text-gray-700 text-xs">Nearby · {item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}