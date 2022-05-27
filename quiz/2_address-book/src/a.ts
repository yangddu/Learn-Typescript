// function fetchItems(): string[] {
//     var items = ['a', 'b', 'c'];
//     return items;
// }
// var result = fetchItems();
// console.log(result);

export interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
  }
  
export interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
export enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
  }

function fetchItems(): Promise<string[]> {
    var items: string[] = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    });
}
fetchItems();