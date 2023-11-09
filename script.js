fetch('https://randomuser.me/api')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const user = data.results[0];
        const picture = user.picture.large;
        const city = user.location.city;
        const country = user.location.country;
        const postcode = user.location.postcode;
        const email = user.email;

        const setIMG = document.getElementById('setIMG')
        const setCity = document.getElementById('setCity')
        const setCountry = document.getElementById('setCountry')
        const setCode = document.getElementById('setCode')
        const setEmail = document.getElementById('setEmail')

        setIMG.src = picture;
        setCity.innerText = city;
        setCountry.innerText = country;
        setCode.innerText = postcode;
        setEmail.innerText = email;

        console.log('Picture:', picture);
        console.log('City:', city);
        console.log('Country:', country);
        console.log('Postcode:', postcode);
        console.log('Email:', email);
    })
    .catch(error => {
        console.error('Error:', error);
    });
