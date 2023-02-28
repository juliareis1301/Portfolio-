function typeWriter(a) {
    const b = a.innerHTML.split("");
    a.innerHTML = "", b.forEach((b, c) => {
        setTimeout(function() {
            a.innerHTML += b
        }, 70 * c)
    })
}
const meuNome = document.querySelector(".meu-nome");
typeWriter(meuNome);
const habilidades = document.querySelectorAll(".escondido"),
    botaoVerMais = document.querySelector("button");

function cliqueVer() {
    habilidades.forEach(a => {
        a.classList.contains("escondido") ? (a.classList.remove("escondido"), a.classList.add("visivel"), botaoVerMais.innerHTML = "Ver menos") : (a.classList.add("escondido"), a.classList.remove("visivel"), botaoVerMais.innerHTML = "Ver mais")
    })
}

function maisHabilidades(a) {
    a.addEventListener("click", cliqueVer)
}
maisHabilidades(botaoVerMais);
const html = document.querySelector(".box-container1");
html.addEventListener("mouseover", function() {
    const a = document.querySelector("#legenda");
    a.classList.remove("hide")
}), html.addEventListener("mouseout", function() {
    const a = document.querySelector("#legenda");
    a.classList.add("hide")
});
const css = document.querySelector(".box-container2");
css.addEventListener("mouseover", function() {
    const a = document.querySelector("#legenda1");
    a.classList.remove("hide")
}), css.addEventListener("mouseout", function() {
    const a = document.querySelector("#legenda1");
    a.classList.add("hide")
});
const js = document.querySelector(".box-container3");
js.addEventListener("mouseover", function() {
    const a = document.querySelector("#legenda2");
    a.classList.remove("hide")
}), js.addEventListener("mouseout", function() {
    const a = document.querySelector("#legenda2");
    a.classList.add("hide")
});
const python = document.querySelector(".box-container4");
python.addEventListener("mouseover", function() {
    const a = document.querySelector("#legenda3");
    a.classList.remove("hide")
}), python.addEventListener("mouseout", function() {
    const a = document.querySelector("#legenda3");
    a.classList.add("hide")
});
const csharp = document.querySelector(".box-container5");
csharp.addEventListener("mouseover", function() {
    const a = document.querySelector("#legenda4");
    a.classList.remove("hide")
}), csharp.addEventListener("mouseout", function() {
    const a = document.querySelector("#legenda4");
    a.classList.add("hide")
});

const menuItens = document.querySelectorAll(".menu a");
menuItens.forEach(a => {
    a.addEventListener("click", scrollToIdClick)
});

function scrollToIdClick(a) {
    const b = a.target,
        c = b.getAttribute("href"),
        d = document.querySelector(c);
    console.log(c)
}   