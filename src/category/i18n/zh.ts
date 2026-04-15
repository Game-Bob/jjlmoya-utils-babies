import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'babies',
  title: '婴儿计算器',
  description: '用于宝宝护理和发育监测的工具及计算器。',
  seo: [
    {
      type: 'summary',
      title: '可用工具',
      items: [
        '按月龄和体重计算喂养量',
        '生长百分位数计算器 (WHO)',
        '按品牌转换衣服尺码',
        '排卵日估算',
        '个性化疫苗接种时间表',
        '怀孕和孕周计算器',
      ],
    },
    {
      type: 'title',
      text: '监测宝宝的发育',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '婴儿计算器帮助您准确追踪孩子的成长和发育。从根据月龄和体重计算奶量到查询世卫组织 (WHO) 百分位数，这些工具旨在为每个阶段提供有用的信息。',
    },
    {
      type: 'title',
      text: '喂养与营养',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '喂养计算器根据宝宝按天、周或月计算的月龄及当前体重估算所需的母乳或配方奶量。计算结果遵循标准儿科指南，以确保充足的营养。',
    },
    {
      type: 'title',
      text: '成长与百分位数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '百分位数计算器使用世界卫生组织 (WHO) 的参考图表，将宝宝的体重、身高和 BMI 置于儿童人口分布中。第 50 百分位数表示宝宝处于平均水平。',
    },
  ],
};
