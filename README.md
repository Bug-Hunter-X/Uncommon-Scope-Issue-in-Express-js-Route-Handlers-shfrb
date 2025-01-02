# Uncommon Scope Issue in Express.js Route Handlers

This repository demonstrates a subtle scoping issue that can occur in Express.js applications when route handlers improperly access variables.

## Bug Description

The bug lies in the `GET /users/:id` route.  It attempts to access the `users` array, which is declared and populated within the `POST /users` route.  Because of this, the GET route will encounter a `ReferenceError` since `users` is not in its scope.  This is not immediately obvious and represents an uncommon error in Express.js development.

## Bug Solution

The solution involves properly managing the `users` array.  The ideal approach depends on the application's scale and persistence requirements.  For a simple demonstration, a globally accessible variable is used.  In a production setting, one should typically use a database for persistent storage.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js`. 
5. Send a POST request to `http://localhost:3000/users` with a JSON payload (e.g., `{"id": 1, "name": "John"}`).
6. Send a GET request to `http://localhost:3000/users/1`. You will encounter an error.   Uncomment the bugSolution.js and run it to fix the bug.