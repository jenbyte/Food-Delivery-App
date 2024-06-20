import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";

import { themeColors } from '../theme';
// import { featured } from '../constants';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import Dropdown from '../components/dropdown';
import { getFeaturedRestaurants } from '../api';

export default function HomeScreen() {
  let [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  let [isFocus, setIsFocus] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    getFeaturedRestaurants().then(data => {
      setFeaturedRestaurants(data);
    })
  },[]);

  return (
    <SafeAreaView className={isFocus ? "bg-grey" :"bg-white"}  >
      <StatusBar barStyle="dark-content" />

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        {
          isFocus && <Dropdown onBlur={() => setIsFocus(false)} className="shadow-lg" />
        }
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-3">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Vancouver, Canada</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
          <TouchableOpacity onPress={() => setIsFocus(true)}>
            <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }} 
      >
        {/* Categories  */}
        <Categories />

        {/* Featured */}
        <View className="my-5">
          {
            featuredRestaurants.map((item, index) => {
              return (
                <FeaturedRow 
                  key={index}
                  title={item.name}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}