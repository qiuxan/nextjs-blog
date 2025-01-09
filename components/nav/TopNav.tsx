import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function TopNav() {
    return(
        <nav>
            <Link href="/">Home</Link>
            
            <ThemeToggle />
        </nav>
    );
}