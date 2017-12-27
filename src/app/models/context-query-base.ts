export interface ContextQueryBase {
  id?: number,
  type?: any,
  startDate?: any, //todo: zamienic na date format
  endDate?: any,//todo: zamienic na date format
  includeSubSites: boolean
}
