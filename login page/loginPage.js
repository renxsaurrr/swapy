function showSignIn() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    
    
    const tabs = document.querySelectorAll('.auth-tab');
    tabs[0].classList.add('active');         
    tabs[1].classList.remove('active');      
} 

function showSignUp() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
    
    
    const tabs = document.querySelectorAll('.auth-tab');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
}

function handleSignIn(event) {
    event.preventDefault();

    showToast('Sign In successful!', 'success');
}

function handleSignUp(event) {
    event.preventDefault();

    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }

    if (password.length < 8) {
        showToast('Password must be at least 8 characters.', 'error');
        return;
    }

    const email = document.getElementById('signUpEmail').value; 
    document.getElementById('registerForm').reset();            

    showToast('Account created successfully!', 'success');

    setTimeout(function() {
        showToast('Redirecting to Sign In...', 'success');
    }, 3000);

    setTimeout(function() {
        showSignIn();
        document.getElementById('signInEmail').value = email; 
    }, 5000);
}

function togglePassword(inputId, buttonElement) {
    const input = document.getElementById(inputId);
    const icon = buttonElement.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    }
}

window.togglePassword = togglePassword;

function showToast(message, type = 'success') {
    const toastEl = document.getElementById('successToast');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    toastMsg.textContent = message;

    if (type === 'success') {
        toastIcon.className = 'bi bi-check-circle-fill';
        toastIcon.style.color = '#ffffff';
    } else if (type === 'error') {
        toastIcon.className = 'bi bi-x-circle-fill';
        toastIcon.style.color = '#ffffff';
    }

    const toast = new bootstrap.Toast(toastEl, {
    });
    toast.show();
} 

