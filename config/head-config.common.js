/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/assets/icon/favicon.ico' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/normalize.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/reset.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/common.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/frame.css' }
  ],
  meta: [
  ]
};
