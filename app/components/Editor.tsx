"use client"
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';


export default function Editor() {

    return (
        <div>
        <CodeMirror
          value="console.log('hello world!');"
          height="600px"
          minWidth='650px'
        />
        </div>
      );

}