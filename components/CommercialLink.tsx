"use client";
import type {AnchorHTMLAttributes,MouseEvent,ReactNode} from "react";
import {trackConversion} from "@/lib/analytics";

type Props=AnchorHTMLAttributes<HTMLAnchorElement>&{href:string;children:ReactNode;partner?:string;placement:string;campaign?:string;relationship?:"affiliate"|"sponsor"|"direct"};
export function CommercialLink({href,children,partner,placement,campaign,relationship="affiliate",rel,onClick,...props}:Props){
  function handleClick(event:MouseEvent<HTMLAnchorElement>){
    trackConversion({name:relationship==="sponsor"?"sponsor_click":"affiliate_click",partner,placement,campaign,destination:href});
    onClick?.(event);
  }
  return <a href={href} data-commercial-link="true" data-relationship={relationship} data-partner={partner} data-placement={placement} data-campaign={campaign} rel={[rel,"sponsored","noopener","noreferrer"].filter(Boolean).join(" ")} onClick={handleClick} {...props}>{children}</a>;
}
