import React, { FC } from 'react';
import { css } from '@emotion/css';
import { publicPath } from '../modules/utils';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';
import Bubbles from './three/Bubbles';

export const App: FC = () => {
  return <Bubbles />;
};
