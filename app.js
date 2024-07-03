document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('countries-container');

    const countries = [ "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
        "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
        "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", 
        "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
        "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", 
        "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
        "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
        "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", 
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
        "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
        "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", 
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]; 

    const searchCountry = () => {
        const query = document.getElementById('search').value.trim();
        if (query) {
            fetch(`https://restcountries.com/v3.1/name/${query}`)
                .then(response => response.json())
                .then(data => {
                    container.innerHTML = ''; // Clear previous results

                    data.forEach(countryData => {
                        const countryCard = document.createElement('div');
                        countryCard.className = 'country-card';
                        countryCard.addEventListener('click', () => {
                            window.open(`https://www.google.com/search?q=${countryData.name.common}`, '_blank');
                        });

                        const flag = document.createElement('img');
                        flag.src = countryData.flags.png;
                        countryCard.appendChild(flag);

                        const countryName = document.createElement('h2');
                        countryName.textContent = countryData.name.common;
                        countryCard.appendChild(countryName);

                        const capital = document.createElement('p');
                        capital.textContent = `Capital: ${countryData.capital[0]}`;
                        countryCard.appendChild(capital);

                        const region = document.createElement('p');
                        region.textContent = `Region: ${countryData.region}`;
                        countryCard.appendChild(region);

                        container.appendChild(countryCard);
                    });
                })
                .catch(error => console.error('Error:', error));
        }
    };

    window.searchCountry = searchCountry;

    // Initial load of all countries
    countries.forEach(country => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(countryData => {
                    const countryCard = document.createElement('div');
                    countryCard.className = 'country-card';
                    countryCard.addEventListener('click', () => {
                        window.open(`https://www.google.com/search?q=${countryData.name.common}`, '_blank');
                    });

                    const flag = document.createElement('img');
                    flag.src = countryData.flags.png;
                    countryCard.appendChild(flag);

                    const countryName = document.createElement('h2');
                    countryName.textContent = countryData.name.common;
                    countryCard.appendChild(countryName);

                    const capital = document.createElement('p');
                    capital.textContent = `Capital: ${countryData.capital[0]}`;
                    countryCard.appendChild(capital);

                    const region = document.createElement('p');
                    region.textContent = `Region: ${countryData.region}`;
                    countryCard.appendChild(region);

                    container.appendChild(countryCard);
                });
            })
            .catch(error => console.error('Error:', error));
    });
});
