const path = require('path');

module.exports = ({
  notesDirectory = 'content/',
  notesFileExtensions = ['.md', '.mdx'],
  noteTemplate = path.join(__dirname, 'src/templates/note.js'),
  additionalNoteTypes = {},
  rootPath = '/',
  rootNote = 'about',
  linkifyHashtags = false,
  hideDoubleBrackets = true,
  mdxOtherwiseConfigured = false,
  themeUIOtherwiseConfigured = false,
}) => ({
  siteMetadata: {
    title: 'My Notes',
  },
  plugins: [
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory,
        notesFileExtensions,
        noteTemplate,
        additionalNoteTypes,
        rootPath,
        rootNote,
        linkifyHashtags,
        hideDoubleBrackets,
        mdxOtherwiseConfigured,
      },
    },
    !themeUIOtherwiseConfigured && `gatsby-plugin-theme-ui`,
  ],
});
