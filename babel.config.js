module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'corejs': '3.27.2',
        'useBuiltIns': 'entry'
      }
    ]
  ]
}
