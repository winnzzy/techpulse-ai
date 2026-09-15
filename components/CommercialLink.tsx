"use client";
import type {AnchorHTMLAttributes,MouseEvent,ReactNode} from "react";
import {trackConversion,type ConversionEventName} from "@/lib/analytics";

type Relationship="affiliate"|"sponsor"|"direct-paid";
type Props=AnchorHTMLAttributes<HTMLAnchorElement>&{href:string;children:ReactNode;partner?:string;placement:string;campaign?:string;relationship?:Relationship};

const eventByRelationship:Record<Relationship,ConversionEventName>={
  affiliate:"affiliate_click",
  sponsor:"sponsor_click",
  "direct-paid":"direct_ad_click",
};

export function CommercialLink({href,children,partner,placement,campaign,relationship="affiliate",rel,onClick,...props}:Props){
  function handleClick(event:MouseEvent<HTMLAnchorElement>){
    trackConversion({name:eventByRelationship[relationship],partner,placement,campaign,destination:href});
    onClick?.(event);
  }
  const relTokens=Array.from(new Set([...(rel??"").split(/\s+/).filter(Boolean),"sponsored","noopener","noreferrer"])).join(" ");
  return <a href={href} data-commercial-link="true" data-relationship={relationship} data-partner={partner} data-placement={placement} data-campaign={campaign} rel={relTokens} onClick={handleClick} {...props}>{children}</a>;
}
