import * as React from 'react';

import moment from 'moment';
import classNames from 'classnames';

interface DateDisplayProps {
  readonly date: moment.Moment;
  readonly format: string;
  readonly className?: string;
}

export const DateDisplay = ({ date, format, className }: DateDisplayProps) => (
  <div className={classNames('date-display', className)}>
    {date.format(format)}
  </div>
);
