document.addEventListener('DOMContentLoaded', function () {
    var mobiles = [
        { brand: 'Apple', model: '15 Pro', price: '$1299', specs: 'A15 Bionic, 8GB RAM, 256GB Storage', image: 'apple-15pro.jpg' },
        { brand: 'OnePlus', model: '11R', price: '$899', specs: 'Snapdragon 888, 12GB RAM, 128GB Storage', image: 'oneplus-11r.jpg' },
        { brand: 'Samsung', model: 'S23', price: '$1099', specs: 'Exynos 2200, 10GB RAM, 256GB Storage', image: 'samsung-s23.jpg' },
        { brand: 'Nokia', model: '9 PureView', price: '$699', specs: 'Snapdragon 845, 6GB RAM, 128GB Storage', image: 'nokia-9pureview.jpg' },
        { brand: 'iQOO', model: 'Z7', price: '$799', specs: 'Snapdragon 870, 8GB RAM, 256GB Storage', image: 'iqoo-z7.jpg' },
        { brand: 'Realme', model: 'Realme X', price: '$299', specs: 'Snapdragon 710, 6GB RAM, 128GB Storage', image: 'realme-x.jpg' },
        { brand: 'Vivo', model: 'Vivo V15', price: '$249', specs: 'Helio P70, 4GB RAM, 64GB Storage', image: 'vivo-v15.jpg' },
        { brand: 'Oppo', model: 'Oppo F11', price: '$279', specs: 'MediaTek MT6771V Helio P70, 6GB RAM, 128GB Storage', image: 'oppo-f11.jpg' },
        { brand: 'Xiaomi', model: 'Mi 9', price: '$349', specs: 'Snapdragon 855, 8GB RAM, 256GB Storage', image: 'mi-9.jpg' }
    ];

    var container = document.getElementById('mobileList');

    mobiles.forEach(function (mobile) {
        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = mobile.image;
        img.alt = `${mobile.brand} ${mobile.model}`;
        card.appendChild(img);

        var h3 = document.createElement('h3');
        h3.textContent = `${mobile.brand} ${mobile.model}`;
        card.appendChild(h3);

        var p1 = document.createElement('p');
        p1.textContent = `Price: ${mobile.price}`;
        card.appendChild(p1);

        var p2 = document.createElement('p');
        p2.textContent = `Specifications: ${mobile.specs}`;
        card.appendChild(p2);

        container.appendChild(card);
    });
});
