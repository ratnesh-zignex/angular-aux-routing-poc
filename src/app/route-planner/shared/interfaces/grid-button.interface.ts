/**
 * Grid Button Interface for toolbar operations
 */
export interface IZWijmoGridBtn {
  className: string;        // Icon class for the button
  toolTipText: string;      // Tooltip text
  toolTipClass: string;     // Tooltip styling class
  name: string;             // Button name
  privilegeCd: string | Record<string, string>; // Access control
  id: IZGridBtnEnum;        // Unique identifier
  multiRoutes?: boolean;    // Whether button works with multiple routes
  disabled?: boolean;       // Whether button is disabled
}

/**
 * Grid Button Enum for identifying button actions
 */
export enum IZGridBtnEnum {
  Refresh = 'Refresh',
  Export = 'Export',
  RemoveFilter = 'RemoveFilter',
  Redisplay = 'Redisplay',
  EnableMapFilter = 'EnableMapFilter',
  DisableMapFilter = 'DisableMapFilter',
  Statistics = 'Statistics',
  DayOfService = 'DayOfService',
  ChangeWeek = 'ChangeWeek',
  Calculator = 'Calculator',
  EditAll = 'EditAll',
  Geocode = 'Geocode',
  Delete = 'Delete',
  Import = 'Import',
  AssignRouteNo = 'AssignRouteNo',
  PopoutGrid = 'PopoutGrid',  // For popping out the grid
  PutGridBack = 'PutGridBack', // For returning grid to parent
}

/**
 * Default Grid Button List Configuration
 */
export const gridBtnList: IZWijmoGridBtn[] = [
  {
    className: 'btn-refresh',
    toolTipText: 'Refresh',
    toolTipClass: 'tooltip',
    name: 'Refresh',
    privilegeCd: '',
    id: IZGridBtnEnum.Refresh
  },
  {
    className: 'btn-redisplay',
    toolTipText: 'Redisplay on Map',
    toolTipClass: 'tooltip',
    name: 'Redisplay',
    privilegeCd: '',
    id: IZGridBtnEnum.Redisplay
  },
  {
    className: 'btn-enable-filter',
    toolTipText: 'Enable filter on map',
    toolTipClass: 'tooltip',
    name: 'Enable filter on map',
    privilegeCd: '',
    id: IZGridBtnEnum.EnableMapFilter
  },
  {
    className: 'btn-statistics',
    toolTipText: 'Statistics',
    toolTipClass: 'tooltip',
    name: 'Statistics',
    privilegeCd: '',
    id: IZGridBtnEnum.Statistics
  },
  {
    className: 'btn-calculator',
    toolTipText: 'Field Calculator',
    toolTipClass: 'tooltip',
    name: 'Field Calculator',
    privilegeCd: '',
    id: IZGridBtnEnum.Calculator
  },
  {
    className: 'btn-geocode',
    toolTipText: 'Geocode',
    toolTipClass: 'tooltip',
    name: 'Geocode',
    privilegeCd: '',
    id: IZGridBtnEnum.Geocode
  },
  {
    className: 'btn-delete',
    toolTipText: 'Delete',
    toolTipClass: 'tooltip',
    name: 'Delete',
    privilegeCd: '',
    id: IZGridBtnEnum.Delete
  },
  {
    className: 'btn-export',
    toolTipText: 'Export',
    toolTipClass: 'tooltip',
    name: 'Export',
    privilegeCd: '',
    id: IZGridBtnEnum.Export
  },
  {
    className: 'btn-remove-filter',
    toolTipText: 'Clear Column Filter(s)/Sorting',
    toolTipClass: 'tooltip',
    name: 'Clear Filters',
    privilegeCd: '',
    id: IZGridBtnEnum.RemoveFilter
  },
  {
    className: 'btn-popout',
    toolTipText: 'Pop Out Grid',
    toolTipClass: 'tooltip',
    name: 'Pop Out Grid',
    privilegeCd: '',
    id: IZGridBtnEnum.PopoutGrid
  }
];

/**
 * Grid Button List for Popped-Out Window
 */
export const popoutGridBtnList: IZWijmoGridBtn[] = [
  {
    className: 'btn-put-back',
    toolTipText: 'Put Grid Back',
    toolTipClass: 'tooltip',
    name: 'Put Grid Back',
    privilegeCd: '',
    id: IZGridBtnEnum.PutGridBack
  },
  {
    className: 'btn-export',
    toolTipText: 'Export',
    toolTipClass: 'tooltip',
    name: 'Export',
    privilegeCd: '',
    id: IZGridBtnEnum.Export
  },
  {
    className: 'btn-remove-filter',
    toolTipText: 'Clear Column Filter(s)/Sorting',
    toolTipClass: 'tooltip',
    name: 'Clear Filters',
    privilegeCd: '',
    id: IZGridBtnEnum.RemoveFilter
  },
  {
    className: 'btn-statistics',
    toolTipText: 'Statistics',
    toolTipClass: 'tooltip',
    name: 'Statistics',
    privilegeCd: '',
    id: IZGridBtnEnum.Statistics
  },
  {
    className: 'btn-calculator',
    toolTipText: 'Field Calculator',
    toolTipClass: 'tooltip',
    name: 'Field Calculator',
    privilegeCd: '',
    id: IZGridBtnEnum.Calculator
  },
  {
    className: 'btn-geocode',
    toolTipText: 'Geocode',
    toolTipClass: 'tooltip',
    name: 'Geocode',
    privilegeCd: '',
    id: IZGridBtnEnum.Geocode
  },
];
