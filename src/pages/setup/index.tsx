import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/layouts/mainLayout";
import Avatar from "boring-avatars";
import { useState } from "react";

const avatarVariants = [
  "marble",
  "beam",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
];

const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

export default function Setup() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [playerName, setPlayerName] = useState("");

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-2xl font-bold text-center text-white">PROFILE</h1>

          <div className="flex justify-center">
            <div className="w-24 h-24">
              <Avatar
                size={96}
                name={playerName || "Player"}
                variant={avatarVariants[selectedVariant]}
                colors={colors}
              />
            </div>
          </div>

          <Input
            type="text"
            placeholder="Player Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full bg-white/20 text-white placeholder:text-white/70 border-none"
          />

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white text-center">
              SELECT AN AVATAR
            </h2>
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/10 rounded-xl">
              {avatarVariants.map((variant, index) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(index)}
                  className={`relative w-20 h-20 rounded-full transition-all duration-200 ${
                    selectedVariant === index
                      ? "ring-4 ring-teal-400 scale-110"
                      : "hover:scale-105"
                  }`}
                >
                  <Avatar
                    size={80}
                    name={playerName || "Player"}
                    variant={variant}
                    colors={colors}
                  />
                </button>
              ))}
            </div>
          </div>

          <Button className="w-full bg-teal-400 hover:bg-teal-500 text-white">
            Next
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}