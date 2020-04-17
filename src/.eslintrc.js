module.export  = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
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