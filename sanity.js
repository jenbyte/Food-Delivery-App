import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'pqox38n0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-06-06'
})

const builder = imageBuilder(client);

export const urlFor = source => builder.image(source);

export default client;

// (11:30) sanity cors add http://localhost:3000