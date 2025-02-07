import { Button } from "../ui/button"
import Link from "next/link"

export default function Homepage () {
    return <div className="flex items-center  flex-col h-full 
    items-center justify-center text-white ">
        <h3 className="text-4xl font-bold mb-4">Recall Quest</h3>
        
        <div className="flex items-center flex-col w-full gap-2 my-4">
        <Button className="w-full font-semibold ">
            Play as Guest
        </Button>

        <Link href='/auth/login' className="w-full">
        <Button className="w-full " variant={'outline'}>
            Log in
        </Button>
        </Link>
        </div>

        <p >Don’t have an account? <a className="font-bold" href="/auth/signup">Sign up</a> </p>
    </div>
}