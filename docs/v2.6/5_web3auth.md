---
slug: /current/web3auth
sidebar_position: 5
sidebar_label: Web3Auth
---

# Web3Auth

## What is Web3Auth?

Web3Auth is a wallet solution that allows users to connect to the blockchain via social logins. Upon logging in you'll receive a wallet that is fully functional and able to make calls with our SDK.

## Moving to Production

The default settings for Web3Auth are great for testing but once you're ready to move to production you will want to manage your won API key. To get started, visit the [Web3Auth dashboard](https://dashboard.web3auth.io/) and create your account.

In the dashboard, click on project navigation column on the left, and click "Create Project".

![](assets/wallets/web3auth/web3auth-project.png)

In the create new project menu, be sure to choose "Plug and Play" for your product, "Unity" for your platform types, and "EVM Based Chain" for the Chains you are building on.

![](assets/wallets/web3auth/web3auth-project-details.png)

When you create your project, you'll be redirected to the project page. Copy your client ID and open Unity.

![](assets/wallets/web3auth/web3auth-project-page.png)

Click on the Login Logic - Web3Auth object and in the inspector, paste in your client ID in the client ID field under the Web3Auth section.

![](assets/wallets/web3auth/web3auth-login-logic.png)

Now you are all set to move to production!
