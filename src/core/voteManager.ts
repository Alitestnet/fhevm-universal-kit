// VoteManager handles vote submission and aggregation logic.
// Here we simulate on-chain storage with an in-memory array.

import { FhevmClient } from "./fhevmClient";
import { Encryptor } from "./encryptor";

interface VoteRecord {
  proposalId: string;
  encryptedVote: string;
  voter: string;
}

export class VoteManager {
  private client: FhevmClient;
  private encryptor: Encryptor;
  private votes: VoteRecord[] = [];

  constructor(client: FhevmClient) {
    this.client = client;
    this.encryptor = new Encryptor(client);
  }

  /** Casts a vote for a given proposal */
  async castVote(proposalId: string, vote: number) {
    const encryptedVote = this.encryptor.encryptVote(vote);
    const voter = this.client.getAddress();
    this.votes.push({ proposalId, encryptedVote, voter });
    return { proposalId, encryptedVote, voter };
  }

  /** Returns encrypted votes for a proposal */
  getEncryptedVotes(proposalId: string): string[] {
    return this.votes
      .filter((v) => v.proposalId === proposalId)
      .map((v) => v.encryptedVote);
  }

  /** Homomorphically sums encrypted votes (mock: converts back to ints) */
  tallyVotes(proposalId: string): number {
    const encryptedVotes = this.getEncryptedVotes(proposalId);
    const decrypted = encryptedVotes.map((c) => this.encryptor.decryptVote(c));
    return decrypted.reduce((sum, v) => sum + v, 0);
  }
}
