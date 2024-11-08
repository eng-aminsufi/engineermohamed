import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Autonomous Robot Platform',
    description: 'Industrial-grade autonomous mobile robot with ROS2 integration',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    tags: ['ROS2', 'Python', 'C++', 'Computer Vision'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Smart Factory System',
    description: 'IoT-based manufacturing monitoring and control system',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2',
    tags: ['IoT', 'Node.js', 'MongoDB', 'MQTT'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Robotic Arm Controller',
    description: '6-DOF robotic arm with advanced path planning',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    tags: ['Arduino', 'PLC', 'Motion Control'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};