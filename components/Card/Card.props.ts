import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    type?: 'privod' | 'none',
    icon?: 'mnogo' | 'nepoln' | 'pryamo' | 'rychag' | 'nepoln_red' | 'mnogo_red' | 'controls' | 'rychag_red' | 'none'
}