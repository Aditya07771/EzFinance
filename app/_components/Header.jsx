"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrendingUp, User } from "lucide-react";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const onNavigate = (path) => router.push(path);

  return (
    <div className="p-5 flex justify-between items-center border-b bg-background shadow-sm">
      <div className="flex flex-row items-center cursor-pointer" onClick={() => onNavigate?.("/")}>
        <div className="bg-primary rounded-lg p-2 mr-3">
          <TrendingUp className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-primary font-bold text-xl">EzFinance</span>
      </div>
      
      {isSignedIn ? (
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            onClick={() => onNavigate?.("/dashboard")}
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <Button 
            variant="outline" 
            className="rounded-full"
            onClick={() => onNavigate?.("/dashboard")}
          >
            Dashboard
          </Button>
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90"
            onClick={() => onNavigate?.("/dashboard")}
          >
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
