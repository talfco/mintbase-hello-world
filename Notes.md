# API Key
94f3ce88-3aa5-4503-8dc5-4d696a8580b6


## Less Stytlsheets

* https://github.com/jonycheung/deadsimple-less-watch-compiler

# Important Files
* `public/index.html` - This is the HTML file that consumes the bundle generated by Create-React-App's hidden tooling.
* `src/index.tsx` This is the TypeScript entry point file. 
  * All of the project's dependencies are mapped out by Webpack (all set up for us invisibly by CRA) using this file. 
    The bundle generated is injected into `public/index.html`. 
  * This file has a few responsibilities. The most important are:
    * import our main React component
    * Render that App component to the DOM using `ReactDom.render()`
* `src/App.tsx` - This is our main React Component. The .tsx extension tells us that the file uses both TypeScript and JSX. 
  This is the main component in our app which is rendered to the DOM by ReactDOM. We'll spend most of our time in this 
  file getting the hang of writing React code using TypeScript.
* `tsconfig.json` - This is the TypeScript configuration file. This file was generated for us by `Create-React-App` and 
  we can freely edit this configuration to best suit our needs.
  
# References
* [Thisdot Tutorial](https://labs.thisdot.co/blog/getting-started-with-react-and-typescript)