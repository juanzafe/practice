export function toRna(Dna:string):string{
    const rna = Dna.split('').map(G =>{
        if (G==="G") return "C"
        else if (G==="C") return "G"
        else if (G==="T") return "A"
        else if (G==="A") return "U"
        else throw new Error ("Invalid input DNA.")
    })
    return rna.join('')
}
