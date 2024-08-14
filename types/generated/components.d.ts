import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'grid';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    description: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    workSummery: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
    }
  }
}
