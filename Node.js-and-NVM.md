# Node.js version


## NVM

```sh
# help
$ nvm -h
$ nvm --help

# 远程的所有版本
$ nvm ls-remote
# 远程的 LTS 版本
$ nvm ls-remote --lts

$ nvm install 16.18.0
# 设置全局默认的 Node.js 版本
$ nvm alias default 16.18.0
# 指定当前要使用的 Node.js 版本
$ nvm use 16.18.0

# 查看本地的 Node.js 版本
$ nvm ls
       v10.15.3
->     v16.18.0
       v18.12.0
         system
default -> 16.18.0 (-> v16.18.0)
node -> stable (-> v18.12.0) (default)
stable -> 18.12 (-> v18.12.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/hydrogen (-> v18.12.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.20.1 (-> N/A)
lts/gallium -> v16.18.0
lts/hydrogen -> v18.12.0
```
