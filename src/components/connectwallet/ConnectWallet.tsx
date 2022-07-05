import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { useEffect, useState } from 'react';
import { ButtonSpinner } from '../ButtonSpinner';
import { Web3Provider } from '@ethersproject/providers/src.ts/web3-provider';

const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
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
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const accounts = await provider.listAccounts();
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
