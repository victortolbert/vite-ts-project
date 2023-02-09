# Notes

## PropertyInspections

Event Listeners

- GlobalEvent.Unauthorized
- PifEvents.ReportTypeSet
- PifEvents.SendReportData
- PifEvents.FailedValidation
- PifEvents.FieldAssetUpload
- PifEvents.SearchPifComplete
- PifEvents.SearchPif
- PifEvents.CloseForm
- PifEvents.AssetsReceived
- PifEvents.ShowPifForm
- PifEvents.FieldAssetDeleted
- PifEvents.FieldAssetReordered

Emits

- PifEvents.ValidatePif (on PifEvents.ReportTypeSet)
- PifEvents.InitializeFormMenu (on PifEvents.SearchPifComplete)
- PifEvents.CallingAssets (on PifEvents.ShowPifForm)
- PifEvents.RequestReportData (on CreateReport)
- PifEvents.SavePif (on onSaveClicked())
- PifEvents.SavePif (on onReportsClicked())
- PifEvents.DetermineReportType (on onReportsCliked())
- PifEvents.Destroy(on onReturnClicked())
- PifEvents.CloseForm (on onReturnClicked())
- PifEvents.ReportCreated (on ReportCreatedSuccessCallback)

## RoofSectionComponent

Event Listeners

- PifEvents.LoadRoof
- PifEvents.RemoveRoof
- PifEvents.CreateRoof
- PifEvents.SavePif
- PifEvents.RequestReportData

Emits

- PifEvents.SendReportData (on PifEvents.RequestReportData)
- PifEvents.CreateOutbuildings (on onOutbuildingsPresentChange())
- PifEvents.RemoveOutbuildings (on DeleteSectionSuccessfull())
- PifEvents.LoadOutbuildings (on LoadSection())

## OutbuildingsSectionComponent

Event Listeners

- PifEvents.LoadOutbuildings
- PifEvents.RemoveOutbuildings
- PifEvents.CreateOutbuildings

- PifEvents.RemoveRoof
- PifEvents.SavePif
- PifEvents.RequestReportData

Emits

- PifEvents.SendReportData (on PifEvents.RequestReportData)
- NEW PifEvents.LoadOutbuilding
- NEW PifEvents.RemoveOutbuilding ?
- NEW PifEvents.CreateOutbuilding

## OutbuildingComponent

Event Listeners

- PifEvents.RemoveRoof
- PifEvents.SavePif

- NEW PifEvents.LoadOutbuilding
- NEW PifEvents.RemoveOutbuilding
- NEW PifEvents.CreateOutbuilding
- NEW PifEvents.RemoveOutbuildings
