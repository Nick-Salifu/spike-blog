"use client"

import Button from "@/components/button/Button"
import Image from "next/image"

export default function Category({ params }) {
    console.log(params)
    return (
        <div>
            <h1 className="text-3xl font-semibold text-green-600 capitalize">
                {params.category}
            </h1>
            <div className="flex mt-[50px] mb-[100px] gap-20">
                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="text-2xl font-semibold">Text</h1>
                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum aliquam veritatis nam possimus, a, accusantium iure dolorem, fugiat in placeat officiis totam voluptates laborum ut est nihil minus consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, similique. Deserunt voluptate molestiae vitae neque pariatur facere vel, magnam quisquam.</p>
                    <Button text="See more" url="#"/>
                </div>

                <div className="w-1/2">
                    <Image src="/images/people.jpg" alt="website image" className="object-cover" height={500} width={500} />
                </div>
            </div>

            <div className="flex mt-[50px] mb-[100px] gap-20">
                <div className="w-1/2">
                    <Image src="/images/websites.jpg" alt="website image" className="object-cover" height={500} width={500} />
                </div>

                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="text-2xl font-semibold">Text</h1>
                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum aliquam veritatis nam possimus, a, accusantium iure dolorem, fugiat in placeat officiis totam voluptates laborum ut est nihil minus consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, similique. Deserunt voluptate molestiae vitae neque pariatur facere vel, magnam quisquam.</p>
                    <Button text="See more" url="#"/>
                </div>
            </div>

            <div className="flex mt-[50px] mb-[100px] gap-20">
                <div className="w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="text-2xl font-semibold">Text</h1>
                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatum aliquam veritatis nam possimus, a, accusantium iure dolorem, fugiat in placeat officiis totam voluptates laborum ut est nihil minus consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, similique. Deserunt voluptate molestiae vitae neque pariatur facere vel, magnam quisquam.</p>
                    <Button text="See more" url="#"/>
                </div>

                 <div className="w-1/2">
                    <Image src="/images/illustration.png" alt="website image" className="object-cover" height={400} width={400} />
                </div>
            </div>
        </div>
    )
}