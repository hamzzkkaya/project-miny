import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../../ui/button";

interface HamburgerButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

export function HamburgerButton({ isOpen, toggle }: HamburgerButtonProps) {
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggle}
            className="relative z-50 h-12 w-12 rounded-3xl border-2 border-light-border bg-light-surface/80 dark:border-dark-border dark:bg-dark-surface/80 backdrop-blur-md"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? (
                    <X className="h-6 w-6 text-light-text dark:text-dark-text" />
                ) : (
                    <Menu className="h-6 w-6 text-light-text dark:text-dark-text" />
                )}
            </motion.div>
        </Button>
    );
}
