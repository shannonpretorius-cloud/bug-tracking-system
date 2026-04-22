let projects = JSON.parse(localStorage.getItem('projects')) || [];

function addProject() {
      const name = document.getElementById('projectName').value.trim();
      if (!name) return alert("Project name required");
      projects.push({ id: Date.now(), name });
      localStorage.setItem('projects', JSON.stringify(projects));
      renderProjects();
      document.getElementById('projectName').value = '';
    }

    function renderProjects() {
      const list = document.getElementById('projectsList');
      list.innerHTML = "";
      projects.forEach(p => {
        list.innerHTML += `<li>${p.name}</li>`;
      });
    }

    // Initial render
    renderProjects();