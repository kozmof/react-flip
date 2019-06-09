## react-stack
Generic stack component 

## Usage

### Immutable
```typescript

class Trainer {
  constructor(public id: number, public name: string, public place: string) {}
}

export class IMStackDemo extends IMStack<Trainer, StackItems<Trainer>, {}> {
  constructor(props: StackItems<Trainer>){
    super(props, {});
  }

  callPack() {
    return (item: Trainer) => {
      return(
        <tr key={item.id}>     
          <td>Name: {item.name}</td>
          <td>Place: {item.place}</td>
          <td><button onClick={() => alert("!")}>!</button></td>
        </tr>
      );
    }
  }
}

```

### Mutable
```typescript
class Pokemon {
  constructor(public id: number, public name: string) {}
}

export class MStackDemo extends MStack<Pokemon, {}, StackItems<Pokemon>> {
  constructor(){
    super({}, {items: [new Pokemon(1, "Bulbasaur"), new Pokemon(4, "Charmander"), new Pokemon(7, "Squirtle")]});
  }

  callPack() {
    const remove = (id: number) => {
      const items = this.state.items;
      for(let n = 0; n < items.length; n++){
        if(items[n].id === id){
          items.splice(n, 1);
          this.setState({items: items});
          return 
        }
      }
    }

    return (item: Pokemon) => {
      return(
        <tr key={item.id}>     
          <td>Name: {item.name}</td>
          <td><button onClick={() => remove(item.id)}>!</button></td>
        </tr>
      );
    }
  }
}

```
## License
MIT

