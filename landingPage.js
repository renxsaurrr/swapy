function showSignInModal() {
    const modal = new bootstrap.Modal(document.getElementById('signInRequiredModal'));
    modal.show();
}

function redirectToSignIn() {
    window.location.href = 'login page/loginPage.html';
}

function redirectToSignUp() {
    window.location.href = 'login page/loginPage.html?signup'; 
}

function performSearch() {
    const searchInput = document.getElementById('mainSearchInput');
    const query = searchInput.value.trim();
} 

function toggleAdvancedFilters() {
    const filters = document.getElementById('advancedFilters');

    if (filters.style.display === 'none' || filters.style.display === '') {
        filters.style.display = 'block';
    } 
    else {
        filters.style.display = 'none'; 
    }
}

function clearFilters() {
    document.querySelectorAll('#advancedFilters select').forEach(function(select) {
        select.selectedIndex = 0;
    }); 

    document.querySelector('#advancedFilters input').value = '';
}

