import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: "2024-01-07",
    dataset: 'production',
    projectId: 'ii4p4xsg',
    useCdn: false
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}