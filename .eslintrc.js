module.exports = {

  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // 不需要
    'space-before-function-paren': 0 // 函数定义时括号前面要不要有空格
  }
}
