import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { useEffect, useState } from 'react';
import Portis from '@portis/web3';
import { ButtonSpinner } from '../ButtonSpinner';

const providerOptions = {
  portis: {
    package: Portis,
    options: {
      id: '09feb1e9-1c20-4b6a-b076-26fd7991155f',
    },
  },
};
const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

export function ConnectWallet(props: { classes: string }) {
  const [account, setAccount] = useState<string>('');

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);
  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    setAccount('');
  };
  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();
    if (accounts) setAccount(accounts[0]);
  };
  if (web3Modal.cachedProvider && !account)
    return <ButtonSpinner text="Loading..." />;

  return (
    <button
      onClick={account ? disconnect : connectWallet}
      className={props.classes}
    >
      {account
        ? `${account.substring(0, 6)}...${account.substring(
            account.length - 4,
            account.length
          )}`
        : 'Connect Wallet'}
    </button>
  );
}
