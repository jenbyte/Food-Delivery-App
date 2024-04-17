import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Icon from "react-native-feather";
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { themeColors } from '../theme';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { featured } from '../constants';

export default function DeliveryScreen({}) {
    const restaurant = useSelector(selectRestaurant);
    // const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const courier = restaurant ? restaurant.courier : '';
    const deliveryDuration = restaurant ? restaurant.duration : '';

    console.log("DS:", restaurant)
    const cancelOrder = ()=> {
        navigation.navigate('Home');
        dispatch(emptyCart());
    }

  return (
    <View className="flex-1">
        { restaurant ? 
            <MapView
                initialRegion={{
                    latitude: restaurant.location.latitude,
                    longitude: restaurant.location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                className="flex-1"
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.location.latitude,
                        longitude: restaurant.location.longitude
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            : 
            <SafeAreaView className="flex-1">
                <View className="flex-column justify-between px-10 pt-20">
                    <Text className="text-4xl mt-10 font-extrabold text-gray-700">
                        :(
                    </Text>
                    <Text className="text-lg mt-10 text-gray-700 font-semibold">
                        There was an error processing your order. We apologize for the inconvenience.
                    </Text> 
                </View>
            </SafeAreaView>
        }
        <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <Image className="w-24 h-24" source={require('../assets/images/delivery.gif')} />
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Estimated Arrival
                    </Text>
                    <Text className="text-3xl font-extrabold text-gray-700">
                        {deliveryDuration}
                    </Text>
                    <Text className="mt-2 text-gray-700 font-semibold">
                        your order is on its way!
                    </Text>
                </View>
            </View>
            <View
                style={{backgroundColor: themeColors.bgColor(0.8)}}
                className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
            >
                <View className="p-1 rounded-full"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                        <Image className="h-16 w-16 rounded-full" source={require('../assets/images/Beef-Ragu.jpeg')} />
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold text-white">
                        {courier}
                    </Text>
                    <Text className="font-semibold text-white">
                        Your Rider
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
                        <Icon.X stroke={'red'} strokeWidth={4} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}