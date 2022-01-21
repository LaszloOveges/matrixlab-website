import Translation from './translation';
import { MlMilestonesGroup } from '../components/custom/roadmap/roadmap';

export type MlMilestonesItem = {
  name: string;
  status?: MilestoneStatus;
}

export enum MilestoneStatus { 
  Achieved = `achieved`,
  Planned = `planned`,
}

export const Milestones: MlMilestonesGroup[] = [
  {
    groupName: `2021 Q3`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item1, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item2, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item3, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item4, status: MilestoneStatus.Achieved },
    ],
  },
  {
    groupName: `2021 Q4`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item5, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item6, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item8, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item9, status: MilestoneStatus.Achieved },
    ],
  },
  {
    groupName: `2022 Q1`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item10, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item11, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item12, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item13, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.milestones.item14, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item15, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item16, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item17, status: MilestoneStatus.Planned },
    ],
  },
  {
    groupName: `2022 Q2`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item18, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item19, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item20, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item7, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item21, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item22, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item23, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item24, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item25, status: MilestoneStatus.Planned },
    ],
  },
  {
    groupName: `2022 Q3`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item26, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item27, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item28, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item29, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item30, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item31, status: MilestoneStatus.Planned },
    ],
  },
  {
    groupName: `2022 Q4`,
    groupItems: [
      { name: Translation.en.section.roadmap.milestones.item32, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item33, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item34, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item35, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item36, status: MilestoneStatus.Planned },
      { name: Translation.en.section.roadmap.milestones.item37, status: MilestoneStatus.Planned },
    ],
  },
];
