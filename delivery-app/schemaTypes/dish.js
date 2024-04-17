import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name', 
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish Description', 
      validation: rule => rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of dish'
    }
  ],
})
