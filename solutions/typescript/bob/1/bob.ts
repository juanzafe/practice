export function hey(text: string): string {
  const clean = text.trim();

  const isQuestion = clean.endsWith("?");
  const isYelling = /[a-z]/i.test(clean) && clean === clean.toUpperCase();
  const isSilence = clean.length === 0;

  if (isSilence) {
    return "Fine. Be that way!";
  }

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}