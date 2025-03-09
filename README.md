# **ReactManagementApp/📚Project Manager**

*Project Manager is a web—based project and task management application. Allows you to create projects, add tasks to them, and manage them and deadlines.*

*🚀 Functionality*

📂 Project creation — the ability to add new projects with a name, description and deadlines.

✅ Add and remove tasks — manage a list of tasks within a project.

🔄Selecting the current project — switching between the created projects.

🗑 Deleting projects — the ability to completely delete a project with all tasks.

🖥 Modal Windows — using React Portals for user-friendly interaction.


*🛠️ Technology*

React — dynamic interface update.

Tailwind CSS styling and user—friendly layout.

useState, useRef, useImperativeHandle — state management and interaction between components.

React Portals (createPortal) — for modal windows.

Local State — storing data about projects and tasks inside React.

Component-Based Architecture — separation of code into reusable components.

ES6+ (Modern JavaScript) — using modern JS features.

START PAGE: Where you can create a new project. In the center is the message "No Project Selected" and the "Create new project" button. On the left is a list of projects, which is still empty, and the "+ Add Project" button to add new ones.
<img width="1438" alt="Снимок экрана 2025-03-09 в 10 37 14 PM" src="https://github.com/user-attachments/assets/9fce1180-1325-4792-bb5a-5a1daf9efedf" />


You can fill in the data for the project and specify the deadline

<img width="1414" alt="Снимок экрана 2025-03-09 в 10 43 48 PM" src="https://github.com/user-attachments/assets/da546ec9-2e7e-4ce8-9219-cf652a987582" />



This interface allows you to manage project tasks:
Create new tasks to complete.
Delete completed tasks using the "Clear" button.
Delete the entire project if it is no longer needed.
View deadline issues

<img width="1431" alt="Снимок экрана 2025-03-09 в 10 43 24 PM" src="https://github.com/user-attachments/assets/886faf13-06be-47ce-9e78-d4b49ae70c62" />



📌 Future improvements

Backend connection (for example, Firebase or Django).

Advanced customization (themes, display settings).

Schedules and analytics (number of tasks, completion status).
