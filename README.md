# Weather App

## Status 
* **January 10th, 2020** - Application is mostly done, API consumption is next.

## Prologue
I write React (in TypeScript) quite often for work. However we rarely have a need to make 
things "flashy". I had been wanting to use [react-spring](https://www.react-spring.io/) 
and [recharts](http://recharts.org/) for a while, so a weather app seemed like a logical 
way to implement the two in a single project.

## Implementation
The libraries used were chosen for their simplicity and capabilities. The only major 
"requirement" I had going in to this was that I wanted to use a graphing library that 
would render using SVG instead of canvas so that DPI was not a concern.

### Build
* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

### Structure
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)

### Visuals
* [react-spring](https://www.react-spring.io/)
* [recharts](http://recharts.org/)
* [Weather Icons](https://erikflowers.github.io/weather-icons/)

### Data
* [DarkSky API](https://darksky.net/dev)
