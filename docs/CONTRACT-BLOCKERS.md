# Contract blockers — reviewed, not audited

The prior inherited AMM source is not deployable. Source inspection found missing LP withdrawal, an ineffective pool-state entrypoint, unbounded ratio mismatch on later deposits (potential donation), arbitrary initial LP share scaling, and no verified reserve reconciliation. It was not compiled.

The new implementation must prove: FA2 standard transfer/update_operators types against MINGWE; all arithmetic and rounding boundaries; ratio-safe deposits; exact input asset; constant-product quote and fee; min-output/deadline; LP redemption; reserve accounting; failure atomicity; no token mint/burn path.

No AMM address exists in this release candidate. Keep the UI locked.
