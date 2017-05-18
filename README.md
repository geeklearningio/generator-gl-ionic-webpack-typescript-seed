# gl-ionic-webpack-typescript-seed-generator
All the things needed to make an awesome Ionic App built with Webpack and Typescript.

## Why another generator? And Why Ionic 1?
One year ago, Ionic 2 and Angular 2 were really promising but still in Beta, Webpack was starting to win over Gulp and Typescript was in the Hipster phase. 
In this context, we ha to make clean, reusable, production ready hybrid apps. So to avoid all the "it's still in Beta" problems, we decided to go with Ionic 1 and Angular 1, but went for Webpack and Typescript to have a cleaner and more reusable code.

## Why this generator?
Because it does exactly what we wanted : fast developpment AND production ready apps. And it took a while to get to this point with these new technologies.

### Fast development
- **A fastcss Webpack configuration**: At the time we made this conf, the css and sass processors were really slow. So that a simple change in the scss would make a full recompilation of the sass code (more than 1 second) and a full reload of the page. So, only in dev mode, we use gulp to handle the generated css. Result: the compilation is instant and only the css file is reloaded => BLAZING FAST.
- **Sass and Typescript sourcemaps**: In dev mode ("npm run serve"), Webpack will generate the sourcemaps of the sass and Typescript files to help you debug your application.
- **App already in Typescript**: It's kinda hard to get good articles explaining how to write Angular1 apps in Typescript. So with this seed, you already have a good example of how to do so.

### Production ready
- **Minification safe**: No need to do annotations on Angular to avoid problems at minification. ng-annotate does it all for you.
- **Autoprefix new css rules**: No need to prefix new css rules like "-webkit-", autoprefixer does it for you.
- **Easily configure environments**: Between the dev app and the production app, ore even the preproduction app, some variables will change (Google Analytics id, APi endpoints etc...). We use [https://github.com/geeklearningio/gl-angular-configuration](gl-angular-configuration) to do that. There is only one js file at the root of www containing all these variables which are loaded before your angular app. So you can get them even at the Angular config stage.

## What could be better
- **Webpack 2.0**: We don't really have the time right now to migrate to Webpack 2.0. If you're interested in it, PR are more than welcome.
- **Typings**: So we updated to Typescript 2.0, but we're still using Typings to get Typescript typings. We have some weird errors with the new @typings system using npm and don't really have time to look into it. Motivated? PR are welcome!

## How to use

### Installation

#### CLIs
We need some CLis installed as global packages :
- **Yeoman**: To run this generator.
- **Cordova**: To build your Cordova app.
- **Typings**: To manage Typescript typings. For more information: https://github.com/typings/typings
```
npm install -g yo cordova typings
```

#### Run the generator
Install this generator using npm:
```
npm install generator-gl-ionic-webpack-typescript-seed
```

Run it using Yeoman:
```
yo gl-ionic-webpack-typescript-seed
```

### What to do from here?

#### Useful NPM scripts
- **serve**: Creates a local instance of your app running on your default browser. Everytime you change your code, the page is automatically reloaded.
- **build:development**: Build your development app to test it on a real device or an emulator. The sourcemaps are here and your code is not minified. Everything you need to debug your app.
- **build:production**: Everything is minified and ready to go to production.

You can use these scripts by running:
```
npm run the-script
```

- **Serve**: Creates a local instance of your app running on your default browser. Everytime you change your code, the page is automatically reloaded.

#### Cordova: add and build your platforms
No Cordova platforms are specified in this seed. You can add and build your own like always:
```
cordova platforms add ios
```
```
cordova build ios
```
