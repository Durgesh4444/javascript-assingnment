//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


function getext(e){
    let tel = e.split(".").pop()
    return tel;
}

const result1 =getext("durgesh.txt");
console.log(result1);

console.log(getext("god.js"));










