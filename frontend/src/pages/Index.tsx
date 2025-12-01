import { useState, useCallback } from "react";
import { Search, Loader } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
    const [topic, setTopic] = useState("");
    const [responseType, setResponseType] = useState("média");
    const [explanation, setExplanation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const API_URL = "/api/assistente/explicar";

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!topic.trim()) {
            setError("Por favor, insira um tópico para a pesquisa.");
            setExplanation(null);
            return;
        }

        setIsLoading(true);
        setError(null);
        setExplanation(null);

        const payload = {
            topic: topic.trim(),
            tipo_resposta: responseType,
        };

        const maxRetries = 20;
        let attempt = 0;

        while (attempt < maxRetries) {
            try {
                const delay = Math.pow(2, attempt) * 1000;
                if (attempt > 0) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    console.log(`Tentativa ${attempt + 1}: Aguardando ${delay}ms...`);
                }

                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.explanation) {
                    setExplanation(data.explanation);
                    setError(null);
                } else {
                    setExplanation(null);
                    setError("O CloudIA não retornou uma explicação. Tente refinar seu tópico.");
                }
                break;

            } catch (err) {
                console.error(`Falha na tentativa ${attempt + 1}:`, err);
                attempt++;
                if (attempt >= maxRetries) {
                    setError("Falha ao conectar-se ao CloudIA após várias tentativas. Por favor, verifique a URL da API ou tente novamente mais tarde.");
                    setExplanation(null);
                }
            }
        }
        setIsLoading(false);
    }, [topic, responseType]);

    return (
        <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
            <Header />
            <main className="flex flex-col flex-grow items-center px-4 py-8">
                <h2 className="text-4xl font-bold mb-4 font-mono bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Bem-vindo ao CloudIA
                </h2>
                <p className="text-lg text-center max-w-2xl font-mono mb-8 text-slate-300">
                    Sua fonte instantânea de conhecimento em Cloud Computing. Nossa API utiliza a inteligência do Gemini para responder a qualquer tópico sobre a nuvem. Pergunte e aprenda!
                </p>

                <div className="w-full max-w-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="topic" className="block text-sm font-mono text-cyan-400 mb-2">
                                Tópico sobre Cloud Computing
                            </label>
                            <input
                                type="text"
                                id="topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Ex: O que é computação em nuvem?"
                                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder:text-slate-500"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="responseType" className="block text-sm font-mono text-purple-400 mb-2">
                                Tamanho da resposta
                            </label>
                            <select
                                id="responseType"
                                value={responseType}
                                onChange={(e) => setResponseType(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 cursor-pointer disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <option value="curta">Curta</option>
                                <option value="média">Média</option>
                                <option value="longa">Longa</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className={`w-full flex items-center justify-center px-6 py-3 font-mono font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${isLoading
                                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/50'
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader className="animate-spin h-5 w-5 mr-3" />
                                    <span>Consultando CloudIA...</span>
                                </>
                            ) : (
                                <>
                                    <Search className="h-5 w-5 mr-2" />
                                    Perguntar ao CloudIA
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="w-full max-w-4xl mt-12">
                    {error && (
                        <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-300 font-mono text-center shadow-xl mb-6">
                            <span className="font-bold">Erro:</span> {error}
                        </div>
                    )}

                    {explanation && (
                        <>
                            <h3 className="text-3xl font-bold mb-6 font-mono text-purple-400 border-b border-purple-500/50 pb-2">
                                Resposta do CloudIA
                            </h3>
                            <div className="bg-slate-800/70 border border-purple-500/30 rounded-xl p-8 shadow-2xl space-y-4">
                                <p className="text-sm md:text-base font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                                    {explanation}
                                </p>
                            </div>
                            <p className="mt-4 text-xs text-slate-500 font-mono text-right">
                                Tópico "{topic}" com resposta de tamanho "{responseType}".
                            </p>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}