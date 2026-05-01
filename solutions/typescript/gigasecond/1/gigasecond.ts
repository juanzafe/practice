const Giga:number = 1_000_000_000_000

export class Gigasecond {
  public constructor(private readonly startDate:Date) {
  }
  public date(){
    return new Date(this.startDate.getTime() + Giga)
  }
}
