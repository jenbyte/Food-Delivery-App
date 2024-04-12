import { View, Text, TouchableOpacity, Image, ScrollView, Touchable } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { selectRestaurant } from '../slices/restaurantSlice';
import { themeColors } from '../theme';
import { featured } from '../constants';
import { store } from '../store';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);
    // const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    console.log('--restaurant:', restaurant)
    console.log('???', store.getState());

  return (
    <View className="bg-white flex-1">
        {/* Back Btn */}
        <View className="relative py-4 shadow-sm">
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
            >
                <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>
            <View>
                <Text className="text-center font-bold text-xl">Your cart</Text>
                <Text className="text-center text-gray-500">{restaurant ? restaurant.name: ''}</Text>
            </View>
        </View>

        {/* Deliver Time */}
        <View style={{backgroundColor: themeColors.bgColor(0.2)}}
            className="flex-row px-4 items-center">
            <View className="justify-center p-3 w-20 h-20 rounded-full">
                <Image source={require('../assets/images/icons/food-delivery.png')} className="w-16 h-16 founded-full" />
            </View>
            <Text className="flex-1 pl-4">Deliver in {restaurant ? restaurant.duration : ''}</Text>
            <TouchableOpacity>
                <Text className="font-bold" style={{color: themeColors.text}}>
                    Change
                </Text>
            </TouchableOpacity>
        </View>

        {/* Dishes */}
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
            className="bg-white pt-5"
        >
            {   restaurant ? 
                restaurant.menu.map((dish, index) => {
                    return (
                        <View key={index}
                            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            <Text className="font-bold" style={{color: themeColors.text}}>
                                2 x
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.photo} />
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">${dish.price}</Text>
                            <TouchableOpacity className="p-1 rounded-full"
                                style={{backgroundColor: themeColors.bgColor(1)}}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white' />
                            </TouchableOpacity>
                        </View>
                    )
                })
                :
                ''
            }
        </ScrollView>
        
        {/* Totals */}
        <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Subtotal</Text>
                <Text className="text-gray-700">$20</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Delivery Fee</Text>
                <Text className="text-gray-700">$2</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700 font-extrabold">Order Total</Text>
                <Text className="text-gray-700 font-extrabold">$30</Text>
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('OrderPreparing')}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                    className="p-3 rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}