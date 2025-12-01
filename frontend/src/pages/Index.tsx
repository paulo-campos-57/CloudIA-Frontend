import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
    const [topic, setTopic] = useState("");
    const [responseType, setResponseType] = useState("média");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ topic, responseType });
    };

    return (
        <>
            <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
                <Header />
                <div className="flex flex-col flex-grow items-center justify-center px-4 py-8">
                    <h2 className="text-4xl font-bold mb-4 font-mono bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Bem-vindo ao CloudIA
                    </h2>
                    <p className="text-lg text-center max-w-2xl font-mono mb-8 text-slate-300">
                        Sua fonte instantânea de conhecimento em Cloud Computing. Nossa API utiliza a inteligência do Gemini para responder a qualquer tópico sobre a nuvem. Pergunte e aprenda!
                    </p>

                    <div className="w-full max-w-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 shadow-xl">
                        <div className="space-y-6">
                            {/* Campo de Tópico */}
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
                                />
                            </div>

                            {/* Campo de Tipo de Resposta */}
                            <div>
                                <label htmlFor="responseType" className="block text-sm font-mono text-purple-400 mb-2">
                                    Tamanho da resposta
                                </label>
                                <select
                                    id="responseType"
                                    value={responseType}
                                    onChange={(e) => setResponseType(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 cursor-pointer"
                                >
                                    <option value="curta">Curta</option>
                                    <option value="média">Média</option>
                                    <option value="longa">Longa</option>
                                </select>
                            </div>

                            {/* Botão de Enviar */}
                            <button
                                onClick={handleSubmit}
                                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-mono font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                            >
                                Perguntar ao CloudIA
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}