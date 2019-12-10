export type WeatherIconOptions = 
'clear-day' | 
'clear-night' | 
'rain' | 
'snow' | 
'sleet' | 
'wind' | 
'fog' | 
'cloudy' | 
'partly-cloudy-day' | 
'partly-cloudy-night' | 
'hail' | 
'thunderstorm' | 
'tornado';

export interface Currently {
  readonly time: number;
  readonly summary: string;
  readonly icon: WeatherIconOptions;
  readonly nearestStormDistance: number;
  readonly nearestStormBearing: number;
  readonly precipIntensity: number;
  readonly precipProbability: number;
  readonly temperature: number;
  readonly apparentTemperature: number;
  readonly dewPoint: number;
  readonly humidity: number;
  readonly pressure: number;
  readonly windSpeed: number;
  readonly windGust: number;
  readonly windBearing: number;
  readonly cloudCover: number;
  readonly uvIndex: number;
  readonly visibility: number;
  readonly ozone: number;
}

interface MinutelyValue {
  readonly time: number;
  readonly precipIntensity: number;
  readonly precipProbability: number;
}

export interface Minutely {
  readonly summary: string;
  readonly icon: WeatherIconOptions;
  readonly data: ReadonlyArray<MinutelyValue>;
}

interface HourlyValue {
  readonly time: number;
  readonly summary: string;
  readonly icon: WeatherIconOptions;
  readonly precipIntensity: number;
  readonly precipProbability: number;
  readonly precipType: string;
  readonly temperature: number;
  readonly apparentTemperature: number;
  readonly dewPoint: number;
  readonly humidity: number;
  readonly pressure: number;
  readonly windSpeed: number;
  readonly windGust: number;
  readonly windBearing: number;
  readonly cloudCover: number;
  readonly uvIndex: number;
  readonly visibility: number;
  readonly ozone: number;
}

export interface Hourly {
  readonly summary: string;
  readonly icon: WeatherIconOptions;
  readonly data: ReadonlyArray<HourlyValue>;
}

export interface DailyValue {
readonly time: number;
readonly summary: string;
readonly icon: WeatherIconOptions;
readonly sunriseTime: number;
readonly sunsetTime: number;
readonly moonPhase: number;
readonly precipIntensity: number;
readonly precipIntensityMax: number;
readonly precipIntensityMaxTime: number;
readonly precipProbability: number;
readonly precipType: string;
readonly temperatureHigh: number;
readonly temperatureHighTime: number;
readonly temperatureLow: number;
readonly temperatureLowTime: number;
readonly apparentTemperatureHigh: number;
readonly apparentTemperatureHighTime: number;
readonly apparentTemperatureLow: number;
readonly apparentTemperatureLowTime: number;
readonly dewPoint: number;
readonly humidity: number;
readonly pressure: number;
readonly windSpeed: number;
readonly windGust: number;
readonly windGustTime: number;
readonly windBearing: number;
readonly cloudCover: number;
readonly uvIndex: number;
readonly uvIndexTime: number;
readonly visibility: number;
readonly ozone: number;
readonly temperatureMin: number;
readonly temperatureMinTime: number;
readonly temperatureMax: number;
readonly temperatureMaxTime: number;
readonly apparentTemperatureMin: number;
readonly apparentTemperatureMinTime: number;
readonly apparentTemperatureMax: number;
readonly apparentTemperatureMaxTime: number;
}

export interface Daily {
  readonly summary: string;
  readonly icon: WeatherIconOptions;
  readonly data: ReadonlyArray<DailyValue>;
}

interface Flags {
  readonly sources: ReadonlyArray<string>;
  readonly "nearest-station": number;
  readonly units: string;
}

export interface DarkSkyAPIResponse {
  readonly latitude: number;
  readonly longitude: number;
  readonly timezone: string;
  readonly currently: Currently;
  readonly daily: Daily;
  readonly hourly: Hourly;
  readonly minutely: Minutely;
  readonly flags: Flags;
  readonly offset: number;
}
