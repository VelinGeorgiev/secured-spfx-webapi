# secured-spfx-webapi
Secure connection between SPFx and Web Api hosted in Azure using Azure Active Directory. Samples used for #collabsummit 2019.


https://graph.windows.net/


https://pnpicecreamshop.azurewebsites.net


Create site for testing
spo login https://velingeorgiev-admin.sharepoint.com

spo site get -u https://velingeorgiev.sharepoint.com/sites/aad

spo site add --type CommunicationSite --url https://velingeorgiev.sharepoint.com/sites/aad --title "PnP Ice Cream Shop"

spo site appcatalog add --url https://velingeorgiev.sharepoint.com/sites/aad


Setup az  with commander bash
ln -s "/c/Program Files (x86)/Microsoft SDKs/Azure/CLI2/wbin/az.cmd" "$SYSTEMROOT\az"