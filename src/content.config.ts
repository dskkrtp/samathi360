import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    image: z.string(),
    order: z.number(),
    category: z.string(),
    featured: z.boolean().default(false)
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),

    eventDate: z.coerce.date(),

    startTime: z.string(),
    endTime: z.string(),

    location: z.string().optional(),

    image: z.string(),

    buttonText: z.string(),

    featured: z.boolean(),

    published: z.boolean(),

    order: z.number(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/awards" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    order: z.number(),
    videoUrl: z.string().optional(), 
    galleryImages: z.array(z.string()).optional(),
  }),
});

const profiles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profiles" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    templateType: z.enum(['active', 'upcoming']),

    highlights: z.array(z.string()).optional(),
    
    // Educations บังคับใส่ (description รองรับทั้ง string และ array)
    educations: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })),

    // 3 หัวข้อหลัง ไม่บังคับใส่ (description รองรับทั้ง string และ array เช่นกัน)
    certifications: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })).optional(),

    awards: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })).optional(),

    training: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })).optional(),

    facilitator: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })).optional(),

    influencer: z.array(z.object({
      title: z.string(),
      description: z.union([z.string(), z.array(z.string())]),
    })).optional(),
  }),
});

export const collections = {
  courses,
  events,
  awards,
  profiles
};