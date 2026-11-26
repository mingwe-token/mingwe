# MINGWE AMM — Shadownet Test Preview

**Testnet-only development preview. Not a live DEX.** Mainnet has intentionally been removed from this release candidate.

## Current features

- Shadownet-only RPC, wallet permission and TzKT indexer configuration.
- Temple/Beacon wallet connect for Shadownet. The page never asks for a seed phrase or private key.
- Search indexed token records by name, symbol, or exact KT1 address.
- MINGWE preselected: FA2 contract `KT1EHpDFoRiiJriVgEkfYXeH8ALZ99NiJDFy`, token ID `0`.
- Token metadata and wallet balance display only when indexer data and decimals are available.
- Swap, Add Liquidity and Remove Liquidity UI, all transaction actions disabled.
- Empty verified-pool registry. Search results do not create pools or grant operators.

## Network endpoints

- RPC: `https://tezos-shadownet.octez.io` (listed in current Taquito Shadownet examples)
- TzKT API: `https://api.shadownet.tzkt.io`
- Explorer: `https://shadownet.tzkt.io`

TzKT attribution is included in the footer.

## Important status

This release is **frontend preview + mathematical reference tests only**. It does not contain a deployable AMM contract. The inherited contract draft was reviewed and is explicitly unsafe/incomplete; do not deploy it.

Before transactions can be enabled, the work still requires: a new contract implementation, compilation to Michelson with recorded compiler version, scenario tests, ABI/storage review, token entrypoint verification, Shadownet deployment, contract address/code hash verification, and real wallet testing for deposit/swap/withdraw.

## Tests

Run with Node.js 22 or later:

```bash
node --check tests/preview-inline.mjs
node tests/preview-checks.mjs
node tests/amm-math.test.mjs
```

These are local static and math-reference tests. They do not certify the contract or simulate an on-chain transaction.

## Publish preview to GitHub Pages

1. Open `mingwe-token/mingwe` on GitHub.
2. Edit the repository root `index.html`.
3. Replace it with this package's `index.html`; inspect the diff before committing.
4. Publish only as a Shadownet test preview and retain the disabled transaction buttons.
5. Do not add any pool address until deployment and review are complete.

Never paste wallet seed phrases/private keys into this page or send test funds to an unverified contract.
