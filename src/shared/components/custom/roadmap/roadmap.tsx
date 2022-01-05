import React, { ReactElement } from 'react';

import Translation from '../../../../assets/data/translation';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlRoadmapProps = { }

export type MlMilestonesGroup = {
  groupName: string; 
  groupItems: MlMilestonesItem[];
}

export type MlMilestonesItem = {
  name: string;
  status?: MilestoneStatus;
}

enum MilestoneStatus { 
  Achieved = `achieved`,
  Planned = `planned`,
}

const milestones: MlMilestonesGroup[] = [
  {
    groupName: `2021 Q3`,
    groupItems: [
      {
        name: Translation.en.section.roadmap.milestones.item1,
        status: MilestoneStatus.Achieved,
      },
      {
        name: Translation.en.section.roadmap.milestones.item2,
        status: MilestoneStatus.Achieved,
      },
      {
        name: Translation.en.section.roadmap.milestones.item3,
        status: MilestoneStatus.Achieved,
      },
      {
        name: Translation.en.section.roadmap.milestones.item4,
        status: MilestoneStatus.Achieved,
      },
    ],
  },
  {
    groupName: `2021 Q4`,
    groupItems: [
      {
        name: Translation.en.section.roadmap.milestones.item5,
        status: MilestoneStatus.Planned,
      },
      {
        name: Translation.en.section.roadmap.milestones.item6,
        status: MilestoneStatus.Achieved,
      },
      {
        name: Translation.en.section.roadmap.milestones.item7,
        status: MilestoneStatus.Planned,
      },
      {
        name: Translation.en.section.roadmap.milestones.item8,
        status: MilestoneStatus.Planned,
      },
      {
        name: Translation.en.section.roadmap.milestones.item9,
        status: MilestoneStatus.Planned,
      },
      {
        name: Translation.en.section.roadmap.milestones.item10,
        status: MilestoneStatus.Planned,
      },
      {
        name: Translation.en.section.roadmap.milestones.item11,
        status: MilestoneStatus.Planned,
      },
    ],
  },
];

const MlMilestoneGroup = (group: MlMilestonesGroup) => {
  return (
    <div className='ml-roadmap__milestones__group'>
      <div className='ml-roadmap__milestones__mark'>
        <h3 className='ml-roadmap__milestones__date ml-typo--highlight'>
          {group.groupName}
        </h3>
        <div className='ml-roadmap__milestones__dot'></div>
      </div>
      <div className='ml-card ml-roadmap__milestones__card' {...animSlideUp()}>
        <ul className='ml-roadmap__milestones__list'>
          {group.groupItems.map((item, index) =>
            <MlMilestoneItem key={index} {...item} />
          )}
        </ul>
      </div>
    </div>
  )
};

const MlMilestoneItem = (item: MlMilestonesItem) => {
  return (
    <li className='ml-roadmap__milestones__item'>
      <i className={`
        ml-roadmap__milestones__status
        ${item.status === MilestoneStatus.Achieved ? ` ml-roadmap__milestones__status--active` : ``}
      `}></i>
      <span className='ml-roadmap__milestones__text'>
        {item.name}
      </span>
    </li>
  )
};

function MlRoadmap({ 
  ...props 
}: MlRoadmapProps): ReactElement {
  return (
    <div className='ml-section ml-roadmap' data-aos='fade-in'>
      <div className='ml-section__wrap ml-roadmap__content'>
        <h2 className='ml-section__title ml-roadmap__title' {...animSlideOut()}>
          {Translation.en.section.roadmap.title}
        </h2>
        <div className='ml-roadmap__wrap'>
          <div className='ml-roadmap__timeline'></div>
          <div className='ml-roadmap__milestones'>
            {milestones.map((group, index) =>
              <MlMilestoneGroup key={index} {...group} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlRoadmap;
