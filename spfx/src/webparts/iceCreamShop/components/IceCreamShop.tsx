import * as React from 'react';
import styles from './IceCreamShop.module.scss';
import { IIceCreamShopProps } from './IIceCreamShopProps';
import { IIceCreamShopState } from './IIceCreamShopState';

export default class IceCreamShop extends React.Component<IIceCreamShopProps, IIceCreamShopState> {

  constructor(props: IIceCreamShopProps) {
      super(props);
      this.state = { iceCreamList: [] };
    }
  
  public componentDidMount(): void {
  
  }

  public render(): React.ReactElement<IIceCreamShopProps> {
    return (
      <div className={styles.iceCreamShop}>
        <div className={styles.container}>
          <div className={styles.row}>
            <span className={styles.title}>Welcome to the PnP Ice Cream Shop!</span>
          </div>
        </div>
      </div>
    );
  }
}