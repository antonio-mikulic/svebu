export const ENV = {
	WP_URL: import.meta.env.VITE_PUBLIC_WORDPRESS_BASE_URL as string,
	WP_API_URL: import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL as string
} as const;
