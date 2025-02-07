import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/mainLayout";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { TbLetterW } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import Image from "next/image";
import Avatar from "boring-avatars";
import { DefaultCoinSvg, DiamondSvg } from "@/assets/svg/indexSvg";
export default function GameMenu() {
  console.log(Avatar)
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen p-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="text-white p-2">
              <IoClose className="w-6 h-6" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-white mr-1">0</span>
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center" >
                  <DefaultCoinSvg/>
                </div>
            </div>
            <div className="flex items-center">
              <span className="text-white mr-1">0</span>
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center" >
                  <DiamondSvg/>
                 </div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Avatar />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-4 max-w-md mx-auto w-full">
          <Button className="bg-teal-400 hover:bg-teal-500 text-white h-14 text-lg gap-2">
            <FaGamepad className="w-5 h-5" />
            Host Game
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 h-14 text-lg gap-2"
          >
            <IoWifi className="w-5 h-5" />
            Join Game
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 h-14 text-lg gap-2"
          >
            <TbLetterW className="w-5 h-5" />
            Word Dash
          </Button>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-8 mt-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 gap-2"
          >
            <IoWifi className="w-5 h-5" />
            Join Online
          </Button>
          <div className="w-px bg-white/20" />
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 gap-2"
          >
            <BsQuestionCircle className="w-5 h-5" />
            How to play
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}