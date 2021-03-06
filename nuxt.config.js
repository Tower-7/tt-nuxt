export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  // head: {
  //   title: "BACI CABINETS",
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: "description" }
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  // },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/element-ui", "@/plugins/vue2-google-maps"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: "./assets/variables.scss"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/, "vue2-google-maps"],
    postcss: [
      require("autoprefixer")({
        browsers: ["last 2 versions", "> 5%"]
      })
    ]
  }
};
