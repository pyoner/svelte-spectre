import { SvelteComponentTyped } from 'svelte';
import type { Offset } from '../../types/position';
import type { Status } from '../Avatar/Avatar.svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        offset?: Offset;
        initial?: string;
        status?: Status;
        closable?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        avatar: {};
        default: {};
    };
};
export declare type ChipProps = typeof __propDef.props;
export declare type ChipEvents = typeof __propDef.events;
export declare type ChipSlots = typeof __propDef.slots;
export default class Chip extends SvelteComponentTyped<
    ChipProps,
    ChipEvents,
    ChipSlots
> {}
export {};
