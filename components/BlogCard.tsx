import React from 'react';
import { ArrowRight, Calendar, Clock, User, PlayCircle, Music, BookOpen, Video } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const isMusic = post.type === 'music';
  const isCourse = post.type === 'course';

  return (
    <div 
      onClick={() => onClick(post)}
      className="
        group relative flex flex-col h-full
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl overflow-hidden 
        transition-all duration-500 ease-out
        hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10
        cursor-pointer
        pointer-events-auto
        text-left
      "
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <span className={`absolute top-4 left-4 z-20 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md rounded-full border uppercase 
          ${isMusic ? 'bg-pink-600/80 border-pink-400/30' : 
            isCourse ? 'bg-cyan-600/80 border-cyan-400/30' : 
            'bg-purple-600/80 border-purple-400/30'}`}>
          {post.category}
        </span>
        
        {/* Hover Icon Overlay */}
        {(isMusic || isCourse) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
              {isMusic ? (
                <PlayCircle size={32} className="text-white fill-white/20" />
              ) : (
                <Video size={32} className="text-white fill-white/20" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
          <div className="flex items-center">
            {isMusic ? <Music size={12} className="mr-1" /> : 
             isCourse ? <BookOpen size={12} className="mr-1" /> :
             <Calendar size={12} className="mr-1" />}
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock size={12} className="mr-1" />
            {post.readTime}
          </div>
        </div>

        <h3 className={`text-xl font-bold text-white mb-2 leading-tight transition-colors 
          ${isMusic ? 'group-hover:text-pink-300' : 
            isCourse ? 'group-hover:text-cyan-300' : 
            'group-hover:text-purple-300'}`}>
          {post.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center text-xs text-gray-400">
            <User size={12} className="mr-1" />
            {post.author}
          </div>
          <span className={`flex items-center text-sm font-medium transition-colors 
            ${isMusic ? 'text-pink-400 group-hover:text-pink-300' : 
              isCourse ? 'text-cyan-400 group-hover:text-cyan-300' : 
              'text-purple-400 group-hover:text-purple-300'}`}>
            {isMusic ? 'Listen Now' : isCourse ? 'Start Learning' : 'Read Article'}
            <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
