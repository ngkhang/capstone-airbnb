import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends:   ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules:     {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'setup',
        'feat',
        'fix',
        'chore',
        'refactor',
        'style',
        'docs',
        'ci',
        'test',
        'perf',
        'revert',
        'vercel'
      ]
    ],
  },
};

export default Configuration;
