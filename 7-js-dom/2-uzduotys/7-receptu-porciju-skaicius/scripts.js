let receptai = [
    {
        id: 1,
        pavadinimas: 'Vištiena su salotom',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut.',
        imgUrl: 'img/salotos.jpg',
        receptas: {
            vistiena: 300,
            salotos: 400,
            pomidorai: 200,
            agurkai: 100,
            padazas: 50,
        },
    },
    {
        id: 2,
        pavadinimas: 'Tortas su mėlynėmis',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut.',
        imgUrl: 'img/tortas.jpg',
        receptas: {
            kiaušiniai: 4545,
            salotos: 400,
            pomidorai: 200,
            agurkai: 54545,
            padazas: 50,
        },
    },
    {
        id: 3,
        pavadinimas: 'Makaronai su mėsa',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut.',
        imgUrl: 'img/makaronai.jpg',
        receptas: {
            jautiena: 300,
            salotos: 9100,
            pomidorai: 200,
            agurkai: 100,
            padazas: 50,
        },
    },
];

window.addEventListener('load', () => {
    let korteliuHTML = '';
    console.log('load');

    for (let receptas of receptai) {
        console.log(receptas);
        korteliuHTML += `
        <div class="kortele" onclick="onKortelesPaspaudimas(${receptas.id})">
          <img src="${receptas.imgUrl}">
          <div class="text">
            <h4>${receptas.pavadinimas}</h4>
            <p>${receptas.aprasymas}</p>
          </div>
          <img src="img/selected.jpg" class="active">
        </div>
      `;
    }

    document.querySelector('.korteles').innerHTML = korteliuHTML;
});

function onKortelesPaspaudimas(id) {
    let receptas = receptai.find(el => el.id === id).receptas;
    let receptoHTML = '';

    for (let property in receptas) {
        receptoHTML += `<p>${property}: <strong>${receptas[property]}</strong></p>`;
    }

    document.getElementById('rezultatai').innerHTML = receptoHTML;
}
