import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 shadow-lg shadow-purple-500/20 w-full flex justify-between items-center px-8 h-16 relative">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                        CloudIA
                    </h1>
                </div>

                <div className="flex space-x-8">
                    <span
                        className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm tracking-wide hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] relative group cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Início
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <span
                        className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-mono text-sm tracking-wide hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] relative group cursor-pointer"
                        onClick={() => navigate('/about')}
                    >
                        Sobre
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </div>

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute top-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-3 right-1/4 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>
        </>
    );
}