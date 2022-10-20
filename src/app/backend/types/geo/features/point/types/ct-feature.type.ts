import {PointFeature} from "../point-feature.type";
import {PointFeatureType} from "../point-feature-type.enum";

export class CTFeature implements PointFeature {
  displayName: string;
  zipCode: string;
  streetAddress: string;
  type: PointFeatureType = PointFeatureType.CT;

  /**
   * @param rawJSON
   */
  constructor(rawJSON: {[key: string]: string}) {
    this.displayName = rawJSON['Category'];
    this.streetAddress = rawJSON['Block Address'];
    this.zipCode = rawJSON['zipcode'];
  }

}