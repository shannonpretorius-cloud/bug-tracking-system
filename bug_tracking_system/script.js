let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

renderTickets();

function addTicket() {
    let title = document.getElementById("bugTitle").value;

    if (title === "") return;

    let ticket = {
        id: Date.now(),
        title: title,
        status: "Open"
    };

    tickets.push(ticket);

    localStorage.setItem("tickets", JSON.stringify(tickets));

    renderTickets();
    document.getElementById("bugTitle").value = "";
}

// Search & Filter Functionality
function renderTickets() {
    let list = document.getElementById("ticketList");
    if (!list) return;

    list.innerHTML = "";

    let searchBox = document.getElementById("searchBox");
    let statusFilter = document.getElementById("statusFilter");

    let searchText = searchBox ? searchBox.value.toLowerCase().trim() : "";
    let statusValue = statusFilter ? statusFilter.value : "all";

    let filteredTickets = tickets.filter(t => {
        // search in BOTH title and status
        let matchesSearch =
            t.title.toLowerCase().includes(searchText) ||
            t.status.toLowerCase().includes(searchText);

        let matchesStatus =
            statusValue === "all" || t.status === statusValue;

        return matchesSearch && matchesStatus;
    });

    if (filteredTickets.length === 0) {
        list.innerHTML = "<li>No tickets found</li>";
        return;
    }

    filteredTickets.forEach(t => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${t.title} (${t.status})
            <button onclick="editTicket(${t.id})">Edit</button>
            <button onclick="changeStatus(${t.id})">Change Status</button>
            <button onclick="deleteTicket(${t.id})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// Status Update
const statuses = ["Open", "In Progress", "Resolved", "Overdue"];

function changeStatus(id) {
    let ticket = tickets.find(t => t.id === id);

    if (ticket) {
        let currentIndex = statuses.indexOf(ticket.status);
        ticket.status = statuses[(currentIndex + 1) % statuses.length];

        localStorage.setItem("tickets", JSON.stringify(tickets));
        renderTickets();
    }
}

// Delete Ticket
function deleteTicket(id) {
    tickets = tickets.filter(t => t.id !== id);

    localStorage.setItem("tickets", JSON.stringify(tickets));
    renderTickets();
}

// Edit Ticket
function editTicket(id) {
    let ticket = tickets.find(t => t.id === id);

    if (ticket) {
        let newTitle = prompt("Edit ticket title:", ticket.title);

        if (newTitle !== null && newTitle.trim() !== "") {
            ticket.title = newTitle;

            localStorage.setItem("tickets", JSON.stringify(tickets));  //saves current ticket list in browser to prevent it from dissapearing when page refreshes
            renderTickets();
        }
    }
}
