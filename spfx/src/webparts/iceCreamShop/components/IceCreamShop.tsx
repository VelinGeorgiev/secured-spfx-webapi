import * as React from 'react';
import styles from './IceCreamShop.module.scss';
import { IIceCreamShopProps } from './IIceCreamShopProps';
import { IIceCreamShopState } from './IIceCreamShopState';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { IceCream } from './IceCream';

export default class IceCreamShop extends React.Component<IIceCreamShopProps, IIceCreamShopState> {

  constructor(props: IIceCreamShopProps) {
    super(props);
    this.state = { iceCreamList: [] };
  }

  public componentDidMount(): void {

    this.props.aadHttpClientFactory
    .getClient('53dabdc1-247c-43c4-86fc-5a005b850df5')
    .then((client: AadHttpClient): Promise<HttpClientResponse> => {

      return client.get('https://localhost:44300/api/flavours', AadHttpClient.configurations.v1);
    })
    .then((response: HttpClientResponse): Promise<IceCream[]> => {

      return response.json();
    })
    .then((jsonResult: IceCream[]): void => {

      this.setState({ iceCreamList: jsonResult });
    })
    .catch(err => console.log(err));
  }

  public render(): React.ReactElement<IIceCreamShopProps> {
    return (
      <div className={styles.iceCreamShop}>
        <div className={styles.container}>
          <div className={styles.row}>
            <span className={styles.title}>Welcome to the PnP Ice Cream Shop!</span>
            {
              this.state.iceCreamList.map(iceCream => {
                return <div className={styles.item}>
                          {iceCream.Favour} ice cream for just {iceCream.Price}
                        </div>;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}