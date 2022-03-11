When using `@nhost/nhost-js` in vanilla React Native Expo for web (generated using expo version 5.0.3) starting the app fails with an error like this:

```
Web Bundling JavaScript [============================================================    ] 93%Using node to generate images. This is much slower than using native packages.
› Optionally you can stop the process and try again after successfully running `npm install -g sharp-cli`.

Web Bundling complete 7964ms
./node_modules/@nhost/nhost-js/dist/index.es.js 3:17982
Module parse failed: Unexpected token (3:17982)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| var or=Object.create;var oe=Object.defineProperty;var ir=Object.getOwnPropertyDescriptor;var ar=Object.getOwnPropertyNames;var ur=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var lr=r=>oe(r,"__esModule",{value:!0});var j=(r...
```

To reproduce the error:

1. yarn
2. yarn start
3. Press "w" to start as react native web app

App startup fails with the error above.

I successfully used `@nhost/nhost-js` with version `0.3.3` before, which included these packages:

```
"@nhost/hasura-auth-js@^0.1.8":
"@nhost/hasura-storage-js@^0.0.5":
"@nhost/nhost-js@^0.3.3":
```

The strange thing is that even if I now use the specific `"@nhost/nhost-js:0.3.3` version, which worked before, it would still fail with a similar error.

