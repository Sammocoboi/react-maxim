import type { ComponentPropsWithoutRef } from "react";

export type Props = &ComponentPropsWithoutRef<'button'>&{
    
    label:string

    mode?: 'primary' | 'secondary';

    disabled?:boolean;


    size?: 'large' | 'medium' | 'small';



}