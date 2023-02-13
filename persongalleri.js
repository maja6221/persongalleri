const url = "https://persongalleri-ceab.restdb.io/rest/personliste";

const options = {
    headers: {
        'x-apikey': "63ea07ca478852088da68151"
    }
};

async function hentData() {
    const resspons = await fetch(url, options);
    const json = await resspons.json();
    visualViewport(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
    console.log(json);
    json.forEach((person) => {
        const klon = template.cloneNode(true);
        klon.querySelector(".billedeurl").src = "faces/" + person.billede;
        klon.querySelector(".navn").textContent = person.fornavn;
        main.appendChild(klon);
    });
}