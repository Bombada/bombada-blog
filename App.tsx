import React, { useState } from 'react';
import SplineBackground from './components/SplineBackground';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import AboutSection from './components/AboutSection';
import BlogPostView from './components/BlogPostView';
import { BLOG_POSTS, MUSIC_POSTS, DEV_COURSES } from './constants';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { BlogPost } from './types';

type Page = 'home' | 'bombada' | 'about' | 'development';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleNavigate = (page: string) => {
    // If navigation happens, reset selected post
    setSelectedPost(null);
    
    // Cast string to Page type safely
    if (page === 'home' || page === 'bombada' || page === 'about' || page === 'development') {
      setCurrentPage(page as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const isBombada = currentPage === 'bombada';
  const isAbout = currentPage === 'about';
  const isDevelopment = currentPage === 'development';
  
  // Configuration based on current page
  let splineUrl = 'https://my.spline.design/distortingtypography-k7bpgxy1uQC0eBoVPPvmW5TM/'; // Default Home
  if (isBombada) {
    // Updated Spline URL for Music/Bombada category as requested
    splineUrl = 'https://my.spline.design/xmaskcopycopy-ejrFwi0O59qAC0Cg3JoRhi3I-sYg/';
  } else if (isDevelopment) {
    splineUrl = 'https://my.spline.design/100followers-VcQDcKnU2XVZQRwKPMLaYiLI/';
  } else if (isAbout) {
    splineUrl = 'https://my.spline.design/dunes-W6wZRKjg2kEjfBFVpDpF0q4V/';
  }

  // Select content source
  let currentPosts = BLOG_POSTS;
  if (isBombada) currentPosts = MUSIC_POSTS;
  if (isDevelopment) currentPosts = DEV_COURSES;

  // Selection colors based on theme
  const getSelectionClass = () => {
    if (isBombada) return 'selection:bg-pink-500';
    if (isDevelopment) return 'selection:bg-cyan-500';
    if (isAbout) return 'selection:bg-amber-500';
    return 'selection:bg-purple-500';
  };

  return (
    <div className={`relative w-full min-h-screen font-sans text-white overflow-x-hidden ${getSelectionClass()} selection:text-white`}>
      {/* 
        1. BACKGROUND 
        The Spline iframe sits here. It needs to be clickable so the mouse effects work.
        However, it is physically behind the content.
        Key added to force re-render when URL changes.
      */}
      <SplineBackground key={currentPage} sceneUrl={splineUrl} />

      {/* 
        2. CONTENT OVERLAY
        This wrapper is 'pointer-events-none' so that mouse movements in the empty spaces
        pass through to the Spline iframe behind it.
      */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        
        <Header onNavigate={handleNavigate} currentPage={currentPage} />

        <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
          
          {/* 
            Spacer Section 
            We use min-h-[45vh] for Home/Bombada/Dev to reveal the background.
            For About, we reduce it to min-h-[15vh] so the text is immediately visible.
            If a post is selected, we reduce the spacer to pull content up.
          */}
          <section 
            className={`${isAbout || selectedPost ? 'min-h-[15vh]' : 'min-h-[45vh]'} w-full transition-all duration-700 ease-in-out`} 
            aria-hidden="true"
          >
            {/* Empty spacer to reveal background */}
          </section>

          {/* Conditional Rendering Logic */}
          {selectedPost ? (
            <BlogPostView post={selectedPost} onBack={handleBack} />
          ) : isAbout ? (
            <div className="pointer-events-auto">
              <AboutSection />
            </div>
          ) : (
            <>
              {/* Header for Bombada Label page to emphasize the brand */}
              {isBombada && (
                 <div className="mb-12 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 mb-4">
                      Bombada Label
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                      Curating the finest ambient, electronic, and experimental sounds.
                    </p>
                 </div>
              )}

              {/* Blog/Music/Course Grid - Cards have pointer-events-auto internally */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 animate-fade-in-up">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} onClick={handlePostClick} />
                ))}
              </section>

              {/* Newsletter / CTA Section - Container is transparent to events, input/button are interactive */}
              <section className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
                <div className={`relative rounded-3xl overflow-hidden p-8 md:p-12 text-center backdrop-blur-xl border border-white/10 
                  ${isBombada ? 'bg-gradient-to-br from-pink-900/50 to-black/50' : 
                    isDevelopment ? 'bg-gradient-to-br from-cyan-900/50 to-black/50' : 
                    'bg-gradient-to-br from-purple-900/50 to-black/50'}`}>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">
                      {isBombada ? 'Join the Label' : 'Stay in the Loop'}
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                      {isBombada 
                        ? 'Subscribe to get early access to Bombada releases, exclusive artist interviews, and merchandise drops.' 
                        : `Join our weekly newsletter to get the latest ${isDevelopment ? 'courses' : 'articles'}, resources, and insights delivered straight to your inbox.`
                      }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className={`flex-grow px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:bg-white/10 transition-all pointer-events-auto 
                          ${isBombada ? 'focus:ring-pink-500' : isDevelopment ? 'focus:ring-cyan-500' : 'focus:ring-purple-500'}`}
                      />
                      <button className={`px-8 py-3 rounded-xl bg-white text-black font-bold transition-colors transform active:scale-95 shadow-lg shadow-white/5 pointer-events-auto 
                        ${isBombada ? 'hover:bg-pink-50' : isDevelopment ? 'hover:bg-cyan-50' : 'hover:bg-purple-50'}`}>
                        {isBombada ? 'Join Now' : 'Subscribe'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative glows */}
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r pointer-events-none 
                    ${isBombada ? 'from-pink-500/10 to-rose-500/10' : 
                      isDevelopment ? 'from-cyan-500/10 to-blue-500/10' : 
                      'from-purple-500/10 to-pink-500/10'}`} />
                </div>
              </section>
            </>
          )}

        </main>

        {/* Footer - Container transparent, links interactive */}
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                Bombada
              </span>
              <p className="text-sm text-gray-500">© 2024 Bombada. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6 pointer-events-auto">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;