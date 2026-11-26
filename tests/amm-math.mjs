// Integer-only reference math for AMM scenarios. This is NOT contract code.
export function isqrt(n) {
  n = BigInt(n); if (n < 0n) throw new Error('negative'); if (n < 2n) return n;
  let x = n, y = (x + 1n) >> 1n; while (y < x) { x = y; y = (x + n / x) >> 1n; } return x;
}
export function swapOut(amountIn, reserveIn, reserveOut, feeBps = 30n) {
  amountIn=BigInt(amountIn);reserveIn=BigInt(reserveIn);reserveOut=BigInt(reserveOut);feeBps=BigInt(feeBps);
  if(amountIn<=0n||reserveIn<=0n||reserveOut<=0n)throw new Error('positive input/reserves required');
  if(feeBps<0n||feeBps>=10000n)throw new Error('fee out of range');
  const effective=amountIn*(10000n-feeBps),out=effective*reserveOut/(reserveIn*10000n+effective);
  if(out<=0n||out>=reserveOut)throw new Error('output dust or reserve bound'); return out;
}
export function addLiquidity(tezIn, tokenIn, reserveTez, reserveToken, totalShares) {
  tezIn=BigInt(tezIn);tokenIn=BigInt(tokenIn);reserveTez=BigInt(reserveTez);reserveToken=BigInt(reserveToken);totalShares=BigInt(totalShares);
  if(tezIn<=0n||tokenIn<=0n)throw new Error('deposit amounts must be positive');
  if((reserveTez===0n)!==(reserveToken===0n))throw new Error('inconsistent empty reserves');
  if(reserveTez===0n&&totalShares===0n){const shares=isqrt(tezIn*tokenIn);if(shares<=0n)throw new Error('zero initial LP shares');return {shares,usedTez:tezIn,usedToken:tokenIn};}
  if(reserveTez<=0n||reserveToken<=0n||totalShares<=0n)throw new Error('pool state inconsistent');
  const idealToken=tezIn*reserveToken/reserveTez;
  // At most one raw token unit of rounding dust may be accepted; excess is rejected.
  if(tokenIn<idealToken||tokenIn>idealToken+1n)throw new Error('deposit ratio mismatch');
  const sharesTez=tezIn*totalShares/reserveTez,sharesToken=tokenIn*totalShares/reserveToken,shares=sharesTez<sharesToken?sharesTez:sharesToken;
  if(shares<=0n)throw new Error('zero LP shares');return {shares,usedTez:tezIn,usedToken:tokenIn};
}
export function removeLiquidity(shares,reserveTez,reserveToken,totalShares){
  shares=BigInt(shares);reserveTez=BigInt(reserveTez);reserveToken=BigInt(reserveToken);totalShares=BigInt(totalShares);
  if(shares<=0n||totalShares<=0n||shares>totalShares)throw new Error('invalid LP shares');
  const tez=shares*reserveTez/totalShares,token=shares*reserveToken/totalShares;
  if(tez<=0n||token<=0n)throw new Error('withdrawal would return dust');return {tez,token};
}
