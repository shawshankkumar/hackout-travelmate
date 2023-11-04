"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dashboardSectionType, dashboardSections } from "@/utils/constants";
import Link from "next/link";

export function ComboboxDemo({ active }: { active: dashboardSectionType }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {dashboardSections[active]}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] sm:w-[635px]">
        {Object.entries(dashboardSections).map(([key, label]) => (
          <Link key={key} href={key}>
            <div
              className={`py-2 px-4 w-full text-sm my-1 font-semibold rounded-md transition-all duration-300 ease-in  ${
                active === key
                  ? " bg-slate-700 text-white"
                  : "bg-white text-slate-500 hover:bg-slate-200"
              }`}
            >
              {label}
            </div>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
