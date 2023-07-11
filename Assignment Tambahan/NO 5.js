const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

console.log(nameValue("amirul anwar"))

function nameValue(name){
  let a=null
  let b=name.split("")

  for(x=0; x<b.length; x++){
    for(y=0; y<alphabet.length; y++){
      if(name[x]==alphabet[y]){
        a+=(y+1)
      }
    }
  }
  return a
}

