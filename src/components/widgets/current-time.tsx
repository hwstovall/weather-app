import * as React from 'react';

import moment from 'moment';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = React.useState<moment.Moment>(moment());

  const interval = React.useRef<number>();
  React.useEffect(() => {
    interval.current = window.setInterval(() => setCurrentTime(moment()), 1000);
    return () => window.clearInterval(interval.current);
  }, []);

  return (
    <div className="current-time">
      <div className="time">
        {currentTime.format('h:mm a')}
      </div>
      <div className="date">
        {currentTime.format('MMM Do')}
      </div>
    </div>
  )
}
