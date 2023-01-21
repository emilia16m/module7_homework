const obj = {
    a: 1,
    b: 2
}
const prot = Object.create(obj);
prot.c = "3"; 
prot.d = "4";
function getKey (prot) {
    for (let key in prot) {
        if (prot.hasOwnProperty(key)) {
            console.log(key); 
            console.log(prot[key]);// ownCity
        }   
    }
}
getKey(prot)
