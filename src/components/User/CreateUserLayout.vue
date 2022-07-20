<template>
  <article id="create-user-layout" class="p-8">
    <form
      action="/User/CreateApplicationUser"
      class="form-horizontal"
      method="post"
      novalidate=""
      _lpchecked="1"
    >
      <input
        name="__RequestVerificationToken"
        type="hidden"
        value="6Q-ixooiweUJpkkIN1x8gfRG-RxzzdTY0pQT1nF7_GYFQuRsVzH2Qh9deJLG-s06wo1CXHszIdko_kIuQfJft3XCtao-CtmVBfWkj96gPaTbXVTgZQAaRXIvp2sSHTaU3lJGx-Z_2x8c7rXDYcePMQ2"
      >
      <input
        id="ApplicationUser_Id"
        data-val="true"
        data-val-number="The field Id must be a number."
        data-val-required="The Id field is required."
        name="ApplicationUser.Id"
        type="hidden"
        value="50919"
      >
      <input
        id="ApplicationUser_TimeStamp"
        name="ApplicationUser.TimeStamp"
        type="hidden"
        value="AAAAAABRmSM="
      >
      <div class="controls margin-bottom-20">
        <button id="CreateApplicationUserSaveButton" class="btn blue" type="submit">
          <i class="icon-ok" />
          Save
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a id="CreateApplicationUserCancelButton" href="/User" class="btn" type="button">
          Cancel
        </a>
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
                id="ApplicationUser_LastName"
                class="m-wrap span12 valid"
                data-val="true"
                data-val-required="Required"
                name="ApplicationUser.LastName"
                type="text"
                aria-required="true"
                aria-describedby="ApplicationUser_LastName-error"
                aria-invalid="false"
                style="
                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=');
                  background-repeat: no-repeat;
                  background-attachment: scroll;
                  background-size: 16px 18px;
                  background-position: 98% 50%;
                  cursor: auto;
                "
              >
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.LastName"
                data-valmsg-replace="true"
              />
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_FirstName">
              First Name
              <span class="required">*</span>
            </label>
            <div class="controls">
              <input
                id="ApplicationUser_FirstName"
                class="m-wrap span12"
                data-val="true"
                data-val-required="Required"
                name="ApplicationUser.FirstName"
                type="text"
              >
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.FirstName"
                data-valmsg-replace="true"
              />
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_MiddleInitial">M.I.</label>
            <div class="controls">
              <input
                id="ApplicationUser_MiddleInitial"
                class="m-wrap span12"
                data-val="true"
                data-val-length="Max. 1 character"
                data-val-length-max="1"
                name="ApplicationUser.MiddleInitial"
                type="text"
              >
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.MiddleInitial"
                data-valmsg-replace="true"
              />
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
                id="ApplicationUser_Initial"
                class="m-wrap span12"
                data-val="true"
                data-val-length="Max. 3 character"
                data-val-length-max="3"
                data-val-required="Required"
                name="ApplicationUser.Initial"
                type="text"
              >
            </div>
          </div>
        </div>
        <!-- /span -->
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
                <i class="icon-envelope" />
                <input
                  id="ApplicationUser_PrimaryEmail"
                  class="m-wrap span12"
                  data-val="true"
                  data-val-email="Should be a valid email address"
                  data-val-required="Required"
                  name="ApplicationUser.PrimaryEmail"
                  readonly=""
                  type="text"
                >
                <span
                  class="field-validation-valid"
                  data-valmsg-for="ApplicationUser.PrimaryEmail"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="span1">
          <div id="changePrimaryEmail" class="btn blue">
            Change Email
          </div>
          <div id="sendChangeEmail" style="display: none">
            <input type="checkbox" name="sendChangeEmail" value="true">
            <span style="display: inline-table; margin-top: 2px; margin-left: 5px">
              Send Email
            </span>
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_SecondaryEmail">
              Secondary Email
            </label>
            <div class="controls">
              <div class="input-icon left">
                <i class="icon-envelope" />
                <input
                  id="ApplicationUser_SecondaryEmail"
                  class="m-wrap span12"
                  data-val="true"
                  data-val-regex="Should be a valid email address"
                  data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  name="ApplicationUser.SecondaryEmail"
                  type="text"
                >
                <span
                  class="field-validation-valid"
                  data-valmsg-for="ApplicationUser.SecondaryEmail"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_SMSEmail">SMS Email</label>
            <div class="controls">
              <div class="input-icon left">
                <i class="icon-envelope" />
                <input
                  id="ApplicationUser_SMSEmail"
                  class="m-wrap span12"
                  data-val="true"
                  data-val-regex="Should be a valid email address"
                  data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  name="ApplicationUser.SMSEmail"
                  type="text"
                >
                <span
                  class="field-validation-valid"
                  data-valmsg-for="ApplicationUser.SMSEmail"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /span -->
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
                id="ApplicationUser_PrimaryPhone"
                class="m-wrap span12 mask_phone"
                data-val="true"
                data-val-regex="Should be a valid phone number"
                data-val-regex-pattern="^[^_]*$"
                data-val-required="Required"
                name="ApplicationUser.PrimaryPhone"
                type="text"
              >
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.PrimaryPhone"
                data-valmsg-replace="true"
              />
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_SecondaryPhone">
              Secondary Phone
            </label>
            <div class="controls">
              <input
                id="ApplicationUser_SecondaryPhone"
                class="m-wrap span12 mask_phone"
                data-val="true"
                data-val-regex="Should be a valid phone number"
                data-val-regex-pattern="^[^_]*$"
                name="ApplicationUser.SecondaryPhone"
                type="text"
              >
              <span
                class="field-validation-valid"
                data-valmsg-for="ApplicationUser.SecondaryPhone"
                data-valmsg-replace="true"
              />
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <div class="row-fluid">
        <div class="span6">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_UserLevel">
              User Level
              <span class="required">*</span>
            </label>
            <div id="userLevelDropdown" class="controls margin-top-3">
              <span class="k-widget k-combobox k-header" style="width: 100%">
                <span
                  tabindex="-1"
                  unselectable="on"
                  class="k-dropdown-wrap k-state-default"
                >
                  <input
                    name="ApplicationUser.UserLevel_input"
                    class="k-input"
                    type="text"
                    autocomplete="off"
                    title=""
                    role="combobox"
                    aria-expanded="false"
                    placeholder="Select user level"
                    tabindex="0"
                    aria-disabled="false"
                    aria-autocomplete="both"
                    aria-owns="ApplicationUser_UserLevel_listbox"
                    aria-busy="false"
                    aria-activedescendant="1f5e83f6-1890-4cbb-ad16-1a7f2fd5e80d"
                    style="width: 100%"
                  >
                  <span tabindex="-1" unselectable="on" class="k-select">
                    <span
                      unselectable="on"
                      class="k-icon k-i-arrow-s"
                      role="button"
                      tabindex="-1"
                      aria-controls="ApplicationUser_UserLevel_listbox"
                    >
                      select
                    </span>
                  </span>
                </span>
                <input
                  id="ApplicationUser_UserLevel"
                  data-val="true"
                  data-val-number="The field User Level must be a number."
                  data-val-required="Required"
                  name="ApplicationUser.UserLevel"
                  type="text"
                  data-role="combobox"
                  aria-disabled="false"
                  style="width: 100%; display: none"
                >
              </span>
              <span id="userLevelNotEditable" />
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="row-fluid">
        <div class="span12">
          <div class="control-group">
            <label class="control-label" for="ApplicationUser_IsActive">
              This user is active
            </label>
            <div class="controls margin-top-4">
              <input
                id="ApplicationUser_IsActive"
                class="m-wrap"
                data-val="true"
                data-val-required="The This user is active field is required."
                name="ApplicationUser.IsActive"
                type="checkbox"
                value="true"
              >
              <input name="ApplicationUser.IsActive" type="hidden" value="false">
            </div>
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="row-fluid">
        <div class="span12">
          <div class="control-group">
            &nbsp;
            <div class="controls" />
          </div>
        </div>
        <!-- /span -->
      </div>
      <!-- /row -->
      <div class="form-actions">
        <button class="btn blue" type="submit">
          <i class="icon-ok" />
          Save
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/User" class="btn" type="button">Cancel</a>
      </div>
    </form>
  </article>
</template>
