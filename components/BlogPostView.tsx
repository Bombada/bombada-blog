import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, Play, Pause } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  const isMusic = post.type === 'music';

  return (
    <article className="w-full max-w-4xl mx-auto animate-scale-up pointer-events-auto pb-20">
      
      {/* Navigation */}
      <div className="mb-6 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm text-gray-300 hover:text-white"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to List
        </button>

        <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors">
                <Heart size={18} />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors">
                <Share2 size={18} />
            </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
            <div className="flex gap-3 mb-4">
                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full backdrop-blur-md border border-white/20
                    ${isMusic ? 'bg-pink-600/80 text-white' : 'bg-purple-600/80 text-white'}`}>
                    {post.category}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-400" />
                    {post.author}
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    {post.date}
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    {post.readTime}
                </div>
            </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
        {isMusic && (
            <div className="mb-10 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-6">
                <button className="w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 transition-all transform hover:scale-105">
                    <Play size={24} fill="currentColor" className="ml-1" />
                </button>
                <div className="flex-grow">
                    <div className="text-xs text-pink-400 uppercase tracking-wider font-bold mb-1">Now Playing Preview</div>
                    <div className="text-xl font-bold text-white">{post.title}</div>
                    <div className="text-gray-400 text-sm">{post.author}</div>
                </div>
                <div className="hidden md:block text-gray-500 font-mono text-xs">
                    00:00 / {post.readTime}
                </div>
            </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-white/20 pl-6 italic">
                {post.excerpt}
            </p>
            
            <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Creative Process</h2>
            <p className="text-gray-300 mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <div className="my-8 grid grid-cols-2 gap-4">
                <div className="h-48 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/800/600?random=${post.id}a`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Gallery 1" />
                </div>
                <div className="h-48 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/800/600?random=${post.id}b`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Gallery 2" />
                </div>
            </div>

            <p className="text-gray-300">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
        </div>
      </div>

    </article>
  );
};

export default BlogPostView;
