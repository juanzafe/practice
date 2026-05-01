export class DnDCharacter {
  public readonly strength: number = DnDCharacter.generateAbilityScore()
  public readonly dexterity: number = DnDCharacter.generateAbilityScore()
  public readonly constitution: number = DnDCharacter.generateAbilityScore()
  public readonly intelligence: number = DnDCharacter.generateAbilityScore()
  public readonly wisdom: number = DnDCharacter.generateAbilityScore()
  public readonly charisma: number = DnDCharacter.generateAbilityScore()

  get hitpoints(): number {
    return 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const rolls = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 6))
    rolls.sort((a, b) => a - b)
    return rolls.slice(1).reduce((sum, n) => sum + n, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}