export default function Home() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">
                12球団ドラフト会議
            </h1>

            <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    ルーム作成
                </button>

                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    ルーム参加
                </button>
            </div>
        </main>
    );
}
