import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

type Props = {
    homeElement: ReactNode,
    separator: ReactNode,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

export const Breadcrumb = ({ homeElement, separator, listClasses, activeClasses, capitalizeLinks }: Props) => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <nav aria-label="breadcrumb" className="w-max">
            <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                    <Link href="/">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">{homeElement}</p>
                    </Link>
                    <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal ml-2 pointer-events-none select-none">{pathNames.length > 0 && separator}</span>
                </li>                
                {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <li className={`flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500 ${itemClasses}`} >
                                <Link className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal' href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }

            </ol>
        </nav>
    )
}
