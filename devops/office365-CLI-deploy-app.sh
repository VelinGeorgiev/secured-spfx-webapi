#!/bin/bash
SITE=$1
EMAIL=$2
PASS=$3
SCOPE=$4

sudo npm i -g @pnp/office365-cli

# You have to run "o365 spo login https://contoso.sharepoint.com"
# to agree with the consent first time

o365 spo login $SITE --authType password --userName $EMAIL --password $PASS

o365 spo app add --filePath "../drop/react-aadhttpclient.sppkg" --appCatalogUrl $SITE --scope $SCOPE --overwrite

o365 spo app deploy --name react-aadhttpclient.sppkg --appCatalogUrl $SITE --scope $SCOPE --skipFeatureDeployment