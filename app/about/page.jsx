import Button from "@/components/button/Button";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container px-4">
            <div className="relative">
                <div className="relative w-full h-[300px]">
                    <Image src="/images/people.jpg" alt="an office" fill className="object-cover" />
                </div>
                <div className="absolute left-5 bottom-5 bg-green-700 p-2">
                    <h1 className="text-lg font-bold">Digital Storytellers</h1>
                    <h2 className="text-sm font-medium">Handcrafting award winning digital experience</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-24 mt-12">
                <div>
                    <h1 className="text-3xl font-semibold mb-5">Who Are We?</h1>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur et quisquam at distinctio nisi odio asperiores aliquam sit vitae. Commodi fugiat assumenda neque aliquid nulla cumque dicta, consectetur quis dolores a molestias <br/><br/> recusandae incidunt cum aperiam ullam, adipisci fugit? Quo voluptate aut, asperiores ullam itaque possimus quis cum obcaecati quidem facilis cupiditate reiciendis nobis! Obcaecati, eligendi soluta! Amet vitae aut hic suscipit optio facere eaque odio? Consectetur, eligendi! Esse repellat deleniti aliquam ullam eum quasi <br/><br/> dignissimos doloremque facere ad cupiditate accusamus mollitia, atque unde sequi temporibus dicta obcaecati voluptatibus consequatur sint rem provident maiores error laboriosam! Iusto tempore non iure.</p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mb-5">What We Do?</h1>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur et quisquam at distinctio nisi odio asperiores aliquam sit vitae. Commodi fugiat assumenda neque aliquid nulla cumque dicta, consectetur quis dolores a molestias recusandae incidunt cum aperiam ullam, adipisci fugit? Quo voluptate aut<br/><br/>
                        - Dynamic Website
                        <br/> <br/>
                        - Fast and Handy 
                        <br/> <br/>
                        - Mobile App
                         <br/> <br/>
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}