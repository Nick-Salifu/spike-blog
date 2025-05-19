import Link from "next/link";

export default function PortfolioPage() {
    return (
        <div>
            <h1 className="my-5">Choose a gallery</h1>
            <div className="flex gap-5">
                <div className="border-2 border-white/60 rounded-md w-72 h-72 relative bg-[url('/images/illustration.png')] bg-cover hover:text-green-700">
                    <Link href="/portfolio/illustration">
                        <span className="absolute right-4 bottom-4 font-bold text-xl">Illustration</span>
                    </Link>
                </div>
                <div className="border-2 border-white/60 rounded-md w-72 h-72 relative bg-[url('/images/websites.jpg')] bg-cover hover:text-green-700">
                    <Link href="/portfolio/website">
                        <span className="absolute right-4 bottom-4 font-bold text-xl">Website</span>
                    </Link>
                </div>
                <div className="border-2 border-white/60 rounded-md w-72 h-72 relative bg-[url('/images/apps.jpg')] bg-cover hover:text-green-700">
                    <Link href="/portfolio/application">
                        <span className="absolute right-4 bottom-4 font-bold text-xl">Application</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}