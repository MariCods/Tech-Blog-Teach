const logOut = async (event) => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type' : 'applications/json'},
    });
    if (response.ok) {
        document,location.replace('/');
    } else {
        alert(response,'failed to logout')
    }
};

document.querySelector('#logOut').addEventListener('click', logOut );