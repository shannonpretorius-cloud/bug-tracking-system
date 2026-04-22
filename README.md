# Bug Tracking System

## 1. Project Title
Bug Tracking System

---

## 2. Project Description
The Bug Tracking System is a simple web-based application designed to help users create, manage, and track software bugs or issues. The purpose of this system is to simulate a real-world issue tracking tool where tickets can be created, updated, assigned, and resolved efficiently. It allows users to monitor the progress of issues through different workflow stages such as Open, In Progress, Resolved, and Overdue.

---

## 3. Features

### Core Functionalities:
- Ticket creation
- Ticket listing (displaying all issues)
- Ticket view and editing
- Ticket deletion
- Status updates (Open, Close)

### Enhancements:
- Dynamic status and priority updates
- Persistent storage using localStorage
- Improved user interaction with buttons and dropdown filters

---

## 4. Technologies Used
- HTML
- CSS (basic styling or Bootstrap if applied)
- JavaScript
- localStorage (Web Storage API)
- All created within Visual Studio Code

---

## 5. System Structure / Components
The system is structured into the following components:

- **User Interface (UI):** A simple dashboard displaying tickets in a list format with action buttons.
- **Ticket System:** Handles creation, editing, deletion, and status updates of tickets.
- **Data Storage:** Uses browser localStorage to store ticket data persistently.
- **Logic Functions:** JavaScript functions manage filtering and updating ticket data.
- **People & Projects Management:** Separate pages to manage team members and projects, integrated into the ticket system.

---

## 6. How to Run the Project
1. Download or clone the project folder.
2. Open the `login.html` file in any modern web browser.
3. The system will load automatically and display the bug tracking interface where you can login.
4. Use `people.html` and `projects.html` to add team members and projects.
5. No installation or server setup is required.

---

## 7. How to Use the System

### Create a Ticket:
Enter brief description, priority, person and project issue is assigned to, detailed description of what is wrong and how it was resolved,then press "Add Ticket".

### Edit a Ticket:
Click the "View" button on the issue to make some updates.

### Delete a Ticket:
Click the "Delete" button to remove a ticket permanently.

### Change Status:
Click "View" to change the issue status.

### Manage People & Projects:
Use `people.html` to add team members and `projects.html` to add projects. These appear on the "Create New Ticket" block.

---

## 8. Data Storage Explanation
The system uses `localStorage` to store ticket, people, and project data in the browser. This allows tickets to remain saved even after the page is refreshed or reopened. Data is stored in JSON format and converted back into JavaScript objects when loaded.

---

## 9. Sample Data / Test Cases
The system is designed to handle multiple tickets with varying attributes such as status and priority. 
At least 10 sample tickets should be used during testing to demonstrate functionality such as filtering, searching, and status updates.

---

## 10. System Interface

The system interface consists of a simple dashboard that displays all tickets. Each ticket includes action buttons for editing and deleting. 

The interface is designed to be clean, minimal, and user-friendly. It allows users to interact with the system efficiently without unnecessary complexity.

---

## 11. Future Improvements / Enhancements

The system can be improved further with additional features such as:

- Advanced filtering and sorting by priority, status, and project
- Enhanced search functionality across multiple fields
- Dashboard statistics (e.g. total open, resolved, overdue tickets)
- Notifications for overdue tasks
- Export and import of tickets using JSON files
- Markdown-based notes for each ticket
- User profile pictures
- Dark mode interface for better usability
- Mobile-friendly responsive design

---

## 12. Group Members
- Justin Aldrich Shaw
- Marco Fourie
- Shannon Pretorius
- Dominic Smith

---

## 13. Acknowledgements
This project may have been supported using educational resources and AI tools for learning and development purposes. All code has been adapted and understood for academic use.

---
