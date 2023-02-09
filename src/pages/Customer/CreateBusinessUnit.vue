<template>
  <h1>Business Unit Setup</h1>
  <form
    action="/Customer/CreateBusinessUnit"
    class="form-horizontal"
    method="post"
    novalidate="novalidate"
  >
    <div class="controls margin-bottom-20">
      <button id="CreateBusinessUnitSaveButton" class="btn blue" type="submit">
        <i class="icon-ok"></i>Save
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        id="CreateBusinessUnitCancelButton"
        href="/Customer"
        class="btn"
        type="button"
      >
        <i class="icon-remove"></i>&nbsp;Cancel
      </a>
    </div>
    <input
      name="__RequestVerificationToken"
      type="hidden"
      value="9LUftdIzI0rRI2pOl_gcXp6iR5mY1gbkFqtVLUA7r0-ipi0RYi2gq2PttneOYm6yg0-5PgRQLskZkpJlFn0386RdX7VRhfr7-dYxgtv-80_qyywx1UMTnDEQTeW47I_bRxbN6V77EG20CEm6YGGGmA2"
    />
    <input id="BusinessUnit_TimeStamp" name="BusinessUnit.TimeStamp" type="hidden" value />
    <input
      data-val="true"
      data-val-number="The field Id must be a number."
      data-val-required="The Id field is required."
      id="BusinessUnit_Id"
      name="BusinessUnit.Id"
      type="hidden"
      value="0"
    />
    <input id="emailDomains" name="emailDomains" type="hidden" value />
    <input id="serviceTypes" name="serviceTypes" type="hidden" value />
    <input
      data-val="true"
      data-val-number="The field HoverWalletId must be a number."
      id="BusinessUnit_HoverWalletId"
      name="BusinessUnit.HoverWalletId"
      type="hidden"
      value="0"
    />
    <!-- Insurance company -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_ParentCompanyId">Primary Insurance Company</label>
          <div class="controls margin-top-3">
            <span class="k-widget k-combobox k-header" style="width: 100%;">
              <span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default">
                <input
                  name="BusinessUnit.ParentCompanyId_input"
                  class="k-input"
                  type="text"
                  autocomplete="off"
                  title
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Select Customer"
                  tabindex="0"
                  aria-disabled="false"
                  aria-autocomplete="both"
                  aria-owns="BusinessUnit_ParentCompanyId_listbox"
                  aria-busy="false"
                  aria-activedescendant="f0b91785-4b0b-4534-9a4d-731d5b92fb40"
                  style="width: 100%;"
                />
                <span tabindex="-1" unselectable="on" class="k-select">
                  <span
                    unselectable="on"
                    class="k-icon k-i-arrow-s"
                    role="button"
                    tabindex="-1"
                    aria-controls="BusinessUnit_ParentCompanyId_listbox"
                  >select</span>
                </span>
              </span>
              <input
                id="BusinessUnit_ParentCompanyId"
                name="BusinessUnit.ParentCompanyId"
                style="width: 100%; display: none;"
                type="text"
                data-role="combobox"
                aria-disabled="false"
              />
            </span>
            <select id="companyShortNames" class="hide">
              <option value="302">ALLSTATE</option>
              <option value="304">FIRE</option>
              <option value="310">AMICA</option>
              <option value="311">ASRNT</option>
              <option value="312">WRDLW</option>
              <option value="313">CNFIN</option>
              <option value="315">CRWFD</option>
              <option value="316">UTICA</option>
              <option value="318">ERIE</option>
              <option value="319">USAA</option>
              <option value="320">FARM</option>
              <option value="321">GAFB</option>
              <option value="322">HRTFRD</option>
              <option value="323">HMSTE</option>
              <option value="324">TRAV</option>
              <option value="326">KEMP</option>
              <option value="327">LIBTY</option>
              <option value="329">NATWD</option>
              <option value="330">NCFB</option>
              <option value="335">SAFECO</option>
              <option value="336">SELCT</option>
              <option value="337">STFRM</option>
              <option value="340">TNFB</option>
              <option value="341">AMFAM</option>
              <option value="342">TestCo</option>
              <option value="343">CSAA</option>
              <option value="344">AUTO</option>
              <option value="345">Chubb</option>
              <option value="346">Cincinnati</option>
              <option value="347">CIG</option>
              <option value="348">CUNLIN</option>
              <option value="349">Daymark</option>
              <option value="350">DON</option>
              <option value="351">RYZE</option>
              <option value="352">FID</option>
              <option value="353">GRANGE</option>
              <option value="354">GUIDE</option>
              <option value="355">HAN</option>
              <option value="356">HAR</option>
              <option value="357">IMFIC</option>
              <option value="358">LONG</option>
              <option value="359">MET</option>
              <option value="360">NAC</option>
              <option value="361">OUE</option>
              <option value="362">RASS</option>
              <option value="363">RHINO</option>
              <option value="364">UTICA</option>
              <option value="365">WEST</option>
              <option value="366">Ace Group</option>
              <option value="367">JE</option>
              <option value="368">STJN</option>
              <option value="369">WBM</option>
              <option value="370">ATCLAIMS</option>
              <option value="371">CrossClaim</option>
              <option value="372">AAN</option>
              <option value="373">IND</option>
              <option value="374">MSFB</option>
              <option value="375">VAFB</option>
              <option value="376">JRB</option>
              <option value="377">ARBEL</option>
              <option value="378">AAA</option>
              <option value="379">MERC</option>
              <option value="380">SHELT</option>
              <option value="381">KYFB</option>
              <option value="382">STATEAUTO</option>
              <option value="383">DEW</option>
              <option value="384">OTHERCUSTO</option>
              <option value="385">CUSTARD</option>
              <option value="386">WCMCO</option>
              <option value="387">SWMCO</option>
              <option value="396">UNIF</option>
              <option value="397">SOMCO</option>
              <option value="398">FMCO</option>
              <option value="399">NEAL</option>
              <option value="400">SCTDL</option>
              <option value="401">OMIC</option>
              <option value="402">PS</option>
              <option value="403">AM</option>
              <option value="404">Armed</option>
              <option value="405">ENCNCT</option>
              <option value="406">TIMWAR</option>
              <option value="407">KING</option>
              <option value="408">TXFB</option>
              <option value="409">AmericanCo</option>
              <option value="410">COMM</option>
              <option value="411">UPC</option>
              <option value="412">GNYIC</option>
              <option value="413">WMJMI</option>
              <option value="414">HM</option>
              <option value="415">TXMCO</option>
              <option value="416">NJMCO</option>
              <option value="417">TXAL</option>
              <option value="418">CPIC</option>
              <option value="419">ASI</option>
              <option value="420">IntegraCla</option>
              <option value="421">MWAL</option>
              <option value="422">LIBTYCOM</option>
              <option value="423">SAFECOM</option>
              <option value="424">ACM</option>
              <option value="425">USLI</option>
              <option value="426">Rytech</option>
              <option value="427">MOAK</option>
              <option value="429">DefC</option>
              <option value="430">TOW</option>
              <option value="431">TRAV2</option>
              <option value="432">TRAV3</option>
              <option value="433">QBE</option>
              <option value="434">MFRE</option>
              <option value="438">test</option>
              <option value="439">HOC</option>
              <option value="440">SCWND</option>
              <option value="442">ESUR</option>
              <option value="443">EV</option>
              <option value="444">TRAV4</option>
              <option value="445">FLPEN</option>
              <option value="446">ENV</option>
              <option value="447">MIG</option>
              <option value="448">PTR</option>
              <option value="449">ALC</option>
              <option value="450">DCA</option>
              <option value="451">BRUSH</option>
              <option value="452">DONAN</option>
              <option value="453">TWIA</option>
              <option value="454">TexasFairP</option>
              <option value="455">FLSP</option>
              <option value="456">OLY</option>
              <option value="457">CYP</option>
              <option value="458">BAN</option>
              <option value="459">HER</option>
              <option value="460">SFIC</option>
              <option value="461">SPFC</option>
              <option value="462">TRAV5</option>
              <option value="463">GUL</option>
              <option value="464">AIIC</option>
              <option value="465">MMA</option>
              <option value="466">FED</option>
              <option value="467">CIT</option>
              <option value="468">SLG</option>
              <option value="469">EFIF</option>
              <option value="470">SEC</option>
              <option value="471">CAN</option>
              <option value="472">LHS</option>
              <option value="473">SP</option>
              <option value="474">SO</option>
              <option value="475">PACE</option>
              <option value="476">TEST</option>
              <option value="477">SDII</option>
              <option value="478">SGWK</option>
              <option value="479">AmericanMo</option>
              <option value="480">EFI</option>
              <option value="481">RO</option>
              <option value="482">TestCompan</option>
              <option value="484">Kevins</option>
              <option value="486">ACU</option>
              <option value="487">Chloe</option>
              <option value="488">TEstCompan</option>
              <option value="489">MAD</option>
              <option value="490">FFBIC</option>
              <option value="491">PURE</option>
              <option value="492">NATGEN</option>
              <option value="493">ANC</option>
              <option value="494">NJM</option>
              <option value="495">WR</option>
              <option value="496">AAAM</option>
              <option value="497">CPST</option>
              <option value="498">FORMST</option>
              <option value="499">DCM</option>
              <option value="500">2BCLAIMS</option>
              <option value="501">2BCLAIMS</option>
              <option value="502">3EM</option>
              <option value="503">470CLAIMS</option>
              <option value="504">48HRSPCA</option>
              <option value="506">kc2</option>
              <option value="507">kwh</option>
              <option value="508">kw</option>
              <option value="509">mnh</option>
              <option value="510">mh</option>
              <option value="511">FFBIC</option>
              <option value="512">AV</option>
              <option value="514">NGAIns</option>
              <option value="515">MNC</option>
              <option value="516">NG</option>
              <option value="517">WR</option>
              <option value="518">NATGEN</option>
              <option value="520">mcn</option>
              <option value="521">KLI</option>
              <option value="522">KFC</option>
              <option value="523">AMS</option>
              <option value="524">Los</option>
              <option value="525">Los</option>
              <option value="526">Los</option>
              <option value="527">ATI</option>
              <option value="528">FAKE</option>
              <option value="529">AFO</option>
              <option value="530">TJI</option>
              <option value="531">ALLAMER</option>
              <option value="532">ACMACON</option>
              <option value="533">ACP</option>
              <option value="534">ALLRISK</option>
              <option value="535">ALLEGANY</option>
              <option value="536">ALLEGIANT</option>
              <option value="537">ALLIANZ</option>
              <option value="538">ALLIEDAA</option>
              <option value="539">ALLRC</option>
              <option value="540">ALLIEDTRUS</option>
              <option value="541">ALMADA</option>
              <option value="542">ALTCLAIMS</option>
              <option value="543">AMCAP</option>
              <option value="544">AMNAT</option>
              <option value="545">AMREL</option>
              <option value="546">AMRISK</option>
              <option value="547">AMSPEC</option>
              <option value="548">AMERICLAIM</option>
              <option value="549">AMAH</option>
              <option value="550">AMPF</option>
              <option value="551">AMTRUST</option>
              <option value="552">ANCHORADJ</option>
              <option value="553">ANCHORINS</option>
              <option value="554">ANDOVER</option>
              <option value="555">AET</option>
              <option value="556">ARCANA</option>
              <option value="557">ARGO</option>
              <option value="558">ASG</option>
              <option value="559">ASU</option>
              <option value="560">ATHENS</option>
              <option value="561">ATLCAS</option>
              <option value="562">ATLAS</option>
              <option value="563">ATRIX</option>
              <option value="564">AUGUSTA</option>
              <option value="565">AUTOCFL</option>
              <option value="566">AUTOCAAA</option>
              <option value="567">AXIOM</option>
              <option value="568">BADGER</option>
              <option value="569">CHURCHMUT</option>
              <option value="570">CHURCHPEN</option>
              <option value="571">CISERVICES</option>
              <option value="572">CIC</option>
              <option value="573">CITFLA</option>
              <option value="574">CIUI</option>
              <option value="575">CIVILLOG</option>
              <option value="576">CJW</option>
              <option value="577">CCLLC</option>
              <option value="578">CNA</option>
              <option value="579">CNC</option>
              <option value="580">COASTAL</option>
              <option value="581">COLLINS</option>
              <option value="582">COLUMBIA</option>
              <option value="583">COMMAND</option>
              <option value="584">COMPASS</option>
              <option value="585">CONCORD</option>
              <option value="586">CONIFER</option>
              <option value="587">CBAM</option>
              <option value="588">CONSCI</option>
              <option value="589">CONTWEST</option>
              <option value="590">ZURI</option>
              <option value="591">CONTRACON</option>
              <option value="592">COOPER</option>
              <option value="593">YBC</option>
              <option value="594">CORE</option>
              <option value="595">COX</option>
              <option value="596">CPCLAIM</option>
              <option value="597">CPG</option>
              <option value="598">CRADJ</option>
              <option value="599">WRLAW</option>
              <option value="600">CRAWCOM</option>
              <option value="601">CRCG</option>
              <option value="602">CREEDEN</option>
              <option value="603">CRU</option>
              <option value="604">CSC</option>
              <option value="605">CTPLC</option>
              <option value="606">CULLEN</option>
              <option value="607">CUMBERLAND</option>
              <option value="608">CURLEY</option>
              <option value="609">CUSHING</option>
              <option value="610">MORSE</option>
              <option value="611">DBI</option>
              <option value="612">DECKER</option>
              <option value="613">DGMIC</option>
              <option value="614">DIMONT</option>
              <option value="615">DINELEY</option>
              <option value="616">DMA</option>
              <option value="617">DRYDEN</option>
              <option value="618">DTW</option>
              <option value="619">DUFFY</option>
              <option value="620">DYNAMIC</option>
              <option value="621">EAC</option>
              <option value="622">EMUT</option>
              <option value="623">EBERLS</option>
              <option value="624">EDISON</option>
              <option value="625">EDP</option>
              <option value="626">EDT</option>
              <option value="627">EIG</option>
              <option value="628">ELINS</option>
              <option value="629">EMC</option>
              <option value="630">EMCO</option>
              <option value="631">ENG</option>
              <option value="632">ENGMAR</option>
              <option value="633">ENSUR</option>
              <option value="634">EPIX</option>
              <option value="635">ESIG</option>
              <option value="636">ESIS</option>
              <option value="637">EVANS</option>
              <option value="638">EVER</option>
              <option value="639">ECASH</option>
              <option value="640">EVADJ</option>
              <option value="641">EXACT</option>
              <option value="642">FAC</option>
              <option value="643">FBFS</option>
              <option value="644">FBIM</option>
              <option value="645">FFAM</option>
              <option value="646">FFIRE</option>
              <option value="647">FMIC</option>
              <option value="648">FAVOR</option>
              <option value="649">FCCI</option>
              <option value="650">FCG</option>
              <option value="651">FCNA</option>
              <option value="652">FEDINS</option>
              <option value="653">FPD</option>
              <option value="654">FIRST</option>
              <option value="655">FKS</option>
              <option value="656">FLHI</option>
              <option value="657">FMIWEB</option>
              <option value="658">FOCUS</option>
              <option value="659">FORENSIC</option>
              <option value="660">FRANK</option>
              <option value="661">FRED</option>
              <option value="662">FREE</option>
              <option value="663">FCMI</option>
              <option value="664">FRONTIER</option>
              <option value="665">WISCON</option>
              <option value="666">FRONTLINE</option>
              <option value="667">FTP</option>
              <option value="668">H2M</option>
              <option value="669">HAAG</option>
              <option value="670">WINKLER</option>
              <option value="671">HADEN</option>
              <option value="672">G4S</option>
              <option value="673">HALLM</option>
              <option value="674">GALL</option>
              <option value="675">GENSTAR</option>
              <option value="676">HARBOR</option>
              <option value="677">GENPACT</option>
              <option value="678">HARP</option>
              <option value="679">GBUTLER</option>
              <option value="680">GAUNDER</option>
              <option value="681">GEOVERA</option>
              <option value="682">HARTM</option>
              <option value="683">WIMBER</option>
              <option value="684">HAST</option>
              <option value="685">GERMANIA</option>
              <option value="686">HAUSCH</option>
              <option value="687">HAVEN</option>
              <option value="688">HEA</option>
              <option value="689">HESTER</option>
              <option value="690">GG</option>
              <option value="691">HIPPO</option>
              <option value="692">HOLMES</option>
              <option value="693">GHD</option>
              <option value="694">HAIC</option>
              <option value="695">GRS</option>
              <option value="696">IASC</option>
              <option value="697">WILSON</option>
              <option value="698">IATI</option>
              <option value="699">GLOBAL</option>
              <option value="700">ICAC</option>
              <option value="701">GMRC</option>
              <option value="702">ICAT</option>
              <option value="703">GNY</option>
              <option value="704">ICSC</option>
              <option value="705">GOLD</option>
              <option value="706">IDCFWR</option>
              <option value="707">IMSC</option>
              <option value="708">GOODVILLE</option>
              <option value="709">WHA</option>
              <option value="710">INFARM</option>
              <option value="711">IMFI</option>
              <option value="712">INRISK</option>
              <option value="713">INSPDEP</option>
              <option value="714">IOD</option>
              <option value="715">GRANTITE</option>
              <option value="716">GCWMUT</option>
              <option value="717">WHEELER</option>
              <option value="718">GAI</option>
              <option value="719">GBI</option>
              <option value="720">GREYCON</option>
              <option value="721">GRINNELL</option>
              <option value="722">GRISTON</option>
              <option value="723">GUARD</option>
              <option value="724">GUIDEONE</option>
              <option value="725">GCC</option>
              <option value="726">OFP</option>
              <option value="727">IADJS</option>
              <option value="728">OMIG</option>
              <option value="729">INTADJ</option>
              <option value="730">ORIG</option>
              <option value="731">INTINS</option>
              <option value="732">REPUB</option>
              <option value="733">WUW</option>
              <option value="734">OLYMPIA</option>
              <option value="735">WESTON</option>
              <option value="736">IPG</option>
              <option value="737">OMEGA</option>
              <option value="738">ONECALL</option>
              <option value="739">JAG</option>
              <option value="740">ONEBEACON</option>
              <option value="741">JADJ</option>
              <option value="742">ONTARIO</option>
              <option value="743">JDC</option>
              <option value="744">WAM</option>
              <option value="745">ORION180</option>
              <option value="746">JJI</option>
              <option value="747">RPHGA</option>
              <option value="748">RIM</option>
              <option value="749">WW</option>
              <option value="750">PAFAIR</option>
              <option value="751">KYSTN</option>
              <option value="752">PARKER</option>
              <option value="753">JMW</option>
              <option value="754">JUNO</option>
              <option value="755">PAS</option>
              <option value="756">KIN</option>
              <option value="757">KLMS</option>
              <option value="758">KLMS</option>
              <option value="759">LEC</option>
              <option value="760">PMIC</option>
              <option value="761">LSI</option>
              <option value="762">RLI</option>
              <option value="763">WNI</option>
              <option value="764">LVIC</option>
              <option value="765">PHILIC</option>
              <option value="766">LEGC</option>
              <option value="767">PHILIPS</option>
              <option value="768">LMD</option>
              <option value="769">WFI</option>
              <option value="770">PIE</option>
              <option value="771">PINNACLE</option>
              <option value="772">WIG</option>
              <option value="773">LGI</option>
              <option value="774">RMC</option>
              <option value="775">PINPOINT</option>
              <option value="776">LITZ</option>
              <option value="777">PLMINS</option>
              <option value="778">PLYMOUTH</option>
              <option value="779">LDMTL</option>
              <option value="780">MADISON</option>
              <option value="781">ROCK</option>
              <option value="782">PMAINS</option>
              <option value="783">WCI</option>
              <option value="784">MSAG</option>
              <option value="785">POLARIS</option>
              <option value="786">MAIS</option>
              <option value="787">MARKEL</option>
              <option value="788">PRECISE</option>
              <option value="789">PREFMAN</option>
              <option value="790">PREFMUT</option>
              <option value="791">MATRIX</option>
              <option value="792">PROCLAIM</option>
              <option value="793">MAX</option>
              <option value="794">PRONET</option>
              <option value="795">PROTECT</option>
              <option value="796">QUAKER</option>
              <option value="797">QUINCY</option>
              <option value="798">ROCKINGHAM</option>
              <option value="799">ROGERS</option>
              <option value="800">NYCM</option>
              <option value="801">NV5ENG</option>
              <option value="802">WAE</option>
              <option value="803">NECK</option>
              <option value="804">RPS</option>
              <option value="805">RVOS</option>
              <option value="806">SAFETY</option>
              <option value="807">SADNER</option>
              <option value="808">SAWGRASS</option>
              <option value="809">SEALIMITED</option>
              <option value="810">SECURA</option>
              <option value="811">SECFL</option>
              <option value="812">SENTRY</option>
              <option value="813">MCGF</option>
              <option value="814">SMC</option>
              <option value="815">MCNEIL</option>
              <option value="816">SEIA</option>
              <option value="817">MEEM</option>
              <option value="818">SFBCI</option>
              <option value="819">SMCHRUCH</option>
              <option value="820">MRGP</option>
              <option value="821">VC</option>
              <option value="822">VE</option>
              <option value="823">MICHINS</option>
              <option value="824">MHCI</option>
              <option value="825">MWFM</option>
              <option value="826">VR</option>
              <option value="827">PIONEER</option>
              <option value="828">SWADJ</option>
              <option value="829">MILL</option>
              <option value="830">SPECADJ</option>
              <option value="831">MIMI</option>
              <option value="832">SPRINTER</option>
              <option value="833">MOFB</option>
              <option value="834">STAKEM</option>
              <option value="835">STANDARD</option>
              <option value="836">STEPHENS</option>
              <option value="837">STILLWATER</option>
              <option value="838">STRAUSSER</option>
              <option value="839">STVINC</option>
              <option value="840">SUMMIT</option>
              <option value="841">VAI</option>
              <option value="842">SWYFFT</option>
              <option value="843">SYNERGY</option>
              <option value="844">MKAI</option>
              <option value="845">MMGI</option>
              <option value="846">TEAMONE</option>
              <option value="847">VGA</option>
              <option value="848">MRHK</option>
              <option value="849">TEMPEST</option>
              <option value="850">MUINS</option>
              <option value="851">TENCO</option>
              <option value="852">NATIND</option>
              <option value="853">TERRIER</option>
              <option value="854">UCA</option>
              <option value="855">NLI</option>
              <option value="856">BARN</option>
              <option value="857">NDGI</option>
              <option value="858">TCC</option>
              <option value="859">USF</option>
              <option value="860">NELFOR</option>
              <option value="861">THEMBG</option>
              <option value="862">NOLA</option>
              <option value="863">TIERRA</option>
              <option value="864">TRANCYND</option>
              <option value="865">TSIADJ</option>
              <option value="866">UA</option>
              <option value="867">NCGI</option>
              <option value="868">UNFT</option>
              <option value="869">UHI</option>
              <option value="870">UFG</option>
              <option value="871">UCSA</option>
              <option value="872">UE</option>
              <option value="873">TUSCARORA</option>
              <option value="874">TYPTAP</option>
              <option value="875">TWFG</option>
              <option value="876">UNIV</option>
              <option value="877">IMT</option>
              <option value="879">NATWDCOM</option>
              <option value="880">NGLS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- Insurance company short name -->
    <div class="row-fluid">
      <div class="span4">
        <div class="control-group">
          <label class="control-label" for="Short_Name">Short Name</label>
          <div class="controls">
            <label
              class="m-wrap span12"
              style="padding-top: 7px; font-size: 14px; font-weight: bold;"
              id="companyShortName"
            ></label>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit full name -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_FullName">
            Full Name
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-required="Required"
              id="BusinessUnit_FullName"
              name="BusinessUnit.FullName"
              type="text"
              value
            />
            Please type out the full name of the Business Unit.
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.FullName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
      <!--/span-->
    </div>
    <!-- Business unit short name -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_ShortName">Short Name</label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-length="Max. 10 characters"
              data-val-length-max="10"
              id="BusinessUnit_ShortName"
              name="BusinessUnit.ShortName"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.ShortName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Email domain -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_ValidEmailDomainList">Email Domain(s)</label>
          <div class="controls">
            <div class="left input-icon">
              <i class="text-icon">@</i>
              <input class="m-wrap span12" id="Name" name="Name" type="text" value />
            </div>What is the email domain for this company?
            <button
              type="button"
              class="btn blue"
              style="margin-top: 5px; float: right;"
              id="addDomain"
            >
              <i class="icon-ok"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Email domain -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          &nbsp;
          <div class="controls">
            <select class="m-wrap span12" multiple="multiple" id="selectDomain"></select>
            <button
              type="button"
              id="removeDomain"
              class="btn red"
              style="float: right; margin-top: 5px;"
            >
              <i class="icon-remove"></i>&nbsp;Remove
            </button>
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.ValidEmailDomainList"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Max Mail Size -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_MaxMailSize">
            Max Mail Size
            <span class="required">*</span>
          </label>
          <div class="controls">
            <span
              title
              style="width: 100%;"
              class="k-widget k-dropdown k-header"
              unselectable="on"
              role="listbox"
              aria-haspopup="true"
              aria-expanded="false"
              tabindex="0"
              aria-owns="BusinessUnit_MaxMailSize_listbox"
              aria-disabled="false"
              aria-busy="false"
              aria-activedescendant="a4bf6cd9-5991-4e66-b024-9b1d7c391ec2"
            >
              <span unselectable="on" class="k-dropdown-wrap k-state-default">
                <span unselectable="on" class="k-input">Select Number</span>
                <span unselectable="on" class="k-select">
                  <span unselectable="on" class="k-icon k-i-arrow-s">select</span>
                </span>
              </span>
              <input
                data-val="true"
                data-val-number="The field Max Mail Size must be a number."
                data-val-required="Required"
                id="BusinessUnit_MaxMailSize"
                name="BusinessUnit.MaxMailSize"
                style="width: 100%; display: none;"
                type="text"
                data-role="dropdownlist"
              />
            </span>
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.MaxMailSize"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit address line 1 -->
    <h3 class="form-section">Mailing Address for the Customer</h3>
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_Street">
            Street
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-required="Required"
              id="BusinessUnit_Street"
              name="BusinessUnit.Street"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.Street"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit address line 2 -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_Suite">Suite</label>
          <div class="controls">
            <input
              class="m-wrap span12"
              id="BusinessUnit_Suite"
              name="BusinessUnit.Suite"
              type="text"
              value
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit city -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_City">
            City
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-required="Required"
              id="BusinessUnit_City"
              name="BusinessUnit.City"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.City"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit state -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_StateId">
            State
            <span class="required">*</span>
          </label>
          <div class="controls margin-top-3">
            <span class="k-widget k-combobox k-header" style="width: 100%;">
              <span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default">
                <input
                  name="BusinessUnit.StateId_input"
                  class="k-input"
                  type="text"
                  autocomplete="off"
                  title
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Select state"
                  tabindex="0"
                  aria-disabled="false"
                  aria-autocomplete="both"
                  aria-owns="BusinessUnit_StateId_listbox"
                  aria-busy="false"
                  aria-activedescendant="7b48582c-7d20-4072-877f-1155408a2e18"
                  style="width: 100%;"
                />
                <span tabindex="-1" unselectable="on" class="k-select">
                  <span
                    unselectable="on"
                    class="k-icon k-i-arrow-s"
                    role="button"
                    tabindex="-1"
                    aria-controls="BusinessUnit_StateId_listbox"
                  >select</span>
                </span>
              </span>
              <input
                data-val="true"
                data-val-number="The field State must be a number."
                data-val-required="Required"
                id="BusinessUnit_StateId"
                name="BusinessUnit.StateId"
                style="width: 100%; display: none;"
                type="text"
                data-role="combobox"
                aria-disabled="false"
              />
            </span>

            <span
              class="field-validation-error"
              data-valmsg-for="InsuranceCompany.StateId"
              data-valmsg-replace="false"
              style="display: none;"
            >
              <span for="InsuranceCompany_StateId" generated="true" class style>Required</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit zip code -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_PostalCode">
            Zip
            <span class="required">*</span>
          </label>
          <div class="controls">
            <input
              class="m-wrap span12"
              data-val="true"
              data-val-required="Required"
              id="BusinessUnit_PostalCode"
              name="BusinessUnit.PostalCode"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.PostalCode"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit comments -->
    <div class="row-fluid">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_Comments">Comments</label>
          <div class="controls">
            <textarea
              class="m-wrap span-12"
              cols="20"
              id="BusinessUnit_Comments"
              name="BusinessUnit.Comments"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- Business unit billing contact -->
    <!-- Business unit billing information -->
    <h3 class="form-section">Billing Information</h3>
    <!-- Bill received by -->
    <div class="row-fluid">
      <div class="span9">
        <div class="control-group">
          <label class="control-label" for="Bill_is_received_by">Bill is received by</label>
          <div class="controls margin-top-7">
            <input class="radio-button" type="radio" name="receivedBy" value="true" />Adjuster&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              class="radio-button"
              type="radio"
              name="receivedBy"
              value="false"
              checked="'checked'"
            />Billing Contact
          </div>
        </div>
      </div>
    </div>
    <div class="row-fluid" id="billingConactIdControlGroup" style="display:block">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_BillingContactId">
            Billing Contact
            <span class="required">*</span>
          </label>
          <div class="controls margin-top-3">
            <span class="k-widget k-combobox k-header" style="width: 100%;">
              <span tabindex="-1" unselectable="on" class="k-dropdown-wrap k-state-default">
                <input
                  name="BusinessUnit.BillingContactId_input"
                  class="k-input"
                  type="text"
                  autocomplete="off"
                  title
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Select Billing Contact"
                  tabindex="0"
                  aria-disabled="false"
                  aria-autocomplete="both"
                  aria-owns="BusinessUnit_BillingContactId_listbox"
                  aria-busy="false"
                  aria-activedescendant="48353c2b-16d0-49b9-b002-c6a527e9db02"
                  style="width: 100%;"
                />
                <span tabindex="-1" unselectable="on" class="k-select">
                  <span
                    unselectable="on"
                    class="k-icon k-i-arrow-s"
                    role="button"
                    tabindex="-1"
                    aria-controls="BusinessUnit_BillingContactId_listbox"
                  >select</span>
                </span>
              </span>
              <input
                id="BusinessUnit_BillingContactId"
                name="BusinessUnit.BillingContactId"
                style="width: 100%; display: none;"
                type="text"
                data-role="combobox"
                aria-disabled="false"
              />
            </span>
            <span
              id="requiredBillingContact"
              class="field-validation-error"
              data-valmsg-for="BusinessUnit.BillingContactId"
              data-valmsg-replace="false"
              style="display: none;"
            >
              <span>Required</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row-fluid"></div>
    <br />
    <div class="row-fluid">
      <div class="span12">
        <div class="control-group">
          <label
            for="Check_the_Service_Types_This_Primary_Customer_Covers"
          >Check the Service Types This Primary Customer Covers</label>
          <div class="controls">&nbsp;</div>
        </div>
      </div>
    </div>
    <!-- External Form -->
    <h3 class="form-section">On External Claim Form Options</h3>
    <div class="row-fluid">
      <table>
        <tbody>
          <tr>
            <td style="width: 20px;">
              <div class="text-align-left">
                <input
                  data-val="true"
                  data-val-required="The Customer is displayed on External Claim Form field is required."
                  id="BusinessUnit_OnExternalForm"
                  name="BusinessUnit.OnExternalForm"
                  type="checkbox"
                  value="true"
                />
                <input name="BusinessUnit.OnExternalForm" type="hidden" value="false" />
              </div>
            </td>
            <td style="width: 500px;">
              <div style="margin-top:5px;">
                <span>
                  <label
                    for="BusinessUnit_OnExternalForm"
                  >Customer is displayed on External Claim Form</label>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Claim Number Format  -->
    <div class="row-fluid margin-top-20">
      <div class="span6">
        <div class="control-group">
          <label class="control-label" for="BusinessUnit_ClaimFormat">Claim Number Format</label>
          <div class="controls">
            <input
              class="m-wrap span12"
              id="BusinessUnit_ClaimFormat"
              name="BusinessUnit.ClaimFormat"
              type="text"
              value
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="BusinessUnit.ClaimFormat"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <br />

    <table id="insCompanyServiceList" border="0">
      <thead>
        <tr class="tbl-header">
          <th class="cb-col"></th>
          <th class="type-col">Service Type</th>
          <th class="lab-bill-col">Labor Cost</th>
          <th class="lab-bill-col">Billing Price</th>
          <th class="service-col">Hover Report Type</th>
          <th class="service-col">Livegenic Service</th>
          <th class="service-col">EagleView Service</th>
          <th class="service-col">On External Form</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>
            <span
              id="rowHoverWallet"
              style="visibility: hidden;"
              class="wallet"
            >Wallet: Hancock Claims</span>&nbsp;
          </th>
          <th class="service-col">
            <input
              type="checkbox"
              id="chkCheckAllLivegenic"
              name="Check_AllLivegenic"
              value="false"
              title="(Check/Uncheck all)"
              onclick="checkAllLivegenicService(this);"
              style="margin-bottom:5px"
            />
          </th>
          <th class="service-col">
            <input
              type="checkbox"
              id="chkCheckAllEagleView"
              name="Check_AllEagleView"
              value="false"
              title="(Check/Uncheck all)"
              onclick="checkAllEagleViewService(this);"
              style="margin-bottom:5px"
            />
          </th>
          <th class="service-col">
            <input
              type="checkbox"
              id="chkOnExternalForm"
              name="Check_OnExternalForm"
              value="false"
              title="(Check/Uncheck all)"
              style="margin-bottom:5px; display: none;"
            />
          </th>
        </tr>

        <tr id="37" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssist_37"
              name="LadderAssist_37"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssist_37" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssist_37_LaborCost"
              name="LadderAssist_37_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssist_37_BillingPrice"
              name="LadderAssist_37_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="38" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithEagleView_38"
              name="LadderAssistwithEagleView_38"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithEagleView_38" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Eagle View</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithEagleView_38_LaborCost"
              name="LadderAssistwithEagleView_38_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithEagleView_38_BillingPrice"
              name="LadderAssistwithEagleView_38_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="39" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspection_39"
              name="DirectInspection_39"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspection_39" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection_39_LaborCost"
              name="DirectInspection_39_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection_39_BillingPrice"
              name="DirectInspection_39_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="40" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="EstimateRepair_40"
              name="EstimateRepair_40"
              type="checkbox"
              value="true"
            />
            <input name="EstimateRepair_40" type="hidden" value="false" />
          </td>
          <td class="type-text">Estimate Repair</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="EstimateRepair_40_LaborCost"
              name="EstimateRepair_40_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="EstimateRepair_40_BillingPrice"
              name="EstimateRepair_40_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="41" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TarpRemove_Reset_41"
              name="TarpRemove&amp;Reset_41"
              type="checkbox"
              value="true"
            />
            <input name="TarpRemove&amp;Reset_41" type="hidden" value="false" />
          </td>
          <td class="type-text">Tarp Remove &amp; Reset</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TarpRemove_Reset_41_LaborCost"
              name="TarpRemove&amp;Reset_41_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TarpRemove_Reset_41_BillingPrice"
              name="TarpRemove&amp;Reset_41_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="42" data-service-type="parent" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="EmergencyTarp_42"
              name="EmergencyTarp_42"
              type="checkbox"
              value="true"
            />
            <input name="EmergencyTarp_42" type="hidden" value="false" />
          </td>
          <td class="type-text">Emergency Tarp</td>

          <td class="emptyCell" style="display: table-cell;">&nbsp;</td>
          <td class="emptyCell" style="display: table-cell;">&nbsp;</td>
          <td class="lab-bill-col input-icon left" style="display: none;">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="EmergencyTarp_42_LaborCost"
              name="EmergencyTarp_42_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left" style="display: none;">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="EmergencyTarp_42_BillingPrice"
              name="EmergencyTarp_42_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr data-parent-id="42" style="display: none;">
          <td>&nbsp;</td>
          <td class="tarp sub-types">Tarp Sq Foot Size</td>
          <td colspan="5">&nbsp;</td>
        </tr>

        <tr
          id="43"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">0 to 150</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="0to150_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="0to150_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="44"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">151 to 250</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="151to250_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="151to250_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="45"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">251 to 400</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="251to400_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="251to400_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="46"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">401 to 600</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="401to600_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="401to600_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="47"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">601 to 800</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="601to800_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="601to800_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="48"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">801 to 1000</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="801to1000_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="801to1000_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="49"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">1001 to 1500</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="1001to1500_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="1001to1500_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="50"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">1501 to 2000</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="1501to2000_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="1501to2000_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="124"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">2001 - 2500</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="2001-2500_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="2001-2500_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="125"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">2501 - 3000</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="2501-3000_42_LaborCost" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="2501-3000_42_BillingPrice" type="text" value />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr
          id="126"
          data-service-type="child"
          data-parent-id="42"
          data-val-id="0"
          style="display: none;"
        >
          <td>&nbsp;</td>
          <td class="sub-types type-text">Over 3000</td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Over3000_42_LaborCost"
              name="Over3000_42_LaborCost"
              type="text"
              value
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left sub-types">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Over3000_42_BillingPrice"
              name="Over3000_42_BillingPrice"
              type="text"
              value
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td colspan="3">&nbsp;</td>
        </tr>

        <tr id="51" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Rope_Harness_51"
              name="Rope&amp;Harness_51"
              type="checkbox"
              value="true"
            />
            <input name="Rope&amp;Harness_51" type="hidden" value="false" />
          </td>
          <td class="type-text">Rope &amp; Harness</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Rope_Harness_51_LaborCost"
              name="Rope&amp;Harness_51_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Rope_Harness_51_BillingPrice"
              name="Rope&amp;Harness_51_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="52" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TripCharge_52"
              name="TripCharge_52"
              type="checkbox"
              value="true"
            />
            <input name="TripCharge_52" type="hidden" value="false" />
          </td>
          <td class="type-text">Trip Charge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TripCharge_52_LaborCost"
              name="TripCharge_52_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TripCharge_52_BillingPrice"
              name="TripCharge_52_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="53" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Cancellation_53"
              name="Cancellation_53"
              type="checkbox"
              value="true"
            />
            <input name="Cancellation_53" type="hidden" value="false" />
          </td>
          <td class="type-text">Cancellation</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Cancellation_53_LaborCost"
              name="Cancellation_53_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Cancellation_53_BillingPrice"
              name="Cancellation_53_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="55" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderLean_55"
              name="LadderLean_55"
              type="checkbox"
              value="true"
            />
            <input name="LadderLean_55" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Lean</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderLean_55_LaborCost"
              name="LadderLean_55_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderLean_55_BillingPrice"
              name="LadderLean_55_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="56" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithRope_Harness_56"
              name="LadderAssistwithRope&amp;Harness_56"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithRope&amp;Harness_56" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Rope &amp; Harness</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithRope_Harness_56_LaborCost"
              name="LadderAssistwithRope&amp;Harness_56_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithRope_Harness_56_BillingPrice"
              name="LadderAssistwithRope&amp;Harness_56_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="57" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="BoardUpwithInspection_57"
              name="BoardUpwithInspection_57"
              type="checkbox"
              value="true"
            />
            <input name="BoardUpwithInspection_57" type="hidden" value="false" />
          </td>
          <td class="type-text">Board Up with Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BoardUpwithInspection_57_LaborCost"
              name="BoardUpwithInspection_57_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BoardUpwithInspection_57_BillingPrice"
              name="BoardUpwithInspection_57_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="58" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MultiUnitLadderAssist_58"
              name="MultiUnitLadderAssist_58"
              type="checkbox"
              value="true"
            />
            <input name="MultiUnitLadderAssist_58" type="hidden" value="false" />
          </td>
          <td class="type-text">Multi Unit Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderAssist_58_LaborCost"
              name="MultiUnitLadderAssist_58_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderAssist_58_BillingPrice"
              name="MultiUnitLadderAssist_58_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="59" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Ladder40ft_59"
              name="Ladder40ft_59"
              type="checkbox"
              value="true"
            />
            <input name="Ladder40ft_59" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder 40ft</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Ladder40ft_59_LaborCost"
              name="Ladder40ft_59_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Ladder40ft_59_BillingPrice"
              name="Ladder40ft_59_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="60" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ITELSample_60"
              name="ITELSample_60"
              type="checkbox"
              value="true"
            />
            <input name="ITELSample_60" type="hidden" value="false" />
          </td>
          <td class="type-text">ITEL Sample</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELSample_60_LaborCost"
              name="ITELSample_60_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELSample_60_BillingPrice"
              name="ITELSample_60_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="62" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistPickup_62"
              name="LadderAssistPickup_62"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistPickup_62" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist Pickup</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistPickup_62_LaborCost"
              name="LadderAssistPickup_62_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistPickup_62_BillingPrice"
              name="LadderAssistPickup_62_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="63" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectPickup_63"
              name="DirectInspectPickup_63"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectPickup_63" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect Pickup</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectPickup_63_LaborCost"
              name="DirectInspectPickup_63_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectPickup_63_BillingPrice"
              name="DirectInspectPickup_63_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="64" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="SpecialComment_64"
              name="SpecialComment_64"
              type="checkbox"
              value="true"
            />
            <input name="SpecialComment_64" type="hidden" value="false" />
          </td>
          <td class="type-text">Special Comment</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SpecialComment_64_LaborCost"
              name="SpecialComment_64_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SpecialComment_64_BillingPrice"
              name="SpecialComment_64_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="68" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="SnowDelay_68"
              name="SnowDelay_68"
              type="checkbox"
              value="true"
            />
            <input name="SnowDelay_68" type="hidden" value="false" />
          </td>
          <td class="type-text">Snow Delay</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SnowDelay_68_LaborCost"
              name="SnowDelay_68_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SnowDelay_68_BillingPrice"
              name="SnowDelay_68_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="69" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MultiUnitDirectInspect_69"
              name="MultiUnitDirectInspect_69"
              type="checkbox"
              value="true"
            />
            <input name="MultiUnitDirectInspect_69" type="hidden" value="false" />
          </td>
          <td class="type-text">Multi Unit Direct Inspect</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitDirectInspect_69_LaborCost"
              name="MultiUnitDirectInspect_69_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitDirectInspect_69_BillingPrice"
              name="MultiUnitDirectInspect_69_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="70" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ExteriorMeasurements_70"
              name="ExteriorMeasurements_70"
              type="checkbox"
              value="true"
            />
            <input name="ExteriorMeasurements_70" type="hidden" value="false" />
          </td>
          <td class="type-text">Exterior Measurements</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorMeasurements_70_LaborCost"
              name="ExteriorMeasurements_70_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorMeasurements_70_BillingPrice"
              name="ExteriorMeasurements_70_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="71" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ServiceComp_71"
              name="ServiceComp_71"
              type="checkbox"
              value="true"
            />
            <input name="ServiceComp_71" type="hidden" value="false" />
          </td>
          <td class="type-text">Service Comp</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ServiceComp_71_LaborCost"
              name="ServiceComp_71_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ServiceComp_71_BillingPrice"
              name="ServiceComp_71_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="72" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectwithVideo_72"
              name="DirectInspectwithVideo_72"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectwithVideo_72" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect with Video</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithVideo_72_LaborCost"
              name="DirectInspectwithVideo_72_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithVideo_72_BillingPrice"
              name="DirectInspectwithVideo_72_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="73" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ArielSketchviaXact_73"
              name="ArielSketchviaXact_73"
              type="checkbox"
              value="true"
            />
            <input name="ArielSketchviaXact_73" type="hidden" value="false" />
          </td>
          <td class="type-text">Ariel Sketch via Xact</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ArielSketchviaXact_73_LaborCost"
              name="ArielSketchviaXact_73_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ArielSketchviaXact_73_BillingPrice"
              name="ArielSketchviaXact_73_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="74" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="Video_74" name="Video_74" type="checkbox" value="true" />
            <input name="Video_74" type="hidden" value="false" />
          </td>
          <td class="type-text">Video</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Video_74_LaborCost"
              name="Video_74_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Video_74_BillingPrice"
              name="Video_74_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="75" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectServiceComp_75"
              name="DirectInspectServiceComp_75"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectServiceComp_75" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect Service Comp</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectServiceComp_75_LaborCost"
              name="DirectInspectServiceComp_75_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectServiceComp_75_BillingPrice"
              name="DirectInspectServiceComp_75_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="78" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="SidingInspection_78"
              name="SidingInspection_78"
              type="checkbox"
              value="true"
            />
            <input name="SidingInspection_78" type="hidden" value="false" />
          </td>
          <td class="type-text">Siding Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SidingInspection_78_LaborCost"
              name="SidingInspection_78_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SidingInspection_78_BillingPrice"
              name="SidingInspection_78_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="79" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="SameDayServiceLadderAssist_79"
              name="SameDayServiceLadderAssist_79"
              type="checkbox"
              value="true"
            />
            <input name="SameDayServiceLadderAssist_79" type="hidden" value="false" />
          </td>
          <td class="type-text">Same Day Service Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SameDayServiceLadderAssist_79_LaborCost"
              name="SameDayServiceLadderAssist_79_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SameDayServiceLadderAssist_79_BillingPrice"
              name="SameDayServiceLadderAssist_79_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="80" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistWithReport_80"
              name="LadderAssistWithReport_80"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistWithReport_80" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist With Report</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistWithReport_80_LaborCost"
              name="LadderAssistWithReport_80_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistWithReport_80_BillingPrice"
              name="LadderAssistWithReport_80_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="81" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Surcharge_81"
              name="Surcharge_81"
              type="checkbox"
              value="true"
            />
            <input name="Surcharge_81" type="hidden" value="false" />
          </td>
          <td class="type-text">Surcharge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Surcharge_81_LaborCost"
              name="Surcharge_81_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Surcharge_81_BillingPrice"
              name="Surcharge_81_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="82" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Cancellation-NoCharge_82"
              name="Cancellation-NoCharge_82"
              type="checkbox"
              value="true"
            />
            <input name="Cancellation-NoCharge_82" type="hidden" value="false" />
          </td>
          <td class="type-text">Cancellation - No Charge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Cancellation-NoCharge_82_LaborCost"
              name="Cancellation-NoCharge_82_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Cancellation-NoCharge_82_BillingPrice"
              name="Cancellation-NoCharge_82_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="83" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithXactanalysisSurcharge_83"
              name="LadderAssistwithXactanalysisSurcharge_83"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithXactanalysisSurcharge_83" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Xactanalysis Surcharge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithXactanalysisSurcharge_83_LaborCost"
              name="LadderAssistwithXactanalysisSurcharge_83_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithXactanalysisSurcharge_83_BillingPrice"
              name="LadderAssistwithXactanalysisSurcharge_83_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="84" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectwithXactanalysisSurcharge_84"
              name="DirectInspectwithXactanalysisSurcharge_84"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectwithXactanalysisSurcharge_84" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect with Xactanalysis Surcharge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithXactanalysisSurcharge_84_LaborCost"
              name="DirectInspectwithXactanalysisSurcharge_84_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithXactanalysisSurcharge_84_BillingPrice"
              name="DirectInspectwithXactanalysisSurcharge_84_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="85" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="XactanalysisSurcharge_85"
              name="XactanalysisSurcharge_85"
              type="checkbox"
              value="true"
            />
            <input name="XactanalysisSurcharge_85" type="hidden" value="false" />
          </td>
          <td class="type-text">Xactanalysis Surcharge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="XactanalysisSurcharge_85_LaborCost"
              name="XactanalysisSurcharge_85_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="XactanalysisSurcharge_85_BillingPrice"
              name="XactanalysisSurcharge_85_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="86" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TECHREQOFF_86"
              name="TECHREQOFF_86"
              type="checkbox"
              value="true"
            />
            <input name="TECHREQOFF_86" type="hidden" value="false" />
          </td>
          <td class="type-text">TECH REQ OFF</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TECHREQOFF_86_LaborCost"
              name="TECHREQOFF_86_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TECHREQOFF_86_BillingPrice"
              name="TECHREQOFF_86_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="87" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Appraisal_87"
              name="Appraisal_87"
              type="checkbox"
              value="true"
            />
            <input name="Appraisal_87" type="hidden" value="false" />
          </td>
          <td class="type-text">Appraisal</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Appraisal_87_LaborCost"
              name="Appraisal_87_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Appraisal_87_BillingPrice"
              name="Appraisal_87_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="89" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="CustomerPilot_89"
              name="CustomerPilot_89"
              type="checkbox"
              value="true"
            />
            <input name="CustomerPilot_89" type="hidden" value="false" />
          </td>
          <td class="type-text">Customer Pilot</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CustomerPilot_89_LaborCost"
              name="CustomerPilot_89_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CustomerPilot_89_BillingPrice"
              name="CustomerPilot_89_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="90" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Re-inspectionNoCharge_90"
              name="Re-inspectionNoCharge_90"
              type="checkbox"
              value="true"
            />
            <input name="Re-inspectionNoCharge_90" type="hidden" value="false" />
          </td>
          <td class="type-text">Re-inspection No Charge</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Re-inspectionNoCharge_90_LaborCost"
              name="Re-inspectionNoCharge_90_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Re-inspectionNoCharge_90_BillingPrice"
              name="Re-inspectionNoCharge_90_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="91" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DIBroadcast_91"
              name="DIBroadcast_91"
              type="checkbox"
              value="true"
            />
            <input name="DIBroadcast_91" type="hidden" value="false" />
          </td>
          <td class="type-text">DI Broadcast</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DIBroadcast_91_LaborCost"
              name="DIBroadcast_91_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DIBroadcast_91_BillingPrice"
              name="DIBroadcast_91_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="92" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="UnderwritingLadderAssist_92"
              name="UnderwritingLadderAssist_92"
              type="checkbox"
              value="true"
            />
            <input name="UnderwritingLadderAssist_92" type="hidden" value="false" />
          </td>
          <td class="type-text">Underwriting Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingLadderAssist_92_LaborCost"
              name="UnderwritingLadderAssist_92_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingLadderAssist_92_BillingPrice"
              name="UnderwritingLadderAssist_92_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="93" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="VirtualInspection_93"
              name="VirtualInspection_93"
              type="checkbox"
              value="true"
            />
            <input name="VirtualInspection_93" type="hidden" value="false" />
          </td>
          <td class="type-text">Virtual Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspection_93_LaborCost"
              name="VirtualInspection_93_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspection_93_BillingPrice"
              name="VirtualInspection_93_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="94" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="NewCustomer_94"
              name="NewCustomer_94"
              type="checkbox"
              value="true"
            />
            <input name="NewCustomer_94" type="hidden" value="false" />
          </td>
          <td class="type-text">New Customer</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="NewCustomer_94_LaborCost"
              name="NewCustomer_94_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="NewCustomer_94_BillingPrice"
              name="NewCustomer_94_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="95" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MultiUnitVirtualInspection_95"
              name="MultiUnitVirtualInspection_95"
              type="checkbox"
              value="true"
            />
            <input name="MultiUnitVirtualInspection_95" type="hidden" value="false" />
          </td>
          <td class="type-text">Multi Unit Virtual Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitVirtualInspection_95_LaborCost"
              name="MultiUnitVirtualInspection_95_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitVirtualInspection_95_BillingPrice"
              name="MultiUnitVirtualInspection_95_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="96" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ItelSampleNoInspection_96"
              name="ItelSampleNoInspection_96"
              type="checkbox"
              value="true"
            />
            <input name="ItelSampleNoInspection_96" type="hidden" value="false" />
          </td>
          <td class="type-text">Itel Sample No Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ItelSampleNoInspection_96_LaborCost"
              name="ItelSampleNoInspection_96_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ItelSampleNoInspection_96_BillingPrice"
              name="ItelSampleNoInspection_96_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="97" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="PhotoAssessment_97"
              name="PhotoAssessment_97"
              type="checkbox"
              value="true"
            />
            <input name="PhotoAssessment_97" type="hidden" value="false" />
          </td>
          <td class="type-text">Photo Assessment</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="PhotoAssessment_97_LaborCost"
              name="PhotoAssessment_97_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="PhotoAssessment_97_BillingPrice"
              name="PhotoAssessment_97_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="98" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DroneInspection_98"
              name="DroneInspection_98"
              type="checkbox"
              value="true"
            />
            <input name="DroneInspection_98" type="hidden" value="false" />
          </td>
          <td class="type-text">Drone Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DroneInspection_98_LaborCost"
              name="DroneInspection_98_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DroneInspection_98_BillingPrice"
              name="DroneInspection_98_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="99" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MultiUnitLadderAssistwithReport_99"
              name="MultiUnitLadderAssistwithReport_99"
              type="checkbox"
              value="true"
            />
            <input name="MultiUnitLadderAssistwithReport_99" type="hidden" value="false" />
          </td>
          <td class="type-text">Multi Unit Ladder Assist with Report</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderAssistwithReport_99_LaborCost"
              name="MultiUnitLadderAssistwithReport_99_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderAssistwithReport_99_BillingPrice"
              name="MultiUnitLadderAssistwithReport_99_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="100" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="VirtualInspectionNoConnect_100"
              name="VirtualInspectionNoConnect_100"
              type="checkbox"
              value="true"
            />
            <input name="VirtualInspectionNoConnect_100" type="hidden" value="false" />
          </td>
          <td class="type-text">Virtual Inspection No Connect</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspectionNoConnect_100_LaborCost"
              name="VirtualInspectionNoConnect_100_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspectionNoConnect_100_BillingPrice"
              name="VirtualInspectionNoConnect_100_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="101" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistBoomLiftLabor_101"
              name="LadderAssistBoomLiftLabor_101"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistBoomLiftLabor_101" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist Boom Lift Labor</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistBoomLiftLabor_101_LaborCost"
              name="LadderAssistBoomLiftLabor_101_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistBoomLiftLabor_101_BillingPrice"
              name="LadderAssistBoomLiftLabor_101_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="102" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectBoomLiftLabor_102"
              name="DirectInspectBoomLiftLabor_102"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectBoomLiftLabor_102" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect Boom Lift Labor</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectBoomLiftLabor_102_LaborCost"
              name="DirectInspectBoomLiftLabor_102_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectBoomLiftLabor_102_BillingPrice"
              name="DirectInspectBoomLiftLabor_102_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="106" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofAccessExtInspection_106"
              name="RoofAccessExtInspection_106"
              type="checkbox"
              value="true"
            />
            <input name="RoofAccessExtInspection_106" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Access Ext Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_106_LaborCost"
              name="RoofAccessExtInspection_106_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_106_BillingPrice"
              name="RoofAccessExtInspection_106_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="109" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Interiorinspectionwithmeasurements_109"
              name="Interiorinspectionwithmeasurements_109"
              type="checkbox"
              value="true"
            />
            <input name="Interiorinspectionwithmeasurements_109" type="hidden" value="false" />
          </td>
          <td class="type-text">Interior inspection with measurements</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Interiorinspectionwithmeasurements_109_LaborCost"
              name="Interiorinspectionwithmeasurements_109_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Interiorinspectionwithmeasurements_109_BillingPrice"
              name="Interiorinspectionwithmeasurements_109_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="112" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Sketch_ESXFile_112"
              name="Sketch/ESXFile_112"
              type="checkbox"
              value="true"
            />
            <input name="Sketch/ESXFile_112" type="hidden" value="false" />
          </td>
          <td class="type-text">Sketch / ESX File</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Sketch_ESXFile_112_LaborCost"
              name="Sketch/ESXFile_112_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Sketch_ESXFile_112_BillingPrice"
              name="Sketch/ESXFile_112_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="113" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DiagramwithMeasurements_113"
              name="DiagramwithMeasurements_113"
              type="checkbox"
              value="true"
            />
            <input name="DiagramwithMeasurements_113" type="hidden" value="false" />
          </td>
          <td class="type-text">Diagram with Measurements</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DiagramwithMeasurements_113_LaborCost"
              name="DiagramwithMeasurements_113_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DiagramwithMeasurements_113_BillingPrice"
              name="DiagramwithMeasurements_113_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="114" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="GoatUtilized_114"
              name="GoatUtilized_114"
              type="checkbox"
              value="true"
            />
            <input name="GoatUtilized_114" type="hidden" value="false" />
          </td>
          <td class="type-text">Goat Utilized</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="GoatUtilized_114_LaborCost"
              name="GoatUtilized_114_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="GoatUtilized_114_BillingPrice"
              name="GoatUtilized_114_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="127" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="BoardUpOnly_127"
              name="BoardUpOnly_127"
              type="checkbox"
              value="true"
            />
            <input name="BoardUpOnly_127" type="hidden" value="false" />
          </td>
          <td class="type-text">Board Up Only</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BoardUpOnly_127_LaborCost"
              name="BoardUpOnly_127_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BoardUpOnly_127_BillingPrice"
              name="BoardUpOnly_127_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="128" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="AdditionalBoardUp_128"
              name="AdditionalBoardUp_128"
              type="checkbox"
              value="true"
            />
            <input name="AdditionalBoardUp_128" type="hidden" value="false" />
          </td>
          <td class="type-text">Additional Board Up</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="AdditionalBoardUp_128_LaborCost"
              name="AdditionalBoardUp_128_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="AdditionalBoardUp_128_BillingPrice"
              name="AdditionalBoardUp_128_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="129" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="UnderwritingDirectInspect_129"
              name="UnderwritingDirectInspect_129"
              type="checkbox"
              value="true"
            />
            <input name="UnderwritingDirectInspect_129" type="hidden" value="false" />
          </td>
          <td class="type-text">Underwriting Direct Inspect</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingDirectInspect_129_LaborCost"
              name="UnderwritingDirectInspect_129_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingDirectInspect_129_BillingPrice"
              name="UnderwritingDirectInspect_129_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="130" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="UnderwritingAdditionalStructure_130"
              name="UnderwritingAdditionalStructure_130"
              type="checkbox"
              value="true"
            />
            <input name="UnderwritingAdditionalStructure_130" type="hidden" value="false" />
          </td>
          <td class="type-text">Underwriting Additional Structure</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingAdditionalStructure_130_LaborCost"
              name="UnderwritingAdditionalStructure_130_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="UnderwritingAdditionalStructure_130_BillingPrice"
              name="UnderwritingAdditionalStructure_130_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="132" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="InteriorOnlyInspection_132"
              name="InteriorOnlyInspection_132"
              type="checkbox"
              value="true"
            />
            <input name="InteriorOnlyInspection_132" type="hidden" value="false" />
          </td>
          <td class="type-text">Interior Only Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="InteriorOnlyInspection_132_LaborCost"
              name="InteriorOnlyInspection_132_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="InteriorOnlyInspection_132_BillingPrice"
              name="InteriorOnlyInspection_132_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="133" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ExteriorMeasurementsInspectionOnly_133"
              name="ExteriorMeasurementsInspectionOnly_133"
              type="checkbox"
              value="true"
            />
            <input name="ExteriorMeasurementsInspectionOnly_133" type="hidden" value="false" />
          </td>
          <td class="type-text">Exterior Measurements Inspection Only</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorMeasurementsInspectionOnly_133_LaborCost"
              name="ExteriorMeasurementsInspectionOnly_133_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorMeasurementsInspectionOnly_133_BillingPrice"
              name="ExteriorMeasurementsInspectionOnly_133_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="134" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofAccessExtInspection-NoConnect_134"
              name="RoofAccessExtInspection-NoConnect_134"
              type="checkbox"
              value="true"
            />
            <input name="RoofAccessExtInspection-NoConnect_134" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Access Ext Inspection - No Connect</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection-NoConnect_134_LaborCost"
              name="RoofAccessExtInspection-NoConnect_134_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection-NoConnect_134_BillingPrice"
              name="RoofAccessExtInspection-NoConnect_134_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="135" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="CommercialMultiUnitLadderAssist_135"
              name="CommercialMultiUnitLadderAssist_135"
              type="checkbox"
              value="true"
            />
            <input name="CommercialMultiUnitLadderAssist_135" type="hidden" value="false" />
          </td>
          <td class="type-text">Commercial Multi Unit Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CommercialMultiUnitLadderAssist_135_LaborCost"
              name="CommercialMultiUnitLadderAssist_135_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CommercialMultiUnitLadderAssist_135_BillingPrice"
              name="CommercialMultiUnitLadderAssist_135_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="136" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="CommercialMultiUnitDirectInspect_136"
              name="CommercialMultiUnitDirectInspect_136"
              type="checkbox"
              value="true"
            />
            <input name="CommercialMultiUnitDirectInspect_136" type="hidden" value="false" />
          </td>
          <td class="type-text">Commercial Multi Unit Direct Inspect</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CommercialMultiUnitDirectInspect_136_LaborCost"
              name="CommercialMultiUnitDirectInspect_136_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="CommercialMultiUnitDirectInspect_136_BillingPrice"
              name="CommercialMultiUnitDirectInspect_136_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="137" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ITELMobile_137"
              name="ITELMobile_137"
              type="checkbox"
              value="true"
            />
            <input name="ITELMobile_137" type="hidden" value="false" />
          </td>
          <td class="type-text">ITEL Mobile</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELMobile_137_LaborCost"
              name="ITELMobile_137_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELMobile_137_BillingPrice"
              name="ITELMobile_137_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="138" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MikesServiceType3_138"
              name="MikesServiceType3_138"
              type="checkbox"
              value="true"
            />
            <input name="MikesServiceType3_138" type="hidden" value="false" />
          </td>
          <td class="type-text">Mikes Service Type3</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MikesServiceType3_138_LaborCost"
              name="MikesServiceType3_138_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MikesServiceType3_138_BillingPrice"
              name="MikesServiceType3_138_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="139" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="a1_139" name="a1_139" type="checkbox" value="true" />
            <input name="a1_139" type="hidden" value="false" />
          </td>
          <td class="type-text">a1</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="a1_139_LaborCost"
              name="a1_139_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="a1_139_BillingPrice"
              name="a1_139_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="140" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" name="717TESTSERVICETYPE_140" type="checkbox" value="true" />
            <input name="717TESTSERVICETYPE_140" type="hidden" value="false" />
          </td>
          <td class="type-text">717 TEST SERVICE TYPE</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              name="717TESTSERVICETYPE_140_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              name="717TESTSERVICETYPE_140_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="141" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ITELMobile_141"
              name="ITELMobile_141"
              type="checkbox"
              value="true"
            />
            <input name="ITELMobile_141" type="hidden" value="false" />
          </td>
          <td class="type-text">ITEL Mobile</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELMobile_141_LaborCost"
              name="ITELMobile_141_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ITELMobile_141_BillingPrice"
              name="ITELMobile_141_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="142" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="PostConstructionInspection_142"
              name="PostConstructionInspection_142"
              type="checkbox"
              value="true"
            />
            <input name="PostConstructionInspection_142" type="hidden" value="false" />
          </td>
          <td class="type-text">Post Construction Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="PostConstructionInspection_142_LaborCost"
              name="PostConstructionInspection_142_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="PostConstructionInspection_142_BillingPrice"
              name="PostConstructionInspection_142_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="143" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="MultiUnitLadderLean_143"
              name="MultiUnitLadderLean_143"
              type="checkbox"
              value="true"
            />
            <input name="MultiUnitLadderLean_143" type="hidden" value="false" />
          </td>
          <td class="type-text">Multi Unit Ladder Lean</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderLean_143_LaborCost"
              name="MultiUnitLadderLean_143_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="MultiUnitLadderLean_143_BillingPrice"
              name="MultiUnitLadderLean_143_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="144" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TESTSERVICETYPE_144"
              name="TESTSERVICETYPE_144"
              type="checkbox"
              value="true"
            />
            <input name="TESTSERVICETYPE_144" type="hidden" value="false" />
          </td>
          <td class="type-text">TEST SERVICE TYPE</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TESTSERVICETYPE_144_LaborCost"
              name="TESTSERVICETYPE_144_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TESTSERVICETYPE_144_BillingPrice"
              name="TESTSERVICETYPE_144_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="145" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ExtendedLadderAssist_145"
              name="ExtendedLadderAssist_145"
              type="checkbox"
              value="true"
            />
            <input name="ExtendedLadderAssist_145" type="hidden" value="false" />
          </td>
          <td class="type-text">Extended Ladder Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExtendedLadderAssist_145_LaborCost"
              name="ExtendedLadderAssist_145_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExtendedLadderAssist_145_BillingPrice"
              name="ExtendedLadderAssist_145_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="146" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofBoarding_146"
              name="RoofBoarding_146"
              type="checkbox"
              value="true"
            />
            <input name="RoofBoarding_146" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Boarding</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofBoarding_146_LaborCost"
              name="RoofBoarding_146_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofBoarding_146_BillingPrice"
              name="RoofBoarding_146_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="147" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectwithHoverComplete_147"
              name="DirectInspectwithHoverComplete_147"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectwithHoverComplete_147" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect with Hover Complete</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverComplete_147_LaborCost"
              name="DirectInspectwithHoverComplete_147_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverComplete_147_BillingPrice"
              name="DirectInspectwithHoverComplete_147_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="148" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="VirtualAssist_DirectInspection_148"
              name="VirtualAssist(DirectInspection_148"
              type="checkbox"
              value="true"
            />
            <input name="VirtualAssist(DirectInspection_148" type="hidden" value="false" />
          </td>
          <td class="type-text">Virtual Assist (Direct Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualAssist_DirectInspection_148_LaborCost"
              name="VirtualAssist(DirectInspection_148_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualAssist_DirectInspection_148_BillingPrice"
              name="VirtualAssist(DirectInspection_148_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="149" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofExteriorInspection_149"
              name="RoofExteriorInspection_149"
              type="checkbox"
              value="true"
            />
            <input name="RoofExteriorInspection_149" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Exterior Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofExteriorInspection_149_LaborCost"
              name="RoofExteriorInspection_149_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofExteriorInspection_149_BillingPrice"
              name="RoofExteriorInspection_149_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="150" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Duane_sTestService_150"
              name="Duane'sTestService_150"
              type="checkbox"
              value="true"
            />
            <input name="Duane'sTestService_150" type="hidden" value="false" />
          </td>
          <td class="type-text">Duane's Test Service</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Duane_sTestService_150_LaborCost"
              name="Duane'sTestService_150_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Duane_sTestService_150_BillingPrice"
              name="Duane'sTestService_150_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="151" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DescriptionInspectionwithXactFee_151"
              name="DescriptionInspectionwithXactFee_151"
              type="checkbox"
              value="true"
            />
            <input name="DescriptionInspectionwithXactFee_151" type="hidden" value="false" />
          </td>
          <td class="type-text">Description Inspection with Xact Fee</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DescriptionInspectionwithXactFee_151_LaborCost"
              name="DescriptionInspectionwithXactFee_151_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DescriptionInspectionwithXactFee_151_BillingPrice"
              name="DescriptionInspectionwithXactFee_151_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="152" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectionwithXactFee-NoDamage_152"
              name="DirectInspectionwithXactFee-NoDamage_152"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectionwithXactFee-NoDamage_152" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspection with Xact Fee - No Damage</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectionwithXactFee-NoDamage_152_LaborCost"
              name="DirectInspectionwithXactFee-NoDamage_152_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectionwithXactFee-NoDamage_152_BillingPrice"
              name="DirectInspectionwithXactFee-NoDamage_152_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="154" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" name="105_154" type="checkbox" value="true" />
            <input name="105_154" type="hidden" value="false" />
          </td>
          <td class="type-text">105</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="105_154_LaborCost" type="text" value disabled />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input class="m-wrap xsmall" name="105_154_BillingPrice" type="text" value disabled />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="155" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="newservicetypetotest_155"
              name="newservicetypetotest_155"
              type="checkbox"
              value="true"
            />
            <input name="newservicetypetotest_155" type="hidden" value="false" />
          </td>
          <td class="type-text">new service type to test</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="newservicetypetotest_155_LaborCost"
              name="newservicetypetotest_155_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="newservicetypetotest_155_BillingPrice"
              name="newservicetypetotest_155_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="156" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ladderassistversion3_156"
              name="ladderassistversion3_156"
              type="checkbox"
              value="true"
            />
            <input name="ladderassistversion3_156" type="hidden" value="false" />
          </td>
          <td class="type-text">ladder assist version 3</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ladderassistversion3_156_LaborCost"
              name="ladderassistversion3_156_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ladderassistversion3_156_BillingPrice"
              name="ladderassistversion3_156_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="157" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ladderassistversion33_157"
              name="ladderassistversion33_157"
              type="checkbox"
              value="true"
            />
            <input name="ladderassistversion33_157" type="hidden" value="false" />
          </td>
          <td class="type-text">ladder assist version 33</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ladderassistversion33_157_LaborCost"
              name="ladderassistversion33_157_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ladderassistversion33_157_BillingPrice"
              name="ladderassistversion33_157_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="158" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DroneInspection_158"
              name="DroneInspection_158"
              type="checkbox"
              value="true"
            />
            <input name="DroneInspection_158" type="hidden" value="false" />
          </td>
          <td class="type-text">Drone Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DroneInspection_158_LaborCost"
              name="DroneInspection_158_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DroneInspection_158_BillingPrice"
              name="DroneInspection_158_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="159" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="Servicetypetest_159"
              name="Servicetypetest_159"
              type="checkbox"
              value="true"
            />
            <input name="Servicetypetest_159" type="hidden" value="false" />
          </td>
          <td class="type-text">Service type test</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Servicetypetest_159_LaborCost"
              name="Servicetypetest_159_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="Servicetypetest_159_BillingPrice"
              name="Servicetypetest_159_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="160" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TestingInspection_160"
              name="TestingInspection_160"
              type="checkbox"
              value="true"
            />
            <input name="TestingInspection_160" type="hidden" value="false" />
          </td>
          <td class="type-text">Testing Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TestingInspection_160_LaborCost"
              name="TestingInspection_160_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TestingInspection_160_BillingPrice"
              name="TestingInspection_160_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="161" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="FFFDDDD_161" name="FFFDDDD_161" type="checkbox" value="true" />
            <input name="FFFDDDD_161" type="hidden" value="false" />
          </td>
          <td class="type-text">FFFDDDD</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="FFFDDDD_161_LaborCost"
              name="FFFDDDD_161_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="FFFDDDD_161_BillingPrice"
              name="FFFDDDD_161_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="162" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="GJGJGJ_162" name="GJGJGJ_162" type="checkbox" value="true" />
            <input name="GJGJGJ_162" type="hidden" value="false" />
          </td>
          <td class="type-text">GJGJGJ</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="GJGJGJ_162_LaborCost"
              name="GJGJGJ_162_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="GJGJGJ_162_BillingPrice"
              name="GJGJGJ_162_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="163" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="LOPOJK_163" name="LOPOJK_163" type="checkbox" value="true" />
            <input name="LOPOJK_163" type="hidden" value="false" />
          </td>
          <td class="type-text">LOPOJK</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LOPOJK_163_LaborCost"
              name="LOPOJK_163_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LOPOJK_163_BillingPrice"
              name="LOPOJK_163_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="164" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="needtofortesting_164"
              name="needtofortesting_164"
              type="checkbox"
              value="true"
            />
            <input name="needtofortesting_164" type="hidden" value="false" />
          </td>
          <td class="type-text">need to for testing</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="needtofortesting_164_LaborCost"
              name="needtofortesting_164_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="needtofortesting_164_BillingPrice"
              name="needtofortesting_164_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="165" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input data="Services" id="test_165" name="test_165" type="checkbox" value="true" />
            <input name="test_165" type="hidden" value="false" />
          </td>
          <td class="type-text">test</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="test_165_LaborCost"
              name="test_165_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="test_165_BillingPrice"
              name="test_165_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="166" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TestingInspection2_166"
              name="TestingInspection2_166"
              type="checkbox"
              value="true"
            />
            <input name="TestingInspection2_166" type="hidden" value="false" />
          </td>
          <td class="type-text">Testing Inspection 2</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TestingInspection2_166_LaborCost"
              name="TestingInspection2_166_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TestingInspection2_166_BillingPrice"
              name="TestingInspection2_166_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="167" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="st09292021_167"
              name="st09292021_167"
              type="checkbox"
              value="true"
            />
            <input name="st09292021_167" type="hidden" value="false" />
          </td>
          <td class="type-text">st 09292021</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="st09292021_167_LaborCost"
              name="st09292021_167_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="st09292021_167_BillingPrice"
              name="st09292021_167_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="168" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspection-Residential_168"
              name="DirectInspection-Residential_168"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspection-Residential_168" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspection - Residential</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection-Residential_168_LaborCost"
              name="DirectInspection-Residential_168_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection-Residential_168_BillingPrice"
              name="DirectInspection-Residential_168_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="169" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspection-Commercial_169"
              name="DirectInspection-Commercial_169"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspection-Commercial_169" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspection - Commercial</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection-Commercial_169_LaborCost"
              name="DirectInspection-Commercial_169_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspection-Commercial_169_BillingPrice"
              name="DirectInspection-Commercial_169_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="170" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="InspectionReport_170"
              name="InspectionReport_170"
              type="checkbox"
              value="true"
            />
            <input name="InspectionReport_170" type="hidden" value="false" />
          </td>
          <td class="type-text">Inspection Report</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="InspectionReport_170_LaborCost"
              name="InspectionReport_170_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="InspectionReport_170_BillingPrice"
              name="InspectionReport_170_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="171" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithMeasurements_171"
              name="LadderAssistwithMeasurements_171"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithMeasurements_171" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Measurements</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithMeasurements_171_LaborCost"
              name="LadderAssistwithMeasurements_171_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithMeasurements_171_BillingPrice"
              name="LadderAssistwithMeasurements_171_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="172" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="VirtualInspectionwithHoverComplete_172"
              name="VirtualInspectionwithHoverComplete_172"
              type="checkbox"
              value="true"
            />
            <input name="VirtualInspectionwithHoverComplete_172" type="hidden" value="false" />
          </td>
          <td class="type-text">Virtual Inspection with Hover Complete</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspectionwithHoverComplete_172_LaborCost"
              name="VirtualInspectionwithHoverComplete_172_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="VirtualInspectionwithHoverComplete_172_BillingPrice"
              name="VirtualInspectionwithHoverComplete_172_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="173" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="TarpRemove_ResetOnly_173"
              name="TarpRemove&amp;ResetOnly_173"
              type="checkbox"
              value="true"
            />
            <input name="TarpRemove&amp;ResetOnly_173" type="hidden" value="false" />
          </td>
          <td class="type-text">Tarp Remove &amp; Reset Only</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TarpRemove_ResetOnly_173_LaborCost"
              name="TarpRemove&amp;ResetOnly_173_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="TarpRemove_ResetOnly_173_BillingPrice"
              name="TarpRemove&amp;ResetOnly_173_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="174" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectwithHoverComplete-Commercial_174"
              name="DirectInspectwithHoverComplete-Commercial_174"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectwithHoverComplete-Commercial_174" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect with Hover Complete - Commercial</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverComplete-Commercial_174_LaborCost"
              name="DirectInspectwithHoverComplete-Commercial_174_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverComplete-Commercial_174_BillingPrice"
              name="DirectInspectwithHoverComplete-Commercial_174_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="183" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithHoverRoofOnly-Commercial_183"
              name="LadderAssistwithHoverRoofOnly-Commercial_183"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithHoverRoofOnly-Commercial_183" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Hover Roof Only - Commercial</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithHoverRoofOnly-Commercial_183_LaborCost"
              name="LadderAssistwithHoverRoofOnly-Commercial_183_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithHoverRoofOnly-Commercial_183_BillingPrice"
              name="LadderAssistwithHoverRoofOnly-Commercial_183_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="184" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithHoverComplete-Commercial_184"
              name="LadderAssistwithHoverComplete-Commercial_184"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithHoverComplete-Commercial_184" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Hover Complete - Commercial</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithHoverComplete-Commercial_184_LaborCost"
              name="LadderAssistwithHoverComplete-Commercial_184_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithHoverComplete-Commercial_184_BillingPrice"
              name="LadderAssistwithHoverComplete-Commercial_184_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="185" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="DirectInspectwithHoverRoofOnly-Commercial_185"
              name="DirectInspectwithHoverRoofOnly-Commercial_185"
              type="checkbox"
              value="true"
            />
            <input name="DirectInspectwithHoverRoofOnly-Commercial_185" type="hidden" value="false" />
          </td>
          <td class="type-text">Direct Inspect with Hover Roof Only - Commercial</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverRoofOnly-Commercial_185_LaborCost"
              name="DirectInspectwithHoverRoofOnly-Commercial_185_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="DirectInspectwithHoverRoofOnly-Commercial_185_BillingPrice"
              name="DirectInspectwithHoverRoofOnly-Commercial_185_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="186" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofAccessExtInspectionwithXactFee_186"
              name="RoofAccessExtInspectionwithXactFee_186"
              type="checkbox"
              value="true"
            />
            <input name="RoofAccessExtInspectionwithXactFee_186" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Access Ext Inspection with Xact Fee</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspectionwithXactFee_186_LaborCost"
              name="RoofAccessExtInspectionwithXactFee_186_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspectionwithXactFee_186_BillingPrice"
              name="RoofAccessExtInspectionwithXactFee_186_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="187" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="LadderAssistwithXactFee_187"
              name="LadderAssistwithXactFee_187"
              type="checkbox"
              value="true"
            />
            <input name="LadderAssistwithXactFee_187" type="hidden" value="false" />
          </td>
          <td class="type-text">Ladder Assist with Xact Fee</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithXactFee_187_LaborCost"
              name="LadderAssistwithXactFee_187_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="LadderAssistwithXactFee_187_BillingPrice"
              name="LadderAssistwithXactFee_187_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="188" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofAccessExtInspection_FieldAssist__188"
              name="RoofAccessExtInspection(FieldAssist)_188"
              type="checkbox"
              value="true"
            />
            <input name="RoofAccessExtInspection(FieldAssist)_188" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Access Ext Inspection (Field Assist)</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_FieldAssist__188_LaborCost"
              name="RoofAccessExtInspection(FieldAssist)_188_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_FieldAssist__188_BillingPrice"
              name="RoofAccessExtInspection(FieldAssist)_188_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="189" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ServiceCompNoPay_189"
              name="ServiceCompNoPay_189"
              type="checkbox"
              value="true"
            />
            <input name="ServiceCompNoPay_189" type="hidden" value="false" />
          </td>
          <td class="type-text">Service Comp No Pay</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ServiceCompNoPay_189_LaborCost"
              name="ServiceCompNoPay_189_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ServiceCompNoPay_189_BillingPrice"
              name="ServiceCompNoPay_189_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="190" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="ExteriorOnlyInspection_190"
              name="ExteriorOnlyInspection_190"
              type="checkbox"
              value="true"
            />
            <input name="ExteriorOnlyInspection_190" type="hidden" value="false" />
          </td>
          <td class="type-text">Exterior Only Inspection</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorOnlyInspection_190_LaborCost"
              name="ExteriorOnlyInspection_190_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="ExteriorOnlyInspection_190_BillingPrice"
              name="ExteriorOnlyInspection_190_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="191" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="RoofAccessExtInspection_FieldAssist-HIC__191"
              name="RoofAccessExtInspection(FieldAssist-HIC)_191"
              type="checkbox"
              value="true"
            />
            <input name="RoofAccessExtInspection(FieldAssist-HIC)_191" type="hidden" value="false" />
          </td>
          <td class="type-text">Roof Access Ext Inspection (Field Assist - HIC)</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_FieldAssist-HIC__191_LaborCost"
              name="RoofAccessExtInspection(FieldAssist-HIC)_191_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="RoofAccessExtInspection_FieldAssist-HIC__191_BillingPrice"
              name="RoofAccessExtInspection(FieldAssist-HIC)_191_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="192" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="SeniorAssist_192"
              name="SeniorAssist_192"
              type="checkbox"
              value="true"
            />
            <input name="SeniorAssist_192" type="hidden" value="false" />
          </td>
          <td class="type-text">Senior Assist</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SeniorAssist_192_LaborCost"
              name="SeniorAssist_192_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="SeniorAssist_192_BillingPrice"
              name="SeniorAssist_192_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>

        <tr id="193" data-service-type="self" data-val-id="0" style>
          <td class="cb-column">
            <input
              data="Services"
              id="BasementCleanup_193"
              name="BasementCleanup_193"
              type="checkbox"
              value="true"
            />
            <input name="BasementCleanup_193" type="hidden" value="false" />
          </td>
          <td class="type-text">Basement Cleanup</td>

          <td class="emptyCell">&nbsp;</td>
          <td class="emptyCell">&nbsp;</td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BasementCleanup_193_LaborCost"
              name="BasementCleanup_193_LaborCost"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>
          <td class="lab-bill-col input-icon left">
            <i class="text-icon">$</i>

            <input
              class="m-wrap xsmall"
              id="BasementCleanup_193_BillingPrice"
              name="BasementCleanup_193_BillingPrice"
              type="text"
              value
              disabled
            />
            <span class="field-validation-error" data-valmsg-replace="true" style="display: none;">
              <span class>Required</span>
            </span>
          </td>

          <td class="center">
            <span style="display: none;" id="selectedValue">1</span>
            <select class="hover-dropdown" id="ReportType" name="ReportType" disabled>
              <option value="1">Not Enabled</option>
              <option value="2">Roof Only</option>
              <option value="4">Roof Only - XML</option>
              <option value="3">Complete</option>
              <option value="5">Complete - XML</option>
            </select>
          </td>

          <td class="center">
            <input
              disabled
              id="IsLivegenicEnabled"
              name="IsLivegenicEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsLivegenicEnabled" type="hidden" value="false" disabled />
          </td>

          <td class="center">
            <input
              disabled
              id="IsEagleViewEnabled"
              name="IsEagleViewEnabled"
              type="checkbox"
              value="true"
            />
            <input name="IsEagleViewEnabled" type="hidden" value="false" disabled />
          </td>
          <td class="center">
            <input disabled id="OnExternalForm" name="OnExternalForm" type="checkbox" value="true" />
            <input name="OnExternalForm" type="hidden" value="false" disabled />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Business unit is active -->
    <div class="row-fluid">
      <div class="span12">
        <div class="control-group">
          <label class="control-label" for="This_customer_is_active">This customer is active</label>
          <div class="controls margin-top-4">
            <input
              checked="checked"
              data-val="true"
              data-val-required="The This business unit is active field is required."
              id="BusinessUnit_IsActive"
              name="BusinessUnit.IsActive"
              type="checkbox"
              value="true"
            />
            <input name="BusinessUnit.IsActive" type="hidden" value="false" />
          </div>
        </div>
      </div>
    </div>
    <!-- Validation summary -->
    <div class="row-fluid">
      <div class="span12">
        <div class="control-group">
          &nbsp;
          <div class="controls"></div>
        </div>
      </div>
    </div>
    <!-- Form actions -->
    <div class="form-actions">
      <button class="btn blue" type="submit">
        <i class="icon-ok"></i>Save
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/Customer" class="btn" type="button">
        <i class="icon-remove"></i>&nbsp;Cancel
      </a>
    </div>
  </form>
</template>
