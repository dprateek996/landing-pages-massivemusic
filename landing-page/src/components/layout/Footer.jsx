import { handleAnchorClick } from "../../utils/smoothScroll";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 mt-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Top Row */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Massive Music</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Crafting sound, music, and sonic identities for brands worldwide.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => handleAnchorClick(e, "#services")}
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    onClick={(e) => handleAnchorClick(e, "#work")}
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => handleAnchorClick(e, "#about")}
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleAnchorClick(e, "#contact")}
                                    className="hover:text-white transition-colors cursor-pointer"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-xs">
                    © {new Date().getFullYear()} Massive Music. All rights reserved.
                </div>

            </div>
        </footer>
    );
}