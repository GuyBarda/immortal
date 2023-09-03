import Link from 'next/link';

export default function Navbar() {
    // const links = ['Home', 'Pricing', 'Why Us', 'Join Now'];
    return (
        <header className="main-header">
            <h1>Immortals</h1>
            <nav className="main-nav">
                <Link href="/">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/why-us">Why Us</Link>
                <Link href="/join-now">Join Now</Link>
                <Link href="/user/12h376x12">!user!</Link>
            </nav>
            <div className="user-sign">
                <Link href="/login">Sign in</Link>
            </div>
        </header>
    );
}
