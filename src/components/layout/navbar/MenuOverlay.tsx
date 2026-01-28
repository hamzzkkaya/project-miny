import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Home, Download, Box, Info } from "lucide-react";
import { Button } from "../../ui/button";
import { ThemeToggle } from "../../ui/theme-toggle";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const overlayVariants = {
    closed: {
        opacity: 0,
        scale: 0.95,
        y: -10,
        pointerEvents: "none" as const,
        transition: { duration: 0.2 }
    },
    open: {
        opacity: 1,
        scale: 1,
        y: 0,
        pointerEvents: "auto" as const,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const navItems = [
    { name: "Anasayfa", href: "/", icon: Home },
    { name: "İndir", href: "/download", icon: Download },
    { name: "Modlar", href: "/mods", icon: Box },
    { name: "Hakkında", href: "/about", icon: Info },
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={overlayVariants}
                    className="absolute right-0 top-20 w-full max-w-sm p-4 z-40"
                >
                    <div className="flex flex-col gap-4 rounded-[2rem] border-2 border-light-border bg-[#fdfbf7] p-6 shadow-2xl dark:border-dark-border dark:bg-dark-surface dark:shadow-none">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-light-text dark:text-dark-text px-2 mb-2">Menü</h3>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={onClose}
                                    className="group flex items-center justify-between rounded-2xl p-4 text-lg font-medium text-light-text transition-colors hover:bg-black/5 dark:text-dark-text dark:hover:bg-white/5"
                                >
                                    <span className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5 text-light-text-muted group-hover:text-brand-blue dark:text-dark-text-muted" />
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="h-px w-full bg-light-border dark:bg-dark-border my-2" />

                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-medium text-light-text-muted px-2 dark:text-dark-text-muted">Kullanıcı İşlemleri</span>
                            <div className="flex gap-3">
                                <Button asChild className="flex-1 rounded-2xl h-12 text-base" variant="outline">
                                    <Link to="/login" onClick={onClose}>Giriş Yap</Link>
                                </Button>
                                <Button asChild className="flex-1 rounded-2xl h-12 text-base bg-brand-blue text-white hover:bg-brand-blue-hover border-transparent">
                                    <Link to="/register" onClick={onClose}>Kayıt Ol</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-2 pt-2">
                            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">Görünüm</span>
                            <ThemeToggle />
                        </div>

                        <div className="mt-4 p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                            <p className="text-sm font-medium text-brand-blue text-center">
                                Get in touch with us at <br />
                                <span className="underline">support@minylauncher.com</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
