import { HeroSection } from "../components/features/home/HeroSection"
import { FeaturesSection } from "../components/features/home/FeaturesSection"
import { CommunitySection } from "../components/features/home/CommunitySection"

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <FeaturesSection />
            <CommunitySection />
        </div>
    )
}
