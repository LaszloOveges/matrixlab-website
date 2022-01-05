import React, { Fragment, ReactElement } from 'react';

import MlFeatureSwap from './feature-swap';
import MlFeaturePerp from './feature-perp';
import MlFeatureZap from './feature-zap';
import MlFeatureSecurity from './feature-security';

export type MlFeaturesProps = { }

function MlFeatures({ 
  ...props 
}: MlFeaturesProps): ReactElement {
  return (
    <Fragment>
      <MlFeatureSwap />
      <MlFeaturePerp />
      <MlFeatureZap />
      <MlFeatureSecurity />
    </Fragment>
  );
}

export default MlFeatures;
