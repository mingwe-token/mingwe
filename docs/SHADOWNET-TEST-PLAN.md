# Shadownet acceptance plan

## Phase A — discovery preview
- [ ] Confirm page displays only Shadownet (no network switch).
- [ ] Confirm Beacon permission asks for Shadownet.
- [ ] Search a token by symbol/name and exact KT1; inspect contract + token ID.
- [ ] Confirm MINGWE contract/token ID matches the documented Shadownet record.
- [ ] Confirm unknown decimals never produce a guessed balance.
- [ ] Confirm no search result enables swap or liquidity.

## Phase B — contract, before deployment
- [ ] Implement pool with immutable FA2 contract + token ID.
- [ ] First LP and proportional subsequent LP; no silent excess donation.
- [ ] XTZ→FA2 and FA2→XTZ swap with fee, min-out and deadline.
- [ ] LP withdrawal proportional to both reserves.
- [ ] Reject zero/dust, invalid token ID, unsupported FA2 permissions, reserve overflow and slippage.
- [ ] Decide direct donations/reserve reconciliation policy.
- [ ] Compile SmartPy to Michelson and retain output + version.
- [ ] Run all contract scenarios and independent review.

## Phase C — Shadownet wallet testing
- [ ] Deploy only with test XTZ; record address and code hash.
- [ ] Verify contract entrypoints/storage in explorer.
- [ ] Test operator grant → deposit → operator revoke, including failure paths.
- [ ] Add LP, swap both directions, remove LP, and reconcile token/XTZ balances.
- [ ] Test failed min-out and ensure no assets/shares are lost.
- [ ] Enable UI transaction buttons only after all tests pass.

## Target initial pool

The previously discussed `20 XTZ + 1,000,000 MINGWE` is a proposed test amount only. It is not a deployment instruction and must not be sent until the verified Shadownet pool address and test result are published.
