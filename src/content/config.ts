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

const talkSchema = z.object({
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


export type PublicationSchema = z.infer<typeof publicationSchema>;
export type TalkSchema = z.infer<typeof talkSchema>;

const publicationCollection = defineCollection({ schema: publicationSchema });
const talkCollection = defineCollection({ schema: talkSchema });

export const collections = {
    'publications': publicationCollection,
    'talks': talkCollection
}