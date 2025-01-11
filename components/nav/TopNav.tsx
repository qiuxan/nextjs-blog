import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function TopNav() {
    return(
        <nav className="nav shadow justify-content-between mb-2">
            <div className="d-flex justify-content-start">
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link" href="/blog/create">Create a blog</Link>
            </div>
    
            <div className="d-flex justify-content-center">
                <Link className="nav-link" href="/register">Register</Link>
                <Link className="nav-link" href="/login">Login</Link>
                <ThemeToggle />
            </div>
            
        </nav>
    );
}