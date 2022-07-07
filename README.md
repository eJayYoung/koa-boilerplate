# koa-boilerplate

a typescript boilerplate for koa project，start with nodemon


## Directory Structure

```
|-- src
  |-- app.ts                // main entry for total server
  |-- routes                // define routes
    |-- index.ts            // automatic extract sub routes, and combine to main router
  |-- controllers           // define controllers
  |-- services（optional）   // define services
  |-- configs               // define public config, and environment config
|-- tsconfig.json           // typescript configuration
|-- .eslintrc.json          // eslint configuration
``` 

## Getting Started
- Clone the repository
```
git clone --depth=1 git@github.com:eJayYoung/koa-boilerplate.git <project_name>
```

- Install dependencies
```
cd <project_name>

yarn
```

- Run the project directly in TS
```
yarn start
```

- Build the project to JS
```
yarn build
```

- Run eslint and fix lint error
```
yarn lint

yarn lint:fix
```
