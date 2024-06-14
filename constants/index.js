// Dummy Data

import { Text } from 'react-native';

export const categories = [
  {
    id: 1,
    name: 'Rice',
    icon: require('../assets/images/icons/riceBowl.png'),
  },
  {
    id: 2,
    name: 'Noodles',
    icon: require('../assets/images/icons/noodle.png'),
  },
  {
    id: 3,
    name: 'Hot Dogs',
    icon: require('../assets/images/icons/hotDog.png'),
    attr: '<a href="https://www.flaticon.com/free-icons/hot-dog" title="hot dog icons">Hot dog icons created by Mihimihi - Flaticon</a>'
  },
  {
    id: 4,
    name: 'Salads',
    icon: require('../assets/images/icons/salad.png'),
  },
  {
    id: 5,
    name: 'Burgers',
    icon: require('../assets/images/icons/hamburger.png'),
  },
  {
    id: 6,
    name: 'Pizza',
    icon: require('../assets/images/icons/pizza.png'),
  },
  {
    id: 7,
    name: 'Snacks',
    icon: require('../assets/images/icons/fries.png'),
  },
  {
    id: 8,
    name: 'Sushi',
    icon: require('../assets/images/icons/sushi.png'),
  },
  {
    id: 9,
    name: 'Desserts',
    icon: require('../assets/images/icons/cake.png'),
  },
  {
    id: 10,
    name: 'Drinks',
    icon: require('../assets/images/icons/drink.png'),
  },
];

// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;


export const featured = {
    id: 1,
    title: 'Hot and Spicy', 
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Burger Queen',
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: require('../assets/images/burger-restaurant-2.jpg'),
            duration: '30 - 45 min',
            description: 'Hot and juicy burgers',
            address: '123 Wall St',
            location: {
                latitude: 42.19449886786383,
                longitude: -120.34558000016682,
            },
            courier: {
            // avatar: images.avatar_1,
            name: 'Amy',
            },
            menu: [
            {
                id: 1,
                name: 'Crispy Chicken Burger',
                photo: require('../assets/images/crispy-chicken-burger.jpg'),
                description: 'Burger with crispy chicken, cheese and lettuce',
                calories: 200,
                price: 10,
            },
            {
                id: 2,
                name: 'Crispy Chicken Burger with Honey Mustard',
                photo: require('../assets/images/honey-mustard-chicken-burger.jpg'),
                description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
                calories: 250,
                price: 15,
            },
            {
                id: 3,
                name: 'Crispy Baked French Fries',
                photo: require('../assets/images/fries-rosemary.png'),
                description: 'Crispy Baked French Fries',
                calories: 194,
                price: 8,
            },
            ],
        },
        {
            id: 2,
            name: 'Pizza Den',
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: require('../assets/images/pizza-restaurant.jpg'),// images.pizza_restaurant,
            duration: '15 - 20 min',
            description: 'Hot and spicy pizza',
            address: '123 Wall St',
            location: {
                latitude: 50.13753185075901, 
                longitude: -97.31732800258142,
            },
            courier: {
            // avatar: images.avatar_2,
            name: 'Jackson',
            },
            menu: [
            {
                id: 4,
                name: 'Hawaiian Pizza',
                photo: require('../assets/images/Hawaiian-Pizza.jpeg'),
                description: 'Canadian bacon, homemade pizza crust, pizza sauce',
                calories: 250,
                price: 15,
            },
            {
                id: 5,
                name: 'Tomato & Basil Pizza',
                photo: require('../assets/images/pizza.jpg'),
                description:
                'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
                calories: 250,
                price: 20,
            },
            {
                id: 6,
                name: 'Beef Ragu',
                photo: require('../assets/images/Beef-Ragu.jpeg'),// images.tomato_pasta,
                description: 'Pasta with beef and tomato sauce',
                calories: 100,
                price: 10,
            },
            {
                id: 7,
                name: 'Mediterranean Chopped Salad ',
                photo: require('../assets/images/salad.jpg'),
                description: 'Finely chopped lettuce, tomatoes, cucumbers',
                calories: 100,
                price: 10,
            },
            ],
        },
        {
            id: 3,
            name: 'Kappadogs',
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: require('../assets/images/hot-dog-restaurant.jpg'),
            duration: '20 - 25 min',
            description: 'Hot and juicy hotdogs',
            address: '123 Wall St',
            location: {
                latitude: 49.19260737762959, 
                longitude: -89.25395066095224,
            },
            courier: {
            // avatar: images.avatar_3,
            name: 'James',
            },
            menu: [
            {
                id: 8,
                name: 'Chicago Style Hot Dog',
                photo: require('../assets/images/chicago-hot-dog.jpg'),
                description: 'Fresh tomatoes, all beef hot dogs',
                calories: 100,
                price: 20,
            },
            ],
        },
        {
            id: 4,
            name: 'Sushi Party',
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: require('../assets/images/japanese-restaurant.jpg'),
            duration: '10 - 15 min',
            description: 'Savory and delicious sushi',
            address: '123 Wall St',
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
            // avatar: images.avatar_4,
            name: 'Ahmad',
            },
            menu: [
            {
                id: 9,
                name: 'Sushi sets',
                photo: require('../assets/images/sushi.jpg'),
                description: 'Fresh salmon, sushi rice, fresh juicy avocado',
                calories: 100,
                price: 50,
            },
            ],
        },
        {
            id: 5,
            name: 'Cuisine',
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: require('../assets/images/noodle-shop.jpg'),
            duration: '15 - 20 min',
            description: 'Hot and delicious noodles',
            address: '123 Wall St',
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
            // avatar: images.avatar_4,
            name: 'Muthu',
            },
            menu: [
            {
                id: 10,
                name: 'Kolo Mee',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.kolo_mee,
                description: 'Noodles with char siu',
                calories: 200,
                price: 5,
            },
            {
                id: 11,
                name: 'Sarawak Laksa',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.sarawak_laksa,
                description: 'Vermicelli noodles, cooked prawns',
                calories: 300,
                price: 8,
            },
            {
                id: 12,
                name: 'Nasi Lemak',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.nasi_lemak,
                description: 'A traditional Malay rice dish',
                calories: 300,
                price: 8,
            },
            {
                id: 13,
                name: 'Nasi Briyani with Mutton',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.nasi_briyani_mutton,
                description: 'A traditional Indian rice dish with mutton',
                calories: 300,
                price: 8,
            },
            ],
        },
        {
            id: 6,
            name: 'Dessets',
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: require('../assets/images/kek-lapis.jpeg'),
            duration: '35 - 40 min',
            description: 'Sweet and mouth-watering sweets',
            address: '123 Wall St',
            location: {
                latitude: 35.695800322100474, 
                longitude: 139.71134304996212,
            },
            courier: {
            // avatar: images.avatar_1,
            name: 'Jessie',
            },
            menu: [
            {
                id: 12,
                name: 'Teh C Peng',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.teh_c_peng,
                description: 'Three Layer Teh C Peng',
                calories: 100,
                price: 2,
            },
            {
                id: 13,
                name: 'ABC Ice Kacang',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.ice_kacang,
                description: 'Shaved Ice with red beans',
                calories: 100,
                price: 3,
            },
            {
                id: 14,
                name: 'Kek Lapis',
                photo: require('../assets/images/burger-restaurant-2.jpg'),// images.kek_lapis,
                description: 'Layer cakes',
                calories: 300,
                price: 20,
            },
            ],
        },
        ]
}
