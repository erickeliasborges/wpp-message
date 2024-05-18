import { EventEmitter, InjectionToken } from "@angular/core";

export const GENERIC_SEARCH = new InjectionToken<SearchFactory<any, any>>('generic-search');

export interface SearchFactory<E, I> {
    newEvent: EventEmitter<E>;
    editionEvent: EventEmitter<I>;
    search(): void;
    refresh(): void;
}
