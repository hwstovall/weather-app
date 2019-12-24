import * as React from 'react';

import '../../styles/components/widgets/temperature-display.scss';

import classNames from 'classnames';

interface TemperatureDisplayProps {
  readonly temperature: number;
  readonly unit?: 'C' | 'F';
  readonly className?: string;
}

export const TemperatureDisplay = ({ temperature, unit, className }: TemperatureDisplayProps) => (
  <div className={classNames('temperature-display', className)}>
    <div className="value">{temperature}</div>
    {unit && <div className="unit">&deg;{unit}</div>}
  </div>
);
