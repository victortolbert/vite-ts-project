<template>
  <h1>Create User</h1>
  <form
    action="/User/CreateApplicationUser"
    class="form-horizontal"
    method="post"
    novalidate="novalidate"
  >
    <input
      name="__RequestVerificationToken"
      type="hidden"
      value="6Q-ixooiweUJpkkIN1x8gfRG-RxzzdTY0pQT1nF7_GYFQuRsVzH2Qh9deJLG-s06wo1CXHszIdko_kIuQfJft3XCtao-CtmVBfWkj96gPaTbXVTgZQAaRXIvp2sSHTaU3lJGx-Z_2x8c7rXDYcePMQ2"
    />
    <input
      data-val="true"
      data-val-number="The field Id must be a number."
      data-val-required="The Id field is required."
      id="ApplicationUser_Id"
      name="ApplicationUser.Id"
      type="hidden"
      value="50919"
    />
    <input
      id="ApplicationUser_TimeStamp"
      name="ApplicationUser.TimeStamp"
      type="hidden"
      value="AAAAAABRmSM="
    />
    <div class="controls margin-bottom-20">
      <button id="CreateApplicationUserSaveButton" class="btn blue" type="submit">
        <i class="icon-ok"></i>Save
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        id="CreateApplicationUserCancelButton"
        href="/User"
        class="btn"
        type="button"
      >Cancel</a>
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_LastName">
            Last Name
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12 valid"
              data-val="true"
              data-val-required="Required"
              id="ApplicationUser_LastName"
              name="ApplicationUser.LastName"
              type="text"
              value="Tolbert"
              aria-required="true"
              aria-describedby="ApplicationUser_LastName-error"
              aria-invalid="false"
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="ApplicationUser.LastName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_FirstName">
            First Name
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-required="Required"
              id="ApplicationUser_FirstName"
              name="ApplicationUser.FirstName"
              type="text"
              value="Victor"
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="ApplicationUser.FirstName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_MiddleInitial">M.I.</label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-length="Max. 1 character"
              data-val-length-max="1"
              id="ApplicationUser_MiddleInitial"
              name="ApplicationUser.MiddleInitial"
              type="text"
              value="D"
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="ApplicationUser.MiddleInitial"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_Initial">
            Three Letter Initials
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-length="Max. 3 character"
              data-val-length-max="3"
              data-val-required="Required"
              id="ApplicationUser_Initial"
              name="ApplicationUser.Initial"
              type="text"
              value="VAT"
            />
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_PrimaryEmail">
            Primary Email
            <span class="required">*</span>
          </label>
          <div class="controls">
            <div class="input-icon left">
              <i class="icon-envelope"></i>
              <input
                class="m-wrap span12"
                data-val="true"
                data-val-email="Should be a valid email address"
                data-val-required="Required"
                id="ApplicationUser_PrimaryEmail"
                name="ApplicationUser.PrimaryEmail"
                readonly="readonly"
                type="text"
                value="vtolbert@hancockclaims.com"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.PrimaryEmail"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="span1">
        <div class="btn blue" id="changePrimaryEmail">Change Email</div>
        <div id="sendChangeEmail" style="display: none;">
          <input type="checkbox" name="sendChangeEmail" value="true" />
          <span style="display: inline-table; margin-top: 2px; margin-left: 5px;">Send Email</span>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_SecondaryEmail">Secondary Email</label>
          <div class="controls">
            <div class="input-icon left">
              <i class="icon-envelope"></i>
              <input
                class="m-wrap span12"
                data-val="true"
                data-val-regex="Should be a valid email address"
                data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                id="ApplicationUser_SecondaryEmail"
                name="ApplicationUser.SecondaryEmail"
                type="text"
                value
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.SecondaryEmail"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_SMSEmail">SMS Email</label>
          <div class="controls">
            <div class="input-icon left">
              <i class="icon-envelope"></i>
              <input
                class="m-wrap span12"
                data-val="true"
                data-val-regex="Should be a valid email address"
                data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                id="ApplicationUser_SMSEmail"
                name="ApplicationUser.SMSEmail"
                type="text"
                value
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.SMSEmail"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_PrimaryPhone">
            Primary Phone
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12 mask_phone"
              data-val="true"
              data-val-regex="Should be a valid phone number"
              data-val-regex-pattern="^[^_]*$"
              data-val-required="Required"
              id="ApplicationUser_PrimaryPhone"
              name="ApplicationUser.PrimaryPhone"
              type="text"
              value="(678) 613-3400"
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="ApplicationUser.PrimaryPhone"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_SecondaryPhone">Secondary Phone</label>
          <div class="controls">
            <input
              class="m-wrap span12 mask_phone"
              data-val="true"
              data-val-regex="Should be a valid phone number"
              data-val-regex-pattern="^[^_]*$"
              id="ApplicationUser_SecondaryPhone"
              name="ApplicationUser.SecondaryPhone"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="ApplicationUser.SecondaryPhone"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_UserLevel">
            User Level
            <span class="required">*</span>
          </label>
          <div class="controls margin-top-3" id="userLevelDropdown">
            <span class="k-widget k-combobox k-header" style="width: 100%;">
              <span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default">
                <input
                  name="ApplicationUser.UserLevel_input"
                  class="k-input"
                  type="text"
                  autocomplete="off"
                  title
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Select user level"
                  tabindex="0"
                  aria-disabled="false"
                  aria-autocomplete="both"
                  aria-owns="ApplicationUser_UserLevel_listbox"
                  aria-busy="false"
                  aria-activedescendant="1f5e83f6-1890-4cbb-ad16-1a7f2fd5e80d"
                  style="width: 100%;"
                />
                <span tabindex="-1" unselectable="on" class="k-select">
                  <span
                    unselectable="on"
                    class="k-icon k-i-arrow-s"
                    role="button"
                    tabindex="-1"
                    aria-controls="ApplicationUser_UserLevel_listbox"
                  >select</span>
                </span>
              </span>
              <input
                data-val="true"
                data-val-number="The field User Level must be a number."
                data-val-required="Required"
                id="ApplicationUser_UserLevel"
                name="ApplicationUser.UserLevel"
                style="width: 100%; display: none;"
                type="text"
                value="1"
                data-role="combobox"
                aria-disabled="false"
              />
            </span>
            <span id="userLevelNotEditable"></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="row-fluid">
      <div class="span12">
        <div class="control-group">
          <label class="control-label" for="ApplicationUser_IsActive">This user is active</label>
          <div class="controls margin-top-4">
            <input
              checked="checked"
              class="m-wrap"
              data-val="true"
              data-val-required="The This user is active field is required."
              id="ApplicationUser_IsActive"
              name="ApplicationUser.IsActive"
              type="checkbox"
              value="true"
            />
            <input name="ApplicationUser.IsActive" type="hidden" value="false" />
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="row-fluid">
      <div class="span12">
        <div class="control-group">
          &nbsp;
          <div class="controls"></div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
    <div class="form-actions">
      <button class="btn blue" type="submit">
        <i class="icon-ok"></i>Save
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/User" class="btn" type="button">Cancel</a>
    </div>
  </form>
</template>
