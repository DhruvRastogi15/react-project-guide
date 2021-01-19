# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)\



Notes :-

Folder Structure : 

1. package.json- a. Contains different scripts which can be run by command - npm run $ScriptName.

2. index.html- 
a. It is a normal html page. We will never add html pages in this projects.

b. Inside this index.html we have 
'<noscript>You need to enable JavaScript to run this app.</noscript>'
'<div id="root"></div>' this.
this is important as here we actually mount our react application.

3. manifest.json-
a. Here we can define some metadata about our application.

4. src folder.
    4.1 index.js- 
        a.It gets access to our root elemented to our DOM in our html file. 
        b.It also render our react application with render method.
    ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

    4.2 App.js-


What is DOM?
When a web page is loaded, the browser creates a Document Object Model of that page.
The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree
        
Understanding JSX?
Jsx is html code inside a js file in render method.
We can access JavaScript expression inside jsx by using curly braces.
Without curly braces those expressions are treated as strings.
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
for ex: -
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

Output : Hello, Harper Perez

After compilation JSX expressions becomes regular JS function call and evaluate to Java Script objects.

this means that you can use jsx inside if statement and for loop and assign it to variable, assign it to arguments and return it from functions.

Specifying Attributes with JSX : 

1. You may use quotes to specify string literals as attributes:
    ex: const element = <div tabIndex="0"></div>;

2. You may also use curly braces to embed a JavaScript expression in an attribute:
    ex: const element = <img src={user.avatarUrl}></img>;

Note: 
1.We can't put quotes around brackets when embedding a JS expression in an attribute. We should use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

2.Since JSX is more close to JS than HTML, ReactDOM uses camelCase property naming convention instead of HTML attribute name.
ex: class becomes className and tabindex becomes tabIndex.

JSX prevents Injection Attacks
It is safe to embed user input in JSX:
ex: const title = response.potentiallyMaliciousInput;
    // This is safe:
    const element = <h1>{title}</h1>;

By default ReactDOM excapes any values embedded in JSX before rendering them.
Thus it ensures you that you can never inject anything that is not explicitly written in your application.
Everything is converted into a string before being rendered.
This helps prevent XSS (cross-site-scripting) attacks.
ex:
    & becomes &amp;
    < becomes &lt;
    > becomes &gt;
    " becomes &quot;
    ' becomes &#39;
JSX represents Object :
Babel compiles down to React.createElement() calls

for ex: 
const element = (
  <h1 className="greeting">
  Hello World !.
  </h1>
)

const element = React.createElement(
  'h1',
  {className:'greetings'},
  'Hello World !'
);

React.createElement() performs a few checks to help you write bug free code but essentially it creates an object like this.

const element = {
  type: 'h1',
  props: {
    classname:'greetings',
    children:'Hellp World !'
  }
}

These objects are called "React elements". You can think of them as description of what you want to see on screen.
React reads these objects and uses it to construct the DOM and keep it upto date.


---------------------------------------------------------------------------------

Rendering Elements :
Elements are the smallest building blocks of a react app.
An element describes what you want to see on the screen.
React elements are cheap to create.
React DOM takes care of updating the DOM to match the react element.

To render a React element into a root DOM node, pass both to ReactDOM.render():
<div id="root"></div>
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));


Updating the rendered element :

React elements are immutable. It means that once we create an element, we can't change it's children or attributes.
An elements represents a single frame in a movie.
It represents the UI at a certain point of time.
The only way to update the UI is to create a new element and pass it to ReactDOM.render().

ex :
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

React DOM compares the element and it's children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.


--------------------------------------------------------------------------------

COMPONENTS:
Components let you split the UI into independent , reusable pieces and think about each piece in isolation.
Components are like JS functions. They accept arbitary inputs called as props and returns react elements describing what should appear on the screen.

Function Component : 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

This function in a valid react component because it accepts a single "props" object argument with data and react element.
We call such functions "Function Components" because they literally just returns JS functions.

