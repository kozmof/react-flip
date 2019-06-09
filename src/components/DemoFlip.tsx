import * as React from "react"; 
import { FlipState, ROFlipState, Flip } from "./Flip"

interface Refs {
  inputRef: React.RefObject<HTMLInputElement> 
}

export type DemoState = FlipState<Refs> & { text: string };
export type DemoROS = ROFlipState<Refs, DemoState>

export class DemoFlip extends Flip<Refs, {}, DemoState, DemoROS> {
  constructor () {
    const initState : DemoState = {
      isMutable: false,  
      text: "Hello",
      refs: {
        inputRef: React.createRef<HTMLInputElement>()
      }
    }

    super({}, initState); 
    this.moveInput.bind(this);
    this.combine.bind(this);
    this.mutableJSX.bind(this);
    this.immutableJSX.bind(this);
    this.toROS.bind(this);
  }

  moveInput () {
    this.setState({ text: this.state.refs.inputRef.current.value })
  }

  combine () {
    this.moveInput(); 
    this.flip()
  }

  mutableJSX (refs: Refs) {
    return (
      <div>  
        <input type="text" ref={refs.inputRef} defaultValue={this.state.text}/>
        <button onClick={() => this.combine()}> Lock </button>
      </div>
    )
  }


  immutableJSX (ros: DemoROS) {
    return ( 
      <div>  
        {ros.text + " "} 
        <button onClick={() => this.flip()}> Unlock </button>
      </div>
    )
  }

  toROS(s: DemoState) {
    const t = s.text;
    return { text: t } 
  }
}
