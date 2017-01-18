# How to Contribute
- Before create any pull requests, please open a issue explaining the situation (bug or enhacement)
- Be sure to follow the eslint rules (webpack will always output its results)
- Be sure before open the pull request, to test the existent code and/or create tests if you made a new feature.

## Development Environment (Sandbox Mode)
**Be sure all the dev-dependencies are installed.**
Just run the command:
```
npm start
```

This will make the webpack compile the dev. env. and set up into a
webserver with hot deployment into the localhost:8080. There you can make
changes into the plugin and see in real time all your modifications running.
Also, every modification will trigger the eslint, so alway check your code style!

You can modify and see live all the modifications changing the file:
```
dev-env/index.js
```
**Be sure not commit this file!**

## Testing and Building
After develop/fix a bug, before do a **pull request**, run the test command:
To run the build, before install the npm and gulp dependencies, then run:
```
npm run test
```

If you just want to use the latest version directly from the source code just do:
```
npm run gulp
```
All the files will be outputed in the *dist/* directory