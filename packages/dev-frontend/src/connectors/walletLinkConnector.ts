import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const walletlink = new WalletLinkConnector({
  url: 'https://mainnet.infura.io/v3/{infurakey}',
  appName: 'Freely.Finance',
  appLogoUrl:
      'https://freely.finance/freely_finance.png'
})
