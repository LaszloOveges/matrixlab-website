export const Routes = {
  Menu: {
    Landing: `/`,
    About: `/about`,
    Blog: `/blog`,
    BlogArticle: (slug: string) => (`/blog/${slug}`),
  },
  Legal: {
    PrivacyPolicy: `/document/privacy-policy`,
    CookiePolicy: `/document/cookie-policy`,
    TermsOfUse: `/document/terms-of-use`,
    Disclaimer: `/document/disclaimer`,
  },
};

export const ExternalRoutes = {
  Menu: {
    Faq: `https://docs.matrixswap.io/general/faq`,
    Contact: `https://docs.matrixswap.io/general/official-matrixswap-links`,
    Whitepaper: `https://docs.matrixswap.io/`,
    Docs: `https://docs.matrixswap.io/`,
    Learn: `https://docs.matrixswap.io/library/learning-center-and-blog`,
    Swap: `https://router.matrixswap.io/`,
    Perpetual: `https://perp.matrixswap.io/`,
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
