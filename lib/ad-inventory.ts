export type AdPlacementId="article-inline-1"|"article-end"|"category-feed"|"tools-result"|"newsletter-sponsor";

export type AdPlacement={
  id:AdPlacementId;
  format:"display"|"native"|"newsletter";
  minHeight?:number;
  enabled:boolean;
};

/**
 * Ad inventory is deliberately inactive until TechPulse AI has an approved
 * ad/sponsorship account, consent requirements are implemented, and real slot
 * identifiers are configured. Keeping inventory centralized prevents ad code
 * from leaking into editorial templates prematurely.
 */
export const adInventory:Record<AdPlacementId,AdPlacement>={
  "article-inline-1":{id:"article-inline-1",format:"display",minHeight:250,enabled:false},
  "article-end":{id:"article-end",format:"display",minHeight:250,enabled:false},
  "category-feed":{id:"category-feed",format:"native",minHeight:180,enabled:false},
  "tools-result":{id:"tools-result",format:"native",minHeight:180,enabled:false},
  "newsletter-sponsor":{id:"newsletter-sponsor",format:"newsletter",enabled:false},
};
