document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const list = document.getElementById('usersList');
            users.forEach(user => {
                const listItem = document.createElement('li');

                // Opret spans for hver brugerattribut
                listItem.innerHTML = `
                    <span class="user-id">ID: ${user.userId}</span>
                    <span class="user-name">Name: ${user.userName}</span>
                    <span class="user-email">Email: ${user.userEmail}</span>
                    <span class="user-created">Created: ${user.createdAt}</span>
                    <span class="user-updated">Updated: ${user.updatedAt}</span>
                `;

                list.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
