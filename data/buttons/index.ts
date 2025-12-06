import { ButtonItem } from './types';
import { fluidButtons } from './fluid';
import { dButtons } from './3d';
import { interactionButtons } from './interaction';
import { typographyButtons } from './typography';
import { aestheticButtons } from './aesthetic';

export const buttonCollection: ButtonItem[] = [
  ...fluidButtons,
  ...dButtons,
  ...interactionButtons,
  ...typographyButtons,
  ...aestheticButtons,
];
