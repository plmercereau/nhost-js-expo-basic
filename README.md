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

If I put back exactly these into my yarn.lock (copied form the project where the nhost-js worked) then it works again:

```
"@nhost/hasura-auth-js@^0.1.8":
  version "0.1.8"
  resolved "https://registry.yarnpkg.com/@nhost/hasura-auth-js/-/hasura-auth-js-0.1.8.tgz#3dfef5e5828ceddd4687501168d5ac6865ebf64e"
  integrity sha512-KTXNOgVFGZ+pChIon64113XC03hWFT0tHVvpKKr1zdBqHkXWgxqsbxsgxIPYaaFIG1yYenPdCBCRwV5srXVP4Q==
  dependencies:
    "@types/jwt-decode" "^2.2.1"
    axios "^0.21.1"
    jwt-decode "^2.2.0"
    query-string "^7.0.1"

"@nhost/hasura-storage-js@^0.0.5":
  version "0.0.5"
  resolved "https://registry.yarnpkg.com/@nhost/hasura-storage-js/-/hasura-storage-js-0.0.5.tgz#de085189c582960194c0cc0b2bc2f096affc2168"
  integrity sha512-6XDm57bt0f2skeglinP4HCUsWbyipb+8MZLld5XPqxaNTM4lUs7QlY1VLOcukL91YnF6IC4kZYYD9ge+on6JUg==
  dependencies:
    axios "^0.21.1"

"@nhost/nhost-js@^0.3.3":
  version "0.3.3"
  resolved "https://registry.yarnpkg.com/@nhost/nhost-js/-/nhost-js-0.3.3.tgz#48a251faade2aff1debb3ef7e3f60de2d06d3fdc"
  integrity sha512-ika/YxdLOysDlb6JXFnhrCJmnasO8/tnICuDqVWmqU6JkrW5z+hEcbOImNzo7oRMLFVWM/FjeuQ+tFgE26KDDw==
  dependencies:
    "@nhost/hasura-auth-js" "^0.1.8"
    "@nhost/hasura-storage-js" "^0.0.5"
    axios "^0.23.0"
    jwt-decode "^3.1.2"
    query-string "^7.0.1"
```
