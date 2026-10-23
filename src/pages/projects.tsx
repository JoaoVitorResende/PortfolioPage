import { ProjectProps } from 'screens/Projects/components/Project';
import { Projects as ProjectsScreen } from 'screens/Projects';

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: 'Store & Purchases Microservices',
      description:
        'Two services that talk to each other through events: a store API in ASP.NET Core to manage stores, categories and items, and a purchases API that creates purchases, reserves stock and notifies the result.',
      accomplishments: [
        'Structured both APIs with DDD, simple CQRS and Clean Architecture;',
        'Integrated the services asynchronously with RabbitMQ and MassTransit (purchase created → stock processed);',
        'Implemented idempotent stock deduction with atomic updates on MongoDB;',
        'Used PostgreSQL with EF Core for stores, categories and purchases;',
        'Published purchase status changes to an SQS queue consumed by a Lambda function, tested locally with Floci;',
        'Containerized everything with Docker Compose;',
        'Wrote xUnit tests for the validators;',
      ],
      url: 'https://github.com/JoaoVitorResende',
      stack: [
        'C#',
        '.NET 8',
        'ASP.NET Core',
        'PostgreSQL',
        'MongoDB',
        'EF Core',
        'RabbitMQ',
        'MassTransit',
        'AutoMapper',
        'AWS SQS',
        'AWS Lambda',
        'Docker',
        'xUnit',
      ],
    },
    {
      title: 'RabbitIntegrationApi',
      description:
        'A minimal .NET API with a React front-end, built to practice messaging, containers, CI/CD and cloud deployment end to end.',
      accomplishments: [
        'Integrated RabbitMQ using MassTransit and persisted data on PostgreSQL with EF Core;',
        'Dockerized the API and ran it with Docker Compose, applying migrations on startup;',
        'Set up a CI pipeline with GitHub Actions running unit tests and building the Docker image;',
        'Deployed the API on ECS using a local AWS emulator (Floci), with the image on ECR;',
        'Built a dark-themed front-end with React, TypeScript, Vite and Tailwind;',
      ],
      url: 'https://github.com/JoaoVitorResende',
      stack: [
        'C#',
        '.NET 8',
        'RabbitMQ',
        'MassTransit',
        'PostgreSQL',
        'EF Core',
        'Docker',
        'GitHub Actions',
        'AWS ECS',
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'TanStack Query',
      ],
    },
    {
      title: 'PhotoAlbum',
      description:
        'A web app to create albums, upload photos and organize them inside each album.',
      accomplishments: [
        'Built the front-end with React 19, Vite and TypeScript;',
        'Built a separate back-end with Fastify, bundled with tsup;',
        'Handled forms and validation with react-hook-form and zod;',
        'Styled the interface with Tailwind CSS v4 and accessible Radix UI components;',
        'Managed routing with React Router;',
      ],
      url: 'https://github.com/JoaoVitorResende',
      stack: [
        'TypeScript',
        'React',
        'Vite',
        'Fastify',
        'Tailwind CSS',
        'Radix UI',
        'react-hook-form',
        'Zod',
        'React Router',
      ],
    },
  ];

  return <ProjectsScreen projects={projects} />;
}
