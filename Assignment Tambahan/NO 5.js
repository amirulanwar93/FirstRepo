const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet)

for(x=0;x<27;x++){
  alphabet[x]=x+1
}
console.log(alphabet)
nameValue("abu")

function nameValue(char name){
  let a=null
  let b=name.split()
  for(c=0,c<name.length();c++){
    a=+b
  }
  return a
}

console.log(a)