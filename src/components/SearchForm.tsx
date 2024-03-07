"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/5 px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="🔍 Search events in any city..."
        spellCheck="false"
      />
    </form>
  );
}
