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
- Ticket editing
- Ticket deletion
- Status updates (Open, In Progress, Resolved, Overdue)
- Search functionality
- Filter functionality by status

### Enhancements:
- Live search filtering
- Dynamic status updates
- Persistent storage using localStorage
- Improved user interaction with buttons and dropdown filters

---

## 4. Technologies Used
- HTML
- CSS (basic styling or Bootstrap if applied)
- JavaScript
- localStorage (Web Storage API)

---

## 5. System Structure / Components
The system is structured into the following components:

- **User Interface (UI):** A simple dashboard displaying tickets in a list format with action buttons.
- **Ticket System:** Handles creation, editing, deletion, and status updates of tickets.
- **Data Storage:** Uses browser localStorage to store ticket data persistently.
- **Logic Functions:** JavaScript functions manage filtering, searching, and updating ticket data.

---

## 6. How to Run the Project
1. Download or clone the project folder.
2. Open the `index.html` file in any modern web browser.
3. The system will load automatically and display the bug tracking interface.
4. No installation or server setup is required.

---

## 7. How to Use the System

### Create a Ticket:
Enter a bug title in the input field and click "Add Ticket".

### Edit a Ticket:
Click the "Edit" button next to a ticket to update its title.

### Delete a Ticket:
Click the "Delete" button to remove a ticket permanently.

### Change Status:
Click "Change Status" to move the ticket through workflow stages.

### Search Tickets:
Use the search bar to find tickets by title or status.

### Filter Tickets:
Use the dropdown menu to filter tickets by status.

---

## 8. Data Storage Explanation
The system uses `localStorage` to store ticket data in the browser. This allows tickets to remain saved even after the page is refreshed or reopened. Data is stored in JSON format and converted back into JavaScript objects when loaded.

---

## 9. Sample Data / Test Cases
The system is designed to handle multiple tickets with varying attributes such as status and priority. At least 10 sample tickets should be used during testing to demonstrate functionality such as filtering, searching, and status updates.

---

## 10. System Interface

The system interface consists of a simple dashboard that displays all tickets in a list format. Each ticket includes action buttons for editing, deleting, and changing status. A search bar and filter dropdown are provided at the top of the interface for easy navigation.

The interface is designed to be clean, minimal, and user-friendly. It allows users to interact with the system efficiently without unnecessary complexity.

Screenshots of the dashboard view and ticket interaction features should be included to demonstrate functionality.

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
- GitHub integration for linking issues with commits

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
