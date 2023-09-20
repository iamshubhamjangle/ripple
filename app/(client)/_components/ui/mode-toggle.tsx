"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Settings, Sun } from "lucide-react";

import { Button } from "@/app/(client)/_components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-around items-center">
      <span className="text-sm">Theme:</span>
      <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Sun />
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <Moon />
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("system")}>
        <Settings />
      </Button>
    </div>
  );
}
