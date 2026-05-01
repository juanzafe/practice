const CODON_TRANSLATIONS: { [name: string]: string } = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

export function translate(rnaSequence: string) {
  if (!rnaSequence) return [];

  const result = [];

  const codon = rnaSequence.match(/.{1,3}/g);

  for (let i = 0; i < codon!.length; i++) {
    if (CODON_TRANSLATIONS[codon![i]] == undefined)
      throw new Error("Invalid codon");

    if (CODON_TRANSLATIONS[codon![i]] == "STOP") {
      break;
    } else {
      result.push(CODON_TRANSLATIONS[codon![i]]);
    }
  }
  return result;
}