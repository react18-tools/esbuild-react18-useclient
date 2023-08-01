# esbuild-react18-useclient

<img src="https://github.com/mayank1513/esbuild-react18-useclient/blob/main/esbuild-react18.jpg?raw=true" title="Build Awesome Libraries using React Server Components and make your Mark!" style="width:100%"/>

> Build Awesome Libraries using React Server Components and make your Mark!

This is an `esbuild` plugin for compiling libraries compatible with React 18 server and client component, Nextjs13, Remix, etc.

## Why? 

- Unleash the power of combining react client and server components in your libraries
- TypeScript out of the box
- Simple and tiny
- Easy to use — just add the plugin, and you are good to go

Introduction of React server components in React 18 has unlocked immense possibilities. However, library authors are not yet able to fully encash upon this potential. Many libraries, like `chakra-ui`, simply add “use client” for each component. However, much more can be unleashed when we can use both server and client components to build libraries. Also check-out this [blog](https://mayank1513.medium.com/unleash-the-power-of-react-server-components-eb3fe7201231).

## Compatibility

- JavaScript/TypeScript React libraries using `tsup` or other builders based on `esbuild` 

This plugin seamlessly integrates with `tsup` and any other builders based on `esbuild`. With this you can have both server and client components in your library and the plugin will take care of the rest. All you need to do is add this plugin and add `"use client";` on top of client components (in your source code).

## Add dependencies:

```bash
yarn add --dev esbuild-react18-useclient
```

or

```bash
pnpm add -D esbuild-react18-useclient
```

or

```bash
npm install -D esbuild-react18-useclient
```

> If you are using `monorepo` or `workspaces` you can install this plugin to root using `-w` or to specific workspace using `--filter your-package` or `--scope your-package` for `pnpm` and `yarn` workspaces respectively.

## Use with `tsup`

```javascript
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import reactUseClient from "esbuild-react18-useclient";

export default defineConfig(options => ({
    ...
    esbuildPlugins:[reactUseClient]
}));
```

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
