module.exports = {
  siteMetadata: {
    title: `Kota Cepu | Selamat datang di kampung halaman`,
    name: `Kota Cepu`,
    siteUrl: `https://kotacepu.com`,
    description: `Website galeri foto Kota Cepu`,
    hero: {
      heading: `Selamat datang di kampung halaman`,
      maxWidth: 652,
    },
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/kotacepu`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/kotacepu`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/kota_cepu`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
  pathPrefix: "/kc",
};
