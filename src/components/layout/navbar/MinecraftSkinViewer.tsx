import { useEffect, useRef, useState } from "react";
import { SkinViewer, IdleAnimation } from "skinview3d";
import { useInView } from "framer-motion";
// Import the local skin file
import steveSkin from "../../../assets/menu/original-steve.png";
import { Skeleton } from "../../ui/skeleton";

interface MinecraftSkinViewerProps {
    skinUrl?: string; // Optional override
    width?: number;
    height?: number;
    interactive?: boolean;
    pose?: 'walking' | 'default';
    rotationy?: number; // Initial Body Rotation in radians
}

export function MinecraftSkinViewer({
    skinUrl,
    width = 300,
    height = 400,
    interactive = true,
    pose = 'default',
    rotationy = 0
}: MinecraftSkinViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewerRef = useRef<SkinViewer | null>(null);
    const animationRef = useRef<IdleAnimation | null>(null);

    // Lazy Load: Only render/init when within 200px of viewport
    const isInView = useInView(containerRef, { once: true, margin: "200px" });

    // Additional state to track if canvas is actually ready/mounted in DOM
    const [isLoaded, setIsLoaded] = useState(false);

    // Use the imported local asset as the default skin
    const finalSkinUrl = skinUrl || steveSkin;

    useEffect(() => {
        // Only initialize if visible and canvas exists
        if (!isInView || !canvasRef.current) return;

        // Prevent double init
        if (viewerRef.current) return;

        // Initialize SkinViewer
        const viewer = new SkinViewer({
            canvas: canvasRef.current,
            width: width,
            height: height,
            skin: finalSkinUrl,
            alpha: true // Ensure WebGL context is transparent
        });

        // Default Camera
        viewer.camera.position.set(0, 10, 50);
        viewer.autoRotate = false;

        // Allow custom initial rotation
        viewer.playerObject.rotation.y = rotationy;

        // --- POSE LOGIC ---
        viewer.loadSkin(finalSkinUrl).then(() => {
            setIsLoaded(true); // Skin loaded, fade out skeleton? (Not implemented, swift swap)

            if (pose === 'walking') {
                // Static Walking Pose
                viewer.playerObject.skin.head.rotation.y = 0.2;
                viewer.playerObject.skin.head.rotation.x = -0.1;

                // Arms (Opposite)
                viewer.playerObject.skin.leftArm.rotation.x = -0.6;
                viewer.playerObject.skin.rightArm.rotation.x = 0.6;

                // Legs (Walking split)
                viewer.playerObject.skin.leftLeg.rotation.x = 0.6;
                viewer.playerObject.skin.rightLeg.rotation.x = -0.6;

            } else {
                // Default Idle
                animationRef.current = new IdleAnimation();
                viewer.animation = animationRef.current;
            }
        });

        viewerRef.current = viewer;

        // Mouse Follow Logic (Only if interactive)
        const handleMouseMove = (event: MouseEvent) => {
            if (!interactive || !viewerRef.current || !canvasRef.current) return;

            const rect = canvasRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            // Normalize coordinates (-1 to 1)
            const normX = x / (width / 2);

            // Body Rotation
            const bodyRot = normX * 0.5;
            viewer.playerObject.rotation.y = Math.max(-0.3, Math.min(0.3, bodyRot));
        };

        if (interactive) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (interactive) window.removeEventListener('mousemove', handleMouseMove);
            viewer.dispose();
            viewerRef.current = null;
        };
    }, [isInView, finalSkinUrl, width, height, interactive, pose, rotationy]);

    return (
        <div
            ref={containerRef}
            style={{ width, height }}
            className="relative flex items-center justify-center"
        >
            {!isInView ? (
                // LOADING / OFFSCREEN STATE
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                    {/* Placeholder Skeleton for Steve */}
                    <div className="relative w-1/3 h-1/2">
                        {/* Head */}
                        <Skeleton className="w-16 h-16 mx-auto mb-1" />
                        {/* Body */}
                        <Skeleton className="w-20 h-24 mx-auto" />
                    </div>
                </div>
            ) : (
                // ACTIVE STATE
                <canvas
                    ref={canvasRef}
                    className={interactive ? "cursor-move" : ""}
                    style={{ imageRendering: "pixelated" }}
                />
            )}
        </div>
    );
}
