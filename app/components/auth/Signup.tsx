"use client";
import { useRef, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/Loading";

const Signup = () => {
	// TODO: Supabase

	const router = useRouter();
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState(false);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// ローディングアニメーションスタート
		setLoading(true);

		// TODO: Supabaseのサインアップ

		// TODO: プロフィールの名前を更新

		// ホーム画面に遷移
		router.push("/");

		// ローディングアニメーション止める
		setLoading(false);
	};

	return (
		<div className="max-w-sm mx-auto">
			<form onSubmit={onSubmit}>
				<div className="mb-5">
					<div className="text-sm mb-1">名前</div>
					<input
						type="text"
						className="w-full bg-gray-100 rounded border py-1 px-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-yellow-500"
						ref={nameRef}
						id="name"
						placeholder="name"
						required
					/>
				</div>
				<div className="mb-5">
					<div className="text-sm mb-1">メールアドレス</div>
					<input
						type="email"
						className="w-full bg-gray-100 rounded border py-1 px-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-yellow-500"
						ref={emailRef}
						id="email"
						placeholder="email"
						required
					/>
				</div>
				<div className="mb-5">
					<div className="text-sm mb-1">パスワード</div>
					<input
						type="password"
						className="w-full bg-gray-100 rounded border py-1 px-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-yellow-500"
						ref={nameRef}
						id="password"
						placeholder="password"
						required
					/>
				</div>

				<div className="text-center mb-5">
					{loading ? (
						<Loading />
					) : (
						<button
							type="submit"
							className="w-full text-white bg-yellow-500 hover:brightness-110 rounded py-1 px-8"
						>
							サインアップ
						</button>
					)}
				</div>
			</form>
			<div className="text-center">アカウントをお持ちですか？</div>
			<div className="text-center">
				<Link href="/auth/login" className="cursor-pointer font-bold">
					ログイン
				</Link>
			</div>
		</div>
	);
};

export default Signup;
