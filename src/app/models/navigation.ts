import {BreadCrumbItem} from "./breadcrumbItem";

export interface ReadNavigation {
  id: number
  title: string,
  numberOfDocuments: number,
  numberOfPages: number,
  numberOfSites: number,
  items: BreadCrumbItem[]
}
