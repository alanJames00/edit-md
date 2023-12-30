"use client"
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import { CodeState } from '../states/editor-state';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { useRecoilState } from 'recoil';

export default function Editor() {

    const [code, setCode] = useRecoilState(CodeState)

    return (    
        <div>
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value) }
          height="600px"
          minWidth='780px'
          extensions={[markdown({ base: markdownLanguage })]}
        />
        </div>
      );

}