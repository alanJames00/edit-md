import { RecoilState, atom } from 'recoil'


export const EditorThemeState: RecoilState<any> = atom({
    key:'editor-theme-state',
    default:'light'
})