import { useState } from "react";
import { useFhevmClient, useVoteManager } from "../hooks/useSdk";

const proposals = [
  { id: "p1", title: "Yeni topluluk yöneticisi seçilsin mi?" },
  { id: "p2", title: "Geliştirici toplantısı her ay olsun mu?" }
];

export default function Home() {
  const client = useFhevmClient("https://rpc.zama.network");
  const voteManager = useVoteManager(client);
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const cast = async (voteValue: number) => {
    if (!voteManager || !selected) return;
    setStatus("Şifreli oy gönderiliyor...");
    await voteManager.castVote(selected, voteValue);
    setStatus("Oy başarıyla gönderildi!");
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Private Voting dApp</h1>
      <div className="space-y-4">
        {proposals.map((p) => (
          <button
            key={p.id}
            className={`w-full p-4 border rounded-lg ${selected === p.id ? "border-purple-600" : ""}`}
            onClick={() => setSelected(p.id)}
          >
            {p.title}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-8">
          <p className="mb-2">Seçiminizi yapın:</p>
          <div className="flex space-x-4">
            <button onClick={() => cast(1)} className="px-4 py-2 bg-green-600 text-white rounded">Evet</button>
            <button onClick={() => cast(0)} className="px-4 py-2 bg-red-600 text-white rounded">Hayır</button>
          </div>
          {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
        </div>
      )}
    </main>
  );
}
