import Hero from "@/public/images/hero.png"
import Image from "next/image"

export default function Home() {
    
    return (
        <div className="flex items-center gap-24">
            <div className="flex flex-col gap-12">
                <h1 className="text-5xl tracking-wide font-bold bg-gradient-to-b from-green-800 to-gray-400 bg-clip-text text-transparent">Better design for your digital products.</h1>
                <p className="text-md">Turning your idea into reality. We bring together the teams from the global tech industry</p>
                <button className="bg-green-800 text-white px-6 py-2 w-max cursor-pointer rounded-sm">See out works</button>
            </div>
            <div>
                <Image src={Hero} alt="hero image" />
            </div>
        </div>
    )
}