"use client"

import Editor from './components/Editor';
import Viewer from './components/Viewer';
import PageHeader from './components/page-header';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
 

export default function Home() {
  return (
	<div>
		<div>
			<PageHeader />
		</div>
	
		<div>
			<ResizablePanelGroup
    	  direction="horizontal"
    	  className="min-h-[200px] rounded-lg border">

    	  <ResizablePanel defaultSize={100}>
    	    <div className="flex h-full ">
    	      <Editor />	
    	    </div>
    	  </ResizablePanel>
    	  <ResizableHandle withHandle />
    	  <ResizablePanel defaultSize={75}>
    	    <div className="flex h-full p-6">
    	      
			  <Viewer />
    	    </div>
    	  </ResizablePanel>
    	</ResizablePanelGroup>
			</div>
	</div>
  );
}
