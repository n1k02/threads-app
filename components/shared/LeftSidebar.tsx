'use client'

import Link from "next/link";
import {sidebarLinks} from "@/constants/constants";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {SignedIn, SignOutButton} from "@clerk/nextjs";

const LeftSidebar = () => {

    const router = useRouter()
    const pathname = usePathname()
    return (
        <section className={'custom-scrollbar leftsidebar'}>
            <div className={'flex w-full flex-1 flex-col gap-6 px-6'}>
                {sidebarLinks.map((sidebarLink) => {
                    const isActive = (pathname.includes(sidebarLink.route) && sidebarLink.route.length > 1) || pathname === sidebarLink.route
                        return (
                            <Link
                                href={sidebarLink.route}
                                key={sidebarLink.label}
                                className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                            >
                                <Image
                                    src={sidebarLink.imgURL}
                                    alt={sidebarLink.label}
                                    width={24}
                                    height={24}
                                />
                                <p className={'text-light-1 max-lg:hidden'}>{sidebarLink.label}</p>
                            </Link>
                        )
                    }
                )}
            </div>

            <div className={'mt-10 px-6'}>
                <SignedIn>
                    <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                        <div className={'flex cursor-pointer gap-4 p-4'}>
                            <Image
                                src={'/assets/logout.svg'}
                                alt={'logout'}
                                width={24}
                                height={24}
                            />
                            <p className={'text-light-2 max-lg:hidden'}>Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
};

export default LeftSidebar;