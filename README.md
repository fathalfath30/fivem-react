# FiveM React

This repository is a basic boilerplate project for FiveM to getting started develop NUI and LUA application

## Requirement
- `node >= v20.9.0`
- `npm >= 8.15.0` or `yarn >= 1.19.1`

## Getting Started

Here is the basic project structure, feel free to modify the content, but don't forget to adjust especially `fxmanifest.lua`, `bundler.js`, `tsconfig.json`, `vite.config.ts`

```
.
├── client               # FiveM client script goes here
│   └── Client.lua       # This is sample client script
├── server               # FiveM server script goes
│   └── Server.lua       # This is sample server script
├── src                  # NUI react js goes here
│   ├── components       # Any react components should be in here
│   │   └── App.tsx      # Sample Components
│   ├── fonts            # FiveM fonts resource
│   ├── style            # React style using *.scss (you can use *.css too)
│   ├── main.tsx         # Main React script
│   ├── utils.tsx        # Some utilities that you can use in further development
│   └── vite-env.d.ts 
├── .gitignore
├── .yarn.installed
├── bundler.js           # This script will compile your code and create `dist.zip`
├── fxmanifest.lua       # FiveM resource manifest
├── index.html           # Basic HTML file
├── package.json
├── README.json
├── tsconfig.json
├── vite.config.json
└── README.md
```
### Setup

1. Clone this repository into your local computer
    ```shell
    $ git clone git@github.com:fathalfath30/fivem-react.git
    ```

2. Install the library using `yarn` or `npm`
   ```shell
   # using yarn
   $ yarn install

   # or

   # using npm
   $ npm install
   ```

## Deploying

you can use this command to build bundle this repository into `dist.zip` 

```shell
$ yarn build
```

it will create archive file with name `dist.zip` as default `dist.zip` contains `ui/*`, `client/*`, `serever/*` and `fxmanifest.lua` you can specify file and folder to be archived by editing `bundler.js` and update variable `listFile`.