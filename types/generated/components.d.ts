import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    workSummary: Attribute.Text;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'projects';
    icon: 'cast';
    description: '';
  };
  attributes: {
    projectTitle: Attribute.String;
    projectDescription: Attribute.Text;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'doctor';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'projects.projects': ProjectsProjects;
      'skills.skills': SkillsSkills;
    }
  }
}
