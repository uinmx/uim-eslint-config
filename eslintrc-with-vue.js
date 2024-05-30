
module.exports = {
  // 设定此配置文件为项目根目录下的配置文件，ESLint会忽略父级目录中的配置
  root: true,
  
  // 指定环境变量
  env: {
    // 定义全局变量和解析规则适用于浏览器环境
    browser: true,
    // 定义全局变量和解析规则适用于Node.js环境
    node: true,
    // 启用ECMAScript 2015 (ES6)的全局变量和模块功能
    es6: true,
  },
  
  // 指定解析器，这里使用vue-eslint-parser，它支持.vue文件的解析
  parser: 'vue-eslint-parser',
  
  // 解析器选项配置
  parserOptions: {
    // 使用TypeScript解析器
    parser: '@typescript-eslint/parser',
    // 指定ECMAScript版本
    ecmaVersion: 2020,
    // 指定代码为ES模块
    sourceType: 'module',
    // 设置JSX使用的元素，这里为React
    jsxPragma: 'React',
    // 启用 JSX 支持
    ecmaFeatures: {
      jsx: true,
    },
  },
  
  // 扩展其他规则集
  extends: [
    // 使用Vue 3的推荐规则集
    'plugin:vue/vue3-recommended',
    // 使用TypeScript的推荐规则集
    'plugin:@typescript-eslint/recommended',
    // 使用Prettier的推荐规则集，提供代码格式化规则
    'plugin:prettier/recommended',
  ],
  
  // 自定义规则
  rules: {
    // 强制在<script setup>中使用的变量声明
    'vue/script-setup-uses-vars': 'error',
    // 禁用禁用ESLint对TypeScript的@ts-ignore的警告
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 禁用显式函数返回类型的规则
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 禁用禁止使用any类型的规则
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁用禁止require()的规则
    '@typescript-eslint/no-var-requires': 'off',
    // 禁用禁止空函数的规则
    '@typescript-eslint/no-empty-function': 'off',
    // 禁用Vue自定义事件命名的大小写规则
    'vue/custom-event-name-casing': 'off',
    // 禁用变量在使用前不能被定义的规则
    'no-use-before-define': 'off',
    // 对TypeScript代码也禁用变量在使用前不能被定义的规则
    '@typescript-eslint/no-use-before-define': 'off',
    // 禁用禁用ESLint对TypeScript的// @ts-comment的警告
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁用禁止特定类型的定义
    '@typescript-eslint/ban-types': 'off',
    // 禁用禁止使用非空断言操作符的规则
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 禁用显式模块边界类型的规则
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 启用未使用变量的规则，并忽略下划线开头的参数和变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 对JavaScript代码也启用未使用变量的规则，并忽略下划线开头的参数和变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 禁用函数圆括号前的空格规则
    'space-before-function-paren': 'off',
    
    // Vue.js 相关的规则
    'vue/attributes-order': 'off', // 禁用Vue属性排序规则
    'vue/one-component-per-file': 'off', // 禁用每个文件只能有一个组件的规则
    'vue/html-closing-bracket-newline': 'off', // 禁用HTML闭合标签的换行规则
    'vue/max-attributes-per-line': 'off', // 禁用每行最多属性数的规则
    'vue/multiline-html-element-content-newline': 'off', // 禁用多行HTML元素内容的换行规则
    'vue/singleline-html-element-content-newline': 'off', // 禁用单行HTML元素内容的换行规则
    'vue/attribute-hyphenation': 'off', // 禁用属性连字符化的规则
    'vue/require-default-prop': 'off', // 禁用Vue组件的默认prop规则
    'vue/require-explicit-emits': 'off', // 禁用Vue组件的显式emits声明规则
    // 定义HTML自闭合标签的规则，void、normal、component、svg和math都设置为'always'
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 禁用多单词组件名称的规则
    'vue/multi-word-component-names': 'off',
  },
};
