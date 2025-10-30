// fhevmClient.ts
// Core module of fhevm-universal-kit
// Provides a lightweight interface to interact with Zama FHEVM nodes

import { ethers } from "ethers";

export interface FhevmClientOptions {
  rpcUrl: string;
  privateKey?: string;
}

export class FhevmClient {
  private provider: ethers.providers.JsonRpcProvider;
  private wallet: ethers.Wallet;

  constructor(options: FhevmClientOptions) {
    this.provider = new ethers.providers.JsonRpcProvider(options.rpcUrl);

    // Use default local wallet if not provided
    this.wallet = options.privateKey
      ? new ethers.Wallet(options.privateKey, this.provider)
      : ethers.Wallet.createRandom().connect(this.provider);
  }

  /** 🔐 Encrypt a given value (mock FHE placeholder for now) */
  encrypt(value: number): string {
    return Buffer.from(String(value)).toString("base64");
  }

  /** 🔓 Decrypt a previously encrypted value (mock placeholder) */
  decrypt(encryptedValue: string): number {
    return parseInt(Buffer.from(encryptedValue, "base64").toString("utf8"));
  }

  /** 📡 Simulate contract interaction */
  async callContract(address: string, abi: any, method: string, ...args: any[]) {
    const contract = new ethers.Contract(address, abi, this.wallet);
    const tx = await contract[method](...args);
    return tx;
  }

  getAddress(): string {
    return this.wallet.address;
  }
}
