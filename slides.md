---
layout: slides
title: "React Workshop"
permalink: /slides/
---

# Introduction to React
<!-- .slide: data-background-color="#3498db" style="color: white;" -->

Building Modern Web Apps

---

## React Applications
- **Mobile Apps, Web Apps, Interactive UI**  
- **Facebook** → built React itself  
- **Instagram** → React Router heavily used  
- **Netflix, Uber, Airbnb** → fast, interactive UI  
- **WhatsApp Web, Discord** → real-time React apps  

---

## What is React?

**React is a JavaScript library for building user interfaces (UIs).** 

Think of it like **Lego bricks** for websites. You build small, reusable pieces (**components**) and then assemble them to create a full application.

**It makes building dynamic UIs simple and reusable.**

---

## How to Set Up React project in your development environment

1. **Install Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a New React App**: Use the following command to create a new React application:

   ```bash
   npx create-react-app my-app
   ```

   Replace `my-app` with your desired project name.

3. **Navigate to Your Project Directory**:

   ```bash
   cd my-app
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   This will start the development server and open your new React app in the browser.

5. **Edit Your App**: Open the `src/App.js` file in your favorite code editor and start building your React components!

---

## What are the components in React?

**Components in React are reusable building blocks of UI, like Lego pieces.**

### Example Code:

```jsx
function WelcomeMessage() { // component of React
  return <h1>Welcome to React!</h1>;
}
```

### Example Code:

```jsx
function HelloMessage() { // name of component should start with an uppercase letter
  const name = "Yuvraj";
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p> Nice to meet you!</p>
    </>
  );
}
```

### How to Call Components

```jsx
function App() {
  return (
    <>
      <WelcomeMessage></WelcomeMessage>
      <HelloMessage />
    </>
  );
}
```

### How to import and export components

```jsx
import './BestProf.css';

function BestProf() {
    return <h2 className="best-prof">Professor Anirban is the best!</h2>;
}
```

```css
.best-prof {
    color: blue;
    font-weight: bold;
}
```
#### To export the `BestProf` component from its file, you would use:

```jsx
// BestProf.js
import './BestProf.css';

export default function BestProf() {
    return <h2 className="best-prof">Professor Anirban is the best!</h2>;
}
```

Or

```jsx
// BestProf.js
import './BestProf.css';

function BestProf() {
    return <h2 className="best-prof">Professor Anirban is the best!</h2>;
}
export default BestProf;
```

#### To import the `BestProf` component in another file, you would use:

```jsx
import BestProf from './BestProf';

function App() {
    return (
        <div>
            <h1>Who is the best professor?</h1>
            <BestProf />
        </div>
    );
}
```

---

## Props

Props (short for "properties") are a way to pass data from a parent component to a child component in React. They allow you to make your components more dynamic and reusable.

### How to Use Props

1. **Passing Props**: You can pass props to a component by adding attributes to the component when you use it.

```jsx
function App() {
    return (
        <div>
            <BestProf name="Anirban" />
        </div>
    );
}
```

2. **Receiving Props**: In the child component, you can access the props using the `props` object.

```jsx
function BestProf(props) {
    return <h2 className="best-prof">Professor {props.name} is the best!</h2>;
}

