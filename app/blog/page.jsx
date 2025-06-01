import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="flex flex-col gap-5 my-10 items-center">
            <Link href="/blog/textId" className="flex gap-20">
                <div className="w-1/3">
                    <Image src="/images/apps.jpg" alt="app image" height={250} width={400} />
                </div>

                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1>Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci debitis amet iure ipsum quas alias quia, voluptas numquam! Molestias voluptas odit neque, quas omnis magnam quaerat nam. Quas, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum magni ratione facilis consectetur eveniet esse hic nulla suscipit molestias?</p>
                </div>
            </Link>

            <Link href="/blog/textId" className="flex gap-20">
                <div className="w-1/3">
                    <Image src="/images/people.jpg" alt="app image" height={250} width={400} />
                </div>

                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1>Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci debitis amet iure ipsum quas alias quia, voluptas numquam! Molestias voluptas odit neque, quas omnis magnam quaerat nam. Quas, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum magni ratione facilis consectetur eveniet esse hic nulla suscipit molestias?</p>
                </div>
            </Link>

            <Link href="/blog/textId" className="flex gap-20">
                <div className="w-1/3">
                    <Image src="/images/apps.jpg" alt="app image" height={250} width={400} />
                </div>

                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1>Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci debitis amet iure ipsum quas alias quia, voluptas numquam! Molestias voluptas odit neque, quas omnis magnam quaerat nam. Quas, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum magni ratione facilis consectetur eveniet esse hic nulla suscipit molestias?</p>
                </div>
            </Link>

            <Link href="/blog/textId" className="flex gap-20">
                <div className="w-1/3">
                    <Image src="/images/people.jpg" alt="app image" height={250} width={400} />
                </div>

                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1>Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci debitis amet iure ipsum quas alias quia, voluptas numquam! Molestias voluptas odit neque, quas omnis magnam quaerat nam. Quas, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum magni ratione facilis consectetur eveniet esse hic nulla suscipit molestias?</p>
                </div>
            </Link>
        </div>
    )
}