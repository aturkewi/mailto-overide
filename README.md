# eMailTo:Clipboard

## Check out [eMailTo:Clipboard](https://chrome.google.com/webstore/detail/mailto-overide/dpckhpnekcojocijmcdpondmicbkbgpo) in the chrome store!

To use it, simply install the extension, then any time after that, if you click on an email address that would normally open your email client, it will just copy the address to your clipboard instead! That simple.

### To Do:

- Rework the logic so that the extension does not remove all it's event listeners and create all new ones _every_ time the page has mutated.
 - [ ] Check to see if mutations removed links that were being watched and only _then_ remove the listener for that link. 
 - [ ] Check to see if mutation adds a new `mailto:` link and then add a new listener just for that link. 