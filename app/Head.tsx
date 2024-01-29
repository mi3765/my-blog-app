import Link from "next/link";

const Head = () => {
	return (
		<>
			<title>mi3765-Blog</title>
			<meta content="width=device-width, initial-scale-1" name="viewport" />
			<meta name="description" content="Next.js Supabase Blog" />
			<Link rel="icon" href="/favicon.ico" />
		</>
	);
};

export default Head;
