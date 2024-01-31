"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/app/Loading";

const Profile = () => {
	// TODO: Supabase

	const router = useRouter();
	const [loadingLogout, setLoadingLogout] = useState(false);

	// ログアウト
	const logout = async () => {
		// ローディングアニメーションスタート
		setLoadingLogout(true);

		// TODO: Supabaseのサインアウト

		// ホーム画面に戻る、pathのリフレッシュ
		router.push("/");
		router.refresh();

		// ローディングアニメーション止める
		setLoadingLogout(false);
	};

	return (
		<div className="max-w-sm mx-auto">
			<div className="text-center">
				{loadingLogout ? (
					<Loading />
				) : (
					<div
						className="inline-block text-red-500 cursor-pointer"
						onClick={logout}
					>
						ログアウト
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
