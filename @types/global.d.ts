declare module 'ant-design-vue/lib' {
  function foo(): any
  export = foo
}

declare module 'nuxt' {
  const obj: { Nuxt: any; Builder: any }
  export = obj
}

declare module '*.json' {
  const content: any
  export default content
}

declare module '*.graphql' {
  const content: any
  export default content
}
