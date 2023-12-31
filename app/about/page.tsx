import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutPage() {

    return (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
        
            <h1 className=" text-3xl mt-4 mb-2">About EDIT.md</h1>
            <div>
                Edit.md is an online, lightweight Markdown Editor And Viewer built on NextJS.
                <h1 className=" mt-10 mb-2">Made With ❤️ by alanjames00</h1> 
                
                <a href="https://github.com/alanJames00"><Button>View My Github</Button></a>
            </div> 
            
        </div>
    );
}