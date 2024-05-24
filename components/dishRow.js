import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { themeColors } from '../theme'
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice';
import { store } from '../store';

export default function DishRow({item}) {
    const dispatch = useDispatch();
    const dishName = item?.name;
    const dishDescription = item?.description;
    const itemCounter = useSelector(state => selectCartItemsById(state, item.id));

    const handleIncrease = ()=>{
        dispatch(addToCart({...item}))
    }
    const handleDecrease = ()=>{
        dispatch(removeFromCart({id: item.id}))
    }

  return (
    <View 
        style={{
            shadowColor: 'rgba(0, 0, 0, 0.7)', //themeColors.bgColor(0.5),
        }}
        className="flex-row items-center bg-white p-3 rounded-3xl shadow-lg mb-3 mx-2">
      <Image className="rounded-3xl" style={{height: 100, width: 100}} source={item?.photo} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{dishName}</Text>
            <Text className="text-gray-700">{dishDescription}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">
                ${item?.price}
            </Text>

            {/* - Buttons + */}
            <View className="flex-row items-center">
                <TouchableOpacity className="p-1 rounded-full"
                    onPress={handleDecrease}
                    disabled={!itemCounter.length}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                >
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                </TouchableOpacity>
                <Text className="px-3">
                    {itemCounter.length}
                </Text>
                <TouchableOpacity className="p-1 rounded-full"
                    onPress={handleIncrease}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                >
                    <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}