Class Component:
We can also use ES6 class to define a component.

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Both these Class and functional component are equavalent from React's Point of view.

--------------------------------------------------------------------------------------------------------

Rendering a component

const element = <Welcome name='Dhruv'/>

When React sees an element representing a user defined component, it passes JSX attribute and children to this component as a single component.
We call these objects 'props'.

ex : const element = <Welcome name='Dhruv' />
	ReactDom.render(
		element,
		document.getElementByID('root')
		);

	function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
	}
	 
NOTE : 
Always start user defined component name with capital letters.
React treats components starting with lower case letters as DOM tags.
For eg <div/> represents an html div tag, but <Welcome/> represents a component and requires Welcome to be in the scope.

Composing Components
Component can refer to other components in their output.
This let us use the same component abstraction for any level of detail.
A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

Props are Read Only

Component must never modify it's own props weather we declare it as function or class component.
Pure Function
ex: function sum(a, b) {
return a+b;
}
This is a pure function as it do not attempt to change their input and always returns same result for same input.

Impure Function 
ex : function withdraw(account, amount) {
account.total -= amount;
}
This is impure function as it changes it's own input.

ALL REACT COMPONENT MUST ACT LIKE PURE FUNCTIONS WITH RESPECT TO THEIR PROPS.

-------------------------------------------------------------------------------------------------------------------------

State and Lifecycle

Here we want is to write this code once and have the clock updated itself.

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

To implement this we need to add "state" to the <Clock/> component. 
State is similar to props but the only difference is state is private and fully controlled by the component.

Converting a Function to a Class.
Steps:
  i. Create an ES6 class, with the same name that extends React.Component.
 ii. Add a single empty method to it called render().
iii. Move the body of the function into render() method.
 iv. Replace props with this.propsin the render() body.
  v. Delete the remaining empty function declaration. 

ex: class Clock extends React.Component {
render() {
	return (
		<div>
			<h1>Hello World !</h1>
			<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
		</div>
		);
		}
	}

}

Clock is rather defined as class rather than a function.
The render() method will be called each time an update happens, but as long as we render <Clock/> into a same DOM node, only a single instance of Clock class will be used.
This let us use additional features such as local state and lifecycle methods.


Adding local state to a class.
Steps:
  i. Replace this.props.date to this.state.date inside render() method.
 ii. Add a class constructor that assigns the initial this.state.
iii. Remove the date prop from the <Clock /> element.
ex:
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 componentDidMount() {
	this.timerID = setInterval(
      		() => this.tick(),
		      1000
    		);
  	   }

  componentWillUnmount() {
	clearInterval(this.timerID);
  }

  tick() {
	    this.setState({
      	date: new Date()
    	});
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


Adding Lifecycle methods to Class

In applications with many components, it is very important to free up resources taken up by the component when they are destroyed.
We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
We can declare special methods on the component class to run some code when a component mounts and unmounts:
Finally, we will implement a method called tick() that the Clock component will run every second.
All the points explained here are implemented in the above example step by step.

Reacalling all steps:
Steps:
  i.When <Clock/> is passed to ReactDOM.render(), React calls the constructor of the Clock Component.
    Since Clock needs to display the current time,it initializes this.state with an object incuding current time.
    We will later update this state.

 ii.React then calls the Clock Components render() method. 
    This is how React learns what should be displayed on the screen.
    React than updates the DOM to match the Clock's render output.

iii.When the clock output is inserted in the DOM,React calls the componentDidMount() lifecycle method.
    Inside it, the Clock component ask the browser to setup a timer to call the component's tick() method once a second.

 iv.Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.
 Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM
  
   v.If the Clock component is ever removed from the DOM, React calls the componentWillUnmount lifecycle methodso the timer is stopped.



USING STATE CORRECTLY

1. Do not modify state directly.

this.state.comment = 'hello'; //WRONG 

this.setState({
  comment : 'Hello'
});                           //RIGHT

The only place where we can assign this.state is constructor.

2. State updates may be Asynchronous.


