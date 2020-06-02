module.export = {
    root: true,
    env: {
        browser: true,
        node: true,
<<<<<<< HEAD
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        //parser: "babel-eslint",
=======
        es6: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
>>>>>>> 5c64f468d5f06e15ccb89560918102670d634f8b
    },
    env: {
    browser: true,
    node: true,
    es6: true,
    },
    rules:{
        'no-console':'off',
<<<<<<< HEAD
        "parser": "vue-eslint-parser",
=======
        "parser": "vue-eslint-parser"
>>>>>>> 5c64f468d5f06e15ccb89560918102670d634f8b
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