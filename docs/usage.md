# Usage Guide  

This guide explains how to install, build and deploy the SDK and example dApp.  

## Installation  

Clone the repository and install dependencies:  

```bash  
git clone https://github.com/Alitestnet/fhevm-universal-kit.git  
cd fhevm-universal-kit  
npm install  
```  

## Running the Example  

Start the development server:  

```bash  
npm run dev  
```  

Open `http://localhost:3000` in your browser to see the Private Voting dApp. Select a proposal, cast an encrypted vote and see a confirmation message.  

## Building for Production  

```bash  
npm run build  
npm run start  
```  

This compiles the Next.js app and TypeScript files, then starts a production server on port 3000.  

## Deploying to Vercel  

1. Sign in to [Vercel](https://vercel.com) and import the GitHub repository.  
2. Vercel will automatically detect the Next.js project.  
3. Ensure the `build` command is `npm run build` and the output directory is `.next`.  
4. Deploy the project. Once deployed, you will receive a public URL for your Private Voting dApp.  

## Integrating Real FHE  

To integrate real TFHE-based encryption:  
- Compile the `tfhe-rs` library to WebAssembly (WASM) and bundle it into your project.  
- Replace the mock `encrypt` and `decrypt` functions in `src/core/fhevmClient.ts` and `src/core/encryptor.ts` with calls into the WASM module.  
- Ensure you handle key generation and key storage securely (e.g., using browser local storage or a secure enclave).
