export abstract class Filter{
    red:number;
    green:number;
    blue:number;
  
    constructor(){
      this.red = 0;
      this.green = 0;
      this.blue = 0;
    }
  
    abstract calc(red: number, green: number, blue: number):void;
  
  }
  
  export class GreenFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
      this.red = 0;
      this.green = green;
      this.blue = 0;
    }
}

    export class BlueFilter extends Filter {
        calc(red: number, green: number, blue: number): void {
          this.red = 0;
          this.green = 0;
          this.blue = blue;
    }    

}

export class RedFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
      this.red = red;
      this.green = 0;
      this.blue = 0;
    }    

}

export class GrayFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
      const gray = (red + blue + green)/3;
      this.red = gray;
      this.green = gray;
      this.blue = gray;
    }    

}

export const filters: Filter[] = [
    new GreenFilter(),
    new BlueFilter(),
    new RedFilter(),
    new GrayFilter(),
]