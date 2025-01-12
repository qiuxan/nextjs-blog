import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useSession,signOut } from "next-auth/react";

export default function TopNav() {
    const { data, status } = useSession();

    return(
        <nav className="nav shadow justify-content-between mb-3">
            <div className="d-flex justify-content-start">
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link" href="/blog/create">Create a blog</Link>
            </div>
            
            <div className="d-flex justify-content-center">
                {status === 
                    "authenticated" ? 
                    (<>
                        <Link className="nav-link" href="/dashboard/user">{data?.user?.name}</Link>
                        <a className="nav-link pointer" onClick={()=>signOut({callbackUrl :"/login"})}>Logout</a>
                    </>)
                    
                    :(<div className="d-flex justify-content-center">
                        <Link className="nav-link" href="/register">Register</Link>
                        <Link className="nav-link" href="/login">Login</Link>
                        
                    </div>)
                }
                <ThemeToggle />
            </div>
        </nav>
    );
}