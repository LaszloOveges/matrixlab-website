export const Routes = {
  Menu: {
    Landing: `/`,
    About: `/about`,
    Blog: `/blog`,
    BlogArticle: (slug: string) => (`/blog/${slug}`),
  },
  Legal: {
    PrivacyPolicy: `/privacy-policy`,
    TermsOfUse: `/terms-of-use`,
    Legal: `/legal`,
  },
};

export const ExternalRoutes = {
  Menu: {
    Faq: `https://docs.matrixswap.io/`,
    Contact: `https://docs.matrixswap.io/`,
    Whitepaper: `https://docs.matrixswap.io/`,
    Docs: `https://docs.matrixswap.io/`,
    Blog: `https://www.matrixswap.io/blog`,
    Learn: `https://www.matrixswap.io/blog`,
    Swap: `https://router.matrixswap.io/`,
    Perpetual: `https://perp.matrixswap.io/`,
    // Faq: `//docs.matrixlab.io`,
    // Contact: `//docs.matrixlab.io`,
    // Whitepaper: `//docs.matrixlab.io`,
    // Docs: `//docs.matrixlab.io`,
    // Blog: `//blog.matrixlab.io`,
    // Learn: `//blog.matrixlab.io`,
    // Swap: `//router.matrixlab.io`,
    // Perpetual: `//perp.matrixlab.io`,
    // Zapper: `//zap.matrixlab.io`,
  },
  Social: {
    AnnouncementTelegram: `https://t.me/matrixswapexchange`,
    Telegram: `https://t.me/matrixswapofficial`,
    Twitter: `https://twitter.com/matrixswap`,
    Discord: `https://discord.com/invite/nRJXNtZBe6`,
    Github: `https://github.com/Matrixswap`,
    Medium: `https://matrixswap.medium.com/`,
  },
};
