function DNA_strand(dnaCode){
    const dnaRules = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    };

    let dnaRes = [];
    dnaCode = dnaCode.split("");
    for( let i = 0; i <= dnaCode.length; i++){
        dnaRes.push(dnaRules[dnaCode[i]]);
    }
    console.log(`${dnaRes.join("")}`);
}

DNA_strand("ATTGC"); //"TAACG"
