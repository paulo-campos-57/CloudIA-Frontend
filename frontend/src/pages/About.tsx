import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
                <Header />
                <div className="flex-1 flex flex-col items-center px-4 py-12 overflow-y-auto">
                    <div className="w-full max-w-7xl space-y-12">

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Sobre este site */}
                            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                                <h2 className="text-3xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Sobre este site
                                </h2>
                                <p className="text-base leading-relaxed font-mono text-slate-300">
                                    Este site tem como finalidade demonstrar o uso da API CloudIA,
                                    que utiliza o modelo Gemini da Google para responder perguntas
                                    relacionadas a Cloud Computing. Foi desenvolvido por
                                    <a
                                        href="https://github.com/paulo-campos-57"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 hover:underline mx-1 cursor-pointer transition-colors duration-200">
                                        Paulo Campos
                                    </a>
                                    como parte de um projeto da disciplina de Cloud Computing,
                                    do curso de Ciência da Computação no CESAR School.
                                </p>
                            </div>

                            {/* Sobre o CloudIA */}
                            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                                <h2 className="text-3xl font-bold mb-6 font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Sobre o CloudIA
                                </h2>
                                <p className="text-base leading-relaxed font-mono text-slate-300">
                                    O CloudIA é uma API projetada para se comunicar com o modelo Gemini 2.5 Flash.
                                    Desenvolvido em NodeJs, a API recebe, via JSON, um tópico relacionado
                                    a Cloud Computing e o modelo da resposta. Essas variáveis são aplicadas no
                                    prompt enviado ao modelo Gemini, que retorna a resposta gerada para aquele
                                    tópico. A API pode ser encontrada no
                                    <a
                                        href="https://github.com/paulo-campos-57"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 hover:underline mx-1 cursor-pointer transition-colors duration-200">
                                        repositório do GitHub
                                    </a>
                                    ou via
                                    <a
                                        href="https://cloudia-ljca.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 hover:underline mx-1 cursor-pointer transition-colors duration-200">
                                        url pública
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        {/* Seção de Contato */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 shadow-xl">
                            <h2 className="text-3xl font-bold mb-8 font-mono bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                Contato
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <a
                                    href="https://github.com/paulo-campos-57"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer group">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400 transition-colors duration-200">GitHub</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/paulo-m-campos/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer group">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <span className="font-mono text-sm text-slate-300 group-hover:text-purple-400 transition-colors duration-200">LinkedIn</span>
                                </a>

                                <a
                                    href="mailto:paulo.m.campos6601@gmail.com"
                                    className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/20 cursor-pointer group">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-mono text-sm text-slate-300 group-hover:text-pink-400 transition-colors duration-200">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}