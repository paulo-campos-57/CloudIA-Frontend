import Header from "../components/Header";

export default function Index() {
    return (
        <>
            <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
                <Header />
                <div className="flex flex-col flex-grow items-center justify-center px-4 py-8">
                    <h2 className="text-4xl font-bold mb-4 font-mono">Bem-vindo ao CloudIA</h2>
                    <p className="text-lg text-center max-w-2xl font-mono">
                        Sua fonte instantânea de conhecimento em Cloud Computing. Nossa API utiliza a inteligência do Gemini para responder a qualquer tópico sobre a nuvem. Pergunte e aprenda!
                    </p>
                    
                </div>
            </div>
        </>
    );
}