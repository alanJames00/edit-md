"use client"

import Editor from './components/Editor';
import Viewer from './components/Viewer';
import PageHeader from './components/page-header';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { ThemeProvider } from '@/components/theme-provider';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
	<RecoilRoot>
	<div>
		<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
	<div>
		<div>
			<PageHeader />
		</div>
	
		<div>
			<ResizablePanelGroup
    	  direction="horizontal"
    	  className="min-h-[200px] rounded-lg border">

    	  <ResizablePanel defaultSize={50}>
    	    <div className="flex h-full ">
    	      <Editor />	
    	    </div>
    	  </ResizablePanel>
    	  <ResizableHandle withHandle />
    	  <ResizablePanel defaultSize={50}>
    	    <div className="flex h-full p-6">
    	      
			  <Viewer />
			  
    	    </div>
    	  </ResizablePanel>
    	</ResizablePanelGroup>
			</div>
	
	
	</div>
	</ThemeProvider>
	</div>
	</RecoilRoot>
  );
}
