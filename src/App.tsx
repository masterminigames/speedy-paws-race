import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Updates from "./pages/Updates";
import Guides from "./pages/Guides";
import GuideDrinkingGames from "./pages/GuideDrinkingGames";
import GuideTeamBuilding from "./pages/GuideTeamBuilding";
import GuidePenaltyIdeas from "./pages/GuidePenaltyIdeas";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/drinking-games" element={<GuideDrinkingGames />} />
          <Route path="/guides/team-building" element={<GuideTeamBuilding />} />
          <Route path="/guides/penalty-ideas" element={<GuidePenaltyIdeas />} />
          <Route path="/stats" element={<Stats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
