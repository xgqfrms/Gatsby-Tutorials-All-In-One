// 自定义 ts declare, 修复 image 报错信息

// Cannot find module '../images/icon.png' or its corresponding type declarations.ts(2307)

// 把 png 图片声明为 webpack 的模块
declare module '*.png';

// declare module '*.svg';
// declare module '*.gif';
// declare module '*.jpeg';
// declare module '*.jpg';
// declare module '*.webp';
// declare module '*.apng';


