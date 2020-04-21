module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/468effd7f3f54454a7bf0b8464a95437?v=f39474ad6118488ea07445599fb0ca30"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/b4cd49c3bfe3433fbb3203ab78cc5057?v=ae958766cf244f7bbf32c037a2c10252"
            }
        }
    ],
}
