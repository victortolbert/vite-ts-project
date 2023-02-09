import { injectable } from "inversify";
import GridCheckboxCell from "@ExemplarComponents/Grid/GridCheckboxCell";
import GridModel, { GridColumn } from "@ExemplarViewModels/GridModel";
import IGridModel from "@ExemplarInterfaces/IGridModel";

//@injectable()
export default class UserGridModel extends GridModel implements IGridModel {
  allowFiltering = true;
  allowSelecting = true;
  allowSorting = true;
  columns: Array<GridColumn | string> = [
    {
      field: "Id",
      hidden: true,
    },
    {
      cell: GridCheckboxCell,
      field: "IsActive",
      filter: "boolean",
      type: "boolean",
      width: 125,
    },
    {
      field: "CertificationNumber",
      hidden: true,
    },
    {
      field: "Comment",
      hidden: true,
    },
    {
      field: "CompanyUserId",
      hidden: true,
    },
    {
      field: "CreatedBy",
      hidden: true,
    },
    {
      field: "CreatedByUser",
      hidden: true,
    },
    {
      field: "CreatedOn",
      hidden: true,
    },
    {
      field: "FirstName",
      hidden: true,
    },
    {
      field: "HaagCertificationNumber",
      hidden: true,
    },
    {
      field: "Initials",
      hidden: true,
    },
    {
      field: "IsInCollections",
      hidden: true,
    },
    {
      field: "IsActive",
      hidden: true,
    },
    {
      field: "IsApproved",
      hidden: true,
    },
    {
      field: "IsHaagCertified",
      hidden: true,
    },
    {
      field: "IsIdentityUser",
      hidden: true,
    },
    {
      field: "IsInCollections",
      hidden: true,
    },
    {
      field: "LastName",
      hidden: true,
    },
    {
      field: "MailingAddress",
      hidden: true,
    },
    {
      field: "MiddleName",
      hidden: true,
    },
    {
      field: "PrimaryPhoneExt",
      hidden: true,
    },
    {
      field: "Role",
      title: "User Level",
    },
    {
      field: "SecondaryEmail",
      hidden: true,
    },
    {
      field: "SecondaryPhone",
      hidden: true,
    },
    {
      field: "ServiceAddress",
      hidden: true,
    },
    {
      field: "UserTypeId",
      hidden: true,
    },
  ];
  dataReadRoute = "Users";
  exportHidden = true;
}
