"use client";
import Link from "next/link";
import type {ComponentProps,MouseEvent,ReactNode} from "react";
import {trackConversion,type ConversionEventName} from "@/lib/analytics";

type Props=Omit<ComponentProps<typeof Link>,"onClick">&{children:ReactNode;eventName:ConversionEventName;placement:string;campaign?:string;tool?:string;onClick?:(event:MouseEvent<HTMLAnchorElement>)=>void};
export function TrackedLink({children,eventName,placement,campaign,tool,onClick,...props}:Props){
  function handleClick(event:MouseEvent<HTMLAnchorElement>){
    trackConversion({name:eventName,placement,campaign,tool,destination:String(props.href)});
    onClick?.(event);
  }
  return <Link {...props} onClick={handleClick}>{children}</Link>;
}
