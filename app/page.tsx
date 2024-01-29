import Head from "./Head";
import Loading from "./Loading";
import Error from "./Error";
import NotFound from "./NotFound";

export default function Home() {
	return (
		<>
			<Head />
			<Loading />
			<Error />
			<NotFound />
			<div>Home</div>
		</>
	);
}
