import * as React from 'react';
import * as ReactDOM from 'react-dom';

export type ModalState = any;

export class Modal extends React.Component<any, ModalState> {
  private container: HTMLDivElement;
  private modalRoot: HTMLElement;

  public constructor(props: any) {
    super(props);

    this.modalRoot =
      document.getElementById('root-modal') || document.createElement('div');
    this.modalRoot.className = 'root-modal';
    this.container = document.createElement('div');
  }

  public componentDidMount(): void {
    this.modalRoot.appendChild(this.container);
  }

  public componentWillUnmount(): void {
    this.modalRoot.removeChild(this.container);
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children as any,
      this.container
    );
  }
}
