import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const countries = [
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "GB", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "ML", name: "Mali", flag: "🇲🇱" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "NL", name: "Netherland", flag: "🇳🇱" },
];

interface CountrySelectorProps {
  onSelect: (country: string) => void;
}

export function CountrySelector({ onSelect }: CountrySelectorProps) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Input
          type="text"
          placeholder="Country"
          className="w-full bg-white/20 text-white placeholder:text-white/70 border-none cursor-pointer"
          readOnly
        />
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] bg-white rounded-t-3xl">
        <SheetHeader>
          <SheetTitle className="text-left text-purple-900 text-2xl mb-4">Select Country</SheetTitle>
        </SheetHeader>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-10 border-2 border-purple-100 rounded-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[calc(80vh-140px)]">
          {filteredCountries.map((country) => (
            <button
              key={country.code}
              className="flex items-center space-x-3 w-full p-2 hover:bg-purple-50 rounded-lg text-left"
              onClick={() => {
                onSelect(country.name);
                setSearch("");
              }}
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-purple-900 text-lg">{country.name}</span>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}