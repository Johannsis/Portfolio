export const IconNameEnum = {
  github: 'github',
  linkedin: 'linkedin',
  mail: 'mail',
  moon: 'moon',
  sun: 'sun',
} as const;

export type IconNames = keyof typeof IconNameEnum;
