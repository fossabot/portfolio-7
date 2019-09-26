module.exports = {
    siteMetadata: {
        title: "Portfolio | Gero Gerke",
        description: "Gero Gerke is a German Web- and Android-Developer.",
        author: "@Empty2k12",
        twitterUsername: "@Empty2k12"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/public`
            }
        },
        {
            resolve: "gatsby-transformer-sharp"
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Portfolio | Gero Gerke",
                short_name: "Gero Gerke",
                start_url: "/",
                background_color: "#282c35",
                theme_color: "#5e6167",
                display: "minimal-ui",
                icon: "src/image/me16_16_round.png"
            }
        },
        "gatsby-plugin-offline"
    ]
};
