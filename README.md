# <project name here>
 
## Project setup
1. Download latest version from github
2. Install required components from root folder by using command `npm i`

## Development
1. Reuired nodejs. Install nodejs `brew install nodejs` 
2. Required Anular Cli. Install `npm install -g @angular cli`
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build for development
Run `ng build` or `ng build --dev` for build in development mode. For more information please check: https://github.com/angular/angular-cli/wiki/build

### Build for test server
Run `ng build --test` for build in test mode and work on the test server


### Build for production
Run `ng build --prod` for build in production mode. ( enables AOT, uses environment production, removes sourcemaps ect.)

## Further help for angular CLI
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional Info
### WebConfig Azure
Azure project need WebConfig to work with Angular Routing, it is located in src folder and is automatically copied to dist forlder during build

### Build analyze tool
Project contains build-in project analyzer. To see what packages are used in final build please run 'npm run analyze'. It is very helpful for final package size optimization
