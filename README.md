# Technical test for day one

The test description can be found [here](https://dayoneengagement.notion.site/Test-technique-Full-Stack-c8d748bb837c4b6cbfb82f1a70071e6a).

### `Architecture`

All code source is under src folders.  
In the views folder you can find all pages, a route is a page;  
In the features folders you'll find the projects features, under it's folders with all it needs (hooks, not shared 
component)  
In the shared folder you'll find all the meaning shared, context, reusable components, types;  
In the routes folder you'll find all the routes for the app  
It's like atomic design
```
project
|
|____src
|______config
|
|______features
|_________todo
|_________todos
|_________filters
|
|______views
|
|______shared
|_________context
|_________components
|_________types
|
|______routes
```
### `Missing or do it better`

In this project, it's missing the unit test cause of time.  
Some functions are complex, they could be simplified, I missed some time to refactor them;
The graphql side can be simplified too I think.
