"use client"
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';

export default function Editor() {

    return (
        <div>
        <CodeMirror
          value="console.log('hello world!');"
          height="600px"
          minWidth='780px'
          extensions={[markdown({ base: markdownLanguage })]}
        />
        </div>
      );

}