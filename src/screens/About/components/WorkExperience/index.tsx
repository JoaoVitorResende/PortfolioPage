import { Heading2 } from 'components/Headings';
import { Position, PositionProps } from 'components/Position';
import { MutedText } from 'components/MutedText';
import { Stack } from 'components/Stack';
import * as S from './styles';

const positions: PositionProps[] = [
  {
    title: 'Software Developer',
    company: 'Senai Soluções Digitais',
    startDate: 'Aug 2019',
    endDate: 'Aug 2026',
    responsabilities: [
      'Collaborated closely with Product and Design teams to ensure successful delivery of solutions that solve genuine user problems.',
      'Principal programmer in a two-developer team, delivering 14 projects with ownership of architecture decisions.',
      'Cut development time by 40% by building reusable C# codebases that sped up new project launches.',
      'Partnered with Product to refine scope, balance technical trade-offs, and align delivery with strategic product vision.',
      'Contributed to continuous improvement of Agile processes, increasing team efficiency and delivery predictability.',
    ],
  },
  {
    title: 'intern Software Developer',
    company: 'Senai',
    startDate: 'Jan 2019',
    endDate: 'Aug 2019',
    responsabilities: [
      'Developed 3D applications, games, and simulators for mobile, desktop, VR, AR, Mixed Reality, and WebXR platforms using Unity, C#, Netcode for GameObjects, and Photon Engine.',
      'Created and optimized custom rendering pipelines using both URP and the Built-in Render Pipeline (BRP), tailoring rendering strategies to the performance constraints of each platform.',
      'Analyzed and optimized application performance using the Unity Profiler, addressing bottlenecks related to normal calculations and multithreading to maintain stable frame rates across different devices.',
      'Collaborated closely with the 3D modeling and animation team, supporting character modeling and animation workflows in Blender and ensuring that assets met real-time performance requirements.',
    ],
  },
];

export function WorkExperience() {
  return (
    <section>
      <Heading2>Work Experience</Heading2>
      <MutedText>
        These are some of the awesome places I have been able to contribute to
        and make things happen
      </MutedText>

      <S.Positions>
        <Stack spacing="3rem">
          {positions.map((position) => (
            <Position
              key={`${position.title}-${position.company}`}
              {...position}
            />
          ))}
        </Stack>
      </S.Positions>
    </section>
  );
}
