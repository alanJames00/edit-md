"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRecoilState } from "recoil"
import { EditorThemeState } from "@/app/states/editor-theme-state"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [editorTheme, setEditorTheme] = useRecoilState(EditorThemeState)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() =>{ 
            setTheme("light")
            setEditorTheme('light')
            }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
            setTheme("dark")
            setEditorTheme('dark')
            }}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
