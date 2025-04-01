
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TwitterPostGenerator from "./pages/TwitterPostGenerator";
import { useTheme } from "./hooks/useTheme";

const queryClient = new QueryClient();

const App = () => {
  // Initialize theme (this will ensure theme is applied immediately)
  useTheme();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner 
          position="top-right"
          theme="system"
          className="sonner-toast-modern"
          toastOptions={{
            classNames: {
              toast: "group toast-modern rounded-lg border-border",
              description: "text-muted-foreground text-sm",
              actionButton: "bg-primary text-primary-foreground",
              cancelButton: "bg-muted text-muted-foreground",
              error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400",
              success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
            }
          }}
        />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-white to-twitter-extraLightGray dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/twitter_post_generator" element={<TwitterPostGenerator />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
