import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';

type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};
declare const useAppShell: zustand.UseBoundStore<Omit<zustand.StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<Store, Store>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<Store, Store>>;
    };
}>;

declare const Shell: ({ title, children, }: {
    title: string;
    children: any;
}) => JSX.Element;

export { Shell, useAppShell };