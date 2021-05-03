
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: 'https://mainnet.infura.io/v3/{infurakey}' },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000
})
