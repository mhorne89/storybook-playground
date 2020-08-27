import '@storybook/addon-console';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
        default: 'White',
        values: [
            {
                name: 'White',
                value: '#fff'
            },
            {
                name: 'Dark Blue',
                value: '#0b2f61'
            }
        ]
    }
}