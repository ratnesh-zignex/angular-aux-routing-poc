import * as $protobuf from "protobufjs";
export namespace customer {

    interface ICustomerRequest {
        acctId?: (number|Long|null);
        opsUnitCd?: (string|null);
        srvcRtTypCd?: (string[]|null);
        srvcOrdrRtDow?: (string[]|null);
        srvcOrdrRtNo?: (string[]|null);
        userNm?: (string|null);
        lobCd?: (string|null);
    }

    class CustomerRequest implements ICustomerRequest {
        constructor(properties?: customer.ICustomerRequest);
        public acctId: (number|Long);
        public opsUnitCd: string;
        public srvcRtTypCd: string[];
        public srvcOrdrRtDow: string[];
        public srvcOrdrRtNo: string[];
        public userNm: string;
        public lobCd: string;
        public static create(properties?: customer.ICustomerRequest): customer.CustomerRequest;
        public static encode(message: customer.ICustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ICustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.CustomerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.CustomerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.CustomerRequest;
        public static toObject(message: customer.CustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICustomerResponse {
        customerArray?: (customer.ICustomer[]|null);
    }

    class CustomerResponse implements ICustomerResponse {
        constructor(properties?: customer.ICustomerResponse);
        public customerArray: customer.ICustomer[];
        public static create(properties?: customer.ICustomerResponse): customer.CustomerResponse;
        public static encode(message: customer.ICustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ICustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.CustomerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.CustomerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.CustomerResponse;
        public static toObject(message: customer.CustomerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICustomer {
        cid?: (string|null);
        name?: (string|null);
        rNo?: (string|null);
        sNo?: (number|null);
        uqty?: (number|null);
        uVolVal?: (number|null);
        uWtVal?: (number|null);
        srvctm?: (number|null);
        strtm?: (string|null);
        stptm?: (string|null);
        addr?: (string|null);
        cty?: (string|null);
        state?: (string|null);
        zip?: (string|null);
        cntry?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        srcDOW?: (string|null);
        srcRNo?: (string|null);
        srcSNo?: (number|null);
        geoSt?: (string|null);
        note1?: (string|null);
        uid?: (number|Long|null);
        cuId?: (number|Long|null);
        unId?: (number|Long|null);
        orId?: (number|Long|null);
        loId?: (number|Long|null);
        noId?: (number|Long|null);
        clstId?: (number|null);
        sos?: (string|null);
        lkFlgD?: (string|null);
        adTm?: (number|null);
        tTsrv?: (number|null);
        tcTsrv?: (number|null);
        pRDow?: (string|null);
        oPr?: (number|null);
        srvcOrdrSrcDispCd?: (string|null);
        sOLNo?: (number|null);
        edId?: (string|null);
        pRt?: (string|null);
        pSeq?: (number|null);
        vStLc?: (string|null);
        vEdLc?: (string|null);
        osPkup?: (string|null);
        prOpUnCd?: (string|null);
        prDispCd?: (string|null);
        rtWkCd?: (string|null);
        wkNo?: (number|null);
        note2?: (string|null);
        srvcUnitAccCdId?: (number|null);
        srvcUnitAccCd?: (string|null);
        notes1?: (string|null);
        notes3?: (string|null);
        userCustom1?: (string|null);
        userCustom2?: (string|null);
        userCustom3?: (string|null);
        creationDtm?: (string|null);
        srvcOrdrCode?: (string|null);
        userDefinedWeekCd?: (string|null);
        totCostTsrvPrYd?: (number|null);
        userId?: (string|null);
        srvcUnitNote1?: (string|null);
        materialType?: (string|null);
        weekCodeLockFlag?: (number|null);
        srvcGeocodeSrc?: (string|null);
        srvcGeocodeSrcDesc?: (string|null);
        srvcGeocodeConf?: (string|null);
        srvcUnitFrqByWk?: (number|null);
        notes4?: (string|null);
        notes5?: (string|null);
        userCustom4?: (string|null);
        userCustom5?: (string|null);
        srvcUnitNotes2?: (string|null);
        mapPageNo?: (number|null);
        srvcUnitNotes3?: (string|null);
        srvcUnitLftAccPnlt?: (number|null);
        srvcUnitRgtAccPnlt?: (number|null);
        dchg?: (string|null);
        dayChangeP?: (string|null);
        weekChange?: (string|null);
        weekChangeP?: (string|null);
    }

    class Customer implements ICustomer {
        constructor(properties?: customer.ICustomer);
        public cid: string;
        public name: string;
        public rNo: string;
        public sNo: number;
        public uqty: number;
        public uVolVal: number;
        public uWtVal: number;
        public srvctm: number;
        public strtm: string;
        public stptm: string;
        public addr: string;
        public cty: string;
        public state: string;
        public zip: string;
        public cntry: string;
        public lat: number;
        public lon: number;
        public srcDOW: string;
        public srcRNo: string;
        public srcSNo: number;
        public geoSt: string;
        public note1: string;
        public uid: (number|Long);
        public cuId: (number|Long);
        public unId: (number|Long);
        public orId: (number|Long);
        public loId: (number|Long);
        public noId: (number|Long);
        public clstId: number;
        public sos: string;
        public lkFlgD: string;
        public adTm: number;
        public tTsrv: number;
        public tcTsrv: number;
        public pRDow: string;
        public oPr: number;
        public srvcOrdrSrcDispCd: string;
        public sOLNo: number;
        public edId: string;
        public pRt: string;
        public pSeq: number;
        public vStLc: string;
        public vEdLc: string;
        public osPkup: string;
        public prOpUnCd: string;
        public prDispCd: string;
        public rtWkCd: string;
        public wkNo: number;
        public note2: string;
        public srvcUnitAccCdId: number;
        public srvcUnitAccCd: string;
        public notes1: string;
        public notes3: string;
        public userCustom1: string;
        public userCustom2: string;
        public userCustom3: string;
        public creationDtm: string;
        public srvcOrdrCode: string;
        public userDefinedWeekCd: string;
        public totCostTsrvPrYd: number;
        public userId: string;
        public srvcUnitNote1: string;
        public materialType: string;
        public weekCodeLockFlag: number;
        public srvcGeocodeSrc: string;
        public srvcGeocodeSrcDesc: string;
        public srvcGeocodeConf: string;
        public srvcUnitFrqByWk: number;
        public notes4: string;
        public notes5: string;
        public userCustom4: string;
        public userCustom5: string;
        public srvcUnitNotes2: string;
        public mapPageNo: number;
        public srvcUnitNotes3: string;
        public srvcUnitLftAccPnlt: number;
        public srvcUnitRgtAccPnlt: number;
        public dchg: string;
        public dayChangeP: string;
        public weekChange: string;
        public weekChangeP: string;
        public static create(properties?: customer.ICustomer): customer.Customer;
        public static encode(message: customer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.Customer;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.Customer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.Customer;
        public static toObject(message: customer.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICustomerResponseShort {
        customerList?: (customer.ICustomerShortMsg[]|null);
    }

    class CustomerResponseShort implements ICustomerResponseShort {
        constructor(properties?: customer.ICustomerResponseShort);
        public customerList: customer.ICustomerShortMsg[];
        public static create(properties?: customer.ICustomerResponseShort): customer.CustomerResponseShort;
        public static encode(message: customer.ICustomerResponseShort, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ICustomerResponseShort, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.CustomerResponseShort;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.CustomerResponseShort;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.CustomerResponseShort;
        public static toObject(message: customer.CustomerResponseShort, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICustomerShortMsg {
        cid?: (string|null);
        name?: (string|null);
        rNo?: (string|null);
        sNo?: (number|null);
        uqty?: (number|null);
        uVolVal?: (number|null);
        uWtVal?: (number|null);
        srvctm?: (number|null);
        strtm?: (string|null);
        stptm?: (string|null);
        addr?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        srcDOW?: (string|null);
        srcRNo?: (string|null);
        srcSNo?: (number|null);
        geoSt?: (string|null);
        note1?: (string|null);
        uid?: (number|Long|null);
        cuId?: (number|Long|null);
        unId?: (number|Long|null);
        orId?: (number|Long|null);
        loId?: (number|Long|null);
        noId?: (number|Long|null);
        clstId?: (number|null);
        oPr?: (number|null);
        srvcOrdrSrcDispCd?: (string|null);
        sOLNo?: (number|null);
        osPkup?: (string|null);
        note2?: (string|null);
        srvcUnitAccCdId?: (number|null);
        srvcUnitAccCd?: (string|null);
        notes1?: (string|null);
        notes3?: (string|null);
        userCustom1?: (string|null);
        userCustom2?: (string|null);
        userCustom3?: (string|null);
        creationDtm?: (string|null);
        userId?: (string|null);
        srvcUnitNote1?: (string|null);
        materialType?: (string|null);
        srvcGeocodeSrcDesc?: (string|null);
        srvcUnitFrqByWk?: (number|null);
        tcTsrv?: (number|null);
        totCostTsrvPrYd?: (number|null);
        state?: (string|null);
        zip?: (string|null);
        cty?: (string|null);
        notes4?: (string|null);
        notes5?: (string|null);
        userCustom4?: (string|null);
        userCustom5?: (string|null);
        srvcUnitNotes2?: (string|null);
        srvcUnitNotes3?: (string|null);
    }

    class CustomerShortMsg implements ICustomerShortMsg {
        constructor(properties?: customer.ICustomerShortMsg);
        public cid: string;
        public name: string;
        public rNo: string;
        public sNo: number;
        public uqty: number;
        public uVolVal: number;
        public uWtVal: number;
        public srvctm: number;
        public strtm: string;
        public stptm: string;
        public addr: string;
        public lat: number;
        public lon: number;
        public srcDOW: string;
        public srcRNo: string;
        public srcSNo: number;
        public geoSt: string;
        public note1: string;
        public uid: (number|Long);
        public cuId: (number|Long);
        public unId: (number|Long);
        public orId: (number|Long);
        public loId: (number|Long);
        public noId: (number|Long);
        public clstId: number;
        public oPr: number;
        public srvcOrdrSrcDispCd: string;
        public sOLNo: number;
        public osPkup: string;
        public note2: string;
        public srvcUnitAccCdId: number;
        public srvcUnitAccCd: string;
        public notes1: string;
        public notes3: string;
        public userCustom1: string;
        public userCustom2: string;
        public userCustom3: string;
        public creationDtm: string;
        public userId: string;
        public srvcUnitNote1: string;
        public materialType: string;
        public srvcGeocodeSrcDesc: string;
        public srvcUnitFrqByWk: number;
        public tcTsrv: number;
        public totCostTsrvPrYd: number;
        public state: string;
        public zip: string;
        public cty: string;
        public notes4: string;
        public notes5: string;
        public userCustom4: string;
        public userCustom5: string;
        public srvcUnitNotes2: string;
        public srvcUnitNotes3: string;
        public static create(properties?: customer.ICustomerShortMsg): customer.CustomerShortMsg;
        public static encode(message: customer.ICustomerShortMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ICustomerShortMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.CustomerShortMsg;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.CustomerShortMsg;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.CustomerShortMsg;
        public static toObject(message: customer.CustomerShortMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDayOfWeek {
        monday?: (string|null);
        tuesday?: (string|null);
        wednesday?: (string|null);
        thursday?: (string|null);
        friday?: (string|null);
        saturday?: (string|null);
        sunday?: (string|null);
    }

    class DayOfWeek implements IDayOfWeek {
        constructor(properties?: customer.IDayOfWeek);
        public monday: string;
        public tuesday: string;
        public wednesday: string;
        public thursday: string;
        public friday: string;
        public saturday: string;
        public sunday: string;
        public static create(properties?: customer.IDayOfWeek): customer.DayOfWeek;
        public static encode(message: customer.IDayOfWeek, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IDayOfWeek, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.DayOfWeek;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.DayOfWeek;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.DayOfWeek;
        public static toObject(message: customer.DayOfWeek, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWeeklyCustomer {
        cid?: (string|null);
        name?: (string|null);
        uqty?: (number|null);
        uVolVal?: (number|null);
        uWtVal?: (number|null);
        addr?: (string|null);
        cty?: (string|null);
        state?: (string|null);
        zip?: (string|null);
        cntry?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        geoSt?: (string|null);
        frqByWk?: (number|null);
        cuId?: (number|Long|null);
        unId?: (number|Long|null);
        loId?: (number|Long|null);
        orgRt?: (customer.IDayOfWeek|null);
        sRt?: (customer.IDayOfWeek|null);
        wkClstId?: (number|null);
        sos?: (string|null);
        pRt?: (customer.IDayOfWeek|null);
        lkFlg?: (string|null);
        edId?: (string|null);
        slockCd?: (string|null);
        rtWkCd?: (string|null);
        prRtWkCd?: (string|null);
        prOpUnCd?: (string|null);
        prDispCd?: (string|null);
        wkNo?: (number|null);
        srvcUnitNote1?: (string|null);
        srvcUnitAccCdId?: (number|null);
        srvcUnitAccCd?: (string|null);
        srvcUnitCd?: (string|null);
        creationDtm?: (string|null);
        userDefinedWeekCd?: (string|null);
        totCostTsrv?: (number|null);
        totCostTsrvPrYd?: (number|null);
        weekCodeLockFlag?: (number|null);
        priority?: (number|null);
        srvcUnitNotes2?: (string|null);
        materialType?: (string|null);
        srvcUnitNotes3?: (string|null);
        srvcRtTypCd?: (string|null);
        srvcUnitLftAccPnlt?: (number|null);
        srvcUnitRgtAccPnlt?: (number|null);
        dchg?: (string|null);
        dayChangeP?: (string|null);
        weekChange?: (string|null);
        weekChangeP?: (string|null);
    }

    class WeeklyCustomer implements IWeeklyCustomer {
        constructor(properties?: customer.IWeeklyCustomer);
        public cid: string;
        public name: string;
        public uqty: number;
        public uVolVal: number;
        public uWtVal: number;
        public addr: string;
        public cty: string;
        public state: string;
        public zip: string;
        public cntry: string;
        public lat: number;
        public lon: number;
        public geoSt: string;
        public frqByWk: number;
        public cuId: (number|Long);
        public unId: (number|Long);
        public loId: (number|Long);
        public orgRt?: (customer.IDayOfWeek|null);
        public sRt?: (customer.IDayOfWeek|null);
        public wkClstId: number;
        public sos: string;
        public pRt?: (customer.IDayOfWeek|null);
        public lkFlg: string;
        public edId: string;
        public slockCd: string;
        public rtWkCd: string;
        public prRtWkCd: string;
        public prOpUnCd: string;
        public prDispCd: string;
        public wkNo: number;
        public srvcUnitNote1: string;
        public srvcUnitAccCdId: number;
        public srvcUnitAccCd: string;
        public srvcUnitCd: string;
        public creationDtm: string;
        public userDefinedWeekCd: string;
        public totCostTsrv: number;
        public totCostTsrvPrYd: number;
        public weekCodeLockFlag: number;
        public priority: number;
        public srvcUnitNotes2: string;
        public materialType: string;
        public srvcUnitNotes3: string;
        public srvcRtTypCd: string;
        public srvcUnitLftAccPnlt: number;
        public srvcUnitRgtAccPnlt: number;
        public dchg: string;
        public dayChangeP: string;
        public weekChange: string;
        public weekChangeP: string;
        public static create(properties?: customer.IWeeklyCustomer): customer.WeeklyCustomer;
        public static encode(message: customer.IWeeklyCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IWeeklyCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.WeeklyCustomer;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.WeeklyCustomer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.WeeklyCustomer;
        public static toObject(message: customer.WeeklyCustomer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWeeklyCustomerResponse {
        weeklyCustomerList?: (customer.IWeeklyCustomer[]|null);
        shortRes?: (boolean|null);
    }

    class WeeklyCustomerResponse implements IWeeklyCustomerResponse {
        constructor(properties?: customer.IWeeklyCustomerResponse);
        public weeklyCustomerList: customer.IWeeklyCustomer[];
        public shortRes: boolean;
        public static create(properties?: customer.IWeeklyCustomerResponse): customer.WeeklyCustomerResponse;
        public static encode(message: customer.IWeeklyCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IWeeklyCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.WeeklyCustomerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.WeeklyCustomerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.WeeklyCustomerResponse;
        public static toObject(message: customer.WeeklyCustomerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IScenarioCustomerRequest {
        scenarioId?: (number|Long|null);
        srvcOrdrRtDow?: (string|null);
        srvcOrdrRtNo?: (string[]|null);
    }

    class ScenarioCustomerRequest implements IScenarioCustomerRequest {
        constructor(properties?: customer.IScenarioCustomerRequest);
        public scenarioId: (number|Long);
        public srvcOrdrRtDow: string;
        public srvcOrdrRtNo: string[];
        public static create(properties?: customer.IScenarioCustomerRequest): customer.ScenarioCustomerRequest;
        public static encode(message: customer.IScenarioCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IScenarioCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.ScenarioCustomerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.ScenarioCustomerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.ScenarioCustomerRequest;
        public static toObject(message: customer.ScenarioCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRPCustomerReportResponse {
        rpCustomerList?: (customer.IRPCustomerReportData[]|null);
    }

    class RPCustomerReportResponse implements IRPCustomerReportResponse {
        constructor(properties?: customer.IRPCustomerReportResponse);
        public rpCustomerList: customer.IRPCustomerReportData[];
        public static create(properties?: customer.IRPCustomerReportResponse): customer.RPCustomerReportResponse;
        public static encode(message: customer.IRPCustomerReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IRPCustomerReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.RPCustomerReportResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.RPCustomerReportResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.RPCustomerReportResponse;
        public static toObject(message: customer.RPCustomerReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRPCustomerReportData {
        cstmrNo?: (string|null);
        cstmrNm?: (string|null);
        srvcOrdrRtDow?: (string|null);
        srvcOrdrRtNo?: (string|null);
        srvcOrdrRtSeqNo?: (number|null);
        srvcUnitQty?: (number|null);
        srvcUnitVolVal?: (number|null);
        srvcUnitWtVal?: (number|null);
        srvcOrdrSrvcTm?: (number|null);
        lockedFlag?: (string|null);
        srvcAddr1?: (string|null);
        srvcCity?: (string|null);
        srvcStateCd?: (string|null);
        srvcZipCd?: (string|null);
        srvcLat?: (number|null);
        srvcLon?: (number|null);
        notes1?: (string|null);
        srvcOrdrStartTm1?: (string|null);
        srvcOrdrStopTm1?: (string|null);
        srvcOrdrWeekCode?: (string|null);
        containerNotes1?: (string|null);
        containerNotes2?: (string|null);
        containerNotes3?: (string|null);
        userCustom1?: (string|null);
        userCustom2?: (string|null);
        userCustom3?: (string|null);
        acctId?: (number|Long|null);
        opsUnitCd?: (string|null);
        srvcRtTypCd?: (string|null);
        acctNm?: (string|null);
        srvcUnitNotes1?: (string|null);
        srvcUnitNotes2?: (string|null);
        srvcUnitNotes3?: (string|null);
        srvcUnitNotes4?: (string|null);
        srvcUnitNotes5?: (string|null);
        userCustom4?: (string|null);
        userCustom5?: (string|null);
        containerNotesNo2?: (string|null);
    }

    class RPCustomerReportData implements IRPCustomerReportData {
        constructor(properties?: customer.IRPCustomerReportData);
        public cstmrNo: string;
        public cstmrNm: string;
        public srvcOrdrRtDow: string;
        public srvcOrdrRtNo: string;
        public srvcOrdrRtSeqNo: number;
        public srvcUnitQty: number;
        public srvcUnitVolVal: number;
        public srvcUnitWtVal: number;
        public srvcOrdrSrvcTm: number;
        public lockedFlag: string;
        public srvcAddr1: string;
        public srvcCity: string;
        public srvcStateCd: string;
        public srvcZipCd: string;
        public srvcLat: number;
        public srvcLon: number;
        public notes1: string;
        public srvcOrdrStartTm1: string;
        public srvcOrdrStopTm1: string;
        public srvcOrdrWeekCode: string;
        public containerNotes1: string;
        public containerNotes2: string;
        public containerNotes3: string;
        public userCustom1: string;
        public userCustom2: string;
        public userCustom3: string;
        public acctId: (number|Long);
        public opsUnitCd: string;
        public srvcRtTypCd: string;
        public acctNm: string;
        public srvcUnitNotes1: string;
        public srvcUnitNotes2: string;
        public srvcUnitNotes3: string;
        public srvcUnitNotes4: string;
        public srvcUnitNotes5: string;
        public userCustom4: string;
        public userCustom5: string;
        public containerNotesNo2: string;
        public static create(properties?: customer.IRPCustomerReportData): customer.RPCustomerReportData;
        public static encode(message: customer.IRPCustomerReportData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IRPCustomerReportData, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.RPCustomerReportData;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.RPCustomerReportData;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.RPCustomerReportData;
        public static toObject(message: customer.RPCustomerReportData, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IMonthlyPlannerCustomer {
        cid?: (string|null);
        name?: (string|null);
        uqty?: (number|null);
        uVolVal?: (number|null);
        uWtVal?: (number|null);
        addr?: (string|null);
        cty?: (string|null);
        state?: (string|null);
        zip?: (string|null);
        cntry?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        geoSt?: (string|null);
        frqByWk?: (number|null);
        cuId?: (number|Long|null);
        unId?: (number|Long|null);
        loId?: (number|Long|null);
        orgRt?: (customer.IDayOfWeek|null);
        wkClstId?: (number|null);
        sos?: (string|null);
        pRt?: (customer.IDayOfWeek|null);
        lkFlg?: (string|null);
        edId?: (string|null);
        dayChangeP?: (string|null);
        slockCd?: (string|null);
        rtWkCd?: (string|null);
        prRtWkCd?: (string|null);
        prOpUnCd?: (string|null);
        prDispCd?: (string|null);
        srvcUnitNote1?: (string|null);
        prRouteWeek1?: (customer.IDayOfWeek|null);
        prSNoWeek1?: (customer.IDayOfWeek|null);
        prRouteWeek2?: (customer.IDayOfWeek|null);
        prSNoWeek2?: (customer.IDayOfWeek|null);
        prRouteWeek3?: (customer.IDayOfWeek|null);
        prSNoWeek3?: (customer.IDayOfWeek|null);
        prRouteWeek4?: (customer.IDayOfWeek|null);
        prSNoWeek4?: (customer.IDayOfWeek|null);
        srcWkCdCh?: (string|null);
        srcOrdrRtDow?: (string|null);
        srcRouteWeek?: (customer.IDayOfWeek|null);
        weekChangeP?: (string|null);
    }

    class MonthlyPlannerCustomer implements IMonthlyPlannerCustomer {
        constructor(properties?: customer.IMonthlyPlannerCustomer);
        public cid: string;
        public name: string;
        public uqty: number;
        public uVolVal: number;
        public uWtVal: number;
        public addr: string;
        public cty: string;
        public state: string;
        public zip: string;
        public cntry: string;
        public lat: number;
        public lon: number;
        public geoSt: string;
        public frqByWk: number;
        public cuId: (number|Long);
        public unId: (number|Long);
        public loId: (number|Long);
        public orgRt?: (customer.IDayOfWeek|null);
        public wkClstId: number;
        public sos: string;
        public pRt?: (customer.IDayOfWeek|null);
        public lkFlg: string;
        public edId: string;
        public dayChangeP: string;
        public slockCd: string;
        public rtWkCd: string;
        public prRtWkCd: string;
        public prOpUnCd: string;
        public prDispCd: string;
        public srvcUnitNote1: string;
        public prRouteWeek1?: (customer.IDayOfWeek|null);
        public prSNoWeek1?: (customer.IDayOfWeek|null);
        public prRouteWeek2?: (customer.IDayOfWeek|null);
        public prSNoWeek2?: (customer.IDayOfWeek|null);
        public prRouteWeek3?: (customer.IDayOfWeek|null);
        public prSNoWeek3?: (customer.IDayOfWeek|null);
        public prRouteWeek4?: (customer.IDayOfWeek|null);
        public prSNoWeek4?: (customer.IDayOfWeek|null);
        public srcWkCdCh: string;
        public srcOrdrRtDow: string;
        public srcRouteWeek?: (customer.IDayOfWeek|null);
        public weekChangeP: string;
        public static create(properties?: customer.IMonthlyPlannerCustomer): customer.MonthlyPlannerCustomer;
        public static encode(message: customer.IMonthlyPlannerCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IMonthlyPlannerCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.MonthlyPlannerCustomer;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.MonthlyPlannerCustomer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.MonthlyPlannerCustomer;
        public static toObject(message: customer.MonthlyPlannerCustomer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IMonthlyPlannerCustomerRequest {
        acctId?: (number|Long|null);
        opsUnitCd?: (string|null);
        srvcRtTypCd?: (string[]|null);
        srvcOrdrRtWkCd?: (string[]|null);
        selWeekNo?: (number[]|null);
        userNm?: (string|null);
    }

    class MonthlyPlannerCustomerRequest implements IMonthlyPlannerCustomerRequest {
        constructor(properties?: customer.IMonthlyPlannerCustomerRequest);
        public acctId: (number|Long);
        public opsUnitCd: string;
        public srvcRtTypCd: string[];
        public srvcOrdrRtWkCd: string[];
        public selWeekNo: number[];
        public userNm: string;
        public static create(properties?: customer.IMonthlyPlannerCustomerRequest): customer.MonthlyPlannerCustomerRequest;
        public static encode(message: customer.IMonthlyPlannerCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IMonthlyPlannerCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.MonthlyPlannerCustomerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.MonthlyPlannerCustomerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.MonthlyPlannerCustomerRequest;
        public static toObject(message: customer.MonthlyPlannerCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IMonthlyPlannerCustomerResponse {
        monthlyPlannerCustomerList?: (customer.IMonthlyPlannerCustomer[]|null);
    }

    class MonthlyPlannerCustomerResponse implements IMonthlyPlannerCustomerResponse {
        constructor(properties?: customer.IMonthlyPlannerCustomerResponse);
        public monthlyPlannerCustomerList: customer.IMonthlyPlannerCustomer[];
        public static create(properties?: customer.IMonthlyPlannerCustomerResponse): customer.MonthlyPlannerCustomerResponse;
        public static encode(message: customer.IMonthlyPlannerCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IMonthlyPlannerCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.MonthlyPlannerCustomerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.MonthlyPlannerCustomerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.MonthlyPlannerCustomerResponse;
        public static toObject(message: customer.MonthlyPlannerCustomerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWeeklyCustomerShort {
        cid?: (string|null);
        name?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        dow?: (string|null);
        lkFlg?: (string|null);
        addr?: (string|null);
        srcDow?: (string|null);
        unId?: (number|Long|null);
        wkClstId?: (number|null);
        srvcUnitNote1?: (string|null);
        loId?: (number|Long|null);
        srvcUnitNotes2?: (string|null);
        materialType?: (string|null);
        srvcUnitNotes3?: (string|null);
        weeklyCustomerOtherField?: (customer.IWeeklyCustomerOtherField|null);
        srvcRtTypCd?: (string|null);
    }

    class WeeklyCustomerShort implements IWeeklyCustomerShort {
        constructor(properties?: customer.IWeeklyCustomerShort);
        public cid: string;
        public name: string;
        public lat: number;
        public lon: number;
        public dow: string;
        public lkFlg: string;
        public addr: string;
        public srcDow: string;
        public unId: (number|Long);
        public wkClstId: number;
        public srvcUnitNote1: string;
        public loId: (number|Long);
        public srvcUnitNotes2: string;
        public materialType: string;
        public srvcUnitNotes3: string;
        public weeklyCustomerOtherField?: (customer.IWeeklyCustomerOtherField|null);
        public srvcRtTypCd: string;
        public static create(properties?: customer.IWeeklyCustomerShort): customer.WeeklyCustomerShort;
        public static encode(message: customer.IWeeklyCustomerShort, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IWeeklyCustomerShort, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.WeeklyCustomerShort;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.WeeklyCustomerShort;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.WeeklyCustomerShort;
        public static toObject(message: customer.WeeklyCustomerShort, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWeeklyCustomerOtherField {
        rtNo?: (string|null);
        srvcUnitQty?: (number|null);
        srvcUnitVolVal?: (number|null);
    }

    class WeeklyCustomerOtherField implements IWeeklyCustomerOtherField {
        constructor(properties?: customer.IWeeklyCustomerOtherField);
        public rtNo: string;
        public srvcUnitQty: number;
        public srvcUnitVolVal: number;
        public static create(properties?: customer.IWeeklyCustomerOtherField): customer.WeeklyCustomerOtherField;
        public static encode(message: customer.IWeeklyCustomerOtherField, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IWeeklyCustomerOtherField, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.WeeklyCustomerOtherField;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.WeeklyCustomerOtherField;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.WeeklyCustomerOtherField;
        public static toObject(message: customer.WeeklyCustomerOtherField, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IWeeklyCustomerShortResponse {
        weeklyCustomerList?: (customer.IWeeklyCustomerShort[]|null);
        shortRes?: (boolean|null);
    }

    class WeeklyCustomerShortResponse implements IWeeklyCustomerShortResponse {
        constructor(properties?: customer.IWeeklyCustomerShortResponse);
        public weeklyCustomerList: customer.IWeeklyCustomerShort[];
        public shortRes: boolean;
        public static create(properties?: customer.IWeeklyCustomerShortResponse): customer.WeeklyCustomerShortResponse;
        public static encode(message: customer.IWeeklyCustomerShortResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IWeeklyCustomerShortResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.WeeklyCustomerShortResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.WeeklyCustomerShortResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.WeeklyCustomerShortResponse;
        public static toObject(message: customer.WeeklyCustomerShortResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUngeocodedCustomerRequest {
        acctId?: (number|Long|null);
        opsUnitCd?: (string|null);
        srvcRtTypCd?: (string[]|null);
        userNm?: (string|null);
        lobCd?: (string|null);
    }

    class UngeocodedCustomerRequest implements IUngeocodedCustomerRequest {
        constructor(properties?: customer.IUngeocodedCustomerRequest);
        public acctId: (number|Long);
        public opsUnitCd: string;
        public srvcRtTypCd: string[];
        public userNm: string;
        public lobCd: string;
        public static create(properties?: customer.IUngeocodedCustomerRequest): customer.UngeocodedCustomerRequest;
        public static encode(message: customer.IUngeocodedCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IUngeocodedCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.UngeocodedCustomerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.UngeocodedCustomerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.UngeocodedCustomerRequest;
        public static toObject(message: customer.UngeocodedCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUngeocodedCustomer {
        cid?: (string|null);
        name?: (string|null);
        addr?: (string|null);
        cty?: (string|null);
        state?: (string|null);
        zip?: (string|null);
        cntry?: (string|null);
        lat?: (number|null);
        lon?: (number|null);
        sos?: (string|null);
        edId?: (string|null);
        loId?: (number|Long|null);
        geoSt?: (string|null);
        srvcUnitId?: (number|Long|null);
        srvcGeocodeSrc?: (string|null);
        srvcGeocodeSrcDesc?: (string|null);
        srvcGeocodeConf?: (string|null);
    }

    class UngeocodedCustomer implements IUngeocodedCustomer {
        constructor(properties?: customer.IUngeocodedCustomer);
        public cid: string;
        public name: string;
        public addr: string;
        public cty: string;
        public state: string;
        public zip: string;
        public cntry: string;
        public lat: number;
        public lon: number;
        public sos: string;
        public edId: string;
        public loId: (number|Long);
        public geoSt: string;
        public srvcUnitId: (number|Long);
        public srvcGeocodeSrc: string;
        public srvcGeocodeSrcDesc: string;
        public srvcGeocodeConf: string;
        public static create(properties?: customer.IUngeocodedCustomer): customer.UngeocodedCustomer;
        public static encode(message: customer.IUngeocodedCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IUngeocodedCustomer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.UngeocodedCustomer;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.UngeocodedCustomer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.UngeocodedCustomer;
        public static toObject(message: customer.UngeocodedCustomer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUngeocodedCustomerResponse {
        ungeocodedCustomerList?: (customer.IUngeocodedCustomer[]|null);
    }

    class UngeocodedCustomerResponse implements IUngeocodedCustomerResponse {
        constructor(properties?: customer.IUngeocodedCustomerResponse);
        public ungeocodedCustomerList: customer.IUngeocodedCustomer[];
        public static create(properties?: customer.IUngeocodedCustomerResponse): customer.UngeocodedCustomerResponse;
        public static encode(message: customer.IUngeocodedCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IUngeocodedCustomerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.UngeocodedCustomerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.UngeocodedCustomerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.UngeocodedCustomerResponse;
        public static toObject(message: customer.UngeocodedCustomerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILocationResponse {
        roadId?: (string|null);
        sideOfStreet?: (string|null);
        offsetLat?: (number|null);
        offsetLon?: (number|null);
        censusId?: (string|null);
        streetName?: (string|null);
        locSrc?: (string|null);
        srvcLocId?: (number|Long|null);
        userId?: (string|null);
        geocodeStatus?: (boolean|null);
        srvcLon?: (number|null);
        srvcLat?: (number|null);
        geoConf?: (string|null);
        acctId?: (number|Long|null);
        opsUnitCd?: (string|null);
        routeType?: (string|null);
    }

    class LocationResponse implements ILocationResponse {
        constructor(properties?: customer.ILocationResponse);
        public roadId: string;
        public sideOfStreet: string;
        public offsetLat: number;
        public offsetLon: number;
        public censusId: string;
        public streetName: string;
        public locSrc: string;
        public srvcLocId: (number|Long);
        public userId: string;
        public geocodeStatus: boolean;
        public srvcLon: number;
        public srvcLat: number;
        public geoConf: string;
        public acctId: (number|Long);
        public opsUnitCd: string;
        public routeType: string;
        public static create(properties?: customer.ILocationResponse): customer.LocationResponse;
        public static encode(message: customer.ILocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.ILocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.LocationResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.LocationResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.LocationResponse;
        public static toObject(message: customer.LocationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBatchLocationResponse {
        batchLocationResponseList?: (customer.ILocationResponse[]|null);
    }

    class BatchLocationResponse implements IBatchLocationResponse {
        constructor(properties?: customer.IBatchLocationResponse);
        public batchLocationResponseList: customer.ILocationResponse[];
        public static create(properties?: customer.IBatchLocationResponse): customer.BatchLocationResponse;
        public static encode(message: customer.IBatchLocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IBatchLocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.BatchLocationResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.BatchLocationResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.BatchLocationResponse;
        public static toObject(message: customer.BatchLocationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBatchLocationRequest {
        batchLocationRequest?: (customer.ILocationResponse[]|null);
    }

    class BatchLocationRequest implements IBatchLocationRequest {
        constructor(properties?: customer.IBatchLocationRequest);
        public batchLocationRequest: customer.ILocationResponse[];
        public static create(properties?: customer.IBatchLocationRequest): customer.BatchLocationRequest;
        public static encode(message: customer.IBatchLocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: customer.IBatchLocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.BatchLocationRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.BatchLocationRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): customer.BatchLocationRequest;
        public static toObject(message: customer.BatchLocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    class CustomerService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CustomerService;
        public fetchWeeklyCustomersShort(request: customer.ICustomerRequest, callback: customer.CustomerService.fetchWeeklyCustomersShortCallback): void;
        public fetchWeeklyCustomersShort(request: customer.ICustomerRequest): Promise<customer.WeeklyCustomerShortResponse>;
        public fetchBatchGeocodeResponse(request: customer.IBatchLocationRequest, callback: customer.CustomerService.fetchBatchGeocodeResponseCallback): void;
        public fetchBatchGeocodeResponse(request: customer.IBatchLocationRequest): Promise<customer.BatchLocationResponse>;
    }

    namespace CustomerService {

        type fetchWeeklyCustomersShortCallback = (error: (Error|null), response?: customer.WeeklyCustomerShortResponse) => void;

        type fetchBatchGeocodeResponseCallback = (error: (Error|null), response?: customer.BatchLocationResponse) => void;
    }
}
