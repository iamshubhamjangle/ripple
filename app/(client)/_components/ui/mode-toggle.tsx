"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Settings, Sun } from "lucide-react";

import { Button } from "@/app/(client)/_components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/(client)/_components/ui/tooltip";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-around items-center">
      <span className="text-sm">Theme:</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
          >
            <Sun />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Light</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <Moon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Dark</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("system")}
          >
            <Settings />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>System</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
