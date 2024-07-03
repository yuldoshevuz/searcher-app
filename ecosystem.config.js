module.exports = {
    apps: [
        {
            name: 'Searcher client',
            script: 'serve',
            args: '-s build -l 3000',
            cwd: './frontend',
            env: {
                PORT: 3000,
            },
        },
        {
            name: 'Searcher server',
            script: 'backend/dist/index.js',
            watch: true
        },
    ],
};
