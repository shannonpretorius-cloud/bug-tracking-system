// --- GLOBAL DATA & STATE ---
let issues = JSON.parse(localStorage.getItem('bugs')) || [];
let activeUser = JSON.parse(localStorage.getItem('sessionUser')) || null;

// Arrays for people and projects
let people = JSON.parse(localStorage.getItem('people')) || [];
let projects = JSON.parse(localStorage.getItem('projects')) || [];

//BUG TRACKER LOGIC 
// Attach listener to the Ticket Form (if the form exists on the current page)
if (document.getElementById('issueForm')) {
    document.getElementById('issueForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const newIssue = { 
            id: Date.now(), 
            summary: document.getElementById('summary').value, 
            priority: document.getElementById('priority').value, 
            status: 'Open',
            assigneeId: Number(document.getElementById('assigneeSelect')?.value || 0),
            projectId: Number(document.getElementById('projectSelect')?.value || 0),
            description: document.getElementById('detailed')?.value || '',
            createdBy: activeUser ? activeUser.username : 'Unknown',
            dateIdentified: new Date().toLocaleDateString('en-ZA')
        };
        issues.push(newIssue);
        syncAndRender();
        this.reset();
    });
}

// Save to localStorage and refresh the UI
function syncAndRender() {
    localStorage.setItem('bugs', JSON.stringify(issues));
    renderIssues();
}

// Build the HTML for the ticket cards
function renderIssues() {
    const list = document.getElementById('issueList');
    if (!list || !activeUser) return;

    // Display User Identity in the Top Border (Navbar)
    document.getElementById('navUserName').innerText = `${activeUser.name} ${activeUser.surname} (@${activeUser.username})`;
    document.getElementById('navUserPic').src = activeUser.pic;

    list.innerHTML = '';
    issues.forEach(issue => {
        // Determine color styling based on priority
        const badge = issue.priority === 'High' ? 'bg-high' : (issue.priority === 'Low' ? 'bg-low' : 'bg-medium');
        list.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card ticket-card border-0 shadow-sm h-100 ${issue.status === 'Closed' ? 'opacity-50' : ''}">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge ${badge} text-dark">${issue.priority}</span> 
                            <small class="text-muted">ID: ${issue.id.toString().slice(-4)}</small>
                        </div>
                        <h6 class="fw-bold">${issue.summary}</h6>
                        <small class="text-muted">Reported By: @${issue.createdBy || 'Unknown'}</small><br>
                        <small class="text-muted">Date Identified: ${issue.dateIdentified || 'N/A'}</small><br>
                        <small class="text-muted">Project: ${getProjectName(issue.projectId || 0)}</small><br>
                        <small class="text-muted">Assigned to: ${getPersonName(issue.assigneeId || 0)}</small>
                        <div class="mt-2 mb-3">
                            <select class="form-select form-select-sm" onchange="updatePriority(${issue.id}, this.value)">
                                <option value="Low" ${issue.priority === 'Low' ? 'selected' : ''}>Low</option>
                                <option value="Medium" ${issue.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                                <option value="High" ${issue.priority === 'High' ? 'selected' : ''}>High</option>
                            </select>
                        </div>
                        <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                            <strong class="small text-uppercase">${issue.status}</strong>
                            <div class="btn-group">
                                <button onclick="toggleStatus(${issue.id})" class="btn btn-sm ${issue.status === 'Open' ? 'btn-success' : 'btn-secondary'}">
                                    ${issue.status === 'Open' ? 'Close' : 'Open'}
                                </button>
                                <button onclick="openIssueDetail(${issue.id})" class="btn btn-sm btn-outline-primary">View</button>
                                <button onclick="deleteIssue(${issue.id})" class="btn btn-sm btn-outline-danger border-0">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Function Helpers for Tickets
function updatePriority(id, newP) { issues.forEach(i => { if (i.id === id) i.priority = newP; }); syncAndRender(); }
function toggleStatus(id) { issues.forEach(i => { if (i.id === id) i.status = (i.status === 'Open' ? 'Closed' : 'Open'); }); syncAndRender(); }
function deleteIssue(id) { issues = issues.filter(i => i.id !== id); syncAndRender(); }

// Helpers to get names
function getPersonName(id) { const p = people.find(x => x.id === id); return p ? p.name : 'Unassigned'; }
function getProjectName(id) { const p = projects.find(x => x.id === id); return p ? p.name : 'No Project'; }

// Populate dropdowns
function populateAssigneeDropdown(elementId = 'assigneeSelect') {
    const select = document.getElementById(elementId);
    if (!select) return;
    select.innerHTML = '<option value="0">Unassigned</option>';
    people.forEach(p => { select.innerHTML += `<option value="${p.id}">${p.name}</option>`; });
}

function populateProjectDropdown(elementId = 'projectSelect') {
    const select = document.getElementById(elementId);
    if (!select) return;
    select.innerHTML = '<option value="0">No Project</option>';
    projects.forEach(p => { select.innerHTML += `<option value="${p.id}">${p.name}</option>`; });
}

// Detail view / editing
let currentIssueId = null;
function openIssueDetail(id) {
    const issue = issues.find(i => i.id === id);
    if (!issue) return;
    currentIssueId = id;
    document.getElementById('detailSummary').value = issue.summary;
    document.getElementById('detailDescription').value = issue.description || '';
    document.getElementById('detailPriority').value = issue.priority;
    document.getElementById('detailStatus').value = issue.status;
    
    //populate and set assignee dropdown
    populateAssigneeDropdown('detailAssigneeSelect');
    document.getElementById('detailAssigneeSelect').value = issue.assigneeId || 0;

    // Populate and set project dropdown
    populateProjectDropdown('detailProjectSelect');
    document.getElementById('detailProjectSelect').value = issue.projectId || 0;

    // Show the modal
    document.getElementById('issueDetailModal').style.display = 'flex';
}

function closeIssueDetail() { document.getElementById('issueDetailModal').style.display = 'none'; currentIssueId = null; }

function saveIssueEdits() {
    const issue = issues.find(i => i.id === currentIssueId);
    if (!issue) return;
    issue.summary = document.getElementById('detailSummary').value;
    issue.description = document.getElementById('detailDescription').value;
    issue.priority = document.getElementById('detailPriority').value;
    issue.status = document.getElementById('detailStatus').value;
    issue.assigneeId = Number(document.getElementById('detailAssigneeSelect').value);
    issue.projectId = Number(document.getElementById('detailProjectSelect').value);
    syncAndRender();
    closeIssueDetail();
}

// Auto-run rendering if on the dashboard page
if (document.getElementById('issueList')) { 
    renderIssues(); 
    populateAssigneeDropdown();
    populateProjectDropdown();
}
