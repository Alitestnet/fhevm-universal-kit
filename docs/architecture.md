# Architecture of fhevm-universal-kit  

The kit comprises three main layers:  

1. **Core Layer**  
   - `FhevmClient`: Manages RPC connectivity and basic (mock) FHE operations.  
   - `Encryptor`: Provides high-level encryption/decryption helpers.  
   - `VoteManager`: Manages vote casting and tallying, abstracting smart contract interactions.  

2. **Adapter Layer**  
   - Contains framework-specific integrations, currently React and Next.js.  
   - Exposes hooks (`useFhevmClient`, `useVoteManager`) that simplify SDK use in UI components.  

3. **Example Layer**  
   - A minimal Private Voting dApp built with Next.js.  
   - Demonstrates how to integrate the SDK and create a confidential user experience.  
   - Uses mock contract calls; replace with actual FHEVM contract in production.  

## Data Flow  

1. User selects a proposal and casts a vote through the UI.  
2. The `VoteManager` encrypts the vote using `Encryptor`.  
3. The encrypted vote is appended to an in-memory list (simulating on-chain storage).  
4. Tallying homomorphically decrypts and sums the encrypted votes.  

For actual deployments:  
- Deploy an FHEVM-compatible contract that accepts encrypted votes.  
- Use the SDK’s `callContract` method to send transactions to the blockchain.
