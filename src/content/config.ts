import { z, defineCollection } from "astro:content";
const publicationSchema = z.object({
    title: z.string(),
    auther: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    paperUrl: z.string().optional(),
    slideUrl: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type PublicationSchema = z.infer<typeof publicationSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const publicationCollection = defineCollection({ schema: publicationSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'publications': publicationCollection,
    'store': storeCollection
}