import { Button } from "@/components/ui/button"


export default function PageHeader() {

    return (
        <div className=" mt-2 ml-2">
            <h1 className=" text-3xl font-semibold">EDIT.md </h1>
            <h1 className=" italic">Open, View, Edit And Do Much More With Markdown 🚀</h1>
            
            <div className=" flex justify-end mr-4">
              <Button variant="outline">About</Button>
            </div>

            <hr className=" mt-4"/>
        </div>
    );
}