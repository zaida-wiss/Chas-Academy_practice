const saft = ["blåbär", "äpple", "vanilj", "kiwi"];
console.log(saft[2]);


function getSaft(num){
    
   if (num <saft.length && num>=0){
    return saft[num];
    console.log(saft[num]);
} else {console.log("Den smaken finns inte i sortimentet")};
};

getSaft(3);

console.log("Det finns följande smaker: "+saft);

saft.push("krusbär");
console.log("Det finns följande smaker: "+saft);
saft.pop();
console.log("Det finns följande smaker: "+saft);
saft.unshift("vinbär");
console.log("Det finns följande smaker: "+saft);
saft.splice(3);
console.log("Det finns följande smaker: "+saft);
const nyttSortiment = saft.slice(1).map((s) => s + " saft");
console.log("Nu finns följande smaker: ", nyttSortiment);
