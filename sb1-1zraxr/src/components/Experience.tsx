import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Mechatronics Engineer',
    company: 'TechDyne Robotics',
    location: 'Dubai, UAE',
    period: '2020 - Present',
    description: [
      'Led the development of autonomous industrial robots for manufacturing',
      'Implemented advanced control systems using ROS2 and Python',
      'Managed a team of 5 engineers for large-scale automation projects',
    ],
  },
  {
    title: 'Robotics Engineer',
    company: 'AutomationX',
    location: 'Abu Dhabi, UAE',
    period: '2018 - 2020',
    description: [
      'Designed and implemented PLC-based control systems',
      'Developed computer vision solutions for quality control',
      'Reduced production line downtime by 35%',
    ],
  },
  {
    title: 'Research Engineer',
    company: 'Innovation Labs',
    location: 'Cairo, Egypt',
    period: '2016 - 2018',
    description: [
      'Conducted research in human-robot collaboration',
      'Published 3 papers in international conferences',
      'Developed novel path planning algorithms',
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};