"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Import shared components
import { Connector } from "@/components/shared/layout/curvy-rect";
import HeroFlame from "@/components/shared/effects/flame/hero-flame";
import AsciiExplosion from "@/components/shared/effects/flame/ascii-explosion";
import { HeaderProvider } from "@/components/shared/header/HeaderContext";

// Import hero section components
import HomeHeroBackground from "@/components/app/(home)/sections/hero/Background/Background";
import { BackgroundOuterPiece } from "@/components/app/(home)/sections/hero/Background/BackgroundOuterPiece";
import HomeHeroBadge from "@/components/app/(home)/sections/hero/Badge/Badge";
import HomeHeroPixi from "@/components/app/(home)/sections/hero/Pixi/Pixi";
import HomeHeroTitle from "@/components/app/(home)/sections/hero/Title/Title";
import HeroInputSubmitButton from "@/components/app/(home)/sections/hero-input/Button/Button";

// Import header components
import HeaderBrandKit from "@/components/shared/header/BrandKit/BrandKit";
import HeaderWrapper from "@/components/shared/header/Wrapper/Wrapper";
import HeaderDropdownWrapper from "@/components/shared/header/Dropdown/Wrapper/Wrapper";
import GithubIcon from "@/components/shared/header/Github/_svg/GithubIcon";
import ButtonUI from "@/components/ui/shadcn/button"

