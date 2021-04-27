const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-vercel');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
    preprocess: [
        preprocess({
            defaults: {
                style: 'postcss',
            },
            postcss: true
        }),
    ],

	kit: {
        // Add vercel adapter. ! Switch if you want to use something else :)
        adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
