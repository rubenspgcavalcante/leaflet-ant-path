# Important checks
- Before creating any pull requests, please open an issue explaining the situation
- Be sure to follow the eslint rules
- Be sure, **before opening the pull request**, to test the existent code and/or create tests if you made a new feature or
changed an already existing one.

## Issues
Should be in the format:

```text
**Type:**
- [x] bug  
- [ ] feature
- [ ] enhancement
- [ ] question
 
**Environment:**
 - OS: Windows 10
 - Browser: Chrome 63
 - Library Version: 0.6.4
 
**I'm going to open a PR:**
- [x] yes
- [ ] no
 
**Description:**  
The polyline doesn't appear
```

## Pull Requests
- On the description of the pull request set the issue id for closing it:
```text
Now the polyline appears normally. Closes #41
```

## Following the guideline
Please follow the above rules, so the repo can stay consistent and easy for everyone finding questions and
already solved issues. Be aware that your PR can be denied if you don't follow then :cry:

# Developing

## Development Environment (Sandbox Mode)
**Be sure all the dev-dependencies are installed.**
Just run the command:
```
npm start
```

This will make the webpack compile the dev. env. and set up into a
webserver with hot deployment into the localhost:8080. There you can make
changes into the plugin and see in real time all your modifications running.
Also, every modification will trigger the eslint, so always check your code style!

You can modify and see live all the modifications changing the file:
```
dev-env/index.js
```
**Be sure not commit this file!**

## Testing and Building
After develop/fix a bug, before doing a **pull request**, run the test command:
To run the build, before installing the npm and gulp dependencies, then run:
```
npm test
```

If you just want to use the latest version directly from the source code just do:
```
npm run build
```
All the files will be outputted in the *dist/* directory
