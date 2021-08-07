# Micro-Frontends

### Routing
There are 3 types of routing techniques in SPAs
* Browser History Routing
* Hash Routing
* In-Memory History routing

##### Browser History Routing
It is a routing technique that maintains the route state via the URL. It pushes/pops new URL states to and from 
the browser's route stack.

Examples:
https://vighnesh153.com
https://vighnesh153.com/experience
https://vighnesh153.com/connect

##### Hash Routing (Shitty one. No one uses this anymore because this is ugly)
It is a routing technique where we store the routes' path part as routes' hash in the URL.

Examples:
https://vighnesh153.com
https://vighnesh153.com/#/experience
https://vighnesh153.com/#/connect

##### In-Memory History Routing
It is a routing technique where we store the routes in-memory of the app. If we reload the page, 
the entire app's route state is lost and the user is taken to the root page.

#### When should we use what in micro-frontends?
We should use
* Browser History routing in the container app
* In-Memory History routing in the child micro-frontends

##### Why?
Because the Browser History Router implementation is different in different frameworks (Angular, React, Vue). If we allow 
any micro-frontend child app to change the route of the entire app, then there might be some race conditions as different 
routers instances might try to change the route at the same time. So, we will use Memory History router in child 
micro-frontends. 

> In development mode, we can use Browser History router in child micro-frontends as it will make development easier.
