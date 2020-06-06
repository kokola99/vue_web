module.export = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        //parser: "babel-eslint",
    },
    env: {
    browser: true,
    node: true,
    es6: true,
    },
    rules:{
        'no-console':'off',
        "parser": "vue-eslint-parser"
    },
    extends: [
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue'
    ],
    // 添加自定义规则
    rules: {}
}