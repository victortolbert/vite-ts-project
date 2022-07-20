export interface ItemIcon {
  element: string
  class: string
  attributes?: object
  text?: string
}

export interface ItemBadge {
  text?: string
  element?: string
  class?: string
  attributes?: object
}

export interface SidebarItem {
  href?: string | object
  title?: string
  icon?: string | ItemIcon
  badge?: ItemBadge
  child?: Array<SidebarItem | SidebarComponentItem | SidebarHeaderItem>
  disabled?: boolean
  class?: string
  attributes?: object
  exactPath?: boolean
  alias?: string | Array<string>
  hidden?: boolean
  hiddenOnCollapse?: boolean
}

export interface SidebarHeaderItem {
  header?: boolean
  title?: string
  hidden?: boolean
  hiddenOnCollapse?: boolean
  class?: string
  attributes?: object
}

export interface SidebarComponentItem {
  component: string
  props?: object
  hidden?: boolean
  hiddenOnCollapse?: boolean
}
