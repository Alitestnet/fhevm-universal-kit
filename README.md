# fhevm-universal-kit  

> **Universal FHEVM SDK & Private Voting dApp**  
> This project provides a framework-agnostic SDK for building confidential dApps on EVM chains using the Zama FHEVM protocol. It also includes a sample “Private Voting” application demonstrating encrypted voting.  

## Features  

- 🔐 **FHEVM Client**: Establishes a connection to a FHEVM-compatible RPC endpoint and provides encryption/decryption utilities.  
- 🝻️ **Vote Manager**: API for casting encrypted votes and tallying results homomorphically.  
- 🧩 **Adapters**: Ready‑to‑use hooks for React/Next.js.  
- 🎯 **Example dApp**: A Next.js based Private Voting demo with Tailwind UI.  

## Getting Started  

```bash  
# 1. Install dependencies  
npm install  

# 2. Run the example dApp  
npm run dev  

# 3. Open http://localhost:3000 to see the Private Voting demo.  
```  

> **Note**: The encryption utilities in this repository use mock base64 encoding as a placeholder. To integrate real FHE, replace the `encrypt`/`decrypt` implementations in `src/core/fhevmClient.ts` and `src/core/encryptor.ts` with TFHE-rs WebAssembly bindings.  

## Repository Structure  

- `src/core`: Core modules (`fhevmClient`, `encryptor`, `voteManager`).  
- `src/adapters`: Hooks and integration layers for common frameworks.  
- `src/examples`: Sample applications demonstrating the SDK usage.  
- `docs`: Additional documentation (architecture and usage guides).  

## License  

This project is released under the MIT License. For commercial use of Zama’s FHE technology, please consult Zama’s licensing requirements.
