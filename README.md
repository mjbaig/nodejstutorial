# nodejstutorial
Sample Callback, Promise, Coroutine, httpServer, and ExpressJS Sample Code

## Legend
Synchronous Code: Code that runs in order
Asynchronous Code: Code that run parallel to the node application and is not run in the stack.

## Blocked Code
This code will run in order because none of the functions require any external API calls

## Async Code
This code requires the import of fs: a built in node library. FS requires external calls to function correctly, so its asynchronous unless you tell it otherwise.

In this code, I'm tyring to feed the data extracted from package.json to the packageJson variable. The variable is initialized outside of the scope of the read file callback function.

I add a console.log() to the end of the funtion to print out the file string.

#### Does it work? : No
#### Why? : because node doesn't wait for readFile to complete its operation before moving on. A wait wouldn't solve the issue either, because node will complete everything on the stack before accepting callbacks from the event loop.

## Callback Code
This code attempts to do the same thing as the Async code, but it works as expected. I placed a console.log() underneath the readFile process to show that it logs the file after finishing the stack.

## Promise Code
This code does the exact same thing as the Callback Code, but its syntactically different. Promises are the most accepted way to manage the oder of execution

## CoRoutine Code
This code does the exact same thing as the Callback Code and Promise Code. Again its jut syntactically different. This is my preferred method of managing the order of execution because it looks cleaner and more familiar than callsbacks or promises.

## Simple server
This code will create a simple http server. If you go to localhost:8080, it will send back res.writeHead(...) as the header and res.end(...) as the body. In this instance, I'm sending back a json.

This server is too simple to be incredibly useful. However, its create for just hosting some static files.

## Express Server
This code uses express js to create a server.

ExpressJS is like the Spring of NodeJS. Its the most widely used webframework to create web applications using node.
Its about as simple to make an express app as it is to create the "Simple Server" application from above. However, this framework allows the user to map request paths and send controllers as callback functions.


