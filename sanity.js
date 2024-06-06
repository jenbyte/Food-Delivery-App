import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: '',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-06-06'
})