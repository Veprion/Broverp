function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function changeP() {
    let frsthlf = ["A cavalo dado", "A mentira", "À noite"];
    let scndhlf = [" não se olham os dentes.", " tem perna curta.", " todos os gatos são pardos."];
    let l = frsthlf.length
    let n = Math.floor(getRandomArbitrary(0, l))
    let m = Math.floor(getRandomArbitrary(0, l))
    while (m == n) {
        m = Math.floor(getRandomArbitrary(0, l))
    }
    let newtext = frsthlf[n] + scndhlf[m];
    document.getElementById("textooo").innerHTML = newtext;
}