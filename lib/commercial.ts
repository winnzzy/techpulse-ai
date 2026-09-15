export type CommercialRelationship="affiliate"|"sponsor"|"direct-paid";

export type CommercialPartner={
  id:string;
  name:string;
  relationship:CommercialRelationship;
  destination:string;
  campaign?:string;
  disclosureRequired:true;
  active:boolean;
  lastVerified:string;
};

/**
 * Commercial partner data stays separate from editorial rankings and article
 * conclusions. Empty by default: no partner is represented until a real
 * relationship and destination have been verified.
 */
export const commercialPartners:CommercialPartner[]=[];

export function getActiveCommercialPartner(id:string){
  return commercialPartners.find(partner=>partner.id===id&&partner.active);
}
