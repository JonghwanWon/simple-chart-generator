import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { ChartType } from 'chart.js';
import { IconType } from 'react-icons';
import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlinePieChart,
  AiOutlineRadarChart,
} from 'react-icons/ai';
import { BiDoughnutChart } from 'react-icons/bi';
import { MdOutlineBubbleChart, MdOutlineScatterPlot } from 'react-icons/md';

const iconMap: Record<ChartType, IconType> = {
  bar: AiOutlineBarChart,
  bubble: MdOutlineBubbleChart,
  doughnut: BiDoughnutChart,
  line: AiOutlineLineChart,
  pie: AiOutlinePieChart,
  polarArea: AiOutlineAreaChart,
  radar: AiOutlineRadarChart,
  scatter: MdOutlineScatterPlot,
};

type ChartIconButtonProps = Omit<IconButtonProps, 'icon' | 'aria-label'> & {
  chartType: ChartType;
};

const ChartIconButton = ({ chartType, ...props }: ChartIconButtonProps) => {
  const Icon = iconMap[chartType];

  return (
    <IconButton
      {...props}
      icon={<Icon size="21px" opacity={props.isActive ? 1 : 0.4} />}
      aria-label={`${chartType}-icon-button`}
    />
  );
};

export default ChartIconButton;
