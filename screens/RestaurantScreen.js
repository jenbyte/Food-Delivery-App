import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';

import { themeColors } from '../theme';
import { categoriesMap } from '../constants';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { setRestaurant } from '../slices/restaurantSlice';

export default function RestaurantScreen() {
  const {params} =  useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let item = params;
  let itemAdded = true;
  
  useEffect(() => {
    console.log({item})
    if (item & item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, []);

  return (
    <View>
      {itemAdded ? <CartIcon /> : ''}
      <StatusBar style='light' />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.photo} />
          <TouchableOpacity 
            onPress={() => navigation.goBack()}  
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View 
          className="bg-white -mt-12 pt-6 rounded-t-3xl"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
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
              <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="gray" width="15" height="15" />
                  <Text className="text-gray-700 text-xs">Nearby · {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dishes */}
          {
            item.menu.map((dish, index) => <DishRow item={{...dish}} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}