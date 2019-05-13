import * as React from 'react';
import styles from './IceCreamShop.module.scss';
import { IIceCreamShopProps } from './IIceCreamShopProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class IceCreamShop extends React.Component<IIceCreamShopProps, {}> {
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
