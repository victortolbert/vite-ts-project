export class MasterDataBuilder {
  static ReturnAwningMaterial(): Array<String> {
    return ['Aluminum', 'Cloth', 'Fiberglass', 'Vinyl', 'Other']
  }

  static ReturnBoxVent(): Array<String> {
    return ['Metal', 'Plastic']
  }

  static ReturnDeckMaterial(): Array<String> {
    return ['Composite', 'Vinyl', 'Wood']
  }

  static ReturnDirection(): Array<String> {
    return ['Front', 'Back', 'Left', 'Right']
  }

  static ReturnDownspoutMaterial(): Array<String> {
    return ['Aluminum', 'Copper', 'Galvanized', 'Plastic', 'Other']
  }

  static ReturnDownspoutSize(): Array<String> {
    return ['2', '3', '4', 'Other']
  }

  static ReturnFasciaMaterial(): Array<String> {
    return ['Aluminum', 'Vinyl', 'Wood', 'Other']
  }

  static ReturnFasciaSize(): Array<String> {
    return ['4', '6', '8', '10', 'Other']
  }

  static ReturnFeltMaterial(): Array<String> {
    return ['15lb', '30lb', 'Synthetic']
  }

  static ReturnFenceMaterial(): Array<String> {
    return ['Barbed Wire', 'Chainlink', 'Plastic', 'Vinyl', 'Wood', 'Other']
  }

  static ReturnGutterMaterial(): Array<String> {
    return ['Aluminum', 'Copper', 'Galvanized', 'Other']
  }

  static ReturnGutterSize(): Array<String> {
    return ['5 inch', '6 inch', 'Halfround', 'Other']
  }

  static ReturnHailSize(): Array<String> {
    return ['0 - 1/2 inch', '1/2 - 1 inch', '1 - 1 1/2 inch', '1 1/2 - 2 inch', '2 - 3 inch', '3+ inch', 'NA']
  }

  static ReturnHandRailMaterial(): Array<String> {
    return ['Composite', 'Vinyl', 'Wood']
  }

  static ReturnInstallationError(): Array<String> {
    return ['Fastener not on nail line', 'Improper application', 'Improper fastener installation', 'Improper fastener size', 'Improper flashing', 'Improper material use', 'Improper shingle exposure', 'Layout', 'Manufacturer defect', 'Other']
  }

  static ReturnLayerType(): Array<String> {
    return ['OSB', 'Plywood', 'Shake', 'Spaced Decking', 'Other']
  }

  static ReturnLayerNumber(): Array<String> {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  }

  static ReturnPipebootMaterial(): Array<String> {
    return ['Lead', 'Plastic/PVC']
  }

  static ReturnPowerVentMaterial(): Array<String> {
    return ['Metal', 'Plastic']
  }

  static ReturnRidgeVentMaterial(): Array<String> {
    return ['Aluminum', 'Mesh', 'Plastic']
  }

  static ReturnRoofAge(): Array<String> {
    return ['0-5 Yrs', '6-10 Yrs', '11-15 Yrs', '16-20 Yrs', '21+ Yrs']
  }

  static ReturnRoofMaterial(isAllState: boolean): Array<String> {
    const options: Array<String> = ['Metal', 'Tile', 'Wood', '20 Year Comp.', '25 Year Comp.', '25 Year Organic', '30 Year Organic', 'Laminate 30 Year']

    if (isAllState) {
      options.push('Rolled')
      options.push('Mod Bit')
    }

    options.push('Other')
    return options
  }

  static ReturnRoofPitch(): Array<String> {
    return ['0/12', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12', 'Other', 'NA']
  }

  static ReturnRoofType(): Array<String> {
    return ['Combination', 'Gable', 'Gambrel', 'Flat', 'Hip', 'Mansard', 'Multiple Facet', 'Shed', 'Split Level', 'Other']
  }

  static ReturnOutbuildingTypes(): Array<String> {
    return ['Detached Garage', 'Shed', 'Barn', 'Shop', 'Pool House', 'Green House', 'Other']
  }

  static ReturnShingleType(): Array<String> {
    return ['20 yr', '25 yr', '30 yr', '35 yr', '40 yr', 'NA']
  }

  static ReturnSidingMaterial(): Array<String> {
    return ['Aluminum', 'Composite', 'Guage Metal', 'Hardy Plank', 'Stucco', 'Vinyl', 'Wood', 'Other']
  }

  static ReturnStories(): Array<String> {
    return ['1', '2', '3', '4', 'Other']
  }

  static ReturnStormDamageType(): Array<String> {
    return ['Hail', 'Wind', 'Other']
  }

  static ReturnWindowWrapMaterial(): Array<String> {
    return ['Aluminum', 'Copper', 'Vinyl', 'Wood', 'Other']
  }

  static ReturnValleyMetalMaterial(): Array<String> {
    return ['Aluminum', 'Copper', 'Galvanized', 'Pre-formed']
  }

  static ReturnValleyType(): Array<String> {
    return ['Closed', 'Open', 'Valley Metal', 'Weaved', 'NA']
  }

  static ReturnYesNoNa(): Array<String> {
    return ['Yes', 'No', 'NA']
  }

  static ReturnYesNo(): Array<String> {
    return ['Yes', 'No']
  }
}
