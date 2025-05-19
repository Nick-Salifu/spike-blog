import Button from "@/components/button/Button";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="py-10">
            <h1 className="text-6xl font-bold text-center mb-10">Let's keep in touch</h1>
            <div className="flex justify-center">
                <div className="relative w-full h-[400px]">
                    <Image src="/images/contact.png" alt="contact image" fill className="object-contain" />
                </div>
                <form className="flex flex-col gap-5 w-full">
                    <input type="text" placeholder="Name" className="px-8 py-3 border-2 border-white/60 rounded-md text-white" />
                    <input type="email" placeholder="Email" className="px-8 py-3 border-2 border-white/60 rounded-md text-white" />
                    <textarea placeholder="Message" className="border-2 border-white/60 rounded-md p-8" cols={5} rows={5}></textarea>
                    <Button url="#" text="Send"/>
                </form>
            </div>
        </div>
    )
}