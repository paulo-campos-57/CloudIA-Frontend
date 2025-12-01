import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <>
            <div className="w-full flex justify-center items-center py-8 mt-12 border-t border-purple-500/20">
                <img
                    className="w-64 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    src={logo}
                    alt="Logo"
                />
            </div>
        </>
    );
}