import type {AnchorHTMLAttributes,ReactNode} from "react";

type Props=AnchorHTMLAttributes<HTMLAnchorElement>&{href:string;children:ReactNode;partner?:string;placement:string;campaign?:string;relationship?:"affiliate"|"sponsor"|"direct"};
export function CommercialLink({href,children,partner,placement,campaign,relationship="affiliate",rel,...props}:Props){return <a href={href} data-commercial-link="true" data-relationship={relationship} data-partner={partner} data-placement={placement} data-campaign={campaign} rel={[rel,"sponsored","noopener","noreferrer"].filter(Boolean).join(" ")} {...props}>{children}</a>}
