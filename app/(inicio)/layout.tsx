import { Menu, SideBar } from "@/components";

export default function HomeLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">

            <SideBar />
            <div className="p-4 xl:ml-80">
                <Menu />
                <div className="px-0 sm:px-10">
                    {children}
                </div>
            </div>

        </main>
    );
}