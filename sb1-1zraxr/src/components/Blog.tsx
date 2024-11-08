import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Industrial Automation',
    excerpt: 'Exploring the latest trends in smart manufacturing and Industry 4.0',
    date: '2024-02-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    title: 'Implementing ROS2 in Production',
    excerpt: 'Best practices for deploying ROS2 in industrial environments',
    date: '2024-02-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-c6a2a5aee158',
  },
  {
    title: 'Machine Learning in Robotics',
    excerpt: 'How AI is transforming robotic automation systems',
    date: '2024-01-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-b6a2a5aee158',
  },
];

export const Blog = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Technical Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};