export default function HomePage() {
  const [description, setDescription] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("1");
  const [additionalInstructions, setAdditionalInstructions] = useState<string>('');
  const router = useRouter();

  const styles = [
    { id: "1", name: "Glassmorphism", description: "Frosted glass effect" },
    { id: "2", name: "Neumorphism", description: "Soft 3D shadows" },
    { id: "3", name: "Brutalism", description: "Bold and raw" },
    { id: "4", name: "Minimalist", description: "Clean and simple" },
    { id: "5", name: "Dark Mode", description: "Dark theme design" },
    { id: "6", name: "Gradient Rich", description: "Vibrant gradients" },
    { id: "7", name: "3D Depth", description: "Dimensional layers" },
    { id: "8", name: "Retro Wave", description: "80s inspired" },
  ];

  const handleSubmit = async () => {
    const inputValue = description.trim();
    
    if (!inputValue) {
      toast.error("Please describe the website you want to build");
      return;
    }
    
    // Store the website description and settings
    sessionStorage.setItem('websiteDescription', inputValue);
    sessionStorage.setItem('selectedStyle', selectedStyle);
    sessionStorage.setItem('selectedModel', 'gemini-1.5-pro');
    sessionStorage.setItem('autoStart', 'true');
    if (additionalInstructions.trim()) {
      sessionStorage.setItem('additionalInstructions', additionalInstructions);
    }
    
    // Navigate to generation page
    router.push('/generation');
  };

  return (
    <HeaderProvider>
      <div className="min-h-screen bg-background-base">
        {/* Header/Navigation Section */}
        <HeaderDropdownWrapper />

        <div className="sticky top-0 left-0 w-full z-[101] bg-background-base header">
          <div className="absolute top-0 cmw-container border-x border-border-faint h-full pointer-events-none" />
          <div className="h-1 bg-border-faint w-full left-0 -bottom-1 absolute" />
          <div className="cmw-container absolute h-full pointer-events-none top-0">
            <Connector className="absolute -left-[10.5px] -bottom-11" />
            <Connector className="absolute -right-[10.5px] -bottom-11" />
          </div>

          <HeaderWrapper>
            <div className="max-w-[900px] mx-auto w-full flex justify-between items-center">
              <div className="flex gap-24 items-center">
                <HeaderBrandKit />
              </div>
              <div className="flex gap-8">
                <a
                  className="contents"
                  href="https://github.com/your-username/vibe-coder"
                  target="_blank"
                >
                  <ButtonUI variant="tertiary">
                    <GithubIcon />
                    View on GitHub
                  </ButtonUI>
                </a>
              </div>
            </div>
          </HeaderWrapper>
        </div>

        {/* Hero Section */}
        <section className="overflow-x-clip" id="home-hero">
          <div className="pt-28 lg:pt-254 lg:-mt-100 pb-115 relative" id="hero-content">
            <HomeHeroPixi />
            <HeroFlame />
            <BackgroundOuterPiece />
            <HomeHeroBackground />

            <div className="relative container px-16">
              <HomeHeroBadge />
              <HomeHeroTitle />
              <p className="text-center text-body-large">
                Build beautiful websites from text descriptions.
              </p>
              <Link
                className="bg-black-alpha-4 hover:bg-black-alpha-6 rounded-6 px-8 lg:px-6 text-label-large h-30 lg:h-24 block mt-8 mx-auto w-max gap-4 transition-all"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Powered by Gemini AI.
              </Link>
            </div>
          </div>

          {/* Website Builder Input */}
          <div className="container lg:contents !p-16 relative -mt-90">
            <div className="absolute top-0 left-[calc(50%-50vw)] w-screen h-1 bg-border-faint lg:hidden" />
            <div className="absolute bottom-0 left-[calc(50%-50vw)] w-screen h-1 bg-border-faint lg:hidden" />
            <Connector className="-top-10 -left-[10.5px] lg:hidden" />
            <Connector className="-top-10 -right-[10.5px] lg:hidden" />
            <Connector className="-bottom-10 -left-[10.5px] lg:hidden" />
            <Connector className="-bottom-10 -right-[10.5px] lg:hidden" />

            {/* Input Component */}
            <div className="max-w-552 mx-auto z-[11] lg:z-[2]">
              <div className="rounded-20 -mt-30 lg:-mt-30">
                <div
                  className="bg-white rounded-20"
                  style={{
                    boxShadow:
                      "0px 0px 44px 0px rgba(0, 0, 0, 0.02), 0px 88px 56px -20px rgba(0, 0, 0, 0.03), 0px 56px 56px -20px rgba(0, 0, 0, 0.02), 0px 32px 32px -20px rgba(0, 0, 0, 0.03), 0px 16px 24px -12px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 0px 0px 10px #F9F9F9",
                  }}
                >
                  {/* Main Input */}
                  <div className="p-16 space-y-4 w-full relative bg-white rounded-t-20">
                    <div className="flex gap-12 items-center w-full">
                      {/* Code/Create icon */}
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-40 flex-shrink-0"
                      >
                        <path d="M6 8L2 12L6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 8L18 12L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        className="flex-1 bg-transparent text-body-input text-accent-black placeholder:text-black-alpha-48 focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Describe the website you want to build..."
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit();
                          }
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        <HeroInputSubmitButton 
                          dirty={description.length > 0} 
                          buttonText="Generate Website" 
                          disabled={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Options Section */}
                  <div className="p-[28px] border-t border-gray-100 bg-white rounded-b-20">
                    {/* Style Selector */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Choose Style</label>
                      <div className="grid grid-cols-4 gap-2">
                        {styles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedStyle(style.id)}
                            className={`
                              py-2.5 px-2 rounded text-[10px] font-medium border transition-all text-center
                              ${selectedStyle === style.id 
                                ? 'border-orange-500 bg-orange-50 text-orange-900' 
                                : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                              }
                            `}
                          >
                            {style.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Additional Instructions */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Additional Instructions (Optional)</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2.5 text-[10px] text-gray-700 bg-gray-50 rounded border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-gray-400"
                        placeholder="e.g., Make it mobile-friendly, add contact form, use blue colors..."
                        value={additionalInstructions}
                        onChange={(e) => setAdditionalInstructions(e.target.value)}
                      />
                    </div>

                    {/* E2B API Info */}
                    <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-xs font-medium text-blue-800">Optional: Enable Live Previews</p>
                          <p className="text-[10px] text-blue-600 mt-1">
                            Add your E2B API key to secrets for live website previews. Without it, you'll get code-only generation.
                            <a href="https://e2b.dev" target="_blank" rel="noopener noreferrer" className="underline ml-1">Get free API key →</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-248 top-84 cw-768 pointer-events-none absolute overflow-clip -z-10">
                  <AsciiExplosion className="-top-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-32 text-center">
          <div className="container">
            <p className="text-gray-500">Built with ❤️ using Vibe Coder</p>
          </div>
        </section>

      </div>
    </HeaderProvider>
  );
}