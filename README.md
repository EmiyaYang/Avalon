# Avalon

博客, 不止于博客.

## 启动

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 实现细节

### graphql + axios

1. yarn add graphql graphql-tag
2. webpack config
3. ts typing \*.graphql
4. import \*.graphql
5. import { print } from 'graphql/language/printer'
