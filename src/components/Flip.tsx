import * as React from "react"; 

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FlipState<R> = {
  isMutable: boolean;
  refs: R;
}

export type ROFlipState<R, S extends FlipState<R>> = Readonly<Omit<S, "isMutable" | "refs">>;

interface JSXFactory<R, S extends FlipState<R>, ROS extends ROFlipState<R, S>> {
  mutableJSX(refs: R): JSX.Element;
  immutableJSX(ros: ROS): JSX.Element;
  toROS(s: S): ROS;
}

export abstract class Flip <R, P, S extends FlipState<R>, ROS extends ROFlipState<R, S>> extends React.Component<P, S> implements JSXFactory<R, S, ROS>{
  constructor(props: P, initState: S) {
    super(props);
    this.state = initState;
    this.flip.bind(this);
  }

  abstract mutableJSX(refs: R) : JSX.Element;
  abstract immutableJSX(rexState: ROS) : JSX.Element;
  abstract toROS(s: S): ROS;

  flip() {
    if(this.state.isMutable) {
      this.setState({ isMutable: false });
    } else {
      this.setState({ isMutable: true }); 
    }
  }  

  render() {
    if(this.state.isMutable){
      return(
        this.mutableJSX(this.state.refs)
      );
    } else {
      return(
        this.immutableJSX(this.toROS(this.state))
      ); 
    }
  }
}
