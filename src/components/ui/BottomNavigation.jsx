'use client';
import ProfileAvatar from "@/components/ui/ProfileAvatar";
import { Home, Music, PlusSquareIcon, Search } from "lucide-react";
import { useRouter } from 'next/navigation'
import { Button } from "./button";
export default function BottomNavigation() {
    const router = useRouter();

    function handleClick(url) {
        router.push(url)
    }

    return (
        <div className="w-screen h-12 rounded-t-sm fixed bottom-0 left-0 flex flex-row justify-evenly items-center dark:bg-zinc-800">
            <Button variant='ghost' onClick={() => handleClick('/')}>
                <Home />
            </Button>
            <Button variant='ghost' onClick={() => handleClick('search')}>
                <Search />
            </Button>
            <Button variant='ghost' onClick={() => handleClick('discover')}>
                <Music />
            </Button>
            <Button variant='ghost' onClick={() => handleClick('create_post')}>
                <PlusSquareIcon />
            </Button>
            <Button variant='ghost' onClick={() => handleClick('profile')}>
                <ProfileAvatar />
            </Button>

        </div>
    )
}