'use client'

import {sidebarLinks} from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

const Bottombar = () => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <section className={'bottombar'}>
            <div className={'bottombar_container'}>
                {sidebarLinks.map((sidebarLink) => {
                        const isActive = (pathname.includes(sidebarLink.route) && sidebarLink.route.length > 1) || pathname === sidebarLink.route
                        return (
                            <Link
                                href={sidebarLink.route}
                                key={sidebarLink.label}
                                className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                            >
                                <Image
                                    src={sidebarLink.imgURL}
                                    alt={sidebarLink.label}
                                    width={24}
                                    height={24}
                                />
                                <p className={'text-subtle-medium text-light-1 max-sm:hidden'}>
                                    {/*get only first word*/}
                                    {sidebarLink.label.split(/\s+./)[0]}
                                </p>
                            </Link>
                        )
                    }
                )}
            </div>
        </section>
    );
};

export default Bottombar;