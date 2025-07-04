"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
export default function Home() {
  const trpc = useTRPC();
  const categories = useQuery(trpc.categories.getMany.queryOptions());
  return (
    <div className="flex flex-col gap-y-4">
      Home page
    </div>
  );
}
