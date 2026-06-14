'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiGooglecloud,
  SiPython,
  SiJavascript,
  SiGo,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMlflow,
  SiTensorflow,
  SiPytorch,
  SiQiskit,
  SiGit,
  SiLinux,
  SiNginx,
  SiApache,
} from 'react-icons/si';
import { FaAws, FaDiagramProject } from 'react-icons/fa6';
import { VscAzure } from 'react-icons/vsc';

type Tech = { name: string; Icon: IconType };

const tech: Tech[] = [
  { name: 'Docker', Icon: SiDocker },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'Jenkins', Icon: SiJenkins },
  { name: 'GitLab', Icon: SiGitlab },
  { name: 'Terraform', Icon: SiTerraform },
  { name: 'Ansible', Icon: SiAnsible },
  { name: 'Prometheus', Icon: SiPrometheus },
  { name: 'Grafana', Icon: SiGrafana },
  { name: 'Elasticsearch', Icon: SiElasticsearch },
  { name: 'AWS', Icon: FaAws },
  { name: 'GCP', Icon: SiGooglecloud },
  { name: 'Azure', Icon: VscAzure },
  { name: 'Python', Icon: SiPython },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Go', Icon: SiGo },
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Redis', Icon: SiRedis },
  { name: 'MLflow', Icon: SiMlflow },
  { name: 'Kubeflow', Icon: FaDiagramProject },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'PyTorch', Icon: SiPytorch },
  { name: 'Qiskit', Icon: SiQiskit },
  { name: 'Git', Icon: SiGit },
  { name: 'Linux', Icon: SiLinux },
  { name: 'Nginx', Icon: SiNginx },
  { name: 'Apache', Icon: SiApache },
];

const half = Math.ceil(tech.length / 2);
const rowOne = tech.slice(0, half);
const rowTwo = tech.slice(half);

function Row({
  items,
  direction,
  duration,
}: {
  items: Tech[];
  direction: 'left' | 'right';
  duration: number;
}) {
  // Duplicated list → animating exactly one list-width keeps the loop seamless.
  const doubled = [...items, ...items];
  const x = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-14 pr-14"
        animate={{ x }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 text-gray-400 dark:text-gray-500 opacity-80 transition-all duration-300 hover:text-primary-600 hover:opacity-100 dark:hover:text-primary-400"
          >
            <Icon className="h-8 w-8" />
            <span className="whitespace-nowrap text-xl font-semibold tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const TechMarquee: React.FC = () => (
  <div className="space-y-10">
    <Row items={rowOne} direction="left" duration={45} />
    <Row items={rowTwo} direction="right" duration={45} />
  </div>
);

export default TechMarquee;
