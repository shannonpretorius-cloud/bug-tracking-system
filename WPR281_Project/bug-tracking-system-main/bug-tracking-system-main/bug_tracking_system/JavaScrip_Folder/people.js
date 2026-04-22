function addPerson() {
      const name = document.getElementById('personName').value.trim();
      if (!name) return alert("Name required");
      people.push({ id: Date.now(), name });
      localStorage.setItem('people', JSON.stringify(people));
      renderPeople();
      document.getElementById('personName').value = '';
    }

    function renderPeople() {
      const list = document.getElementById('peopleList');
      list.innerHTML = "";
      people.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.name;
        list.appendChild(li);
      });
    }

    // Initial render
    renderPeople();