import * as React from 'react';

import classNames from 'classnames';

import { WeatherIconOptions } from '../../types/dark-sky';

interface WeatherIconProps {
  readonly icon: WeatherIconOptions;
  readonly className?: string;
}

const iconMap = new Map<WeatherIconOptions, string>([
  ['clear-day', 'wi-day-sunny'],
  ['clear-night', 'wi-night-clear'],
  ['rain', 'wi-rain'],
  ['snow', 'wi-snow'],
  ['sleet', 'wi-sleet'],
  ['wind', 'wi-windy'],
  ['fog', 'wi-fog'],
  ['cloudy', 'wi-cloudy'],
  ['partly-cloudy-day', 'wi-day-cloudy'],
  ['partly-cloudy-night', 'wi-night-alt-cloudy'],
  ['hail', 'wi-hail'],
  ['thunderstorm', 'wi-thunderstorm'],
  ['tornado', 'wi-tornado'],
]);

export const WeatherIcon = ({ icon, className }: WeatherIconProps) => (
  <i className={classNames('weather-icon', 'wi', iconMap.get(icon), className)} />
);
