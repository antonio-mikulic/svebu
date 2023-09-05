/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'http://svebu-wp.local/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	},
	defaultCachePolicy: 'NetworkOnly'
};

export default config;
