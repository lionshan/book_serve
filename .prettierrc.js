module.exports = {
  'editor.fontSize': 20,
  'files.autoSave': 'on',
  'eslint.autoFixOnSave': true,
  '[html]': {
    'editor.defaultFormatter': 'vscode.html-language-features'
  },
  '[css]': {
    'editor.defaultFormatter': 'michelemelluso.code-beautifier'
  },
  'eslint.enable': true,
  'eslint.run': 'onType',
  'eslint.options': {
    extensions: ['.js', '.vue']
  },
  tabWidth: 4, // tab 使用两个空格
  arrowParens: 'avoid',
  singleQuote: true,
  semi: true,
  trailingComma: 'none',
  'eslint.validate': [
    'javascriptreact',
    'javascript',
    {
      language: 'vue',
      autoFix: true
    },
    'html',
    {
      language: 'html',
      autoFix: true
    }
  ]
};
