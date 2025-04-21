import React from 'react';
import SectionHeader from './SectionHeader';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  category: 'surf' | 'ski' | 'gear' | 'travel';
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Best Surfing Beaches in South India',
    excerpt: 'Explore the hidden gems along India\'s southern coastline perfect for catching waves.',
    image: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg',
    date: 'May 15, 2025',
    author: 'Ishaan Sharma',
    readTime: '6 min',
    category: 'surf'
  },
  {
    id: 2,
    title: 'Ultimate Guide to Skiing in Gulmarg',
    excerpt: 'Everything you need to know about planning your ski trip to Kashmir\'s winter paradise.',
    image: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg',
    date: 'May 10, 2025',
    author: 'Priya Patel',
    readTime: '8 min',
    category: 'ski'
  },
  {
    id: 3,
    title: 'Monsoon Surfing in India: What to Expect',
    excerpt: 'Tips and insights for surfing during India\'s monsoon season with local experts.',
    image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
    date: 'May 5, 2025',
    author: 'Rahul Verma',
    readTime: '5 min',
    category: 'surf'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest from the Blog"
          subtitle="Tips, guides, and stories from India's surf and ski community"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  post.category === 'surf'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/70 dark:text-blue-300'
                    : post.category === 'ski'
                    ? 'bg-teal-100 text-teal-700 dark:bg-teal-900/70 dark:text-teal-300'
                    : post.category === 'gear'
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/70 dark:text-amber-300'
                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/70 dark:text-purple-300'
                }`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-neutral-500 dark:text-neutral-400" />
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {post.author}
                    </span>
                  </div>
                  
                  <Link 
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium transition-all duration-300"
          >
            View All Posts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;