// 読み込み時に表示するページ

const Loading = () => {
	return (
		<div className="flex justify-center">
			<div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-500"></div>
		</div>
	);
};

export default Loading;
