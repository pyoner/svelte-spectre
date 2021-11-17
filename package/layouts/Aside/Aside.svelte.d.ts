import { SvelteComponentTyped } from 'svelte';
import type { Size } from '../../types/size';
import type { Offset } from '../../types/position';
export type { Size, Offset };
declare const __propDef: {
    props: {
        open?: boolean;
        show?: boolean;
        extclose?: boolean;
        right?: boolean;
        breakpoint?: string | number;
        size?: Size;
        offset?: Offset;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        sidebar: {};
        default: {};
    };
};
export declare type AsideProps = typeof __propDef.props;
export declare type AsideEvents = typeof __propDef.events;
export declare type AsideSlots = typeof __propDef.slots;
export default class Aside extends SvelteComponentTyped<
    AsideProps,
    AsideEvents,
    AsideSlots
> {}