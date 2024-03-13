import React, { Component } from 'react';
class MyComponent extends Component {
 state = {
 count: 0
 };
 handleClick = () => {
 this.setState(prevState => ({
 count: prevState.count + 1
 }));
 };
 render() {
 return (
 <div>
 <h1>Count: {this.state.count}</h1>
 <button onClick={this.handleClick}>Increment</button>
 <ChildComponent onClick={() => console.log('Button clicked!')} />
 </div>
 );
 }
}
const ChildComponent = ({ onClick }) => {
 return (
 <div>
 <button onClick={onClick}>Click me</button>
 </div>
 );
};
export default MyComponent;


//In this example, MyComponent renders a ChildComponent and passes an inline function as a prop onClick. Every time MyComponent re-renders, a new inline function is created, even though the functionality remains the same. This can lead to unnecessary re-renders of ChildComponent, impacting performance.


class MyComponent extends Component {
 state = {
 count: 0
 };
 handleClick = () => {
 this.setState(prevState => ({
 count: prevState.count + 1
 }));
 };
 handleClickChild = () => {
 console.log('Button clicked!');
 };
 render() {
 return (
 <div>
 <h1>Count: {this.state.count}</h1>
 <button onClick={this.handleClick}>Increment</button>
 <ChildComponent onClick={this.handleClickChild} />
 </div>
 );
 }
}
