"use client";
import Link from "next/link";

const Navigation = () => {
	return (
		<header className="border-b py-5">
			<div className="container max-w-screen-xl mx-auto relative flex justify-center items-center">
				<Link href="/" className="font-bold text-xl cursor-pointer">
					mi3765-Blog
				</Link>
				{/* TODO: 後で要素追加したり、デザイン調整したりする */}
				<div className="absolute right-5">
					<div className="flex space-x-4">
						<Link href="/auth/profile">Profile</Link>
						<Link href="/auth/login">Login</Link>
						<Link href="/auth/signup">SignUp</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navigation;
