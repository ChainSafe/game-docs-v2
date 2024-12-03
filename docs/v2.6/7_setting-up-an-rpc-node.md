---
slug: /current/setting-up-an-rpc-node
sidebar_position: 7
sidebar_label: Setting Up An RPC Node
---

# Setting Up An RPC Node For web3.unity

:::info

This section walks through the process of setting up an RPC node to be used with the web3.unity SDK. We use [Chainstack](https://console.chainstack.com/user/account/create?utm_campaign=Referrals&utm_source=chainsafe&utm_medium=referrals) and [QuickNode](https://dashboard.quicknode.com/?prompt=signup) as an example, but this can also be done with other providers. Setting up an RPC node is not a requirement for the SDK but it will help in terms of congestion and stability as the public nodes can be saturated at times.

:::

# Chainstack

# Prerequisites

- A Chainstack account (sign up at [Chainstack](https://console.chainstack.com/user/account/create?utm_campaign=Referrals&utm_source=chainsafe&utm_medium=referrals) if you don't have one)
- Familiarity with the web3.unity SDK

# Creating a project in Chainstack

1. Create (or log in) to your Chainstack account and navigate to the Dashboard.

2. Click on “Projects” in the left sidebar, then click on “Create project”.

![](assets/setting-up-an-rpc-node/chainstack-dashboard.png)

3. Give your project a name and click create.

![](assets/setting-up-an-rpc-node/chainstack-create-project-name.png)

4. You will appear back on the dashboard. Select your newly created project.

![](assets/setting-up-an-rpc-node/chainstack-newly-created-project.png)

5. Inside the project, click on your network of choice, or the "Explore all Node Options" button to begin deploying an RPC node.

![](assets/setting-up-an-rpc-node/chainstack-get-started-button.png)

# Deploying an RPC node

1. After clicking on the "Explore all Node Options" button, you will be presented with 3 required steps. In the first step “Network details”, you will select the EVM chain that your blockchain game will be making interactions with.

2. Depending on which EVM chain you select, you will be prompted to select a network under a given chain. In our example, we have selected Polygon and its Mumbai testnet. Click “Next”.

![](assets/setting-up-an-rpc-node/chainstack-selecting-chain-and-network.png)

3. If you are under Chainstack’s Developer plan, you will only be able to select the default options presented in the “Node deployment” step. This means you will choose “Elastic” for node type, “Full” for full node. Finally, name your node and click “Next”.

![](assets/setting-up-an-rpc-node/chainstack-node-deployment.png)

:::info

Note that Chainstack’s Developer plan provides 3 million free API requests per month. This should be enough for most testing and app development purposes. If your game requires more calls per month, we would suggest [upgrading your plan](https://console.chainstack.com/user/account/create?utm_campaign=Referrals&utm_source=chainsafe&utm_medium=referrals).

:::

4. Review the details under the “Summary” step and then click “Join network”.
   You will appear back in your project dashboard.

![](assets/setting-up-an-rpc-node/chainstack-join-network.png)

5. Once deployed, the node’s status will turn green under a “Running” status. You can now expand the details of your node by clicking on its name.

![](assets/setting-up-an-rpc-node/chainstack-node-status.png)

# Retrieving your HTTPS endpoint

1. Within the node dashboard, you will be presented with a number of KPIs and metrics. Please scroll down to the “Access and credentials” section.

2. From here, take note of the HTTPS endpoint, which will be the RPC URL you will use to configure web3.unity and allow your Unity game to interact with the blockchain.

![](assets/setting-up-an-rpc-node/chainstack-https-endpoints.png)

# QuickNode

# Prerequisites

- A QuickNode account (sign up at [QuickNode](https://dashboard.quicknode.com/?prompt=signup) if you don't have one)
- Familiarity with the web3.unity SDK

# Creating a project in QuickNode

1. Create (or log in) to your QuickNode account and navigate to the Dashboard.

2. Click on "Endpoints" in the left sidebar, then click on “Create endpoint”.

![](assets/setting-up-an-rpc-node/quicknode-dash.png)

3. Select your chain & network, please choose an EVM compatible chain to work with the SDK.

![](assets/setting-up-an-rpc-node/quicknode-select-chain.png)

4. You will appear back on the dashboard. Select your newly created endpoint.

5. Inside the endpoint dashboard, you are presented with an RPC and a web socket URL, enter both of these into the chainsafe server settings area in the SDK.

![](assets/setting-up-an-rpc-node/quicknode-endpoints.png)

6. QuickNode also has a great metrics area to track additional data, feel free to have a look around.

![](assets/setting-up-an-rpc-node/quicknode-metrics.png)

:::info

Note that the free plan QuickNode offers provides 10 million API requests per month. This should be enough for most testing and app development purposes. If your game requires more calls per month, we would suggest [upgrading your plan](https://dashboard.quicknode.com/select-plan).

:::