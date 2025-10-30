// High-level encryption helper. In a production setting, this module would
// import TFHE-rs WebAssembly bindings for true homomorphic encryption.

import { FhevmClient } from "./fhevmClient";

export class Encryptor {
  private client: FhevmClient;

  constructor(client: FhevmClient) {
    this.client = client;
  }

  /** Encrypts a numeric vote (0 = Hayır, 1 = Evet) */
  encryptVote(vote: number): string {
    return this.client.encrypt(vote);
  }

  /** Decrypts an encrypted vote */
  decryptVote(cipher: string): number {
    return this.client.decrypt(cipher);
  }
}
