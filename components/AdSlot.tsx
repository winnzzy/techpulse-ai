import {adInventory,type AdPlacementId} from "@/lib/ad-inventory";

type AdSlotProps={placement:AdPlacementId;className?:string};

/**
 * Advertising inventory primitive. Placements are centrally disabled until a
 * real approved provider, consent flow and verified slot IDs are configured.
 */
export function AdSlot({placement,className}:AdSlotProps){
  const slot=adInventory[placement];
  if(!slot.enabled)return null;

  // Production-safe guard: inventory activation alone never fabricates an ad.
  // A verified provider adapter will render creative here after configuration.
  return <aside className={className} data-ad-placement={placement} aria-label="Advertisement" style={slot.minHeight?{minHeight:slot.minHeight}:undefined}/>;
}
