# esbuild-react18-useclient

<img src="./esbuild-react18-useclient\esbuild-react18.jpg?raw=true" title="Build Awesome Libraries using React Server Components and make your Mark!" style="width:100%"/>

> Build Awesome Libraries using React Server Components and make your Mark!

This is an `esbuild` plugin for compiling libraries compatible with React 18 server and client component, Nextjs13, Remix, etc.

Introduction of React server components in React 18 has unlocked immense possibilities. However, library authors are not yet able to fully encash upon this potential. Many libraries like `chakra-ui`, simply add "use client" for each component. However, much more can be unlashed when we can use both server and client components to build libraries.  

This plugin seamlessly integrates with `tsup` and other builders based on `esbuild`. With this you can have both server and client components in your library and the plugin will take care of the rest. All you need to do is add this plugin and add `"use client";` on top of client components.

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