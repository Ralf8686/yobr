const babelLoader = function (conf) {
  return conf.loader === 'babel'
}

function rewire (config, env) {
  const babelrc = config.module.loaders.find(babelLoader).query
  babelrc.plugins = [
    // не работает jest, заменил на NODE_PATH=src/ в .env
    // ['module-resolver', { 'root': ['src'] }],
    'babel-plugin-idx',
    'styled-jsx-postcss/babel',
    // 'flow-react-proptypes',
    'tcomb'
  ].concat(babelrc.plugins || [])

  // delete config.eslint.configFile
  // config.eslint.useEslintrc = true

  return config
}

module.exports = rewire
