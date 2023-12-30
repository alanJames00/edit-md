import { atom } from "recoil";  

export const CodeState = atom({
    key:'editor-state',
    default:'## Hello World!'
});