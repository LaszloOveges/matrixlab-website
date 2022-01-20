import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { ButtonBase, useMediaQuery } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import Translation from '../../../data/translation';
import { animSlideOut, animSlideUp } from '../../../config/anim';
import { Milestones, MilestoneStatus, MlMilestonesItem } from '../../../data/roadmap';

export type MlRoadmapProps = { }

export type MlMilestonesGroup = {
  index?: number;
  active?: number;
  groupName: string; 
  groupItems: MlMilestonesItem[];
}

const DEFAULT_MILESTONE_GROUP_INDEX = 2;

const MlMilestoneGroup = (group: MlMilestonesGroup) => {
  const groupIndex = group.index || 0;
  return (
    <div className={`
      ml-roadmap__milestones__group
      ${group.active === groupIndex + 1 ? ` ml-roadmap__milestones__group--prev-active` : ``}
      ${group.active === group.index ? ` ml-roadmap__milestones__group--active` : ``}
    `}>
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

  const [ activeGroup, setActiveGroup ] = useState(DEFAULT_MILESTONE_GROUP_INDEX);
  const tabletOrBigger = useMediaQuery('(min-width:768px)');

  const goToGroup = (index: number) => {
    setActiveGroup(index);
  }

  const goToPrevGroup = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let index = activeGroup;
    if (index >= 1) {
      --index;
    }
    setActiveGroup(index);
  }

  const goToNextGroup = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let index = activeGroup;
    if (index < Milestones.length - 1) {
      ++index;
    }
    setActiveGroup(index);
  }

  return (
    <div className='ml-section ml-roadmap' data-aos='fade-in'>
      <div className='ml-section__wrap ml-roadmap__content'>
        <h2 className='ml-section__title ml-roadmap__title' {...animSlideOut()}>
          {Translation.en.section.roadmap.title}
        </h2>
        <div className='ml-roadmap__steps'>
          {Milestones.map((group, index) =>
            <div 
              onClick={() => goToGroup(index)}
              className={`
                ml-roadmap__steps__item
                ${index === activeGroup ? ` ml-roadmap__steps__item--active` : ``}
              `}
            >
              <div className='ml-roadmap__steps__item__bullet'></div>
            </div>
          )}
        </div>
        <div className='ml-roadmap__wrap'>
          <div className='ml-roadmap__timeline'></div>
          <div className='ml-roadmap__milestones'>
            <div className='ml-roadmap__controls'>
              <div className={`
                ml-roadmap__controls__step 
                ml-roadmap__controls__step--prev
                ${activeGroup >= 1 ? `` : ` ml-roadmap__controls__step--disabled`}
              `}>
                <ButtonBase 
                  className='ml-button-icon ml-button-icon--flip' 
                  children={<ArrowForwardIos />}
                  onClick={(e) => goToPrevGroup(e)}
                />
              </div>
              <div className={`
                ml-roadmap__controls__step 
                ml-roadmap__controls__step--next
                ${activeGroup < Milestones.length - 1 ? `` : ` ml-roadmap__controls__step--disabled`}
              `}>
                <ButtonBase 
                  className='ml-button-icon' 
                  children={<ArrowForwardIos />}
                  onClick={(e) => goToNextGroup(e)}
                />
              </div>
            </div>
            <div 
              className='ml-roadmap__milestones__group-list' 
              style={{right: `${(activeGroup - (tabletOrBigger ? 1 : 0)) * (tabletOrBigger ? 50 : 100)}%` }}
            >
              {Milestones.map((group, index) =>
                <MlMilestoneGroup key={index} index={index} active={activeGroup} {...group} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlRoadmap;
