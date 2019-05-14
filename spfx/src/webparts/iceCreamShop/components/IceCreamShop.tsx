import * as React from 'react';
import styles from './IceCreamShop.module.scss';
import { IIceCreamShopProps } from './IIceCreamShopProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IIceCreamShopState } from './IIceCreamShopState';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';

export default class IceCreamShop extends React.Component<IIceCreamShopProps, IIceCreamShopState> {

  constructor(props: IIceCreamShopProps) {
    super(props);
    this.state = { iceCreamList: [] };
  }

  public componentDidMount(): void {

    
    this.props.aadHttpClientFactory
    .getClient('8fe9d9f0-1040-414b-94a4-b96cbb493f9e')
    .then((client: AadHttpClient): void => {
      client
        .get('https://pnpicecreamshop.azurewebsites.net/api/flavours', AadHttpClient.configurations.v1)
        .then((response: HttpClientResponse): Promise<any> => {
          return response.json();
        })
        .then((iceCreamList: any): void => {
          // process data
          console.log(iceCreamList);
        });
    })
    .catch(err => console.log);

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