import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name', 
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description', 
      validation: rule => rule.max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the restaurant'
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant'
    },
    {
      name: 'lng',
      type: 'number',
      title: 'longitude of the restaurant'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address', 
      validation: rule => rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1 and 5',
      validation: rule => rule.required().min(1).max(5).error('Enter a value between 1 and 5')
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews'
    },
    {
      name: 'type',
      type: 'array',
      title: 'Category', 
      validation: rule => rule.required(),
      of: [{type: 'reference', to: [{type: 'category'}]}]
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes', 
      of: [{type: 'reference', to: [{type: 'dish'}]}]
    },
  ]
})
