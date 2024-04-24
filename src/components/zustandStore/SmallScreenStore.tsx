import {create} from 'zustand'

interface StoreState {
    smallScreen: boolean;
    setSmallScreen: (value: boolean) => void;
}



const useStore = create<StoreState>((set) => ({
    smallScreen: false,
    setSmallScreen: (value) => set({smallScreen: value})
}))


export default useStore