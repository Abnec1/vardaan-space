import type { CollectionEntry } from 'astro:content';

export type BlogPostData = CollectionEntry<'blog'>['data'];

export const getBlogImages = (post: BlogPostData) =>
	post.images?.length ? post.images : post.heroImage ? [post.heroImage] : [];

export const getPrimaryBlogImage = (post: BlogPostData) => getBlogImages(post)[0];

export const getReadingTime = (content?: string | null) => {
	const words = content?.trim().split(/\s+/).filter(Boolean).length ?? 0;
	return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
