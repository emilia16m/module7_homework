const hum = {
    p: 15,
    m: 17,
    l: 18
}
function getTrue (hum) {
    console.log ( "p" in hum);
}
getTrue(hum)
