"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HelpCircle, Menu, Search, Settings, User } from "lucide-react";
import ThemeToggle from "@/components/theme/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/context/user-context";
export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <header className="border-b p-6 flex items-center justify-between">
      <div className="flex items-center w-full max-w-2xl">
        <Input
          type="text"
          placeholder="Search in Drive"
          className="mr-4 text-lg"
        />
        <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
          <Search className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
          <HelpCircle className="h-6 w-6" />
        </Button>
        <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
          <Settings className="h-6 w-6" />
        </Button>
        <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
          <Menu className="h-6 w-6" />
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-12 w-12 rounded-full"
            >
              <Avatar className="h-[40px] w-[40px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Logout</DropdownMenuLabel>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
