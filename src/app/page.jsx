import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import HamburgerMenu from "@/components/ui/HamburgerMenu";

function page() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-screen h-12 dark:bg-zinc-800 rounded-b-sm pl-1 pr-1">

        <div className="flex flex-row items-center gap-2">
          <HamburgerMenu />
          <h1 className="font-bold font-mono text-xl">ConnecTTunes</h1>
        </div>
        <ModeToggle />


      </div>
      <h1>Connect tunes</h1>
    </div>
  )
}

export default page;