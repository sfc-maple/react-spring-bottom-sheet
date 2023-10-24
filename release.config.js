module.exports = {
  plugins: [
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/github',
      {
        assets: 'release/*.tgz',
      },
    ],
    '@semantic-release/git',
  ],
  preset: 'angular',
  branches: ['main'],
}
