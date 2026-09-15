type AdSlotProps={
  placement:string;
  format?:"leaderboard"|"rectangle"|"in-article";
  reserveSpace?:boolean;
};

/**
 * Advertising inventory primitive. It intentionally renders no ad creative until
 * a real approved ad provider and consent configuration are connected.
 */
export function AdSlot({placement,format="in-article",reserveSpace=false}:AdSlotProps){
  const adsEnabled=process.env.NEXT_PUBLIC_ADS_ENABLED==="true";
  if(!adsEnabled&&!reserveSpace)return null;
  if(!adsEnabled)return <div className={`ad-slot ad-slot-${format}`} data-ad-placement={placement} aria-hidden="true"/>;

  // Keep production safe: enabling the flag alone must never fabricate an ad.
  // Provider-specific rendering is added only after account approval/configuration.
  return null;
}
