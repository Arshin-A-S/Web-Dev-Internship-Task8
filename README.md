# Functional To-Do List Application (CRUD)
I developed this lightweight, responsive CRUD (Create, Read, Update, Delete) application to master the fundamentals of Vanilla JavaScript and DOM manipulation. The project focuses on efficient state management—ensuring the user interface remains perfectly synced with the underlying data.

## Key Features I Implemented

### Dynamic Task Management:

* Create: I added the ability to create tasks through the input field, triggered by either clicking the "Add Task" button or pressing the Enter key.

* Read: Tasks are dynamically rendered from a JavaScript array, which acts as the application's source of truth.

* Update: I implemented a toggle feature that updates the task status and visual styling when marked as finished.

* Delete: Users can instantly remove specific tasks from the list using the delete action.

### Structured Grid Layout: 
To improve readability, I designed the task list using CSS Grid:

* Auto-numbering: Each task is automatically assigned a number based on its index in the list.

* Semantic Hierarchy: Task names are rendered as headings (h3) to create a clear visual distinction from the action buttons.

### Visual Feedback & UI States:

* I applied conditional CSS classes so that completed tasks receive a strike-through effect and a color shift.

* I enhanced the "Complete" button to highlight and change its label to "✓ Done" once clicked, providing immediate confirmation to the user.

### Data Validation: 
I included basic validation to sanitize strings and prevent empty tasks from being added to the list.
