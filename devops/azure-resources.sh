#!/bin/bash
EMAIL=$1
PASS=$2

az login -u $EMAIL -p $PASS

az group create -l eastus -n PnP.IceCreamShop2 --subscription "Visual Studio Enterprise"

az appservice plan create -g PnP.IceCreamShop2 -n PnP.IceCreamShop2Plan --sku free

az webapp create -g PnP.IceCreamShop2 -p PnP.IceCreamShop2Plan -n PnPIceCreamShop2

az webapp cors add -g PnP.IceCreamShop2 -n PnPIceCreamShop2 --allowed-origins https://velingeorgiev.sharepoint.com

# "pnpicecreamshop2.azurewebsites.net"

# switch to to office 365 account for that 

az login -u me@velingeorgiev.onmicrosoft.com -p "pass" --allow-no-subscriptions

az ad app create --display-name PnP.IceCreamShop2

# add scopes