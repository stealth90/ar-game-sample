import React from 'react';
import BeTogetherLogo from '../../assets/images/logo.png';
import './project-logo.scss';

interface ProjectLogoProps {
  className?: string;
}

const ProjectLogo: React.FC<ProjectLogoProps> = ({ className = "" }) => {
  return (
    <img className={`project-logo ${className}`} alt="be together logo" src={BeTogetherLogo} />
  );
};

export default ProjectLogo;
