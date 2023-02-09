import { User } from "@ExemplarViewModels/User";

export interface IUserCardView extends User {
  cardType: UserCardViewType;
}

export class UserCardViewType {
  HasCertificationNo: boolean = false;
  HasComments: boolean = false;
  HasCompanyList: boolean = false;
  HasInitials: boolean = false;
  HasMailingAddress: boolean = false;
  HasServiceAddress: boolean = false;

  constructor(userType: string | number | null) {
    switch (userType) {
      case 1:
      case "Application Users":
        this.HasInitials = true;
        break;
      case 2:
      case "Service Technicians":
        this.HasInitials = true;
        this.HasCertificationNo = true;
        this.HasMailingAddress = true;
        this.HasServiceAddress = true;
        break;
      case 3:
      case "Insurance Adjusters":
        this.HasComments = true;
        this.HasCompanyList = true;
        this.HasMailingAddress = true;
        break;
      case 4:
      case "WebAPI Users":
        this.HasInitials = true;
        break;
      default:
        break;
    }
  }
}
