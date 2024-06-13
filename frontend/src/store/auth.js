import {create} from 'zustand'
import {mountStoreDevtool} from 'simple-zustand-devtools'


const useAuthStore = create((set, get) => ({
    allUserData: null,

}))