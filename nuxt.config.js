export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Kamruzzaman | Web & Android Application Developer",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },

            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            }
        ],
        script: [
            {
                type: "text/javascript",
                src: "https://code.jquery.com/jquery-3.2.1.slim.min.js"
            },
            {
                type: "text/javascript",
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            },
            {
                type: "text/javascript",
                src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/sass/app.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
		// https://pwa.nuxtjs.org/
        "@nuxtjs/pwa",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

	pwa: {
        meta: {
          title: 'Kamruzzaman | Web & Android Application Developer',
          author: 'Zaman',
          mobileAppIOS: true
        },
        manifest: {
          name: 'Kamruzzaman',
          short_name: 'Kamruzzaman',
          lang: 'en',
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
		publicPath: '/portfolio',
	},
	// generate for static site
	target: 'static'
};
