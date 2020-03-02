# JavaScript

- https://www.youtube.com/watch?v=iWOYAxlnaww
- https://github.com/iamshaunjp/modern-javascript

- HTML boiler blate = type doc then tab (emmet in visual studio code)
- Script tags at end of body to avoid loading issues
- ```sh
    alert("hello world");
  ```
- ```sh
  console.log("hi");
  ```
- Variables
  - Store a value
  - Must contain only
    - letters
    - numbers
    - underscores
  - Can't use spaces
  - Can't start with a number
  - Reserved keywords
    - let
    - const
  - ```sh
    let age = 25;
    ```
  - ```sh
    console.log(age);
    ```
  - let can be overriden
  - const is a constant
- camelCase looks like the hump in a camel's back
- Data Types

  - Number
  - String
  - Boolean
    - true / false
    - not in quotes / not strings
  - Null
    - Explicity set a variable with no value
  - Undefined
    - Variables not yet defined
  - Objects
    - Complex data structures - Arrays, Dates, Object Literals, Functions, etc
      - Functions
        - A method is a function that does something
      - Objects have
        - Properties
        - Methods (things it can do)
  - Symbol
    - Used with objects
  - Control Flow
  - A loop is a type of control flow in JavaScript
    - e.g. a loop on an array of data toUpperCase
  - Conditionals
    - ```sh
      is (some conition is true) {
      do something
      }
      ```
  - Types
    - Primitive Types (Stack)
      - numbers
      - strings
      - Booleans
      - null
      - undefined
      - symbols
    - Reference Types (Heap)
      - all types of objects
        - object literals
        - arrays
        - functions
        - dates
        - all other objects
    - Value is stored on stack (quicker)
    - Space inside stack is limited
    - Heap (slower) stores reference types