// here props is the dictionary which contains all the props passed to the component
```

Example Code:

```jsx
function StudentIdCard({ name, RollNo, Branch, Batch }) {
  return (
    <div>
      <h3>Student Name: {name}</h3>
      <p>Roll No: {RollNo}</p>
      <p>Branch: {Branch}</p>
      <p>Batch: {Batch}</p>
    </div>
  );
}
```

```jsx
function App() {
  
  let StudentData = {
    "name": "Yuvraj Rathod",
    "RollNo": "24110293",
    "Branch": "AI",
    "Batch": "2024"
  }

  return (
    <div>
      <StudentIdCard name={StudentData.name} RollNo={StudentData.RollNo} Branch={StudentData.Branch} Batch={StudentData.Batch} /> {/* OR you can do <StudentIdCard {...StudentData} /> */}
    </div>
  );
}
```

---

## conditional Rendering

```jsx
function Login({ isLoggedin }) {
    if(isLoggedin) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please Sign in.</h1>;
    }
}
```

```jsx
function App() {
    return (
        <div>
            <Login isLoggedin={true} />
        </div>
    );
}
```

### List Rendering

```jsx
function App() {
    let rollNumbers = ["24110001", "24110002", "24110003", "24110004", "24110005"];

    return (
        <>
        {rollNumbers.map((rollNumber) => (
            <div key={rollNumber}>{rollNumber}</div>
        ))}
        </>
    )
}
```

### Working with List of Dictionaries

```jsx
function App(){
    let students = [
        {"name": "Yuvraj Rathod", "RollNo": "24110293", "Branch": "AI", "Batch": "2024"},
        {"name": "B", "RollNo": "24110294", "Branch": "CS", "Batch": "2024"},
        {"name": "C", "RollNo": "24110295", "Branch": "EE", "Batch": "2024"}
    ];

    return (
        <>
        <h1>Student List</h1>
        {students.map((student, index) => (
            <div key={index}>
            <h2>Student {index + 1}</h2>
            <StudentIdCard {...student} />
            </div>
        ))}
        </>
    );
}
```

You can also use `ternary(?:)` or `Logical AND(&&)` operators for conditional rendering.

---

## Event Handling in React

React allows you to handle events such as clicks, form submissions, and more. You can attach event handlers directly to your components.

### Example Code:

```jsx
function App() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
```

---

## States

**State** = A variable that React keeps track of
When state changes, the component re-renders automatically to show the new value

---

## **useState** hook for state management

`useState` is a hook which lets you add state to your functional components.

```jsx
// To call useState hook you need to import it by following expression
import { useState } from 'react';

// You can declare state variables like this
const [stateVariable, setStateVariable] = useState(initialValue);
// stateVariable is the current state value
// setStateVariable is the function to update the state
// initialValue is the initial value of the state
```

### Example Code:

```jsx
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    function changeCountValue(amount){
        setCount(count + amount);
    }

    return (
        <div>
            <button onClick={() => changeCountValue(-1)}>Decrement</button>
            <button onClick={() => changeCountValue(1)}>Increment</button>
        </div>
    );
}
```

### Let's Make a form for Student Registration

```jsx
import { useState } from "react";

function App(){
    const [student, setStudent] = useState({
        name: "",
        rollNo: "",
        branch: "",
        batch: ""
    });

    function handleChange({key, value}){
        setStudent((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    function handleSubmit(){
        console.log("Student Registered:", student);
    }

    return (
        <>
            <h1>Student Registration</h1>
            <input type="text" placeholder="name" value={student.name} onChange={(e) => handleChange({key: "name", value: e.target.value})} /><br />
            <input type="text" placeholder="rollNo" value={student.rollNo} onChange={(e) => handleChange({key: "rollNo", value: e.target.value})} /><br />
            <input type="text" placeholder="branch" value={student.branch} onChange={(e) => handleChange({key: "branch", value: e.target.value})} /><br />
            <input type="text" placeholder="batch" value={student.batch} onChange={(e) => handleChange({key: "batch", value: e.target.value})} /><br />
            <button onClick={handleSubmit}>Register</button>
        </>
    )
}
```
### [Learn How to work with array in useState hook](https://www.freecodecamp.org/learn/full-stack-developer/lecture-working-with-state-and-responding-to-events-in-react/how-do-you-update-arrays-in-state)
---

## **useEffect** hook for side effects

`useEffect` lets you run some code automatically after React has updated the screen.

Think of `useEffect` like an **alarm clock**:
 - You tell it when to ring (the dependency array)
 - When the condition happens, it runs the code you gave it

```jsx
// import useEffect
import { useEffect } from 'react';

// you can use it like below
useEffect(() => {
    // Your side effect code here
}, [dependencies]);
```

---

### Let's get back to the counter example

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // triggers when count changes

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
};
```

