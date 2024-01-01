import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'@nuxt/image',
		'nuxt-icon',
		'nuxt-swiper'
	],
	ssr: true,
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			// link: [{ rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
			link: [
				{
					rel: 'icon',
					href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚗</text></svg>',
					type: 'image/svg+xml'
				}
			]
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	},
	runtimeConfig: {
		public: {
			backendUrl: 'http://localhost:8000',
			frontendUrl: 'http://localhost:3000',
			appName: 'elAuto',
			version: '1.0.0',
			productsPerPage: 24
		}
	},
	imports: {
		dirs: ['./utils', './stores']
	},
	devtools: {
		enabled: false
	},
	tailwindcss: {
		viewer: false
	},
	i18n: {
		locales: [
			{
				code: 'en',
				file: 'en-US.json',
				name: 'English 🇺🇸'
			},
			{
				code: 'hy',
				file: 'hy-AM.json',
				name: 'Հայերեն 🇦🇲'
			},
			{
				code: 'ru',
				file: 'ru-RU.json',
				name: 'Русский 🇷🇺'
			}
			// {
			//     code: 'de',
			//     file: 'de-DE.json',
			//     name: 'Deutsch 🇩🇪'
			// },
			// {
			//     code: 'es',
			//     file: 'es-ES.json',
			//     name: 'Español 🇪🇸'
			// },
			// {
			//     code: 'fr',
			//     file: 'fr-FR.json',
			//     name: 'Français 🇫🇷'
			// },
			// {
			//     code: 'it',
			//     file: 'it-IT.json',
			//     name: 'Italiano 🇮🇹'
			// },
			// {
			//     code: 'pt',
			//     file: 'pt-BR.json',
			//     name: 'Português 🇧🇷'
			// }
		],
		langDir: 'locales',
		defaultLocale: 'en',
		strategy: 'no_prefix'
	},
	image: {
		dir: './static'
	},
	// nitro: {
	//   prerender: {
	//     concurrency: 10,
	//     interval: 1000,
	//     // failOnError: false,
	//   },
	// },
	components: [
		{
			path: '~/components/cartElements',
			pathPrefix: false
		},
		{
			path: '~/components/filtering',
			pathPrefix: false
		},
		{
			path: '~/components/forms',
			pathPrefix: false
		},
		{
			path: '~/components/generalElements',
			pathPrefix: false
		},
		{
			path: '~/components/shopElements',
			pathPrefix: false
		},
		'~/components'
	]
});
