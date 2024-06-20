import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { palette, themeColors } from '../theme'
import { selectColour, setColour } from '../slices/colourSlice';

export default function Dropdown() {
    const [themeColour, setThemeColour] = useState(5);

    useEffect(() => {
        console.log(selectColour.selectColour)
        setColour(themeColour);
    })

    return (
        <View style={{shadowColor: 'rgba(0, 0, 0, 0.6)', shadowRadius:7}} 
            className="absolute right-0 top-0 z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <View className="p-1 pl-5" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(0)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[0].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0">Plum</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(1)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[1].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-1">Goldfish</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(2)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[2].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Ube</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(3)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[3].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Caribbean</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(4)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[4].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Matcha</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center" onPress={()=>setThemeColour(5)}> 
                    <View className="h-5 w-5 rounded-xl" style={{backgroundColor: palette[5].bgColor(1)}}></View>
                    <Text className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Charcoal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
