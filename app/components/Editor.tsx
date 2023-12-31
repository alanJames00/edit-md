"use client"
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { CodeState } from '../states/editor-state';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { useRecoilState, useRecoilValue } from 'recoil';

import { EditorThemeState } from '../states/editor-theme-state';


interface EditorProps {
	editorWidth: number;
}

export default function Editor( { editorWidth } :EditorProps ) {

    const [code, setCode] = useRecoilState(CodeState)
    const editorTheme = useRecoilValue(EditorThemeState)

    return (    
        <div>
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value) }
          height="600px"
          minWidth='780px'
          theme= {editorTheme}
          extensions={[markdown({ base: markdownLanguage })]}
        />
        </div>
      );

}