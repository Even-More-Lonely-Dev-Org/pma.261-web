const API_BASE_URL = 'http>//localhost:8080'

const register = async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch (`${API_BASE_URL}/accounts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });
    if (response.ok){
        alert('Account registered sucessfully!');
    } else{
        alert('Failed to register account.')
    }
};

const loadAccounts = () => {
    fetch(`${API_BASE_URL}/accounts`)
        .then(response => response.json())
        .then(accounts => {
            const accountsList = document.getElementById('accountsList');
            accountsList.innerHTML = '';
            accounts.forEach(account => {
                const li = document.createElement('li');
                li.textContent = `${account.name} (${account.email})`;
                accountsList.appendChild(li);
            });
        });
}