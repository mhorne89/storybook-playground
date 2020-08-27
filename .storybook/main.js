module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-actions',
        '@storybook/addon-essentials'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                {
                    loader: 'less-loader',
                    options: { lessOptions: { javascriptEnabled: true } }
                }
            ]
        });

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        });

        return config;
    }
};