const countries = [
    { name: 'Afghanistan', code: '+93', flag: '🇦🇫', placeholder: '70 123 4567' },
    { name: 'Albania', code: '+355', flag: '🇦🇱', placeholder: '66 123 4567' },
    { name: 'Algeria', code: '+213', flag: '🇩🇿', placeholder: '551 23 45 67' },
    { name: 'Andorra', code: '+376', flag: '🇦🇩', placeholder: '312 345' },
    { name: 'Angola', code: '+244', flag: '🇦🇴', placeholder: '923 123 456' },
    { name: 'Antigua and Barbuda', code: '+1268', flag: '🇦🇬', placeholder: '464 1234' },
    { name: 'Argentina', code: '+54', flag: '🇦🇷', placeholder: '11 1234 5678' },
    { name: 'Armenia', code: '+374', flag: '🇦🇲', placeholder: '77 123 456' },
    { name: 'Australia', code: '+61', flag: '🇦🇺', placeholder: '412 345 678' },
    { name: 'Austria', code: '+43', flag: '🇦🇹', placeholder: '664 123456' },
    { name: 'Azerbaijan', code: '+994', flag: '🇦🇿', placeholder: '40 123 45 67' },
    { name: 'Bahamas', code: '+1242', flag: '🇧🇸', placeholder: '359 1234' },
    { name: 'Bahrain', code: '+973', flag: '🇧🇭', placeholder: '3600 1234' },
    { name: 'Bangladesh', code: '+880', flag: '🇧🇩', placeholder: '1812 345678' },
    { name: 'Barbados', code: '+1246', flag: '🇧🇧', placeholder: '250 1234' },
    { name: 'Belarus', code: '+375', flag: '🇧🇾', placeholder: '29 123 45 67' },
    { name: 'Belgium', code: '+32', flag: '🇧🇪', placeholder: '470 12 34 56' },
    { name: 'Belize', code: '+501', flag: '🇧🇿', placeholder: '622 1234' },
    { name: 'Benin', code: '+229', flag: '🇧🇯', placeholder: '90 01 23 45' },
    { name: 'Bhutan', code: '+975', flag: '🇧🇹', placeholder: '17 123 456' },
    { name: 'Bolivia', code: '+591', flag: '🇧🇴', placeholder: '71234567' },
    { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦', placeholder: '61 123 456' },
    { name: 'Botswana', code: '+267', flag: '🇧🇼', placeholder: '71 123 456' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷', placeholder: '11 91234 5678' },
    { name: 'Brunei', code: '+673', flag: '🇧🇳', placeholder: '712 3456' },
    { name: 'Bulgaria', code: '+359', flag: '🇧🇬', placeholder: '87 123 4567' },
    { name: 'Burkina Faso', code: '+226', flag: '🇧🇫', placeholder: '70 12 34 56' },
    { name: 'Burundi', code: '+257', flag: '🇧🇮', placeholder: '79 56 12 34' },
    { name: 'Cambodia', code: '+855', flag: '🇰🇭', placeholder: '91 234 567' },
    { name: 'Cameroon', code: '+237', flag: '🇨🇲', placeholder: '6 71 23 45 67' },
    { name: 'Canada', code: '+1', flag: '🇨🇦', placeholder: '204 555 0123' },
    { name: 'Cape Verde', code: '+238', flag: '🇨🇻', placeholder: '991 12 34' },
    { name: 'Central African Republic', code: '+236', flag: '🇨🇫', placeholder: '70 01 23 45' },
    { name: 'Chad', code: '+235', flag: '🇹🇩', placeholder: '63 01 23 45' },
    { name: 'Chile', code: '+56', flag: '🇨🇱', placeholder: '2 2123 4567' },
    { name: 'China', code: '+86', flag: '🇨🇳', placeholder: '131 2345 6789' },
    { name: 'Colombia', code: '+57', flag: '🇨🇴', placeholder: '321 1234567' },
    { name: 'Comoros', code: '+269', flag: '🇰🇲', placeholder: '321 23 45' },
    { name: 'Congo', code: '+242', flag: '🇨🇬', placeholder: '06 123 4567' },
    { name: 'Costa Rica', code: '+506', flag: '🇨🇷', placeholder: '8312 3456' },
    { name: 'Croatia', code: '+385', flag: '🇭🇷', placeholder: '91 234 5678' },
    { name: 'Cuba', code: '+53', flag: '🇨🇺', placeholder: '5 1234 5678' },
    { name: 'Cyprus', code: '+357', flag: '🇨🇾', placeholder: '96 123456' },
    { name: 'Czech Republic', code: '+420', flag: '🇨🇿', placeholder: '601 123 456' },
    { name: 'Denmark', code: '+45', flag: '🇩🇰', placeholder: '32 12 34 56' },
    { name: 'Djibouti', code: '+253', flag: '🇩🇯', placeholder: '77 83 10 01' },
    { name: 'Dominica', code: '+1767', flag: '🇩🇲', placeholder: '225 1234' },
    { name: 'Dominican Republic', code: '+1849', flag: '🇩🇴', placeholder: '234 5678' },
    { name: 'Ecuador', code: '+593', flag: '🇪🇨', placeholder: '99 123 4567' },
    { name: 'Egypt', code: '+20', flag: '🇪🇬', placeholder: '100 123 4567' },
    { name: 'El Salvador', code: '+503', flag: '🇸🇻', placeholder: '7012 3456' },
    { name: 'Equatorial Guinea', code: '+240', flag: '🇬🇶', placeholder: '222 123 456' },
    { name: 'Eritrea', code: '+291', flag: '🇪🇷', placeholder: '7 123 456' },
    { name: 'Estonia', code: '+372', flag: '🇪🇪', placeholder: '5123 4567' },
    { name: 'Eswatini', code: '+268', flag: '🇸🇿', placeholder: '7612 3456' },
    { name: 'Ethiopia', code: '+251', flag: '🇪🇹', placeholder: '91 123 4567' },
    { name: 'Fiji', code: '+679', flag: '🇫🇯', placeholder: '701 2345' },
    { name: 'Finland', code: '+358', flag: '🇫🇮', placeholder: '41 2345678' },
    { name: 'France', code: '+33', flag: '🇫🇷', placeholder: '6 12 34 56 78' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦', placeholder: '06 03 12 34' },
    { name: 'Gambia', code: '+220', flag: '🇬🇲', placeholder: '301 2345' },
    { name: 'Georgia', code: '+995', flag: '🇬🇪', placeholder: '555 12 34 56' },
    { name: 'Germany', code: '+49', flag: '🇩🇪', placeholder: '1512 3456789' },
    { name: 'Ghana', code: '+233', flag: '🇬🇭', placeholder: '23 123 4567' },
    { name: 'Greece', code: '+30', flag: '🇬🇷', placeholder: '691 234 5678' },
    { name: 'Grenada', code: '+1473', flag: '🇬🇩', placeholder: '403 1234' },
    { name: 'Guatemala', code: '+502', flag: '🇬🇹', placeholder: '5123 4567' },
    { name: 'Guinea', code: '+224', flag: '🇬🇳', placeholder: '601 12 34 56' },
    { name: 'Guinea-Bissau', code: '+245', flag: '🇬🇼', placeholder: '955 012 345' },
    { name: 'Guyana', code: '+592', flag: '🇬🇾', placeholder: '609 1234' },
    { name: 'Haiti', code: '+509', flag: '🇭🇹', placeholder: '34 10 1234' },
    { name: 'Honduras', code: '+504', flag: '🇭🇳', placeholder: '9123 4567' },
    { name: 'Hong Kong', code: '+852', flag: '🇭🇰', placeholder: '5123 4567' },
    { name: 'Hungary', code: '+36', flag: '🇭🇺', placeholder: '20 123 4567' },
    { name: 'Iceland', code: '+354', flag: '🇮🇸', placeholder: '611 1234' },
    { name: 'India', code: '+91', flag: '🇮🇳', placeholder: '98765 43210' },
    { name: 'Indonesia', code: '+62', flag: '🇮🇩', placeholder: '812 3456 7890' },
    { name: 'Iran', code: '+98', flag: '🇮🇷', placeholder: '912 345 6789' },
    { name: 'Iraq', code: '+964', flag: '🇮🇶', placeholder: '791 234 5678' },
    { name: 'Ireland', code: '+353', flag: '🇮🇪', placeholder: '85 012 3456' },
    { name: 'Israel', code: '+972', flag: '🇮🇱', placeholder: '50 234 5678' },
    { name: 'Italy', code: '+39', flag: '🇮🇹', placeholder: '312 345 6789' },
    { name: 'Jamaica', code: '+1876', flag: '🇯🇲', placeholder: '210 1234' },
    { name: 'Japan', code: '+81', flag: '🇯🇵', placeholder: '90 1234 5678' },
    { name: 'Jordan', code: '+962', flag: '🇯🇴', placeholder: '7 9012 3456' },
    { name: 'Kazakhstan', code: '+77', flag: '🇰🇿', placeholder: '701 234 5678' },
    { name: 'Kenya', code: '+254', flag: '🇰🇪', placeholder: '712 345678' },
    { name: 'Kiribati', code: '+686', flag: '🇰🇮', placeholder: '72001234' },
    { name: 'Kuwait', code: '+965', flag: '🇰🇼', placeholder: '500 12345' },
    { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬', placeholder: '700 123 456' },
    { name: 'Laos', code: '+856', flag: '🇱🇦', placeholder: '20 23 123 456' },
    { name: 'Latvia', code: '+371', flag: '🇱🇻', placeholder: '21 234 567' },
    { name: 'Lebanon', code: '+961', flag: '🇱🇧', placeholder: '71 123 456' },
    { name: 'Lesotho', code: '+266', flag: '🇱🇸', placeholder: '5012 3456' },
    { name: 'Liberia', code: '+231', flag: '🇱🇷', placeholder: '77 012 3456' },
    { name: 'Libya', code: '+218', flag: '🇱🇾', placeholder: '91 2345678' },
    { name: 'Liechtenstein', code: '+423', flag: '🇱🇮', placeholder: '660 234 567' },
    { name: 'Lithuania', code: '+370', flag: '🇱🇹', placeholder: '612 34567' },
    { name: 'Luxembourg', code: '+352', flag: '🇱🇺', placeholder: '628 123 456' },
    { name: 'Madagascar', code: '+261', flag: '🇲🇬', placeholder: '32 12 345 67' },
    { name: 'Malawi', code: '+265', flag: '🇲🇼', placeholder: '991 23 45 67' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾', placeholder: '12 345 6789' },
    { name: 'Maldives', code: '+960', flag: '🇲🇻', placeholder: '771 2345' },
    { name: 'Mali', code: '+223', flag: '🇲🇱', placeholder: '65 01 23 45' },
    { name: 'Malta', code: '+356', flag: '🇲🇹', placeholder: '9696 1234' },
    { name: 'Marshall Islands', code: '+692', flag: '🇲🇭', placeholder: '235 1234' },
    { name: 'Mauritania', code: '+222', flag: '🇲🇷', placeholder: '22 12 34 56' },
    { name: 'Mauritius', code: '+230', flag: '🇲🇺', placeholder: '5251 2345' },
    { name: 'Mexico', code: '+52', flag: '🇲🇽', placeholder: '55 1234 5678' },
    { name: 'Micronesia', code: '+691', flag: '🇫🇲', placeholder: '350 1234' },
    { name: 'Moldova', code: '+373', flag: '🇲🇩', placeholder: '62 112 345' },
    { name: 'Monaco', code: '+377', flag: '🇲🇨', placeholder: '6 12 34 56 78' },
    { name: 'Mongolia', code: '+976', flag: '🇲🇳', placeholder: '8812 3456' },
    { name: 'Montenegro', code: '+382', flag: '🇲🇪', placeholder: '67 622 901' },
    { name: 'Morocco', code: '+212', flag: '🇲🇦', placeholder: '650 123456' },
    { name: 'Mozambique', code: '+258', flag: '🇲🇿', placeholder: '82 123 4567' },
    { name: 'Myanmar', code: '+95', flag: '🇲🇲', placeholder: '9 212 3456' },
    { name: 'Namibia', code: '+264', flag: '🇳🇦', placeholder: '81 123 4567' },
    { name: 'Nauru', code: '+674', flag: '🇳🇷', placeholder: '555 1234' },
    { name: 'Nepal', code: '+977', flag: '🇳🇵', placeholder: '984 123 4567' },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱', placeholder: '6 12345678' },
    { name: 'New Zealand', code: '+64', flag: '🇳🇿', placeholder: '21 123 4567' },
    { name: 'Nicaragua', code: '+505', flag: '🇳🇮', placeholder: '8123 4567' },
    { name: 'Niger', code: '+227', flag: '🇳🇪', placeholder: '93 12 34 56' },
    { name: 'Nigeria', code: '+234', flag: '🇳🇬', placeholder: '802 123 4567' },
    { name: 'North Korea', code: '+850', flag: '🇰🇵', placeholder: '191 234 5678' },
    { name: 'North Macedonia', code: '+389', flag: '🇲🇰', placeholder: '72 345 678' },
    { name: 'Norway', code: '+47', flag: '🇳🇴', placeholder: '406 12 345' },
    { name: 'Oman', code: '+968', flag: '🇴🇲', placeholder: '9212 3456' },
    { name: 'Pakistan', code: '+92', flag: '🇵🇰', placeholder: '301 2345678' },
    { name: 'Palau', code: '+680', flag: '🇵🇼', placeholder: '620 1234' },
    { name: 'Panama', code: '+507', flag: '🇵🇦', placeholder: '6123 4567' },
    { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬', placeholder: '7012 3456' },
    { name: 'Paraguay', code: '+595', flag: '🇵🇾', placeholder: '961 456789' },
    { name: 'Peru', code: '+51', flag: '🇵🇪', placeholder: '912 345 678' },
    { name: 'Philippines', code: '+63', flag: '🇵🇭', placeholder: '912 345 6789' },
    { name: 'Poland', code: '+48', flag: '🇵🇱', placeholder: '512 345 678' },
    { name: 'Portugal', code: '+351', flag: '🇵🇹', placeholder: '912 345 678' },
    { name: 'Qatar', code: '+974', flag: '🇶🇦', placeholder: '3312 3456' },
    { name: 'Romania', code: '+40', flag: '🇷🇴', placeholder: '712 034 567' },
    { name: 'Russia', code: '+7', flag: '🇷🇺', placeholder: '912 345 6789' },
    { name: 'Rwanda', code: '+250', flag: '🇷🇼', placeholder: '720 123 456' },
    { name: 'Saint Kitts and Nevis', code: '+1869', flag: '🇰🇳', placeholder: '765 2917' },
    { name: 'Saint Lucia', code: '+1758', flag: '🇱🇨', placeholder: '284 5678' },
    { name: 'Saint Vincent and the Grenadines', code: '+1784', flag: '🇻🇨', placeholder: '430 1234' },
    { name: 'Samoa', code: '+685', flag: '🇼🇸', placeholder: '601 234' },
    { name: 'San Marino', code: '+378', flag: '🇸🇲', placeholder: '66 66 12 12' },
    { name: 'Sao Tome and Principe', code: '+239', flag: '🇸🇹', placeholder: '981 2345' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦', placeholder: '51 234 5678' },
    { name: 'Senegal', code: '+221', flag: '🇸🇳', placeholder: '70 123 45 67' },
    { name: 'Serbia', code: '+381', flag: '🇷🇸', placeholder: '60 1234567' },
    { name: 'Seychelles', code: '+248', flag: '🇸🇨', placeholder: '2 510 123' },
    { name: 'Sierra Leone', code: '+232', flag: '🇸🇱', placeholder: '25 123456' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬', placeholder: '8123 4567' },
    { name: 'Slovakia', code: '+421', flag: '🇸🇰', placeholder: '912 123 456' },
    { name: 'Slovenia', code: '+386', flag: '🇸🇮', placeholder: '31 234 567' },
    { name: 'Solomon Islands', code: '+677', flag: '🇸🇧', placeholder: '74 21234' },
    { name: 'Somalia', code: '+252', flag: '🇸🇴', placeholder: '7 1123 456' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦', placeholder: '71 123 4567' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷', placeholder: '10 1234 5678' },
    { name: 'South Sudan', code: '+211', flag: '🇸🇸', placeholder: '977 123 456' },
    { name: 'Spain', code: '+34', flag: '🇪🇸', placeholder: '612 34 56 78' },
    { name: 'Sri Lanka', code: '+94', flag: '🇱🇰', placeholder: '71 234 5678' },
    { name: 'Sudan', code: '+249', flag: '🇸🇩', placeholder: '91 123 1234' },
    { name: 'Suriname', code: '+597', flag: '🇸🇷', placeholder: '741 2345' },
    { name: 'Sweden', code: '+46', flag: '🇸🇪', placeholder: '70 123 45 67' },
    { name: 'Switzerland', code: '+41', flag: '🇨🇭', placeholder: '78 123 45 67' },
    { name: 'Syria', code: '+963', flag: '🇸🇾', placeholder: '944 567 890' },
    { name: 'Taiwan', code: '+886', flag: '🇹🇼', placeholder: '912 345 678' },
    { name: 'Tajikistan', code: '+992', flag: '🇹🇯', placeholder: '37 812 3456' },
    { name: 'Tanzania', code: '+255', flag: '🇹🇿', placeholder: '621 234 567' },
    { name: 'Thailand', code: '+66', flag: '🇹🇭', placeholder: '81 234 5678' },
    { name: 'Timor-Leste', code: '+670', flag: '🇹🇱', placeholder: '7721 2345' },
    { name: 'Togo', code: '+228', flag: '🇹🇬', placeholder: '90 11 23 45' },
    { name: 'Tonga', code: '+676', flag: '🇹🇴', placeholder: '771 5123' },
    { name: 'Trinidad and Tobago', code: '+1868', flag: '🇹🇹', placeholder: '291 1234' },
    { name: 'Tunisia', code: '+216', flag: '🇹🇳', placeholder: '20 123 456' },
    { name: 'Turkey', code: '+90', flag: '🇹🇷', placeholder: '501 234 56 78' },
    { name: 'Turkmenistan', code: '+993', flag: '🇹🇲', placeholder: '66 123456' },
    { name: 'Tuvalu', code: '+688', flag: '🇹🇻', placeholder: '901 234' },
    { name: 'UAE', code: '+971', flag: '🇦🇪', placeholder: '50 123 4567' },
    { name: 'Uganda', code: '+256', flag: '🇺🇬', placeholder: '712 345678' },
    { name: 'Ukraine', code: '+380', flag: '🇺🇦', placeholder: '50 123 4567' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧', placeholder: '7911 123456' },
    { name: 'United States', code: '+1', flag: '🇺🇸', placeholder: '201 555 0123' },
    { name: 'Uruguay', code: '+598', flag: '🇺🇾', placeholder: '94 231 234' },
    { name: 'Uzbekistan', code: '+998', flag: '🇺🇿', placeholder: '91 234 56 78' },
    { name: 'Vanuatu', code: '+678', flag: '🇻🇺', placeholder: '591 2345' },
    { name: 'Vatican City', code: '+379', flag: '🇻🇦', placeholder: '312 345 678' },
    { name: 'Venezuela', code: '+58', flag: '🇻🇪', placeholder: '412 1234567' },
    { name: 'Vietnam', code: '+84', flag: '🇻🇳', placeholder: '91 234 56 78' },
    { name: 'Yemen', code: '+967', flag: '🇾🇪', placeholder: '712 345 678' },
    { name: 'Zambia', code: '+260', flag: '🇿🇲', placeholder: '95 5123456' },
    { name: 'Zimbabwe', code: '+263', flag: '🇿🇼', placeholder: '71 234 5678' },
];

function populateCountries(filter = '') {
    const list = document.getElementById('countryOptionsList');
    list.innerHTML = ''; 

    const filtered = countries.filter(function(country) {
        return country.name.toLowerCase().includes(filter.toLowerCase()) ||
               country.code.includes(filter);
    });

    if (filtered.length === 0) {
        list.innerHTML = '<div style="padding: 1rem; color: #9B9089; text-align: center;">No countries found</div>';
        return;
    }

    filtered.forEach(function(country) {
        const item = document.createElement('div');
        item.className = 'country-option'; 
        item.innerHTML = `
            <span>${country.flag}</span>
            <span>${country.name}</span>
            <span style="color: #9B9089; margin-left: auto;">${country.code}</span>
        `;

        item.addEventListener('click', function() {
            selectCountry(country);
        });

        list.appendChild(item);
    });
}

function selectCountry(country) {
    document.getElementById('selectedFlag').textContent = country.flag;
    document.getElementById('selectedCode').textContent = country.code;
    document.getElementById('phoneNumber').placeholder = country.placeholder; 
    toggleCountryDropdown(false);

    console.log('Selected:', country.name, country.code);
}

function toggleCountryDropdown(forceClose = null) {
    const panel = document.getElementById('countryDropdownPanel');
    const isOpen = panel.style.display === 'block';

    if (forceClose === true || isOpen) {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
        document.getElementById('countrySearchInput').focus();
    }
}

document.addEventListener('DOMContentLoaded', function() {

    populateCountries();
    initPhoneFormatting();

    if (window.location.search.includes('signup')) {
        showSignUp();
    }

    document.getElementById('countrySelectBtn').onclick = function() {
        toggleCountryDropdown();
    };

    document.getElementById('countrySearchInput').addEventListener('input', function() {
        populateCountries(this.value);
    });

    document.addEventListener('click', function(event) {
        const wrapper = document.querySelector('.country-select-wrapper');
        if (!wrapper.contains(event.target)) {
            toggleCountryDropdown(true); 
        }
    });
}); 


function initPhoneFormatting() {
    const phoneInput = document.getElementById('phoneNumber');

    phoneInput.addEventListener('input', function(e) {
        
        const placeholder = phoneInput.placeholder; 
        let value = e.target.value.replace(/\D/g, ''); 
        let formatted = '';
        let valueIndex = 0;

        for (let i = 0; i < placeholder.length; i++) {
            if (valueIndex >= value.length) break;

            if (placeholder[i] === ' ') {
                if (formatted.length > 0) formatted += ' ';
            } else {
                formatted += value[valueIndex];
                valueIndex++;
            }
        }

        e.target.value = formatted;
    });

    phoneInput.addEventListener('keydown', function(e) {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault(); 
        }
    });
}