import Hero from "@/public/images/hero.png"
import Image from "next/image"

export default function Home() {
    
    return (
        <div>
            <div>
                <h1>Better design for your digital product</h1>
                <p>Turning your idea into reality. We bring together the teams from the global tech industry</p>
                <button>See out works</button>
            </div>
            <Image src={Hero} alt="hero image" />
        </div>
    )
}