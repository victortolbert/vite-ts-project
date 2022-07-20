export interface InspectionMain {
  // Keys
  Id: number
  PropertyInspectionFormId: number

  // Dates
  CreatedOn: Date
  LastModifiedOn: Date

  // Booleans
  AllPhotos: boolean
  AllPhotosPitch: boolean
  AllPhotosShingle: boolean
  AllStateInspection: boolean
  ContractorPresent: boolean
  ContractorPresentOnRoof: boolean
  EagleViewProvided: boolean
  ElevationInspected: boolean
  InsuredPresent: boolean
  InteriorInspected: boolean
  LaAccompanied: boolean
  LaOnTime: boolean
  OutsideAdjusterOnEdge: boolean
  OutsideAdjusterOnLadder: boolean
  OutsideAdjusterPresent: boolean
  OutsideAdjusterPresentOnRoof: boolean
  PublicAdjusterPresent: boolean
  PublicAdjusterPresentOnRoof: boolean
  RoleExplained: boolean
  RoofInspected: boolean
  RopeHarness: boolean
  TarpInstall: boolean

  // Numbers
  OutsideTemp: number
  TarpInstallSizeSf: number
  TarpResetSizeSf: number

  // Strings
  CollaborationSuccessful: string
  DirectionNorth: string
}


// Shingle Gauge Photo Taken ? (needs to be moved to roof but resides in main until)
// Pitch Gauge Photo Taken ? (needs to be moved to roof but resides in main until)
// Fascia(needs to be moved to roof but resides in elevation until)
// Drip Edge Eaves Present ? (needs to be moved to roof but resides in roof damaged items until)
// Drip Edge Rake Present ? (needs to be moved to roof but resides in roof damaged items until)
// Valley Metal Present ? (needs to be moved to roof but resides in roof damaged items until)
