/*
  NOTE:
  This object sole purpose is to gather the static strings together 
  and serve as a base for a possible future multi language support.
*/
export const Translation = {
  en: {
    meta: {
      title: `Matrix Labs`,
      description: `High liquidity multi-chain swaps, lightning-fast perpetual futures, & 1 click yields.`,
    },
    common: {
      launchApp: `Launch App`,
      enterApp: `Enter App`,
      learnMore: `Learn More`,
      comingSoon: `Coming Soon!`,
      subscribe: `Subscribe`,
      subscribed: `Subscribed!`,
    },
    error: {
      emptyEmail: `Input is empty`,
      invalidEmail: `Input is not an email`,
    },
    menupoint: {
      about: `About`,
      community: `Community`,
      learn: `Learn`,
      docs: `Docs`,
      blog: `Blog`,
      mediaKit: `Media Kit`,
      technicalDocs: `Technical Docs`,
      whitepaper: `Whitepaper`,
      faq: `FAQ`,
      contact: `Contact`,
      support: `Support`,
      privacyPolicy: `Privacy Policy`,
      cookiePolicy: `Cookie Policy`,
      termsOfUse: `Terms of Use`,
      disclaimer: `Disclaimer`,
    },
    communityMenupoint: {
      twitter: `Visit Our Official Twitter Page`,
      discord: `Join the Matrix Labs Community on Discord`,
      medium: `Catch Up on Announcements in Our Medium Blog`,
      telegram: `Join the Official Matrix Labs Telegram Channel`,
      annTelegram: `Matrix Labs Announcement Telegram Channel`,
      blog: `Catch Up on Our Latest Blog Posts`,
      learn: `Learn How to Buy $MATRIX Tokens`,
      whitepaper: `Read the Matrix Labs Whitepaper`,
    },
    header: { },
    footer: {
      joinCommunity: `Join Our Community`,
      emailPlaceholder: `youremail@example.com`,
      copyright: `Copyright`,
      allRightsReserved: `All rights reserved.`,
    },
    blog: {
      title: `Blog`,
      description: `Learn more about Matrix Labs, DeFi, trading, and much more.`,
      recommendedPosts: `More To Explore`,
      allPosts: `All Posts`,
      loadMore: `Load more posts`,
      sharePost: `Share this post`,
    },
    section: {
      intro: {
        title: `Redefining What’s Possible in Decentralized Finance`,
        description: `High liquidity multi-chain swaps, lightning-fast perpetual futures, & 1 click yields.`,
      },
      apps: {
        title: `Explore our suite of Defi protocols`,
        swap: {
          title: `MatrixSwap`,
          description: `Swap & trade quickly on Polygon, BSC, Avalanche, & Fantom.`,
          action: `Enter DEX Aggregator`,
        },
        perp: {
          title: `MatrixPerp`,
          description: `Start trading derivatives on Polygon mainnet.`,
          action: `Trade on Mainnet Beta`,
        },
        zap: {
          title: `MatrixZap`,
          description: `Instantly “Zap” all of your tokens into a farms and start earning rewards.`,
          action: ``,
        },
      },
      features: {
        title: `Matrix Labs provides unique features for DeFi users and projects`,
        price: {
          title: `Best Swap Prices`,
          description: `Our DEX Aggregator grabs liquidity from multiple AMMs within Polygon Network and Binance Smart Chain and executes trades accordingly.`,
        },
        speed: {
          title: `Lightning Fast Perpetual Swaps`,
          description: `Matrix Labs brings on-chain perpetual futures to Polygon. Making derivatives trading simple and easy. (More chains coming soon)`,
        },
        comfort: {
          title: `‘Zap’ Your Tokens With 1 Click`,
          description: `Our Zapper function allows you to “Zap” all of your tokens into farms so you can start earning rewards.`,
        },
        swap: {
          title: `Multiple chains. One decentralized exchange.`,
          description: `MatrixSwap is currently available on four different chains - Polygon, BSC, Avalanche, and Fantom. Aggregating over $3billion in liquidity, you can now swap your favorite tokens within these four chains for the absolute best prices. Enjoy some unique features, too.`,
          multiToken: `Multi Token Swaps`,
          nukeButton: `Emergency Nuke Button`,
        },
        perp: {
          title: `Trade Perpetuals. Up to 25x Leverage.`,
          description: `Using the power of Virtual AMMs (vAMMs), derivatives traders can leverage their favorite assets on Polygon with perfect price execution, low fees, and fast transactions. MatrixPerp offers infinite on-chain liquidity and allows traders up to 25x leverage.`,
        },
        zap: {
          title: `Instantly “Zap” Your Tokens With 1 Click`,
          description: `Another amazing feature within our suite of tools is “MatrixZap.” MatrixZap allows you to quickly “Zap” your tokens quickly into a Liquidity Pool that allows you to earn interest with specific APRs. You can also “Zap” out of your positions allowing you more freedom to do as you choose with your tokens.`,
        },
        security: {
          title: `Decentralized. Secured by Halborn.`,
          description: `We’ve heard too many horror stories within this industry and that’s why we make the security of your funds our absolute priority. Trusted by industry leaders such as Avalanche, Terra Labs, Dapper, Phantom, and more, Matrix Labs’ products have been audited by Halborn Security. `,
          secured: `Secured by`,
        },
      },
      about: {
        title: `About Us`,
        description: `Matrix Labs aims to build an ecosystem of DeFi products that currently features high liquidity swaps, perpetual futures trading, and one-click farming.`,
      },
      roadmap: {
        title: `Project Roadmap`,
        milestones: {
          item1: `Public IDO and DEX Listing`,
          item2: `Liquidity Mining Program`,
          item3: `DEX Aggregator on Polygon`,
          item4: `Emergency Nuke Button Deployment on Polygon`,
          item5: `Matrixswap MVP on Mumbai (Polygon) Testnet`,
          item6: `Trading Competition on Beta Mainnet`,
          item7: `Limit Orders and Stop Loss for MatrixSwap`,
          item8: `BSC Integration into MatrixSwap`,
          item9: `Avalanche Integration into MatrixSwap`,
          item10: `Fantom Integration Into MatrixSwap`,
          item11: `Moonbeam Integration Into MatrixSwap`,
          item12: `Moonriver Integration Into MatrixSwap`,
          item13: `Matrixswap Rebrand`,
          item14: `DeFi Self-Compounder (MatrixZap)`,
          item15: `Single Asset Staking`,
          item16: `Bug Bounty Program`,
          item17: `Defiverse Development`,
          item18: `Governance Launch`,
          item19: `Yoroi Wallet Integration`,
          item20: `Matrixswap Router Cardano Mainnet`,
          item21: `Testing and Deployment on Cardano Testnet`,
          item22: `Cardano Plutus Smart Contracts Integration`,
          item23: `Matrixswap Deployment on Milkomeda Sidechain for Cardano`,
          item24: `In-Game Item NFT Sale`,
          item25: `Cross-chain Swap Development`,
          item26: `Metaverse Integration with Netvrk`,
          item27: `3rd Party Blue Chip Defi Smart Contract Integrations into Defiverse`,
          item28: `Defiverse Game Development`,
          item29: `Defiverse Play To Earn Development`,
          item30: `Whitelabel Perpetual Swaps For Partnered DeFi Protocols`,
          item31: `NFT Perpetual Swaps`,
          item32: `Insurance Fund Yield Generation`,
          item33: `Longtail Assets Private Markets`,
          item34: `DEX Router Pathfinder Algorithm Optimization`,
          item35: `Swap & Send on DEX Router`,
          item36: `Chart Integration for DEX Router`,
          item37: `Perp Lite UI`,
        },
      },
      team: {
        title: `Core Team`,
      },
      advisors: {
        title: `Advisors`,
      },
      launchpad: {
        title: `MatrixVerse Launchpad`,
        description_html: `<b>MatrixVerse Launchpad</b> is for curated incubator designed for Metaverse projects. MatrixVerse 
        is the only launchpad program that focuses on incubating Metaverse projects from the ground up and driving significant 
        growth post-launch.</br>
        </br>
        In a nutshell, MatrixVerse will multiply value accrual to $MATRIX stakers, grow the Matrix Ecosystem, build key building 
        blocks in DeFi, grow talent and developer mindshare.
        `,
      },
      vision: {
        title: `Our Vision`,
        description: `Advancing multi-chain DeFi protocols that are user-friendly and open for everyone.`,
      },
      partners: {
        title: `Ecosystem Partners`,
      },
      investors: {
        title: `Backed By The Best`,
      },
      community: {
        title: `Community`,
      },
      social: {
        telegram: {
          title: `Telegram`,
          description: `Connect With Matrix Labs’ Community`,
        },
        twitter: {
          title: `Twitter`,
          description: `Follow For The Latest News & Updates`,
        },
        discord: {
          title: `Discord`,
          description: `Get Involved With The Matrix Labs Team`,
        },
        github: {
          title: `Github`,
          description: `Find Out What We’re Building`,
        },
        medium: {
          title: `Medium`,
          description: `Catch Up On Latest News`,
        },
      }
    },
  }
}

export default Translation;
