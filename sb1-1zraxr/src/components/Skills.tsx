import { motion } from 'framer-motion';
import { Cpu, Database, Bot, Code, Brain, Network } from 'lucide-react';

const skills = [
  {
    category: 'Robotics',
    icon: Bot,
    items: ['ROS2', 'Path Planning', 'Computer Vision', 'SLAM'],
  },
  {
    category: 'Control Systems',
    icon: Cpu,
    items: ['PLC Programming', 'SCADA', 'Motion Control', 'PID Tuning'],
  },
  {
    category: 'Programming',
    icon: Code,
    items: ['Python', 'C++', 'JavaScript', 'MATLAB'],
  },
  {
    category: 'AI & ML',
    icon: Brain,
    items: ['TensorFlow', 'Computer Vision', 'Reinforcement Learning', 'Neural Networks'],
  },
  {
    category: 'IoT',
    icon: Network,
    items: ['MQTT', 'Industrial IoT', 'Sensor Integration', 'Edge Computing'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['SQL', 'MongoDB', 'Time Series DB', 'Redis'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};