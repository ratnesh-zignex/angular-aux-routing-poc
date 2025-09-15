/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const customer = $root.customer = (() => {

    /**
     * Namespace customer.
     * @exports customer
     * @namespace
     */
    const customer = {};

    customer.CustomerRequest = (function() {

        /**
         * Properties of a CustomerRequest.
         * @memberof customer
         * @interface ICustomerRequest
         * @property {number|Long|null} [acctId] CustomerRequest acctId
         * @property {string|null} [opsUnitCd] CustomerRequest opsUnitCd
         * @property {Array.<string>|null} [srvcRtTypCd] CustomerRequest srvcRtTypCd
         * @property {Array.<string>|null} [srvcOrdrRtDow] CustomerRequest srvcOrdrRtDow
         * @property {Array.<string>|null} [srvcOrdrRtNo] CustomerRequest srvcOrdrRtNo
         * @property {string|null} [userNm] CustomerRequest userNm
         * @property {string|null} [lobCd] CustomerRequest lobCd
         */

        /**
         * Constructs a new CustomerRequest.
         * @memberof customer
         * @classdesc Represents a CustomerRequest.
         * @implements ICustomerRequest
         * @constructor
         * @param {customer.ICustomerRequest=} [properties] Properties to set
         */
        function CustomerRequest(properties) {
            this.srvcRtTypCd = [];
            this.srvcOrdrRtDow = [];
            this.srvcOrdrRtNo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomerRequest acctId.
         * @member {number|Long} acctId
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.acctId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerRequest opsUnitCd.
         * @member {string} opsUnitCd
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.opsUnitCd = "";

        /**
         * CustomerRequest srvcRtTypCd.
         * @member {Array.<string>} srvcRtTypCd
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.srvcRtTypCd = $util.emptyArray;

        /**
         * CustomerRequest srvcOrdrRtDow.
         * @member {Array.<string>} srvcOrdrRtDow
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.srvcOrdrRtDow = $util.emptyArray;

        /**
         * CustomerRequest srvcOrdrRtNo.
         * @member {Array.<string>} srvcOrdrRtNo
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.srvcOrdrRtNo = $util.emptyArray;

        /**
         * CustomerRequest userNm.
         * @member {string} userNm
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.userNm = "";

        /**
         * CustomerRequest lobCd.
         * @member {string} lobCd
         * @memberof customer.CustomerRequest
         * @instance
         */
        CustomerRequest.prototype.lobCd = "";

        /**
         * Creates a new CustomerRequest instance using the specified properties.
         * @function create
         * @memberof customer.CustomerRequest
         * @static
         * @param {customer.ICustomerRequest=} [properties] Properties to set
         * @returns {customer.CustomerRequest} CustomerRequest instance
         */
        CustomerRequest.create = function create(properties) {
            return new CustomerRequest(properties);
        };

        /**
         * Encodes the specified CustomerRequest message. Does not implicitly {@link customer.CustomerRequest.verify|verify} messages.
         * @function encode
         * @memberof customer.CustomerRequest
         * @static
         * @param {customer.ICustomerRequest} message CustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.acctId);
            if (message.opsUnitCd != null && Object.hasOwnProperty.call(message, "opsUnitCd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.opsUnitCd);
            if (message.srvcRtTypCd != null && message.srvcRtTypCd.length)
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.srvcRtTypCd[i]);
            if (message.srvcOrdrRtDow != null && message.srvcOrdrRtDow.length)
                for (let i = 0; i < message.srvcOrdrRtDow.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.srvcOrdrRtDow[i]);
            if (message.srvcOrdrRtNo != null && message.srvcOrdrRtNo.length)
                for (let i = 0; i < message.srvcOrdrRtNo.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.srvcOrdrRtNo[i]);
            if (message.userNm != null && Object.hasOwnProperty.call(message, "userNm"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userNm);
            if (message.lobCd != null && Object.hasOwnProperty.call(message, "lobCd"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.lobCd);
            return writer;
        };

        /**
         * Encodes the specified CustomerRequest message, length delimited. Does not implicitly {@link customer.CustomerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.CustomerRequest
         * @static
         * @param {customer.ICustomerRequest} message CustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof customer.CustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.CustomerRequest} CustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.CustomerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.acctId = reader.int64();
                    break;
                case 2:
                    message.opsUnitCd = reader.string();
                    break;
                case 3:
                    if (!(message.srvcRtTypCd && message.srvcRtTypCd.length))
                        message.srvcRtTypCd = [];
                    message.srvcRtTypCd.push(reader.string());
                    break;
                case 4:
                    if (!(message.srvcOrdrRtDow && message.srvcOrdrRtDow.length))
                        message.srvcOrdrRtDow = [];
                    message.srvcOrdrRtDow.push(reader.string());
                    break;
                case 5:
                    if (!(message.srvcOrdrRtNo && message.srvcOrdrRtNo.length))
                        message.srvcOrdrRtNo = [];
                    message.srvcOrdrRtNo.push(reader.string());
                    break;
                case 6:
                    message.userNm = reader.string();
                    break;
                case 7:
                    message.lobCd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.CustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.CustomerRequest} CustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomerRequest message.
         * @function verify
         * @memberof customer.CustomerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (!$util.isInteger(message.acctId) && !(message.acctId && $util.isInteger(message.acctId.low) && $util.isInteger(message.acctId.high)))
                    return "acctId: integer|Long expected";
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                if (!$util.isString(message.opsUnitCd))
                    return "opsUnitCd: string expected";
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd")) {
                if (!Array.isArray(message.srvcRtTypCd))
                    return "srvcRtTypCd: array expected";
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    if (!$util.isString(message.srvcRtTypCd[i]))
                        return "srvcRtTypCd: string[] expected";
            }
            if (message.srvcOrdrRtDow != null && message.hasOwnProperty("srvcOrdrRtDow")) {
                if (!Array.isArray(message.srvcOrdrRtDow))
                    return "srvcOrdrRtDow: array expected";
                for (let i = 0; i < message.srvcOrdrRtDow.length; ++i)
                    if (!$util.isString(message.srvcOrdrRtDow[i]))
                        return "srvcOrdrRtDow: string[] expected";
            }
            if (message.srvcOrdrRtNo != null && message.hasOwnProperty("srvcOrdrRtNo")) {
                if (!Array.isArray(message.srvcOrdrRtNo))
                    return "srvcOrdrRtNo: array expected";
                for (let i = 0; i < message.srvcOrdrRtNo.length; ++i)
                    if (!$util.isString(message.srvcOrdrRtNo[i]))
                        return "srvcOrdrRtNo: string[] expected";
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                if (!$util.isString(message.userNm))
                    return "userNm: string expected";
            if (message.lobCd != null && message.hasOwnProperty("lobCd"))
                if (!$util.isString(message.lobCd))
                    return "lobCd: string expected";
            return null;
        };

        /**
         * Creates a CustomerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.CustomerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.CustomerRequest} CustomerRequest
         */
        CustomerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.CustomerRequest)
                return object;
            let message = new $root.customer.CustomerRequest();
            if (object.acctId != null)
                if ($util.Long)
                    (message.acctId = $util.Long.fromValue(object.acctId)).unsigned = false;
                else if (typeof object.acctId === "string")
                    message.acctId = parseInt(object.acctId, 10);
                else if (typeof object.acctId === "number")
                    message.acctId = object.acctId;
                else if (typeof object.acctId === "object")
                    message.acctId = new $util.LongBits(object.acctId.low >>> 0, object.acctId.high >>> 0).toNumber();
            if (object.opsUnitCd != null)
                message.opsUnitCd = String(object.opsUnitCd);
            if (object.srvcRtTypCd) {
                if (!Array.isArray(object.srvcRtTypCd))
                    throw TypeError(".customer.CustomerRequest.srvcRtTypCd: array expected");
                message.srvcRtTypCd = [];
                for (let i = 0; i < object.srvcRtTypCd.length; ++i)
                    message.srvcRtTypCd[i] = String(object.srvcRtTypCd[i]);
            }
            if (object.srvcOrdrRtDow) {
                if (!Array.isArray(object.srvcOrdrRtDow))
                    throw TypeError(".customer.CustomerRequest.srvcOrdrRtDow: array expected");
                message.srvcOrdrRtDow = [];
                for (let i = 0; i < object.srvcOrdrRtDow.length; ++i)
                    message.srvcOrdrRtDow[i] = String(object.srvcOrdrRtDow[i]);
            }
            if (object.srvcOrdrRtNo) {
                if (!Array.isArray(object.srvcOrdrRtNo))
                    throw TypeError(".customer.CustomerRequest.srvcOrdrRtNo: array expected");
                message.srvcOrdrRtNo = [];
                for (let i = 0; i < object.srvcOrdrRtNo.length; ++i)
                    message.srvcOrdrRtNo[i] = String(object.srvcOrdrRtNo[i]);
            }
            if (object.userNm != null)
                message.userNm = String(object.userNm);
            if (object.lobCd != null)
                message.lobCd = String(object.lobCd);
            return message;
        };

        /**
         * Creates a plain object from a CustomerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.CustomerRequest
         * @static
         * @param {customer.CustomerRequest} message CustomerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.srvcRtTypCd = [];
                object.srvcOrdrRtDow = [];
                object.srvcOrdrRtNo = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.acctId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.acctId = options.longs === String ? "0" : 0;
                object.opsUnitCd = "";
                object.userNm = "";
                object.lobCd = "";
            }
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (typeof message.acctId === "number")
                    object.acctId = options.longs === String ? String(message.acctId) : message.acctId;
                else
                    object.acctId = options.longs === String ? $util.Long.prototype.toString.call(message.acctId) : options.longs === Number ? new $util.LongBits(message.acctId.low >>> 0, message.acctId.high >>> 0).toNumber() : message.acctId;
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                object.opsUnitCd = message.opsUnitCd;
            if (message.srvcRtTypCd && message.srvcRtTypCd.length) {
                object.srvcRtTypCd = [];
                for (let j = 0; j < message.srvcRtTypCd.length; ++j)
                    object.srvcRtTypCd[j] = message.srvcRtTypCd[j];
            }
            if (message.srvcOrdrRtDow && message.srvcOrdrRtDow.length) {
                object.srvcOrdrRtDow = [];
                for (let j = 0; j < message.srvcOrdrRtDow.length; ++j)
                    object.srvcOrdrRtDow[j] = message.srvcOrdrRtDow[j];
            }
            if (message.srvcOrdrRtNo && message.srvcOrdrRtNo.length) {
                object.srvcOrdrRtNo = [];
                for (let j = 0; j < message.srvcOrdrRtNo.length; ++j)
                    object.srvcOrdrRtNo[j] = message.srvcOrdrRtNo[j];
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                object.userNm = message.userNm;
            if (message.lobCd != null && message.hasOwnProperty("lobCd"))
                object.lobCd = message.lobCd;
            return object;
        };

        /**
         * Converts this CustomerRequest to JSON.
         * @function toJSON
         * @memberof customer.CustomerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomerRequest;
    })();

    customer.CustomerResponse = (function() {

        /**
         * Properties of a CustomerResponse.
         * @memberof customer
         * @interface ICustomerResponse
         * @property {Array.<customer.ICustomer>|null} [customerArray] CustomerResponse customerArray
         */

        /**
         * Constructs a new CustomerResponse.
         * @memberof customer
         * @classdesc Represents a CustomerResponse.
         * @implements ICustomerResponse
         * @constructor
         * @param {customer.ICustomerResponse=} [properties] Properties to set
         */
        function CustomerResponse(properties) {
            this.customerArray = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomerResponse customerArray.
         * @member {Array.<customer.ICustomer>} customerArray
         * @memberof customer.CustomerResponse
         * @instance
         */
        CustomerResponse.prototype.customerArray = $util.emptyArray;

        /**
         * Creates a new CustomerResponse instance using the specified properties.
         * @function create
         * @memberof customer.CustomerResponse
         * @static
         * @param {customer.ICustomerResponse=} [properties] Properties to set
         * @returns {customer.CustomerResponse} CustomerResponse instance
         */
        CustomerResponse.create = function create(properties) {
            return new CustomerResponse(properties);
        };

        /**
         * Encodes the specified CustomerResponse message. Does not implicitly {@link customer.CustomerResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.CustomerResponse
         * @static
         * @param {customer.ICustomerResponse} message CustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customerArray != null && message.customerArray.length)
                for (let i = 0; i < message.customerArray.length; ++i)
                    $root.customer.Customer.encode(message.customerArray[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CustomerResponse message, length delimited. Does not implicitly {@link customer.CustomerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.CustomerResponse
         * @static
         * @param {customer.ICustomerResponse} message CustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.CustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.CustomerResponse} CustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.CustomerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.customerArray && message.customerArray.length))
                        message.customerArray = [];
                    message.customerArray.push($root.customer.Customer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.CustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.CustomerResponse} CustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomerResponse message.
         * @function verify
         * @memberof customer.CustomerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customerArray != null && message.hasOwnProperty("customerArray")) {
                if (!Array.isArray(message.customerArray))
                    return "customerArray: array expected";
                for (let i = 0; i < message.customerArray.length; ++i) {
                    let error = $root.customer.Customer.verify(message.customerArray[i]);
                    if (error)
                        return "customerArray." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CustomerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.CustomerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.CustomerResponse} CustomerResponse
         */
        CustomerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.CustomerResponse)
                return object;
            let message = new $root.customer.CustomerResponse();
            if (object.customerArray) {
                if (!Array.isArray(object.customerArray))
                    throw TypeError(".customer.CustomerResponse.customerArray: array expected");
                message.customerArray = [];
                for (let i = 0; i < object.customerArray.length; ++i) {
                    if (typeof object.customerArray[i] !== "object")
                        throw TypeError(".customer.CustomerResponse.customerArray: object expected");
                    message.customerArray[i] = $root.customer.Customer.fromObject(object.customerArray[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CustomerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.CustomerResponse
         * @static
         * @param {customer.CustomerResponse} message CustomerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.customerArray = [];
            if (message.customerArray && message.customerArray.length) {
                object.customerArray = [];
                for (let j = 0; j < message.customerArray.length; ++j)
                    object.customerArray[j] = $root.customer.Customer.toObject(message.customerArray[j], options);
            }
            return object;
        };

        /**
         * Converts this CustomerResponse to JSON.
         * @function toJSON
         * @memberof customer.CustomerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomerResponse;
    })();

    customer.Customer = (function() {

        /**
         * Properties of a Customer.
         * @memberof customer
         * @interface ICustomer
         * @property {string|null} [cid] Customer cid
         * @property {string|null} [name] Customer name
         * @property {string|null} [rNo] Customer rNo
         * @property {number|null} [sNo] Customer sNo
         * @property {number|null} [uqty] Customer uqty
         * @property {number|null} [uVolVal] Customer uVolVal
         * @property {number|null} [uWtVal] Customer uWtVal
         * @property {number|null} [srvctm] Customer srvctm
         * @property {string|null} [strtm] Customer strtm
         * @property {string|null} [stptm] Customer stptm
         * @property {string|null} [addr] Customer addr
         * @property {string|null} [cty] Customer cty
         * @property {string|null} [state] Customer state
         * @property {string|null} [zip] Customer zip
         * @property {string|null} [cntry] Customer cntry
         * @property {number|null} [lat] Customer lat
         * @property {number|null} [lon] Customer lon
         * @property {string|null} [srcDOW] Customer srcDOW
         * @property {string|null} [srcRNo] Customer srcRNo
         * @property {number|null} [srcSNo] Customer srcSNo
         * @property {string|null} [geoSt] Customer geoSt
         * @property {string|null} [note1] Customer note1
         * @property {number|Long|null} [uid] Customer uid
         * @property {number|Long|null} [cuId] Customer cuId
         * @property {number|Long|null} [unId] Customer unId
         * @property {number|Long|null} [orId] Customer orId
         * @property {number|Long|null} [loId] Customer loId
         * @property {number|Long|null} [noId] Customer noId
         * @property {number|null} [clstId] Customer clstId
         * @property {string|null} [sos] Customer sos
         * @property {string|null} [lkFlgD] Customer lkFlgD
         * @property {number|null} [adTm] Customer adTm
         * @property {number|null} [tTsrv] Customer tTsrv
         * @property {number|null} [tcTsrv] Customer tcTsrv
         * @property {string|null} [pRDow] Customer pRDow
         * @property {number|null} [oPr] Customer oPr
         * @property {string|null} [srvcOrdrSrcDispCd] Customer srvcOrdrSrcDispCd
         * @property {number|null} [sOLNo] Customer sOLNo
         * @property {string|null} [edId] Customer edId
         * @property {string|null} [pRt] Customer pRt
         * @property {number|null} [pSeq] Customer pSeq
         * @property {string|null} [vStLc] Customer vStLc
         * @property {string|null} [vEdLc] Customer vEdLc
         * @property {string|null} [osPkup] Customer osPkup
         * @property {string|null} [prOpUnCd] Customer prOpUnCd
         * @property {string|null} [prDispCd] Customer prDispCd
         * @property {string|null} [rtWkCd] Customer rtWkCd
         * @property {number|null} [wkNo] Customer wkNo
         * @property {string|null} [note2] Customer note2
         * @property {number|null} [srvcUnitAccCdId] Customer srvcUnitAccCdId
         * @property {string|null} [srvcUnitAccCd] Customer srvcUnitAccCd
         * @property {string|null} [notes1] Customer notes1
         * @property {string|null} [notes3] Customer notes3
         * @property {string|null} [userCustom1] Customer userCustom1
         * @property {string|null} [userCustom2] Customer userCustom2
         * @property {string|null} [userCustom3] Customer userCustom3
         * @property {string|null} [creationDtm] Customer creationDtm
         * @property {string|null} [srvcOrdrCode] Customer srvcOrdrCode
         * @property {string|null} [userDefinedWeekCd] Customer userDefinedWeekCd
         * @property {number|null} [totCostTsrvPrYd] Customer totCostTsrvPrYd
         * @property {string|null} [userId] Customer userId
         * @property {string|null} [srvcUnitNote1] Customer srvcUnitNote1
         * @property {string|null} [materialType] Customer materialType
         * @property {number|null} [weekCodeLockFlag] Customer weekCodeLockFlag
         * @property {string|null} [srvcGeocodeSrc] Customer srvcGeocodeSrc
         * @property {string|null} [srvcGeocodeSrcDesc] Customer srvcGeocodeSrcDesc
         * @property {string|null} [srvcGeocodeConf] Customer srvcGeocodeConf
         * @property {number|null} [srvcUnitFrqByWk] Customer srvcUnitFrqByWk
         * @property {string|null} [notes4] Customer notes4
         * @property {string|null} [notes5] Customer notes5
         * @property {string|null} [userCustom4] Customer userCustom4
         * @property {string|null} [userCustom5] Customer userCustom5
         * @property {string|null} [srvcUnitNotes2] Customer srvcUnitNotes2
         * @property {number|null} [mapPageNo] Customer mapPageNo
         * @property {string|null} [srvcUnitNotes3] Customer srvcUnitNotes3
         * @property {number|null} [srvcUnitLftAccPnlt] Customer srvcUnitLftAccPnlt
         * @property {number|null} [srvcUnitRgtAccPnlt] Customer srvcUnitRgtAccPnlt
         * @property {string|null} [dchg] Customer dchg
         * @property {string|null} [dayChangeP] Customer dayChangeP
         * @property {string|null} [weekChange] Customer weekChange
         * @property {string|null} [weekChangeP] Customer weekChangeP
         */

        /**
         * Constructs a new Customer.
         * @memberof customer
         * @classdesc Represents a Customer.
         * @implements ICustomer
         * @constructor
         * @param {customer.ICustomer=} [properties] Properties to set
         */
        function Customer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Customer cid.
         * @member {string} cid
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.cid = "";

        /**
         * Customer name.
         * @member {string} name
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.name = "";

        /**
         * Customer rNo.
         * @member {string} rNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.rNo = "";

        /**
         * Customer sNo.
         * @member {number} sNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.sNo = 0;

        /**
         * Customer uqty.
         * @member {number} uqty
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.uqty = 0;

        /**
         * Customer uVolVal.
         * @member {number} uVolVal
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.uVolVal = 0;

        /**
         * Customer uWtVal.
         * @member {number} uWtVal
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.uWtVal = 0;

        /**
         * Customer srvctm.
         * @member {number} srvctm
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvctm = 0;

        /**
         * Customer strtm.
         * @member {string} strtm
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.strtm = "";

        /**
         * Customer stptm.
         * @member {string} stptm
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.stptm = "";

        /**
         * Customer addr.
         * @member {string} addr
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.addr = "";

        /**
         * Customer cty.
         * @member {string} cty
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.cty = "";

        /**
         * Customer state.
         * @member {string} state
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.state = "";

        /**
         * Customer zip.
         * @member {string} zip
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.zip = "";

        /**
         * Customer cntry.
         * @member {string} cntry
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.cntry = "";

        /**
         * Customer lat.
         * @member {number} lat
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.lat = 0;

        /**
         * Customer lon.
         * @member {number} lon
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.lon = 0;

        /**
         * Customer srcDOW.
         * @member {string} srcDOW
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srcDOW = "";

        /**
         * Customer srcRNo.
         * @member {string} srcRNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srcRNo = "";

        /**
         * Customer srcSNo.
         * @member {number} srcSNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srcSNo = 0;

        /**
         * Customer geoSt.
         * @member {string} geoSt
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.geoSt = "";

        /**
         * Customer note1.
         * @member {string} note1
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.note1 = "";

        /**
         * Customer uid.
         * @member {number|Long} uid
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer cuId.
         * @member {number|Long} cuId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.cuId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer unId.
         * @member {number|Long} unId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.unId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer orId.
         * @member {number|Long} orId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.orId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer loId.
         * @member {number|Long} loId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer noId.
         * @member {number|Long} noId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.noId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Customer clstId.
         * @member {number} clstId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.clstId = 0;

        /**
         * Customer sos.
         * @member {string} sos
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.sos = "";

        /**
         * Customer lkFlgD.
         * @member {string} lkFlgD
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.lkFlgD = "";

        /**
         * Customer adTm.
         * @member {number} adTm
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.adTm = 0;

        /**
         * Customer tTsrv.
         * @member {number} tTsrv
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.tTsrv = 0;

        /**
         * Customer tcTsrv.
         * @member {number} tcTsrv
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.tcTsrv = 0;

        /**
         * Customer pRDow.
         * @member {string} pRDow
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.pRDow = "";

        /**
         * Customer oPr.
         * @member {number} oPr
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.oPr = 0;

        /**
         * Customer srvcOrdrSrcDispCd.
         * @member {string} srvcOrdrSrcDispCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcOrdrSrcDispCd = "";

        /**
         * Customer sOLNo.
         * @member {number} sOLNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.sOLNo = 0;

        /**
         * Customer edId.
         * @member {string} edId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.edId = "";

        /**
         * Customer pRt.
         * @member {string} pRt
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.pRt = "";

        /**
         * Customer pSeq.
         * @member {number} pSeq
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.pSeq = 0;

        /**
         * Customer vStLc.
         * @member {string} vStLc
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.vStLc = "";

        /**
         * Customer vEdLc.
         * @member {string} vEdLc
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.vEdLc = "";

        /**
         * Customer osPkup.
         * @member {string} osPkup
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.osPkup = "";

        /**
         * Customer prOpUnCd.
         * @member {string} prOpUnCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.prOpUnCd = "";

        /**
         * Customer prDispCd.
         * @member {string} prDispCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.prDispCd = "";

        /**
         * Customer rtWkCd.
         * @member {string} rtWkCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.rtWkCd = "";

        /**
         * Customer wkNo.
         * @member {number} wkNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.wkNo = 0;

        /**
         * Customer note2.
         * @member {string} note2
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.note2 = "";

        /**
         * Customer srvcUnitAccCdId.
         * @member {number} srvcUnitAccCdId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitAccCdId = 0;

        /**
         * Customer srvcUnitAccCd.
         * @member {string} srvcUnitAccCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitAccCd = "";

        /**
         * Customer notes1.
         * @member {string} notes1
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.notes1 = "";

        /**
         * Customer notes3.
         * @member {string} notes3
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.notes3 = "";

        /**
         * Customer userCustom1.
         * @member {string} userCustom1
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userCustom1 = "";

        /**
         * Customer userCustom2.
         * @member {string} userCustom2
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userCustom2 = "";

        /**
         * Customer userCustom3.
         * @member {string} userCustom3
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userCustom3 = "";

        /**
         * Customer creationDtm.
         * @member {string} creationDtm
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.creationDtm = "";

        /**
         * Customer srvcOrdrCode.
         * @member {string} srvcOrdrCode
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcOrdrCode = "";

        /**
         * Customer userDefinedWeekCd.
         * @member {string} userDefinedWeekCd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userDefinedWeekCd = "";

        /**
         * Customer totCostTsrvPrYd.
         * @member {number} totCostTsrvPrYd
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.totCostTsrvPrYd = 0;

        /**
         * Customer userId.
         * @member {string} userId
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userId = "";

        /**
         * Customer srvcUnitNote1.
         * @member {string} srvcUnitNote1
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitNote1 = "";

        /**
         * Customer materialType.
         * @member {string} materialType
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.materialType = "";

        /**
         * Customer weekCodeLockFlag.
         * @member {number} weekCodeLockFlag
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.weekCodeLockFlag = 0;

        /**
         * Customer srvcGeocodeSrc.
         * @member {string} srvcGeocodeSrc
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcGeocodeSrc = "";

        /**
         * Customer srvcGeocodeSrcDesc.
         * @member {string} srvcGeocodeSrcDesc
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcGeocodeSrcDesc = "";

        /**
         * Customer srvcGeocodeConf.
         * @member {string} srvcGeocodeConf
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcGeocodeConf = "";

        /**
         * Customer srvcUnitFrqByWk.
         * @member {number} srvcUnitFrqByWk
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitFrqByWk = 0;

        /**
         * Customer notes4.
         * @member {string} notes4
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.notes4 = "";

        /**
         * Customer notes5.
         * @member {string} notes5
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.notes5 = "";

        /**
         * Customer userCustom4.
         * @member {string} userCustom4
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userCustom4 = "";

        /**
         * Customer userCustom5.
         * @member {string} userCustom5
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.userCustom5 = "";

        /**
         * Customer srvcUnitNotes2.
         * @member {string} srvcUnitNotes2
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitNotes2 = "";

        /**
         * Customer mapPageNo.
         * @member {number} mapPageNo
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.mapPageNo = 0;

        /**
         * Customer srvcUnitNotes3.
         * @member {string} srvcUnitNotes3
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitNotes3 = "";

        /**
         * Customer srvcUnitLftAccPnlt.
         * @member {number} srvcUnitLftAccPnlt
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitLftAccPnlt = 0;

        /**
         * Customer srvcUnitRgtAccPnlt.
         * @member {number} srvcUnitRgtAccPnlt
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.srvcUnitRgtAccPnlt = 0;

        /**
         * Customer dchg.
         * @member {string} dchg
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.dchg = "";

        /**
         * Customer dayChangeP.
         * @member {string} dayChangeP
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.dayChangeP = "";

        /**
         * Customer weekChange.
         * @member {string} weekChange
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.weekChange = "";

        /**
         * Customer weekChangeP.
         * @member {string} weekChangeP
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.weekChangeP = "";

        /**
         * Creates a new Customer instance using the specified properties.
         * @function create
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer=} [properties] Properties to set
         * @returns {customer.Customer} Customer instance
         */
        Customer.create = function create(properties) {
            return new Customer(properties);
        };

        /**
         * Encodes the specified Customer message. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @function encode
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer} message Customer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Customer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.rNo != null && Object.hasOwnProperty.call(message, "rNo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rNo);
            if (message.sNo != null && Object.hasOwnProperty.call(message, "sNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sNo);
            if (message.uqty != null && Object.hasOwnProperty.call(message, "uqty"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.uqty);
            if (message.uVolVal != null && Object.hasOwnProperty.call(message, "uVolVal"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.uVolVal);
            if (message.uWtVal != null && Object.hasOwnProperty.call(message, "uWtVal"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.uWtVal);
            if (message.srvctm != null && Object.hasOwnProperty.call(message, "srvctm"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.srvctm);
            if (message.strtm != null && Object.hasOwnProperty.call(message, "strtm"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.strtm);
            if (message.stptm != null && Object.hasOwnProperty.call(message, "stptm"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.stptm);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.addr);
            if (message.cty != null && Object.hasOwnProperty.call(message, "cty"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.cty);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.state);
            if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.zip);
            if (message.cntry != null && Object.hasOwnProperty.call(message, "cntry"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.cntry);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 16, wireType 1 =*/129).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 17, wireType 1 =*/137).double(message.lon);
            if (message.srcDOW != null && Object.hasOwnProperty.call(message, "srcDOW"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.srcDOW);
            if (message.srcRNo != null && Object.hasOwnProperty.call(message, "srcRNo"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.srcRNo);
            if (message.srcSNo != null && Object.hasOwnProperty.call(message, "srcSNo"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.srcSNo);
            if (message.geoSt != null && Object.hasOwnProperty.call(message, "geoSt"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.geoSt);
            if (message.note1 != null && Object.hasOwnProperty.call(message, "note1"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.note1);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.uid);
            if (message.cuId != null && Object.hasOwnProperty.call(message, "cuId"))
                writer.uint32(/* id 24, wireType 0 =*/192).int64(message.cuId);
            if (message.unId != null && Object.hasOwnProperty.call(message, "unId"))
                writer.uint32(/* id 25, wireType 0 =*/200).int64(message.unId);
            if (message.orId != null && Object.hasOwnProperty.call(message, "orId"))
                writer.uint32(/* id 26, wireType 0 =*/208).int64(message.orId);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 27, wireType 0 =*/216).int64(message.loId);
            if (message.noId != null && Object.hasOwnProperty.call(message, "noId"))
                writer.uint32(/* id 28, wireType 0 =*/224).int64(message.noId);
            if (message.clstId != null && Object.hasOwnProperty.call(message, "clstId"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.clstId);
            if (message.sos != null && Object.hasOwnProperty.call(message, "sos"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.sos);
            if (message.lkFlgD != null && Object.hasOwnProperty.call(message, "lkFlgD"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.lkFlgD);
            if (message.adTm != null && Object.hasOwnProperty.call(message, "adTm"))
                writer.uint32(/* id 32, wireType 1 =*/257).double(message.adTm);
            if (message.tTsrv != null && Object.hasOwnProperty.call(message, "tTsrv"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.tTsrv);
            if (message.tcTsrv != null && Object.hasOwnProperty.call(message, "tcTsrv"))
                writer.uint32(/* id 34, wireType 1 =*/273).double(message.tcTsrv);
            if (message.pRDow != null && Object.hasOwnProperty.call(message, "pRDow"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.pRDow);
            if (message.oPr != null && Object.hasOwnProperty.call(message, "oPr"))
                writer.uint32(/* id 36, wireType 0 =*/288).int32(message.oPr);
            if (message.srvcOrdrSrcDispCd != null && Object.hasOwnProperty.call(message, "srvcOrdrSrcDispCd"))
                writer.uint32(/* id 37, wireType 2 =*/298).string(message.srvcOrdrSrcDispCd);
            if (message.sOLNo != null && Object.hasOwnProperty.call(message, "sOLNo"))
                writer.uint32(/* id 38, wireType 0 =*/304).int32(message.sOLNo);
            if (message.edId != null && Object.hasOwnProperty.call(message, "edId"))
                writer.uint32(/* id 39, wireType 2 =*/314).string(message.edId);
            if (message.pRt != null && Object.hasOwnProperty.call(message, "pRt"))
                writer.uint32(/* id 40, wireType 2 =*/322).string(message.pRt);
            if (message.pSeq != null && Object.hasOwnProperty.call(message, "pSeq"))
                writer.uint32(/* id 41, wireType 0 =*/328).int32(message.pSeq);
            if (message.vStLc != null && Object.hasOwnProperty.call(message, "vStLc"))
                writer.uint32(/* id 43, wireType 2 =*/346).string(message.vStLc);
            if (message.vEdLc != null && Object.hasOwnProperty.call(message, "vEdLc"))
                writer.uint32(/* id 44, wireType 2 =*/354).string(message.vEdLc);
            if (message.osPkup != null && Object.hasOwnProperty.call(message, "osPkup"))
                writer.uint32(/* id 45, wireType 2 =*/362).string(message.osPkup);
            if (message.prOpUnCd != null && Object.hasOwnProperty.call(message, "prOpUnCd"))
                writer.uint32(/* id 46, wireType 2 =*/370).string(message.prOpUnCd);
            if (message.prDispCd != null && Object.hasOwnProperty.call(message, "prDispCd"))
                writer.uint32(/* id 47, wireType 2 =*/378).string(message.prDispCd);
            if (message.rtWkCd != null && Object.hasOwnProperty.call(message, "rtWkCd"))
                writer.uint32(/* id 48, wireType 2 =*/386).string(message.rtWkCd);
            if (message.wkNo != null && Object.hasOwnProperty.call(message, "wkNo"))
                writer.uint32(/* id 49, wireType 0 =*/392).int32(message.wkNo);
            if (message.note2 != null && Object.hasOwnProperty.call(message, "note2"))
                writer.uint32(/* id 50, wireType 2 =*/402).string(message.note2);
            if (message.srvcUnitAccCdId != null && Object.hasOwnProperty.call(message, "srvcUnitAccCdId"))
                writer.uint32(/* id 51, wireType 0 =*/408).int32(message.srvcUnitAccCdId);
            if (message.srvcUnitAccCd != null && Object.hasOwnProperty.call(message, "srvcUnitAccCd"))
                writer.uint32(/* id 52, wireType 2 =*/418).string(message.srvcUnitAccCd);
            if (message.notes1 != null && Object.hasOwnProperty.call(message, "notes1"))
                writer.uint32(/* id 53, wireType 2 =*/426).string(message.notes1);
            if (message.notes3 != null && Object.hasOwnProperty.call(message, "notes3"))
                writer.uint32(/* id 54, wireType 2 =*/434).string(message.notes3);
            if (message.userCustom1 != null && Object.hasOwnProperty.call(message, "userCustom1"))
                writer.uint32(/* id 55, wireType 2 =*/442).string(message.userCustom1);
            if (message.userCustom2 != null && Object.hasOwnProperty.call(message, "userCustom2"))
                writer.uint32(/* id 56, wireType 2 =*/450).string(message.userCustom2);
            if (message.userCustom3 != null && Object.hasOwnProperty.call(message, "userCustom3"))
                writer.uint32(/* id 57, wireType 2 =*/458).string(message.userCustom3);
            if (message.creationDtm != null && Object.hasOwnProperty.call(message, "creationDtm"))
                writer.uint32(/* id 58, wireType 2 =*/466).string(message.creationDtm);
            if (message.srvcOrdrCode != null && Object.hasOwnProperty.call(message, "srvcOrdrCode"))
                writer.uint32(/* id 59, wireType 2 =*/474).string(message.srvcOrdrCode);
            if (message.userDefinedWeekCd != null && Object.hasOwnProperty.call(message, "userDefinedWeekCd"))
                writer.uint32(/* id 60, wireType 2 =*/482).string(message.userDefinedWeekCd);
            if (message.totCostTsrvPrYd != null && Object.hasOwnProperty.call(message, "totCostTsrvPrYd"))
                writer.uint32(/* id 61, wireType 1 =*/489).double(message.totCostTsrvPrYd);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 62, wireType 2 =*/498).string(message.userId);
            if (message.srvcUnitNote1 != null && Object.hasOwnProperty.call(message, "srvcUnitNote1"))
                writer.uint32(/* id 63, wireType 2 =*/506).string(message.srvcUnitNote1);
            if (message.materialType != null && Object.hasOwnProperty.call(message, "materialType"))
                writer.uint32(/* id 64, wireType 2 =*/514).string(message.materialType);
            if (message.weekCodeLockFlag != null && Object.hasOwnProperty.call(message, "weekCodeLockFlag"))
                writer.uint32(/* id 65, wireType 0 =*/520).int32(message.weekCodeLockFlag);
            if (message.srvcGeocodeSrc != null && Object.hasOwnProperty.call(message, "srvcGeocodeSrc"))
                writer.uint32(/* id 66, wireType 2 =*/530).string(message.srvcGeocodeSrc);
            if (message.srvcGeocodeSrcDesc != null && Object.hasOwnProperty.call(message, "srvcGeocodeSrcDesc"))
                writer.uint32(/* id 67, wireType 2 =*/538).string(message.srvcGeocodeSrcDesc);
            if (message.srvcGeocodeConf != null && Object.hasOwnProperty.call(message, "srvcGeocodeConf"))
                writer.uint32(/* id 68, wireType 2 =*/546).string(message.srvcGeocodeConf);
            if (message.srvcUnitFrqByWk != null && Object.hasOwnProperty.call(message, "srvcUnitFrqByWk"))
                writer.uint32(/* id 69, wireType 0 =*/552).int32(message.srvcUnitFrqByWk);
            if (message.notes4 != null && Object.hasOwnProperty.call(message, "notes4"))
                writer.uint32(/* id 70, wireType 2 =*/562).string(message.notes4);
            if (message.notes5 != null && Object.hasOwnProperty.call(message, "notes5"))
                writer.uint32(/* id 71, wireType 2 =*/570).string(message.notes5);
            if (message.userCustom4 != null && Object.hasOwnProperty.call(message, "userCustom4"))
                writer.uint32(/* id 72, wireType 2 =*/578).string(message.userCustom4);
            if (message.userCustom5 != null && Object.hasOwnProperty.call(message, "userCustom5"))
                writer.uint32(/* id 73, wireType 2 =*/586).string(message.userCustom5);
            if (message.srvcUnitNotes2 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes2"))
                writer.uint32(/* id 74, wireType 2 =*/594).string(message.srvcUnitNotes2);
            if (message.mapPageNo != null && Object.hasOwnProperty.call(message, "mapPageNo"))
                writer.uint32(/* id 75, wireType 0 =*/600).int32(message.mapPageNo);
            if (message.srvcUnitNotes3 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes3"))
                writer.uint32(/* id 76, wireType 2 =*/610).string(message.srvcUnitNotes3);
            if (message.srvcUnitLftAccPnlt != null && Object.hasOwnProperty.call(message, "srvcUnitLftAccPnlt"))
                writer.uint32(/* id 77, wireType 0 =*/616).int32(message.srvcUnitLftAccPnlt);
            if (message.srvcUnitRgtAccPnlt != null && Object.hasOwnProperty.call(message, "srvcUnitRgtAccPnlt"))
                writer.uint32(/* id 78, wireType 0 =*/624).int32(message.srvcUnitRgtAccPnlt);
            if (message.dchg != null && Object.hasOwnProperty.call(message, "dchg"))
                writer.uint32(/* id 81, wireType 2 =*/650).string(message.dchg);
            if (message.dayChangeP != null && Object.hasOwnProperty.call(message, "dayChangeP"))
                writer.uint32(/* id 82, wireType 2 =*/658).string(message.dayChangeP);
            if (message.weekChange != null && Object.hasOwnProperty.call(message, "weekChange"))
                writer.uint32(/* id 83, wireType 2 =*/666).string(message.weekChange);
            if (message.weekChangeP != null && Object.hasOwnProperty.call(message, "weekChangeP"))
                writer.uint32(/* id 84, wireType 2 =*/674).string(message.weekChangeP);
            return writer;
        };

        /**
         * Encodes the specified Customer message, length delimited. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer} message Customer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Customer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Customer message from the specified reader or buffer.
         * @function decode
         * @memberof customer.Customer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.Customer} Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Customer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.Customer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.rNo = reader.string();
                    break;
                case 4:
                    message.sNo = reader.int32();
                    break;
                case 5:
                    message.uqty = reader.double();
                    break;
                case 6:
                    message.uVolVal = reader.double();
                    break;
                case 7:
                    message.uWtVal = reader.double();
                    break;
                case 8:
                    message.srvctm = reader.int32();
                    break;
                case 9:
                    message.strtm = reader.string();
                    break;
                case 10:
                    message.stptm = reader.string();
                    break;
                case 11:
                    message.addr = reader.string();
                    break;
                case 12:
                    message.cty = reader.string();
                    break;
                case 13:
                    message.state = reader.string();
                    break;
                case 14:
                    message.zip = reader.string();
                    break;
                case 15:
                    message.cntry = reader.string();
                    break;
                case 16:
                    message.lat = reader.double();
                    break;
                case 17:
                    message.lon = reader.double();
                    break;
                case 18:
                    message.srcDOW = reader.string();
                    break;
                case 19:
                    message.srcRNo = reader.string();
                    break;
                case 20:
                    message.srcSNo = reader.int32();
                    break;
                case 21:
                    message.geoSt = reader.string();
                    break;
                case 22:
                    message.note1 = reader.string();
                    break;
                case 23:
                    message.uid = reader.int64();
                    break;
                case 24:
                    message.cuId = reader.int64();
                    break;
                case 25:
                    message.unId = reader.int64();
                    break;
                case 26:
                    message.orId = reader.int64();
                    break;
                case 27:
                    message.loId = reader.int64();
                    break;
                case 28:
                    message.noId = reader.int64();
                    break;
                case 29:
                    message.clstId = reader.int32();
                    break;
                case 30:
                    message.sos = reader.string();
                    break;
                case 31:
                    message.lkFlgD = reader.string();
                    break;
                case 32:
                    message.adTm = reader.double();
                    break;
                case 33:
                    message.tTsrv = reader.int32();
                    break;
                case 34:
                    message.tcTsrv = reader.double();
                    break;
                case 35:
                    message.pRDow = reader.string();
                    break;
                case 36:
                    message.oPr = reader.int32();
                    break;
                case 37:
                    message.srvcOrdrSrcDispCd = reader.string();
                    break;
                case 38:
                    message.sOLNo = reader.int32();
                    break;
                case 39:
                    message.edId = reader.string();
                    break;
                case 40:
                    message.pRt = reader.string();
                    break;
                case 41:
                    message.pSeq = reader.int32();
                    break;
                case 43:
                    message.vStLc = reader.string();
                    break;
                case 44:
                    message.vEdLc = reader.string();
                    break;
                case 45:
                    message.osPkup = reader.string();
                    break;
                case 46:
                    message.prOpUnCd = reader.string();
                    break;
                case 47:
                    message.prDispCd = reader.string();
                    break;
                case 48:
                    message.rtWkCd = reader.string();
                    break;
                case 49:
                    message.wkNo = reader.int32();
                    break;
                case 50:
                    message.note2 = reader.string();
                    break;
                case 51:
                    message.srvcUnitAccCdId = reader.int32();
                    break;
                case 52:
                    message.srvcUnitAccCd = reader.string();
                    break;
                case 53:
                    message.notes1 = reader.string();
                    break;
                case 54:
                    message.notes3 = reader.string();
                    break;
                case 55:
                    message.userCustom1 = reader.string();
                    break;
                case 56:
                    message.userCustom2 = reader.string();
                    break;
                case 57:
                    message.userCustom3 = reader.string();
                    break;
                case 58:
                    message.creationDtm = reader.string();
                    break;
                case 59:
                    message.srvcOrdrCode = reader.string();
                    break;
                case 60:
                    message.userDefinedWeekCd = reader.string();
                    break;
                case 61:
                    message.totCostTsrvPrYd = reader.double();
                    break;
                case 62:
                    message.userId = reader.string();
                    break;
                case 63:
                    message.srvcUnitNote1 = reader.string();
                    break;
                case 64:
                    message.materialType = reader.string();
                    break;
                case 65:
                    message.weekCodeLockFlag = reader.int32();
                    break;
                case 66:
                    message.srvcGeocodeSrc = reader.string();
                    break;
                case 67:
                    message.srvcGeocodeSrcDesc = reader.string();
                    break;
                case 68:
                    message.srvcGeocodeConf = reader.string();
                    break;
                case 69:
                    message.srvcUnitFrqByWk = reader.int32();
                    break;
                case 70:
                    message.notes4 = reader.string();
                    break;
                case 71:
                    message.notes5 = reader.string();
                    break;
                case 72:
                    message.userCustom4 = reader.string();
                    break;
                case 73:
                    message.userCustom5 = reader.string();
                    break;
                case 74:
                    message.srvcUnitNotes2 = reader.string();
                    break;
                case 75:
                    message.mapPageNo = reader.int32();
                    break;
                case 76:
                    message.srvcUnitNotes3 = reader.string();
                    break;
                case 77:
                    message.srvcUnitLftAccPnlt = reader.int32();
                    break;
                case 78:
                    message.srvcUnitRgtAccPnlt = reader.int32();
                    break;
                case 81:
                    message.dchg = reader.string();
                    break;
                case 82:
                    message.dayChangeP = reader.string();
                    break;
                case 83:
                    message.weekChange = reader.string();
                    break;
                case 84:
                    message.weekChangeP = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Customer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.Customer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.Customer} Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Customer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Customer message.
         * @function verify
         * @memberof customer.Customer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Customer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.rNo != null && message.hasOwnProperty("rNo"))
                if (!$util.isString(message.rNo))
                    return "rNo: string expected";
            if (message.sNo != null && message.hasOwnProperty("sNo"))
                if (!$util.isInteger(message.sNo))
                    return "sNo: integer expected";
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                if (typeof message.uqty !== "number")
                    return "uqty: number expected";
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                if (typeof message.uVolVal !== "number")
                    return "uVolVal: number expected";
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                if (typeof message.uWtVal !== "number")
                    return "uWtVal: number expected";
            if (message.srvctm != null && message.hasOwnProperty("srvctm"))
                if (!$util.isInteger(message.srvctm))
                    return "srvctm: integer expected";
            if (message.strtm != null && message.hasOwnProperty("strtm"))
                if (!$util.isString(message.strtm))
                    return "strtm: string expected";
            if (message.stptm != null && message.hasOwnProperty("stptm"))
                if (!$util.isString(message.stptm))
                    return "stptm: string expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.cty != null && message.hasOwnProperty("cty"))
                if (!$util.isString(message.cty))
                    return "cty: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.zip != null && message.hasOwnProperty("zip"))
                if (!$util.isString(message.zip))
                    return "zip: string expected";
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                if (!$util.isString(message.cntry))
                    return "cntry: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.srcDOW != null && message.hasOwnProperty("srcDOW"))
                if (!$util.isString(message.srcDOW))
                    return "srcDOW: string expected";
            if (message.srcRNo != null && message.hasOwnProperty("srcRNo"))
                if (!$util.isString(message.srcRNo))
                    return "srcRNo: string expected";
            if (message.srcSNo != null && message.hasOwnProperty("srcSNo"))
                if (!$util.isInteger(message.srcSNo))
                    return "srcSNo: integer expected";
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                if (!$util.isString(message.geoSt))
                    return "geoSt: string expected";
            if (message.note1 != null && message.hasOwnProperty("note1"))
                if (!$util.isString(message.note1))
                    return "note1: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (!$util.isInteger(message.cuId) && !(message.cuId && $util.isInteger(message.cuId.low) && $util.isInteger(message.cuId.high)))
                    return "cuId: integer|Long expected";
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (!$util.isInteger(message.unId) && !(message.unId && $util.isInteger(message.unId.low) && $util.isInteger(message.unId.high)))
                    return "unId: integer|Long expected";
            if (message.orId != null && message.hasOwnProperty("orId"))
                if (!$util.isInteger(message.orId) && !(message.orId && $util.isInteger(message.orId.low) && $util.isInteger(message.orId.high)))
                    return "orId: integer|Long expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.noId != null && message.hasOwnProperty("noId"))
                if (!$util.isInteger(message.noId) && !(message.noId && $util.isInteger(message.noId.low) && $util.isInteger(message.noId.high)))
                    return "noId: integer|Long expected";
            if (message.clstId != null && message.hasOwnProperty("clstId"))
                if (!$util.isInteger(message.clstId))
                    return "clstId: integer expected";
            if (message.sos != null && message.hasOwnProperty("sos"))
                if (!$util.isString(message.sos))
                    return "sos: string expected";
            if (message.lkFlgD != null && message.hasOwnProperty("lkFlgD"))
                if (!$util.isString(message.lkFlgD))
                    return "lkFlgD: string expected";
            if (message.adTm != null && message.hasOwnProperty("adTm"))
                if (typeof message.adTm !== "number")
                    return "adTm: number expected";
            if (message.tTsrv != null && message.hasOwnProperty("tTsrv"))
                if (!$util.isInteger(message.tTsrv))
                    return "tTsrv: integer expected";
            if (message.tcTsrv != null && message.hasOwnProperty("tcTsrv"))
                if (typeof message.tcTsrv !== "number")
                    return "tcTsrv: number expected";
            if (message.pRDow != null && message.hasOwnProperty("pRDow"))
                if (!$util.isString(message.pRDow))
                    return "pRDow: string expected";
            if (message.oPr != null && message.hasOwnProperty("oPr"))
                if (!$util.isInteger(message.oPr))
                    return "oPr: integer expected";
            if (message.srvcOrdrSrcDispCd != null && message.hasOwnProperty("srvcOrdrSrcDispCd"))
                if (!$util.isString(message.srvcOrdrSrcDispCd))
                    return "srvcOrdrSrcDispCd: string expected";
            if (message.sOLNo != null && message.hasOwnProperty("sOLNo"))
                if (!$util.isInteger(message.sOLNo))
                    return "sOLNo: integer expected";
            if (message.edId != null && message.hasOwnProperty("edId"))
                if (!$util.isString(message.edId))
                    return "edId: string expected";
            if (message.pRt != null && message.hasOwnProperty("pRt"))
                if (!$util.isString(message.pRt))
                    return "pRt: string expected";
            if (message.pSeq != null && message.hasOwnProperty("pSeq"))
                if (!$util.isInteger(message.pSeq))
                    return "pSeq: integer expected";
            if (message.vStLc != null && message.hasOwnProperty("vStLc"))
                if (!$util.isString(message.vStLc))
                    return "vStLc: string expected";
            if (message.vEdLc != null && message.hasOwnProperty("vEdLc"))
                if (!$util.isString(message.vEdLc))
                    return "vEdLc: string expected";
            if (message.osPkup != null && message.hasOwnProperty("osPkup"))
                if (!$util.isString(message.osPkup))
                    return "osPkup: string expected";
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                if (!$util.isString(message.prOpUnCd))
                    return "prOpUnCd: string expected";
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                if (!$util.isString(message.prDispCd))
                    return "prDispCd: string expected";
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                if (!$util.isString(message.rtWkCd))
                    return "rtWkCd: string expected";
            if (message.wkNo != null && message.hasOwnProperty("wkNo"))
                if (!$util.isInteger(message.wkNo))
                    return "wkNo: integer expected";
            if (message.note2 != null && message.hasOwnProperty("note2"))
                if (!$util.isString(message.note2))
                    return "note2: string expected";
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                if (!$util.isInteger(message.srvcUnitAccCdId))
                    return "srvcUnitAccCdId: integer expected";
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                if (!$util.isString(message.srvcUnitAccCd))
                    return "srvcUnitAccCd: string expected";
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                if (!$util.isString(message.notes1))
                    return "notes1: string expected";
            if (message.notes3 != null && message.hasOwnProperty("notes3"))
                if (!$util.isString(message.notes3))
                    return "notes3: string expected";
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                if (!$util.isString(message.userCustom1))
                    return "userCustom1: string expected";
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                if (!$util.isString(message.userCustom2))
                    return "userCustom2: string expected";
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                if (!$util.isString(message.userCustom3))
                    return "userCustom3: string expected";
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                if (!$util.isString(message.creationDtm))
                    return "creationDtm: string expected";
            if (message.srvcOrdrCode != null && message.hasOwnProperty("srvcOrdrCode"))
                if (!$util.isString(message.srvcOrdrCode))
                    return "srvcOrdrCode: string expected";
            if (message.userDefinedWeekCd != null && message.hasOwnProperty("userDefinedWeekCd"))
                if (!$util.isString(message.userDefinedWeekCd))
                    return "userDefinedWeekCd: string expected";
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                if (typeof message.totCostTsrvPrYd !== "number")
                    return "totCostTsrvPrYd: number expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                if (!$util.isString(message.srvcUnitNote1))
                    return "srvcUnitNote1: string expected";
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                if (!$util.isString(message.materialType))
                    return "materialType: string expected";
            if (message.weekCodeLockFlag != null && message.hasOwnProperty("weekCodeLockFlag"))
                if (!$util.isInteger(message.weekCodeLockFlag))
                    return "weekCodeLockFlag: integer expected";
            if (message.srvcGeocodeSrc != null && message.hasOwnProperty("srvcGeocodeSrc"))
                if (!$util.isString(message.srvcGeocodeSrc))
                    return "srvcGeocodeSrc: string expected";
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                if (!$util.isString(message.srvcGeocodeSrcDesc))
                    return "srvcGeocodeSrcDesc: string expected";
            if (message.srvcGeocodeConf != null && message.hasOwnProperty("srvcGeocodeConf"))
                if (!$util.isString(message.srvcGeocodeConf))
                    return "srvcGeocodeConf: string expected";
            if (message.srvcUnitFrqByWk != null && message.hasOwnProperty("srvcUnitFrqByWk"))
                if (!$util.isInteger(message.srvcUnitFrqByWk))
                    return "srvcUnitFrqByWk: integer expected";
            if (message.notes4 != null && message.hasOwnProperty("notes4"))
                if (!$util.isString(message.notes4))
                    return "notes4: string expected";
            if (message.notes5 != null && message.hasOwnProperty("notes5"))
                if (!$util.isString(message.notes5))
                    return "notes5: string expected";
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                if (!$util.isString(message.userCustom4))
                    return "userCustom4: string expected";
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                if (!$util.isString(message.userCustom5))
                    return "userCustom5: string expected";
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                if (!$util.isString(message.srvcUnitNotes2))
                    return "srvcUnitNotes2: string expected";
            if (message.mapPageNo != null && message.hasOwnProperty("mapPageNo"))
                if (!$util.isInteger(message.mapPageNo))
                    return "mapPageNo: integer expected";
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                if (!$util.isString(message.srvcUnitNotes3))
                    return "srvcUnitNotes3: string expected";
            if (message.srvcUnitLftAccPnlt != null && message.hasOwnProperty("srvcUnitLftAccPnlt"))
                if (!$util.isInteger(message.srvcUnitLftAccPnlt))
                    return "srvcUnitLftAccPnlt: integer expected";
            if (message.srvcUnitRgtAccPnlt != null && message.hasOwnProperty("srvcUnitRgtAccPnlt"))
                if (!$util.isInteger(message.srvcUnitRgtAccPnlt))
                    return "srvcUnitRgtAccPnlt: integer expected";
            if (message.dchg != null && message.hasOwnProperty("dchg"))
                if (!$util.isString(message.dchg))
                    return "dchg: string expected";
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                if (!$util.isString(message.dayChangeP))
                    return "dayChangeP: string expected";
            if (message.weekChange != null && message.hasOwnProperty("weekChange"))
                if (!$util.isString(message.weekChange))
                    return "weekChange: string expected";
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                if (!$util.isString(message.weekChangeP))
                    return "weekChangeP: string expected";
            return null;
        };

        /**
         * Creates a Customer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.Customer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.Customer} Customer
         */
        Customer.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.Customer)
                return object;
            let message = new $root.customer.Customer();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.rNo != null)
                message.rNo = String(object.rNo);
            if (object.sNo != null)
                message.sNo = object.sNo | 0;
            if (object.uqty != null)
                message.uqty = Number(object.uqty);
            if (object.uVolVal != null)
                message.uVolVal = Number(object.uVolVal);
            if (object.uWtVal != null)
                message.uWtVal = Number(object.uWtVal);
            if (object.srvctm != null)
                message.srvctm = object.srvctm | 0;
            if (object.strtm != null)
                message.strtm = String(object.strtm);
            if (object.stptm != null)
                message.stptm = String(object.stptm);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.cty != null)
                message.cty = String(object.cty);
            if (object.state != null)
                message.state = String(object.state);
            if (object.zip != null)
                message.zip = String(object.zip);
            if (object.cntry != null)
                message.cntry = String(object.cntry);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.srcDOW != null)
                message.srcDOW = String(object.srcDOW);
            if (object.srcRNo != null)
                message.srcRNo = String(object.srcRNo);
            if (object.srcSNo != null)
                message.srcSNo = object.srcSNo | 0;
            if (object.geoSt != null)
                message.geoSt = String(object.geoSt);
            if (object.note1 != null)
                message.note1 = String(object.note1);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.cuId != null)
                if ($util.Long)
                    (message.cuId = $util.Long.fromValue(object.cuId)).unsigned = false;
                else if (typeof object.cuId === "string")
                    message.cuId = parseInt(object.cuId, 10);
                else if (typeof object.cuId === "number")
                    message.cuId = object.cuId;
                else if (typeof object.cuId === "object")
                    message.cuId = new $util.LongBits(object.cuId.low >>> 0, object.cuId.high >>> 0).toNumber();
            if (object.unId != null)
                if ($util.Long)
                    (message.unId = $util.Long.fromValue(object.unId)).unsigned = false;
                else if (typeof object.unId === "string")
                    message.unId = parseInt(object.unId, 10);
                else if (typeof object.unId === "number")
                    message.unId = object.unId;
                else if (typeof object.unId === "object")
                    message.unId = new $util.LongBits(object.unId.low >>> 0, object.unId.high >>> 0).toNumber();
            if (object.orId != null)
                if ($util.Long)
                    (message.orId = $util.Long.fromValue(object.orId)).unsigned = false;
                else if (typeof object.orId === "string")
                    message.orId = parseInt(object.orId, 10);
                else if (typeof object.orId === "number")
                    message.orId = object.orId;
                else if (typeof object.orId === "object")
                    message.orId = new $util.LongBits(object.orId.low >>> 0, object.orId.high >>> 0).toNumber();
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.noId != null)
                if ($util.Long)
                    (message.noId = $util.Long.fromValue(object.noId)).unsigned = false;
                else if (typeof object.noId === "string")
                    message.noId = parseInt(object.noId, 10);
                else if (typeof object.noId === "number")
                    message.noId = object.noId;
                else if (typeof object.noId === "object")
                    message.noId = new $util.LongBits(object.noId.low >>> 0, object.noId.high >>> 0).toNumber();
            if (object.clstId != null)
                message.clstId = object.clstId | 0;
            if (object.sos != null)
                message.sos = String(object.sos);
            if (object.lkFlgD != null)
                message.lkFlgD = String(object.lkFlgD);
            if (object.adTm != null)
                message.adTm = Number(object.adTm);
            if (object.tTsrv != null)
                message.tTsrv = object.tTsrv | 0;
            if (object.tcTsrv != null)
                message.tcTsrv = Number(object.tcTsrv);
            if (object.pRDow != null)
                message.pRDow = String(object.pRDow);
            if (object.oPr != null)
                message.oPr = object.oPr | 0;
            if (object.srvcOrdrSrcDispCd != null)
                message.srvcOrdrSrcDispCd = String(object.srvcOrdrSrcDispCd);
            if (object.sOLNo != null)
                message.sOLNo = object.sOLNo | 0;
            if (object.edId != null)
                message.edId = String(object.edId);
            if (object.pRt != null)
                message.pRt = String(object.pRt);
            if (object.pSeq != null)
                message.pSeq = object.pSeq | 0;
            if (object.vStLc != null)
                message.vStLc = String(object.vStLc);
            if (object.vEdLc != null)
                message.vEdLc = String(object.vEdLc);
            if (object.osPkup != null)
                message.osPkup = String(object.osPkup);
            if (object.prOpUnCd != null)
                message.prOpUnCd = String(object.prOpUnCd);
            if (object.prDispCd != null)
                message.prDispCd = String(object.prDispCd);
            if (object.rtWkCd != null)
                message.rtWkCd = String(object.rtWkCd);
            if (object.wkNo != null)
                message.wkNo = object.wkNo | 0;
            if (object.note2 != null)
                message.note2 = String(object.note2);
            if (object.srvcUnitAccCdId != null)
                message.srvcUnitAccCdId = object.srvcUnitAccCdId | 0;
            if (object.srvcUnitAccCd != null)
                message.srvcUnitAccCd = String(object.srvcUnitAccCd);
            if (object.notes1 != null)
                message.notes1 = String(object.notes1);
            if (object.notes3 != null)
                message.notes3 = String(object.notes3);
            if (object.userCustom1 != null)
                message.userCustom1 = String(object.userCustom1);
            if (object.userCustom2 != null)
                message.userCustom2 = String(object.userCustom2);
            if (object.userCustom3 != null)
                message.userCustom3 = String(object.userCustom3);
            if (object.creationDtm != null)
                message.creationDtm = String(object.creationDtm);
            if (object.srvcOrdrCode != null)
                message.srvcOrdrCode = String(object.srvcOrdrCode);
            if (object.userDefinedWeekCd != null)
                message.userDefinedWeekCd = String(object.userDefinedWeekCd);
            if (object.totCostTsrvPrYd != null)
                message.totCostTsrvPrYd = Number(object.totCostTsrvPrYd);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.srvcUnitNote1 != null)
                message.srvcUnitNote1 = String(object.srvcUnitNote1);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.weekCodeLockFlag != null)
                message.weekCodeLockFlag = object.weekCodeLockFlag | 0;
            if (object.srvcGeocodeSrc != null)
                message.srvcGeocodeSrc = String(object.srvcGeocodeSrc);
            if (object.srvcGeocodeSrcDesc != null)
                message.srvcGeocodeSrcDesc = String(object.srvcGeocodeSrcDesc);
            if (object.srvcGeocodeConf != null)
                message.srvcGeocodeConf = String(object.srvcGeocodeConf);
            if (object.srvcUnitFrqByWk != null)
                message.srvcUnitFrqByWk = object.srvcUnitFrqByWk | 0;
            if (object.notes4 != null)
                message.notes4 = String(object.notes4);
            if (object.notes5 != null)
                message.notes5 = String(object.notes5);
            if (object.userCustom4 != null)
                message.userCustom4 = String(object.userCustom4);
            if (object.userCustom5 != null)
                message.userCustom5 = String(object.userCustom5);
            if (object.srvcUnitNotes2 != null)
                message.srvcUnitNotes2 = String(object.srvcUnitNotes2);
            if (object.mapPageNo != null)
                message.mapPageNo = object.mapPageNo | 0;
            if (object.srvcUnitNotes3 != null)
                message.srvcUnitNotes3 = String(object.srvcUnitNotes3);
            if (object.srvcUnitLftAccPnlt != null)
                message.srvcUnitLftAccPnlt = object.srvcUnitLftAccPnlt | 0;
            if (object.srvcUnitRgtAccPnlt != null)
                message.srvcUnitRgtAccPnlt = object.srvcUnitRgtAccPnlt | 0;
            if (object.dchg != null)
                message.dchg = String(object.dchg);
            if (object.dayChangeP != null)
                message.dayChangeP = String(object.dayChangeP);
            if (object.weekChange != null)
                message.weekChange = String(object.weekChange);
            if (object.weekChangeP != null)
                message.weekChangeP = String(object.weekChangeP);
            return message;
        };

        /**
         * Creates a plain object from a Customer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.Customer
         * @static
         * @param {customer.Customer} message Customer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Customer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.rNo = "";
                object.sNo = 0;
                object.uqty = 0;
                object.uVolVal = 0;
                object.uWtVal = 0;
                object.srvctm = 0;
                object.strtm = "";
                object.stptm = "";
                object.addr = "";
                object.cty = "";
                object.state = "";
                object.zip = "";
                object.cntry = "";
                object.lat = 0;
                object.lon = 0;
                object.srcDOW = "";
                object.srcRNo = "";
                object.srcSNo = 0;
                object.geoSt = "";
                object.note1 = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.cuId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cuId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.orId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.noId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.noId = options.longs === String ? "0" : 0;
                object.clstId = 0;
                object.sos = "";
                object.lkFlgD = "";
                object.adTm = 0;
                object.tTsrv = 0;
                object.tcTsrv = 0;
                object.pRDow = "";
                object.oPr = 0;
                object.srvcOrdrSrcDispCd = "";
                object.sOLNo = 0;
                object.edId = "";
                object.pRt = "";
                object.pSeq = 0;
                object.vStLc = "";
                object.vEdLc = "";
                object.osPkup = "";
                object.prOpUnCd = "";
                object.prDispCd = "";
                object.rtWkCd = "";
                object.wkNo = 0;
                object.note2 = "";
                object.srvcUnitAccCdId = 0;
                object.srvcUnitAccCd = "";
                object.notes1 = "";
                object.notes3 = "";
                object.userCustom1 = "";
                object.userCustom2 = "";
                object.userCustom3 = "";
                object.creationDtm = "";
                object.srvcOrdrCode = "";
                object.userDefinedWeekCd = "";
                object.totCostTsrvPrYd = 0;
                object.userId = "";
                object.srvcUnitNote1 = "";
                object.materialType = "";
                object.weekCodeLockFlag = 0;
                object.srvcGeocodeSrc = "";
                object.srvcGeocodeSrcDesc = "";
                object.srvcGeocodeConf = "";
                object.srvcUnitFrqByWk = 0;
                object.notes4 = "";
                object.notes5 = "";
                object.userCustom4 = "";
                object.userCustom5 = "";
                object.srvcUnitNotes2 = "";
                object.mapPageNo = 0;
                object.srvcUnitNotes3 = "";
                object.srvcUnitLftAccPnlt = 0;
                object.srvcUnitRgtAccPnlt = 0;
                object.dchg = "";
                object.dayChangeP = "";
                object.weekChange = "";
                object.weekChangeP = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.rNo != null && message.hasOwnProperty("rNo"))
                object.rNo = message.rNo;
            if (message.sNo != null && message.hasOwnProperty("sNo"))
                object.sNo = message.sNo;
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                object.uqty = options.json && !isFinite(message.uqty) ? String(message.uqty) : message.uqty;
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                object.uVolVal = options.json && !isFinite(message.uVolVal) ? String(message.uVolVal) : message.uVolVal;
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                object.uWtVal = options.json && !isFinite(message.uWtVal) ? String(message.uWtVal) : message.uWtVal;
            if (message.srvctm != null && message.hasOwnProperty("srvctm"))
                object.srvctm = message.srvctm;
            if (message.strtm != null && message.hasOwnProperty("strtm"))
                object.strtm = message.strtm;
            if (message.stptm != null && message.hasOwnProperty("stptm"))
                object.stptm = message.stptm;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.cty != null && message.hasOwnProperty("cty"))
                object.cty = message.cty;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.zip != null && message.hasOwnProperty("zip"))
                object.zip = message.zip;
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                object.cntry = message.cntry;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.srcDOW != null && message.hasOwnProperty("srcDOW"))
                object.srcDOW = message.srcDOW;
            if (message.srcRNo != null && message.hasOwnProperty("srcRNo"))
                object.srcRNo = message.srcRNo;
            if (message.srcSNo != null && message.hasOwnProperty("srcSNo"))
                object.srcSNo = message.srcSNo;
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                object.geoSt = message.geoSt;
            if (message.note1 != null && message.hasOwnProperty("note1"))
                object.note1 = message.note1;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (typeof message.cuId === "number")
                    object.cuId = options.longs === String ? String(message.cuId) : message.cuId;
                else
                    object.cuId = options.longs === String ? $util.Long.prototype.toString.call(message.cuId) : options.longs === Number ? new $util.LongBits(message.cuId.low >>> 0, message.cuId.high >>> 0).toNumber() : message.cuId;
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (typeof message.unId === "number")
                    object.unId = options.longs === String ? String(message.unId) : message.unId;
                else
                    object.unId = options.longs === String ? $util.Long.prototype.toString.call(message.unId) : options.longs === Number ? new $util.LongBits(message.unId.low >>> 0, message.unId.high >>> 0).toNumber() : message.unId;
            if (message.orId != null && message.hasOwnProperty("orId"))
                if (typeof message.orId === "number")
                    object.orId = options.longs === String ? String(message.orId) : message.orId;
                else
                    object.orId = options.longs === String ? $util.Long.prototype.toString.call(message.orId) : options.longs === Number ? new $util.LongBits(message.orId.low >>> 0, message.orId.high >>> 0).toNumber() : message.orId;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.noId != null && message.hasOwnProperty("noId"))
                if (typeof message.noId === "number")
                    object.noId = options.longs === String ? String(message.noId) : message.noId;
                else
                    object.noId = options.longs === String ? $util.Long.prototype.toString.call(message.noId) : options.longs === Number ? new $util.LongBits(message.noId.low >>> 0, message.noId.high >>> 0).toNumber() : message.noId;
            if (message.clstId != null && message.hasOwnProperty("clstId"))
                object.clstId = message.clstId;
            if (message.sos != null && message.hasOwnProperty("sos"))
                object.sos = message.sos;
            if (message.lkFlgD != null && message.hasOwnProperty("lkFlgD"))
                object.lkFlgD = message.lkFlgD;
            if (message.adTm != null && message.hasOwnProperty("adTm"))
                object.adTm = options.json && !isFinite(message.adTm) ? String(message.adTm) : message.adTm;
            if (message.tTsrv != null && message.hasOwnProperty("tTsrv"))
                object.tTsrv = message.tTsrv;
            if (message.tcTsrv != null && message.hasOwnProperty("tcTsrv"))
                object.tcTsrv = options.json && !isFinite(message.tcTsrv) ? String(message.tcTsrv) : message.tcTsrv;
            if (message.pRDow != null && message.hasOwnProperty("pRDow"))
                object.pRDow = message.pRDow;
            if (message.oPr != null && message.hasOwnProperty("oPr"))
                object.oPr = message.oPr;
            if (message.srvcOrdrSrcDispCd != null && message.hasOwnProperty("srvcOrdrSrcDispCd"))
                object.srvcOrdrSrcDispCd = message.srvcOrdrSrcDispCd;
            if (message.sOLNo != null && message.hasOwnProperty("sOLNo"))
                object.sOLNo = message.sOLNo;
            if (message.edId != null && message.hasOwnProperty("edId"))
                object.edId = message.edId;
            if (message.pRt != null && message.hasOwnProperty("pRt"))
                object.pRt = message.pRt;
            if (message.pSeq != null && message.hasOwnProperty("pSeq"))
                object.pSeq = message.pSeq;
            if (message.vStLc != null && message.hasOwnProperty("vStLc"))
                object.vStLc = message.vStLc;
            if (message.vEdLc != null && message.hasOwnProperty("vEdLc"))
                object.vEdLc = message.vEdLc;
            if (message.osPkup != null && message.hasOwnProperty("osPkup"))
                object.osPkup = message.osPkup;
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                object.prOpUnCd = message.prOpUnCd;
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                object.prDispCd = message.prDispCd;
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                object.rtWkCd = message.rtWkCd;
            if (message.wkNo != null && message.hasOwnProperty("wkNo"))
                object.wkNo = message.wkNo;
            if (message.note2 != null && message.hasOwnProperty("note2"))
                object.note2 = message.note2;
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                object.srvcUnitAccCdId = message.srvcUnitAccCdId;
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                object.srvcUnitAccCd = message.srvcUnitAccCd;
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                object.notes1 = message.notes1;
            if (message.notes3 != null && message.hasOwnProperty("notes3"))
                object.notes3 = message.notes3;
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                object.userCustom1 = message.userCustom1;
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                object.userCustom2 = message.userCustom2;
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                object.userCustom3 = message.userCustom3;
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                object.creationDtm = message.creationDtm;
            if (message.srvcOrdrCode != null && message.hasOwnProperty("srvcOrdrCode"))
                object.srvcOrdrCode = message.srvcOrdrCode;
            if (message.userDefinedWeekCd != null && message.hasOwnProperty("userDefinedWeekCd"))
                object.userDefinedWeekCd = message.userDefinedWeekCd;
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                object.totCostTsrvPrYd = options.json && !isFinite(message.totCostTsrvPrYd) ? String(message.totCostTsrvPrYd) : message.totCostTsrvPrYd;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                object.srvcUnitNote1 = message.srvcUnitNote1;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.weekCodeLockFlag != null && message.hasOwnProperty("weekCodeLockFlag"))
                object.weekCodeLockFlag = message.weekCodeLockFlag;
            if (message.srvcGeocodeSrc != null && message.hasOwnProperty("srvcGeocodeSrc"))
                object.srvcGeocodeSrc = message.srvcGeocodeSrc;
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                object.srvcGeocodeSrcDesc = message.srvcGeocodeSrcDesc;
            if (message.srvcGeocodeConf != null && message.hasOwnProperty("srvcGeocodeConf"))
                object.srvcGeocodeConf = message.srvcGeocodeConf;
            if (message.srvcUnitFrqByWk != null && message.hasOwnProperty("srvcUnitFrqByWk"))
                object.srvcUnitFrqByWk = message.srvcUnitFrqByWk;
            if (message.notes4 != null && message.hasOwnProperty("notes4"))
                object.notes4 = message.notes4;
            if (message.notes5 != null && message.hasOwnProperty("notes5"))
                object.notes5 = message.notes5;
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                object.userCustom4 = message.userCustom4;
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                object.userCustom5 = message.userCustom5;
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                object.srvcUnitNotes2 = message.srvcUnitNotes2;
            if (message.mapPageNo != null && message.hasOwnProperty("mapPageNo"))
                object.mapPageNo = message.mapPageNo;
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                object.srvcUnitNotes3 = message.srvcUnitNotes3;
            if (message.srvcUnitLftAccPnlt != null && message.hasOwnProperty("srvcUnitLftAccPnlt"))
                object.srvcUnitLftAccPnlt = message.srvcUnitLftAccPnlt;
            if (message.srvcUnitRgtAccPnlt != null && message.hasOwnProperty("srvcUnitRgtAccPnlt"))
                object.srvcUnitRgtAccPnlt = message.srvcUnitRgtAccPnlt;
            if (message.dchg != null && message.hasOwnProperty("dchg"))
                object.dchg = message.dchg;
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                object.dayChangeP = message.dayChangeP;
            if (message.weekChange != null && message.hasOwnProperty("weekChange"))
                object.weekChange = message.weekChange;
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                object.weekChangeP = message.weekChangeP;
            return object;
        };

        /**
         * Converts this Customer to JSON.
         * @function toJSON
         * @memberof customer.Customer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Customer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Customer;
    })();

    customer.CustomerResponseShort = (function() {

        /**
         * Properties of a CustomerResponseShort.
         * @memberof customer
         * @interface ICustomerResponseShort
         * @property {Array.<customer.ICustomerShortMsg>|null} [customerList] CustomerResponseShort customerList
         */

        /**
         * Constructs a new CustomerResponseShort.
         * @memberof customer
         * @classdesc Represents a CustomerResponseShort.
         * @implements ICustomerResponseShort
         * @constructor
         * @param {customer.ICustomerResponseShort=} [properties] Properties to set
         */
        function CustomerResponseShort(properties) {
            this.customerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomerResponseShort customerList.
         * @member {Array.<customer.ICustomerShortMsg>} customerList
         * @memberof customer.CustomerResponseShort
         * @instance
         */
        CustomerResponseShort.prototype.customerList = $util.emptyArray;

        /**
         * Creates a new CustomerResponseShort instance using the specified properties.
         * @function create
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {customer.ICustomerResponseShort=} [properties] Properties to set
         * @returns {customer.CustomerResponseShort} CustomerResponseShort instance
         */
        CustomerResponseShort.create = function create(properties) {
            return new CustomerResponseShort(properties);
        };

        /**
         * Encodes the specified CustomerResponseShort message. Does not implicitly {@link customer.CustomerResponseShort.verify|verify} messages.
         * @function encode
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {customer.ICustomerResponseShort} message CustomerResponseShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerResponseShort.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.customerList != null && message.customerList.length)
                for (let i = 0; i < message.customerList.length; ++i)
                    $root.customer.CustomerShortMsg.encode(message.customerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CustomerResponseShort message, length delimited. Does not implicitly {@link customer.CustomerResponseShort.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {customer.ICustomerResponseShort} message CustomerResponseShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerResponseShort.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomerResponseShort message from the specified reader or buffer.
         * @function decode
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.CustomerResponseShort} CustomerResponseShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerResponseShort.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.CustomerResponseShort();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.customerList && message.customerList.length))
                        message.customerList = [];
                    message.customerList.push($root.customer.CustomerShortMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomerResponseShort message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.CustomerResponseShort} CustomerResponseShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerResponseShort.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomerResponseShort message.
         * @function verify
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomerResponseShort.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.customerList != null && message.hasOwnProperty("customerList")) {
                if (!Array.isArray(message.customerList))
                    return "customerList: array expected";
                for (let i = 0; i < message.customerList.length; ++i) {
                    let error = $root.customer.CustomerShortMsg.verify(message.customerList[i]);
                    if (error)
                        return "customerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CustomerResponseShort message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.CustomerResponseShort} CustomerResponseShort
         */
        CustomerResponseShort.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.CustomerResponseShort)
                return object;
            let message = new $root.customer.CustomerResponseShort();
            if (object.customerList) {
                if (!Array.isArray(object.customerList))
                    throw TypeError(".customer.CustomerResponseShort.customerList: array expected");
                message.customerList = [];
                for (let i = 0; i < object.customerList.length; ++i) {
                    if (typeof object.customerList[i] !== "object")
                        throw TypeError(".customer.CustomerResponseShort.customerList: object expected");
                    message.customerList[i] = $root.customer.CustomerShortMsg.fromObject(object.customerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CustomerResponseShort message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.CustomerResponseShort
         * @static
         * @param {customer.CustomerResponseShort} message CustomerResponseShort
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomerResponseShort.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.customerList = [];
            if (message.customerList && message.customerList.length) {
                object.customerList = [];
                for (let j = 0; j < message.customerList.length; ++j)
                    object.customerList[j] = $root.customer.CustomerShortMsg.toObject(message.customerList[j], options);
            }
            return object;
        };

        /**
         * Converts this CustomerResponseShort to JSON.
         * @function toJSON
         * @memberof customer.CustomerResponseShort
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomerResponseShort.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomerResponseShort;
    })();

    customer.CustomerShortMsg = (function() {

        /**
         * Properties of a CustomerShortMsg.
         * @memberof customer
         * @interface ICustomerShortMsg
         * @property {string|null} [cid] CustomerShortMsg cid
         * @property {string|null} [name] CustomerShortMsg name
         * @property {string|null} [rNo] CustomerShortMsg rNo
         * @property {number|null} [sNo] CustomerShortMsg sNo
         * @property {number|null} [uqty] CustomerShortMsg uqty
         * @property {number|null} [uVolVal] CustomerShortMsg uVolVal
         * @property {number|null} [uWtVal] CustomerShortMsg uWtVal
         * @property {number|null} [srvctm] CustomerShortMsg srvctm
         * @property {string|null} [strtm] CustomerShortMsg strtm
         * @property {string|null} [stptm] CustomerShortMsg stptm
         * @property {string|null} [addr] CustomerShortMsg addr
         * @property {number|null} [lat] CustomerShortMsg lat
         * @property {number|null} [lon] CustomerShortMsg lon
         * @property {string|null} [srcDOW] CustomerShortMsg srcDOW
         * @property {string|null} [srcRNo] CustomerShortMsg srcRNo
         * @property {number|null} [srcSNo] CustomerShortMsg srcSNo
         * @property {string|null} [geoSt] CustomerShortMsg geoSt
         * @property {string|null} [note1] CustomerShortMsg note1
         * @property {number|Long|null} [uid] CustomerShortMsg uid
         * @property {number|Long|null} [cuId] CustomerShortMsg cuId
         * @property {number|Long|null} [unId] CustomerShortMsg unId
         * @property {number|Long|null} [orId] CustomerShortMsg orId
         * @property {number|Long|null} [loId] CustomerShortMsg loId
         * @property {number|Long|null} [noId] CustomerShortMsg noId
         * @property {number|null} [clstId] CustomerShortMsg clstId
         * @property {number|null} [oPr] CustomerShortMsg oPr
         * @property {string|null} [srvcOrdrSrcDispCd] CustomerShortMsg srvcOrdrSrcDispCd
         * @property {number|null} [sOLNo] CustomerShortMsg sOLNo
         * @property {string|null} [osPkup] CustomerShortMsg osPkup
         * @property {string|null} [note2] CustomerShortMsg note2
         * @property {number|null} [srvcUnitAccCdId] CustomerShortMsg srvcUnitAccCdId
         * @property {string|null} [srvcUnitAccCd] CustomerShortMsg srvcUnitAccCd
         * @property {string|null} [notes1] CustomerShortMsg notes1
         * @property {string|null} [notes3] CustomerShortMsg notes3
         * @property {string|null} [userCustom1] CustomerShortMsg userCustom1
         * @property {string|null} [userCustom2] CustomerShortMsg userCustom2
         * @property {string|null} [userCustom3] CustomerShortMsg userCustom3
         * @property {string|null} [creationDtm] CustomerShortMsg creationDtm
         * @property {string|null} [userId] CustomerShortMsg userId
         * @property {string|null} [srvcUnitNote1] CustomerShortMsg srvcUnitNote1
         * @property {string|null} [materialType] CustomerShortMsg materialType
         * @property {string|null} [srvcGeocodeSrcDesc] CustomerShortMsg srvcGeocodeSrcDesc
         * @property {number|null} [srvcUnitFrqByWk] CustomerShortMsg srvcUnitFrqByWk
         * @property {number|null} [tcTsrv] CustomerShortMsg tcTsrv
         * @property {number|null} [totCostTsrvPrYd] CustomerShortMsg totCostTsrvPrYd
         * @property {string|null} [state] CustomerShortMsg state
         * @property {string|null} [zip] CustomerShortMsg zip
         * @property {string|null} [cty] CustomerShortMsg cty
         * @property {string|null} [notes4] CustomerShortMsg notes4
         * @property {string|null} [notes5] CustomerShortMsg notes5
         * @property {string|null} [userCustom4] CustomerShortMsg userCustom4
         * @property {string|null} [userCustom5] CustomerShortMsg userCustom5
         * @property {string|null} [srvcUnitNotes2] CustomerShortMsg srvcUnitNotes2
         * @property {string|null} [srvcUnitNotes3] CustomerShortMsg srvcUnitNotes3
         */

        /**
         * Constructs a new CustomerShortMsg.
         * @memberof customer
         * @classdesc Represents a CustomerShortMsg.
         * @implements ICustomerShortMsg
         * @constructor
         * @param {customer.ICustomerShortMsg=} [properties] Properties to set
         */
        function CustomerShortMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomerShortMsg cid.
         * @member {string} cid
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.cid = "";

        /**
         * CustomerShortMsg name.
         * @member {string} name
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.name = "";

        /**
         * CustomerShortMsg rNo.
         * @member {string} rNo
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.rNo = "";

        /**
         * CustomerShortMsg sNo.
         * @member {number} sNo
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.sNo = 0;

        /**
         * CustomerShortMsg uqty.
         * @member {number} uqty
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.uqty = 0;

        /**
         * CustomerShortMsg uVolVal.
         * @member {number} uVolVal
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.uVolVal = 0;

        /**
         * CustomerShortMsg uWtVal.
         * @member {number} uWtVal
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.uWtVal = 0;

        /**
         * CustomerShortMsg srvctm.
         * @member {number} srvctm
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvctm = 0;

        /**
         * CustomerShortMsg strtm.
         * @member {string} strtm
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.strtm = "";

        /**
         * CustomerShortMsg stptm.
         * @member {string} stptm
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.stptm = "";

        /**
         * CustomerShortMsg addr.
         * @member {string} addr
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.addr = "";

        /**
         * CustomerShortMsg lat.
         * @member {number} lat
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.lat = 0;

        /**
         * CustomerShortMsg lon.
         * @member {number} lon
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.lon = 0;

        /**
         * CustomerShortMsg srcDOW.
         * @member {string} srcDOW
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srcDOW = "";

        /**
         * CustomerShortMsg srcRNo.
         * @member {string} srcRNo
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srcRNo = "";

        /**
         * CustomerShortMsg srcSNo.
         * @member {number} srcSNo
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srcSNo = 0;

        /**
         * CustomerShortMsg geoSt.
         * @member {string} geoSt
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.geoSt = "";

        /**
         * CustomerShortMsg note1.
         * @member {string} note1
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.note1 = "";

        /**
         * CustomerShortMsg uid.
         * @member {number|Long} uid
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg cuId.
         * @member {number|Long} cuId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.cuId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg unId.
         * @member {number|Long} unId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.unId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg orId.
         * @member {number|Long} orId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.orId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg loId.
         * @member {number|Long} loId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg noId.
         * @member {number|Long} noId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.noId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomerShortMsg clstId.
         * @member {number} clstId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.clstId = 0;

        /**
         * CustomerShortMsg oPr.
         * @member {number} oPr
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.oPr = 0;

        /**
         * CustomerShortMsg srvcOrdrSrcDispCd.
         * @member {string} srvcOrdrSrcDispCd
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcOrdrSrcDispCd = "";

        /**
         * CustomerShortMsg sOLNo.
         * @member {number} sOLNo
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.sOLNo = 0;

        /**
         * CustomerShortMsg osPkup.
         * @member {string} osPkup
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.osPkup = "";

        /**
         * CustomerShortMsg note2.
         * @member {string} note2
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.note2 = "";

        /**
         * CustomerShortMsg srvcUnitAccCdId.
         * @member {number} srvcUnitAccCdId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitAccCdId = 0;

        /**
         * CustomerShortMsg srvcUnitAccCd.
         * @member {string} srvcUnitAccCd
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitAccCd = "";

        /**
         * CustomerShortMsg notes1.
         * @member {string} notes1
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.notes1 = "";

        /**
         * CustomerShortMsg notes3.
         * @member {string} notes3
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.notes3 = "";

        /**
         * CustomerShortMsg userCustom1.
         * @member {string} userCustom1
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userCustom1 = "";

        /**
         * CustomerShortMsg userCustom2.
         * @member {string} userCustom2
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userCustom2 = "";

        /**
         * CustomerShortMsg userCustom3.
         * @member {string} userCustom3
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userCustom3 = "";

        /**
         * CustomerShortMsg creationDtm.
         * @member {string} creationDtm
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.creationDtm = "";

        /**
         * CustomerShortMsg userId.
         * @member {string} userId
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userId = "";

        /**
         * CustomerShortMsg srvcUnitNote1.
         * @member {string} srvcUnitNote1
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitNote1 = "";

        /**
         * CustomerShortMsg materialType.
         * @member {string} materialType
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.materialType = "";

        /**
         * CustomerShortMsg srvcGeocodeSrcDesc.
         * @member {string} srvcGeocodeSrcDesc
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcGeocodeSrcDesc = "";

        /**
         * CustomerShortMsg srvcUnitFrqByWk.
         * @member {number} srvcUnitFrqByWk
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitFrqByWk = 0;

        /**
         * CustomerShortMsg tcTsrv.
         * @member {number} tcTsrv
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.tcTsrv = 0;

        /**
         * CustomerShortMsg totCostTsrvPrYd.
         * @member {number} totCostTsrvPrYd
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.totCostTsrvPrYd = 0;

        /**
         * CustomerShortMsg state.
         * @member {string} state
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.state = "";

        /**
         * CustomerShortMsg zip.
         * @member {string} zip
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.zip = "";

        /**
         * CustomerShortMsg cty.
         * @member {string} cty
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.cty = "";

        /**
         * CustomerShortMsg notes4.
         * @member {string} notes4
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.notes4 = "";

        /**
         * CustomerShortMsg notes5.
         * @member {string} notes5
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.notes5 = "";

        /**
         * CustomerShortMsg userCustom4.
         * @member {string} userCustom4
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userCustom4 = "";

        /**
         * CustomerShortMsg userCustom5.
         * @member {string} userCustom5
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.userCustom5 = "";

        /**
         * CustomerShortMsg srvcUnitNotes2.
         * @member {string} srvcUnitNotes2
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitNotes2 = "";

        /**
         * CustomerShortMsg srvcUnitNotes3.
         * @member {string} srvcUnitNotes3
         * @memberof customer.CustomerShortMsg
         * @instance
         */
        CustomerShortMsg.prototype.srvcUnitNotes3 = "";

        /**
         * Creates a new CustomerShortMsg instance using the specified properties.
         * @function create
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {customer.ICustomerShortMsg=} [properties] Properties to set
         * @returns {customer.CustomerShortMsg} CustomerShortMsg instance
         */
        CustomerShortMsg.create = function create(properties) {
            return new CustomerShortMsg(properties);
        };

        /**
         * Encodes the specified CustomerShortMsg message. Does not implicitly {@link customer.CustomerShortMsg.verify|verify} messages.
         * @function encode
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {customer.ICustomerShortMsg} message CustomerShortMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerShortMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.rNo != null && Object.hasOwnProperty.call(message, "rNo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rNo);
            if (message.sNo != null && Object.hasOwnProperty.call(message, "sNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sNo);
            if (message.uqty != null && Object.hasOwnProperty.call(message, "uqty"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.uqty);
            if (message.uVolVal != null && Object.hasOwnProperty.call(message, "uVolVal"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.uVolVal);
            if (message.uWtVal != null && Object.hasOwnProperty.call(message, "uWtVal"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.uWtVal);
            if (message.srvctm != null && Object.hasOwnProperty.call(message, "srvctm"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.srvctm);
            if (message.strtm != null && Object.hasOwnProperty.call(message, "strtm"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.strtm);
            if (message.stptm != null && Object.hasOwnProperty.call(message, "stptm"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.stptm);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.addr);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.lon);
            if (message.srcDOW != null && Object.hasOwnProperty.call(message, "srcDOW"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.srcDOW);
            if (message.srcRNo != null && Object.hasOwnProperty.call(message, "srcRNo"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.srcRNo);
            if (message.srcSNo != null && Object.hasOwnProperty.call(message, "srcSNo"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.srcSNo);
            if (message.geoSt != null && Object.hasOwnProperty.call(message, "geoSt"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.geoSt);
            if (message.note1 != null && Object.hasOwnProperty.call(message, "note1"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.note1);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.uid);
            if (message.cuId != null && Object.hasOwnProperty.call(message, "cuId"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.cuId);
            if (message.unId != null && Object.hasOwnProperty.call(message, "unId"))
                writer.uint32(/* id 21, wireType 0 =*/168).int64(message.unId);
            if (message.orId != null && Object.hasOwnProperty.call(message, "orId"))
                writer.uint32(/* id 22, wireType 0 =*/176).int64(message.orId);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.loId);
            if (message.noId != null && Object.hasOwnProperty.call(message, "noId"))
                writer.uint32(/* id 24, wireType 0 =*/192).int64(message.noId);
            if (message.clstId != null && Object.hasOwnProperty.call(message, "clstId"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.clstId);
            if (message.oPr != null && Object.hasOwnProperty.call(message, "oPr"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.oPr);
            if (message.srvcOrdrSrcDispCd != null && Object.hasOwnProperty.call(message, "srvcOrdrSrcDispCd"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.srvcOrdrSrcDispCd);
            if (message.sOLNo != null && Object.hasOwnProperty.call(message, "sOLNo"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.sOLNo);
            if (message.osPkup != null && Object.hasOwnProperty.call(message, "osPkup"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.osPkup);
            if (message.note2 != null && Object.hasOwnProperty.call(message, "note2"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.note2);
            if (message.srvcUnitAccCdId != null && Object.hasOwnProperty.call(message, "srvcUnitAccCdId"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.srvcUnitAccCdId);
            if (message.srvcUnitAccCd != null && Object.hasOwnProperty.call(message, "srvcUnitAccCd"))
                writer.uint32(/* id 32, wireType 2 =*/258).string(message.srvcUnitAccCd);
            if (message.notes1 != null && Object.hasOwnProperty.call(message, "notes1"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.notes1);
            if (message.notes3 != null && Object.hasOwnProperty.call(message, "notes3"))
                writer.uint32(/* id 34, wireType 2 =*/274).string(message.notes3);
            if (message.userCustom1 != null && Object.hasOwnProperty.call(message, "userCustom1"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.userCustom1);
            if (message.userCustom2 != null && Object.hasOwnProperty.call(message, "userCustom2"))
                writer.uint32(/* id 36, wireType 2 =*/290).string(message.userCustom2);
            if (message.userCustom3 != null && Object.hasOwnProperty.call(message, "userCustom3"))
                writer.uint32(/* id 37, wireType 2 =*/298).string(message.userCustom3);
            if (message.creationDtm != null && Object.hasOwnProperty.call(message, "creationDtm"))
                writer.uint32(/* id 38, wireType 2 =*/306).string(message.creationDtm);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 39, wireType 2 =*/314).string(message.userId);
            if (message.srvcUnitNote1 != null && Object.hasOwnProperty.call(message, "srvcUnitNote1"))
                writer.uint32(/* id 40, wireType 2 =*/322).string(message.srvcUnitNote1);
            if (message.materialType != null && Object.hasOwnProperty.call(message, "materialType"))
                writer.uint32(/* id 41, wireType 2 =*/330).string(message.materialType);
            if (message.srvcGeocodeSrcDesc != null && Object.hasOwnProperty.call(message, "srvcGeocodeSrcDesc"))
                writer.uint32(/* id 42, wireType 2 =*/338).string(message.srvcGeocodeSrcDesc);
            if (message.srvcUnitFrqByWk != null && Object.hasOwnProperty.call(message, "srvcUnitFrqByWk"))
                writer.uint32(/* id 43, wireType 0 =*/344).int32(message.srvcUnitFrqByWk);
            if (message.tcTsrv != null && Object.hasOwnProperty.call(message, "tcTsrv"))
                writer.uint32(/* id 44, wireType 1 =*/353).double(message.tcTsrv);
            if (message.totCostTsrvPrYd != null && Object.hasOwnProperty.call(message, "totCostTsrvPrYd"))
                writer.uint32(/* id 45, wireType 1 =*/361).double(message.totCostTsrvPrYd);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 46, wireType 2 =*/370).string(message.state);
            if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                writer.uint32(/* id 47, wireType 2 =*/378).string(message.zip);
            if (message.cty != null && Object.hasOwnProperty.call(message, "cty"))
                writer.uint32(/* id 48, wireType 2 =*/386).string(message.cty);
            if (message.notes4 != null && Object.hasOwnProperty.call(message, "notes4"))
                writer.uint32(/* id 49, wireType 2 =*/394).string(message.notes4);
            if (message.notes5 != null && Object.hasOwnProperty.call(message, "notes5"))
                writer.uint32(/* id 50, wireType 2 =*/402).string(message.notes5);
            if (message.userCustom4 != null && Object.hasOwnProperty.call(message, "userCustom4"))
                writer.uint32(/* id 51, wireType 2 =*/410).string(message.userCustom4);
            if (message.userCustom5 != null && Object.hasOwnProperty.call(message, "userCustom5"))
                writer.uint32(/* id 52, wireType 2 =*/418).string(message.userCustom5);
            if (message.srvcUnitNotes2 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes2"))
                writer.uint32(/* id 53, wireType 2 =*/426).string(message.srvcUnitNotes2);
            if (message.srvcUnitNotes3 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes3"))
                writer.uint32(/* id 54, wireType 2 =*/434).string(message.srvcUnitNotes3);
            return writer;
        };

        /**
         * Encodes the specified CustomerShortMsg message, length delimited. Does not implicitly {@link customer.CustomerShortMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {customer.ICustomerShortMsg} message CustomerShortMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerShortMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomerShortMsg message from the specified reader or buffer.
         * @function decode
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.CustomerShortMsg} CustomerShortMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerShortMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.CustomerShortMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.rNo = reader.string();
                    break;
                case 4:
                    message.sNo = reader.int32();
                    break;
                case 5:
                    message.uqty = reader.double();
                    break;
                case 6:
                    message.uVolVal = reader.double();
                    break;
                case 7:
                    message.uWtVal = reader.double();
                    break;
                case 8:
                    message.srvctm = reader.int32();
                    break;
                case 9:
                    message.strtm = reader.string();
                    break;
                case 10:
                    message.stptm = reader.string();
                    break;
                case 11:
                    message.addr = reader.string();
                    break;
                case 12:
                    message.lat = reader.double();
                    break;
                case 13:
                    message.lon = reader.double();
                    break;
                case 14:
                    message.srcDOW = reader.string();
                    break;
                case 15:
                    message.srcRNo = reader.string();
                    break;
                case 16:
                    message.srcSNo = reader.int32();
                    break;
                case 17:
                    message.geoSt = reader.string();
                    break;
                case 18:
                    message.note1 = reader.string();
                    break;
                case 19:
                    message.uid = reader.int64();
                    break;
                case 20:
                    message.cuId = reader.int64();
                    break;
                case 21:
                    message.unId = reader.int64();
                    break;
                case 22:
                    message.orId = reader.int64();
                    break;
                case 23:
                    message.loId = reader.int64();
                    break;
                case 24:
                    message.noId = reader.int64();
                    break;
                case 25:
                    message.clstId = reader.int32();
                    break;
                case 26:
                    message.oPr = reader.int32();
                    break;
                case 27:
                    message.srvcOrdrSrcDispCd = reader.string();
                    break;
                case 28:
                    message.sOLNo = reader.int32();
                    break;
                case 29:
                    message.osPkup = reader.string();
                    break;
                case 30:
                    message.note2 = reader.string();
                    break;
                case 31:
                    message.srvcUnitAccCdId = reader.int32();
                    break;
                case 32:
                    message.srvcUnitAccCd = reader.string();
                    break;
                case 33:
                    message.notes1 = reader.string();
                    break;
                case 34:
                    message.notes3 = reader.string();
                    break;
                case 35:
                    message.userCustom1 = reader.string();
                    break;
                case 36:
                    message.userCustom2 = reader.string();
                    break;
                case 37:
                    message.userCustom3 = reader.string();
                    break;
                case 38:
                    message.creationDtm = reader.string();
                    break;
                case 39:
                    message.userId = reader.string();
                    break;
                case 40:
                    message.srvcUnitNote1 = reader.string();
                    break;
                case 41:
                    message.materialType = reader.string();
                    break;
                case 42:
                    message.srvcGeocodeSrcDesc = reader.string();
                    break;
                case 43:
                    message.srvcUnitFrqByWk = reader.int32();
                    break;
                case 44:
                    message.tcTsrv = reader.double();
                    break;
                case 45:
                    message.totCostTsrvPrYd = reader.double();
                    break;
                case 46:
                    message.state = reader.string();
                    break;
                case 47:
                    message.zip = reader.string();
                    break;
                case 48:
                    message.cty = reader.string();
                    break;
                case 49:
                    message.notes4 = reader.string();
                    break;
                case 50:
                    message.notes5 = reader.string();
                    break;
                case 51:
                    message.userCustom4 = reader.string();
                    break;
                case 52:
                    message.userCustom5 = reader.string();
                    break;
                case 53:
                    message.srvcUnitNotes2 = reader.string();
                    break;
                case 54:
                    message.srvcUnitNotes3 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomerShortMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.CustomerShortMsg} CustomerShortMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerShortMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomerShortMsg message.
         * @function verify
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomerShortMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.rNo != null && message.hasOwnProperty("rNo"))
                if (!$util.isString(message.rNo))
                    return "rNo: string expected";
            if (message.sNo != null && message.hasOwnProperty("sNo"))
                if (!$util.isInteger(message.sNo))
                    return "sNo: integer expected";
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                if (typeof message.uqty !== "number")
                    return "uqty: number expected";
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                if (typeof message.uVolVal !== "number")
                    return "uVolVal: number expected";
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                if (typeof message.uWtVal !== "number")
                    return "uWtVal: number expected";
            if (message.srvctm != null && message.hasOwnProperty("srvctm"))
                if (!$util.isInteger(message.srvctm))
                    return "srvctm: integer expected";
            if (message.strtm != null && message.hasOwnProperty("strtm"))
                if (!$util.isString(message.strtm))
                    return "strtm: string expected";
            if (message.stptm != null && message.hasOwnProperty("stptm"))
                if (!$util.isString(message.stptm))
                    return "stptm: string expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.srcDOW != null && message.hasOwnProperty("srcDOW"))
                if (!$util.isString(message.srcDOW))
                    return "srcDOW: string expected";
            if (message.srcRNo != null && message.hasOwnProperty("srcRNo"))
                if (!$util.isString(message.srcRNo))
                    return "srcRNo: string expected";
            if (message.srcSNo != null && message.hasOwnProperty("srcSNo"))
                if (!$util.isInteger(message.srcSNo))
                    return "srcSNo: integer expected";
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                if (!$util.isString(message.geoSt))
                    return "geoSt: string expected";
            if (message.note1 != null && message.hasOwnProperty("note1"))
                if (!$util.isString(message.note1))
                    return "note1: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (!$util.isInteger(message.cuId) && !(message.cuId && $util.isInteger(message.cuId.low) && $util.isInteger(message.cuId.high)))
                    return "cuId: integer|Long expected";
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (!$util.isInteger(message.unId) && !(message.unId && $util.isInteger(message.unId.low) && $util.isInteger(message.unId.high)))
                    return "unId: integer|Long expected";
            if (message.orId != null && message.hasOwnProperty("orId"))
                if (!$util.isInteger(message.orId) && !(message.orId && $util.isInteger(message.orId.low) && $util.isInteger(message.orId.high)))
                    return "orId: integer|Long expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.noId != null && message.hasOwnProperty("noId"))
                if (!$util.isInteger(message.noId) && !(message.noId && $util.isInteger(message.noId.low) && $util.isInteger(message.noId.high)))
                    return "noId: integer|Long expected";
            if (message.clstId != null && message.hasOwnProperty("clstId"))
                if (!$util.isInteger(message.clstId))
                    return "clstId: integer expected";
            if (message.oPr != null && message.hasOwnProperty("oPr"))
                if (!$util.isInteger(message.oPr))
                    return "oPr: integer expected";
            if (message.srvcOrdrSrcDispCd != null && message.hasOwnProperty("srvcOrdrSrcDispCd"))
                if (!$util.isString(message.srvcOrdrSrcDispCd))
                    return "srvcOrdrSrcDispCd: string expected";
            if (message.sOLNo != null && message.hasOwnProperty("sOLNo"))
                if (!$util.isInteger(message.sOLNo))
                    return "sOLNo: integer expected";
            if (message.osPkup != null && message.hasOwnProperty("osPkup"))
                if (!$util.isString(message.osPkup))
                    return "osPkup: string expected";
            if (message.note2 != null && message.hasOwnProperty("note2"))
                if (!$util.isString(message.note2))
                    return "note2: string expected";
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                if (!$util.isInteger(message.srvcUnitAccCdId))
                    return "srvcUnitAccCdId: integer expected";
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                if (!$util.isString(message.srvcUnitAccCd))
                    return "srvcUnitAccCd: string expected";
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                if (!$util.isString(message.notes1))
                    return "notes1: string expected";
            if (message.notes3 != null && message.hasOwnProperty("notes3"))
                if (!$util.isString(message.notes3))
                    return "notes3: string expected";
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                if (!$util.isString(message.userCustom1))
                    return "userCustom1: string expected";
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                if (!$util.isString(message.userCustom2))
                    return "userCustom2: string expected";
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                if (!$util.isString(message.userCustom3))
                    return "userCustom3: string expected";
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                if (!$util.isString(message.creationDtm))
                    return "creationDtm: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                if (!$util.isString(message.srvcUnitNote1))
                    return "srvcUnitNote1: string expected";
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                if (!$util.isString(message.materialType))
                    return "materialType: string expected";
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                if (!$util.isString(message.srvcGeocodeSrcDesc))
                    return "srvcGeocodeSrcDesc: string expected";
            if (message.srvcUnitFrqByWk != null && message.hasOwnProperty("srvcUnitFrqByWk"))
                if (!$util.isInteger(message.srvcUnitFrqByWk))
                    return "srvcUnitFrqByWk: integer expected";
            if (message.tcTsrv != null && message.hasOwnProperty("tcTsrv"))
                if (typeof message.tcTsrv !== "number")
                    return "tcTsrv: number expected";
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                if (typeof message.totCostTsrvPrYd !== "number")
                    return "totCostTsrvPrYd: number expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.zip != null && message.hasOwnProperty("zip"))
                if (!$util.isString(message.zip))
                    return "zip: string expected";
            if (message.cty != null && message.hasOwnProperty("cty"))
                if (!$util.isString(message.cty))
                    return "cty: string expected";
            if (message.notes4 != null && message.hasOwnProperty("notes4"))
                if (!$util.isString(message.notes4))
                    return "notes4: string expected";
            if (message.notes5 != null && message.hasOwnProperty("notes5"))
                if (!$util.isString(message.notes5))
                    return "notes5: string expected";
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                if (!$util.isString(message.userCustom4))
                    return "userCustom4: string expected";
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                if (!$util.isString(message.userCustom5))
                    return "userCustom5: string expected";
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                if (!$util.isString(message.srvcUnitNotes2))
                    return "srvcUnitNotes2: string expected";
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                if (!$util.isString(message.srvcUnitNotes3))
                    return "srvcUnitNotes3: string expected";
            return null;
        };

        /**
         * Creates a CustomerShortMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.CustomerShortMsg} CustomerShortMsg
         */
        CustomerShortMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.CustomerShortMsg)
                return object;
            let message = new $root.customer.CustomerShortMsg();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.rNo != null)
                message.rNo = String(object.rNo);
            if (object.sNo != null)
                message.sNo = object.sNo | 0;
            if (object.uqty != null)
                message.uqty = Number(object.uqty);
            if (object.uVolVal != null)
                message.uVolVal = Number(object.uVolVal);
            if (object.uWtVal != null)
                message.uWtVal = Number(object.uWtVal);
            if (object.srvctm != null)
                message.srvctm = object.srvctm | 0;
            if (object.strtm != null)
                message.strtm = String(object.strtm);
            if (object.stptm != null)
                message.stptm = String(object.stptm);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.srcDOW != null)
                message.srcDOW = String(object.srcDOW);
            if (object.srcRNo != null)
                message.srcRNo = String(object.srcRNo);
            if (object.srcSNo != null)
                message.srcSNo = object.srcSNo | 0;
            if (object.geoSt != null)
                message.geoSt = String(object.geoSt);
            if (object.note1 != null)
                message.note1 = String(object.note1);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.cuId != null)
                if ($util.Long)
                    (message.cuId = $util.Long.fromValue(object.cuId)).unsigned = false;
                else if (typeof object.cuId === "string")
                    message.cuId = parseInt(object.cuId, 10);
                else if (typeof object.cuId === "number")
                    message.cuId = object.cuId;
                else if (typeof object.cuId === "object")
                    message.cuId = new $util.LongBits(object.cuId.low >>> 0, object.cuId.high >>> 0).toNumber();
            if (object.unId != null)
                if ($util.Long)
                    (message.unId = $util.Long.fromValue(object.unId)).unsigned = false;
                else if (typeof object.unId === "string")
                    message.unId = parseInt(object.unId, 10);
                else if (typeof object.unId === "number")
                    message.unId = object.unId;
                else if (typeof object.unId === "object")
                    message.unId = new $util.LongBits(object.unId.low >>> 0, object.unId.high >>> 0).toNumber();
            if (object.orId != null)
                if ($util.Long)
                    (message.orId = $util.Long.fromValue(object.orId)).unsigned = false;
                else if (typeof object.orId === "string")
                    message.orId = parseInt(object.orId, 10);
                else if (typeof object.orId === "number")
                    message.orId = object.orId;
                else if (typeof object.orId === "object")
                    message.orId = new $util.LongBits(object.orId.low >>> 0, object.orId.high >>> 0).toNumber();
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.noId != null)
                if ($util.Long)
                    (message.noId = $util.Long.fromValue(object.noId)).unsigned = false;
                else if (typeof object.noId === "string")
                    message.noId = parseInt(object.noId, 10);
                else if (typeof object.noId === "number")
                    message.noId = object.noId;
                else if (typeof object.noId === "object")
                    message.noId = new $util.LongBits(object.noId.low >>> 0, object.noId.high >>> 0).toNumber();
            if (object.clstId != null)
                message.clstId = object.clstId | 0;
            if (object.oPr != null)
                message.oPr = object.oPr | 0;
            if (object.srvcOrdrSrcDispCd != null)
                message.srvcOrdrSrcDispCd = String(object.srvcOrdrSrcDispCd);
            if (object.sOLNo != null)
                message.sOLNo = object.sOLNo | 0;
            if (object.osPkup != null)
                message.osPkup = String(object.osPkup);
            if (object.note2 != null)
                message.note2 = String(object.note2);
            if (object.srvcUnitAccCdId != null)
                message.srvcUnitAccCdId = object.srvcUnitAccCdId | 0;
            if (object.srvcUnitAccCd != null)
                message.srvcUnitAccCd = String(object.srvcUnitAccCd);
            if (object.notes1 != null)
                message.notes1 = String(object.notes1);
            if (object.notes3 != null)
                message.notes3 = String(object.notes3);
            if (object.userCustom1 != null)
                message.userCustom1 = String(object.userCustom1);
            if (object.userCustom2 != null)
                message.userCustom2 = String(object.userCustom2);
            if (object.userCustom3 != null)
                message.userCustom3 = String(object.userCustom3);
            if (object.creationDtm != null)
                message.creationDtm = String(object.creationDtm);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.srvcUnitNote1 != null)
                message.srvcUnitNote1 = String(object.srvcUnitNote1);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.srvcGeocodeSrcDesc != null)
                message.srvcGeocodeSrcDesc = String(object.srvcGeocodeSrcDesc);
            if (object.srvcUnitFrqByWk != null)
                message.srvcUnitFrqByWk = object.srvcUnitFrqByWk | 0;
            if (object.tcTsrv != null)
                message.tcTsrv = Number(object.tcTsrv);
            if (object.totCostTsrvPrYd != null)
                message.totCostTsrvPrYd = Number(object.totCostTsrvPrYd);
            if (object.state != null)
                message.state = String(object.state);
            if (object.zip != null)
                message.zip = String(object.zip);
            if (object.cty != null)
                message.cty = String(object.cty);
            if (object.notes4 != null)
                message.notes4 = String(object.notes4);
            if (object.notes5 != null)
                message.notes5 = String(object.notes5);
            if (object.userCustom4 != null)
                message.userCustom4 = String(object.userCustom4);
            if (object.userCustom5 != null)
                message.userCustom5 = String(object.userCustom5);
            if (object.srvcUnitNotes2 != null)
                message.srvcUnitNotes2 = String(object.srvcUnitNotes2);
            if (object.srvcUnitNotes3 != null)
                message.srvcUnitNotes3 = String(object.srvcUnitNotes3);
            return message;
        };

        /**
         * Creates a plain object from a CustomerShortMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.CustomerShortMsg
         * @static
         * @param {customer.CustomerShortMsg} message CustomerShortMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomerShortMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.rNo = "";
                object.sNo = 0;
                object.uqty = 0;
                object.uVolVal = 0;
                object.uWtVal = 0;
                object.srvctm = 0;
                object.strtm = "";
                object.stptm = "";
                object.addr = "";
                object.lat = 0;
                object.lon = 0;
                object.srcDOW = "";
                object.srcRNo = "";
                object.srcSNo = 0;
                object.geoSt = "";
                object.note1 = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.cuId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cuId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.orId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.noId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.noId = options.longs === String ? "0" : 0;
                object.clstId = 0;
                object.oPr = 0;
                object.srvcOrdrSrcDispCd = "";
                object.sOLNo = 0;
                object.osPkup = "";
                object.note2 = "";
                object.srvcUnitAccCdId = 0;
                object.srvcUnitAccCd = "";
                object.notes1 = "";
                object.notes3 = "";
                object.userCustom1 = "";
                object.userCustom2 = "";
                object.userCustom3 = "";
                object.creationDtm = "";
                object.userId = "";
                object.srvcUnitNote1 = "";
                object.materialType = "";
                object.srvcGeocodeSrcDesc = "";
                object.srvcUnitFrqByWk = 0;
                object.tcTsrv = 0;
                object.totCostTsrvPrYd = 0;
                object.state = "";
                object.zip = "";
                object.cty = "";
                object.notes4 = "";
                object.notes5 = "";
                object.userCustom4 = "";
                object.userCustom5 = "";
                object.srvcUnitNotes2 = "";
                object.srvcUnitNotes3 = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.rNo != null && message.hasOwnProperty("rNo"))
                object.rNo = message.rNo;
            if (message.sNo != null && message.hasOwnProperty("sNo"))
                object.sNo = message.sNo;
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                object.uqty = options.json && !isFinite(message.uqty) ? String(message.uqty) : message.uqty;
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                object.uVolVal = options.json && !isFinite(message.uVolVal) ? String(message.uVolVal) : message.uVolVal;
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                object.uWtVal = options.json && !isFinite(message.uWtVal) ? String(message.uWtVal) : message.uWtVal;
            if (message.srvctm != null && message.hasOwnProperty("srvctm"))
                object.srvctm = message.srvctm;
            if (message.strtm != null && message.hasOwnProperty("strtm"))
                object.strtm = message.strtm;
            if (message.stptm != null && message.hasOwnProperty("stptm"))
                object.stptm = message.stptm;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.srcDOW != null && message.hasOwnProperty("srcDOW"))
                object.srcDOW = message.srcDOW;
            if (message.srcRNo != null && message.hasOwnProperty("srcRNo"))
                object.srcRNo = message.srcRNo;
            if (message.srcSNo != null && message.hasOwnProperty("srcSNo"))
                object.srcSNo = message.srcSNo;
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                object.geoSt = message.geoSt;
            if (message.note1 != null && message.hasOwnProperty("note1"))
                object.note1 = message.note1;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (typeof message.cuId === "number")
                    object.cuId = options.longs === String ? String(message.cuId) : message.cuId;
                else
                    object.cuId = options.longs === String ? $util.Long.prototype.toString.call(message.cuId) : options.longs === Number ? new $util.LongBits(message.cuId.low >>> 0, message.cuId.high >>> 0).toNumber() : message.cuId;
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (typeof message.unId === "number")
                    object.unId = options.longs === String ? String(message.unId) : message.unId;
                else
                    object.unId = options.longs === String ? $util.Long.prototype.toString.call(message.unId) : options.longs === Number ? new $util.LongBits(message.unId.low >>> 0, message.unId.high >>> 0).toNumber() : message.unId;
            if (message.orId != null && message.hasOwnProperty("orId"))
                if (typeof message.orId === "number")
                    object.orId = options.longs === String ? String(message.orId) : message.orId;
                else
                    object.orId = options.longs === String ? $util.Long.prototype.toString.call(message.orId) : options.longs === Number ? new $util.LongBits(message.orId.low >>> 0, message.orId.high >>> 0).toNumber() : message.orId;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.noId != null && message.hasOwnProperty("noId"))
                if (typeof message.noId === "number")
                    object.noId = options.longs === String ? String(message.noId) : message.noId;
                else
                    object.noId = options.longs === String ? $util.Long.prototype.toString.call(message.noId) : options.longs === Number ? new $util.LongBits(message.noId.low >>> 0, message.noId.high >>> 0).toNumber() : message.noId;
            if (message.clstId != null && message.hasOwnProperty("clstId"))
                object.clstId = message.clstId;
            if (message.oPr != null && message.hasOwnProperty("oPr"))
                object.oPr = message.oPr;
            if (message.srvcOrdrSrcDispCd != null && message.hasOwnProperty("srvcOrdrSrcDispCd"))
                object.srvcOrdrSrcDispCd = message.srvcOrdrSrcDispCd;
            if (message.sOLNo != null && message.hasOwnProperty("sOLNo"))
                object.sOLNo = message.sOLNo;
            if (message.osPkup != null && message.hasOwnProperty("osPkup"))
                object.osPkup = message.osPkup;
            if (message.note2 != null && message.hasOwnProperty("note2"))
                object.note2 = message.note2;
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                object.srvcUnitAccCdId = message.srvcUnitAccCdId;
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                object.srvcUnitAccCd = message.srvcUnitAccCd;
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                object.notes1 = message.notes1;
            if (message.notes3 != null && message.hasOwnProperty("notes3"))
                object.notes3 = message.notes3;
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                object.userCustom1 = message.userCustom1;
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                object.userCustom2 = message.userCustom2;
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                object.userCustom3 = message.userCustom3;
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                object.creationDtm = message.creationDtm;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                object.srvcUnitNote1 = message.srvcUnitNote1;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                object.srvcGeocodeSrcDesc = message.srvcGeocodeSrcDesc;
            if (message.srvcUnitFrqByWk != null && message.hasOwnProperty("srvcUnitFrqByWk"))
                object.srvcUnitFrqByWk = message.srvcUnitFrqByWk;
            if (message.tcTsrv != null && message.hasOwnProperty("tcTsrv"))
                object.tcTsrv = options.json && !isFinite(message.tcTsrv) ? String(message.tcTsrv) : message.tcTsrv;
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                object.totCostTsrvPrYd = options.json && !isFinite(message.totCostTsrvPrYd) ? String(message.totCostTsrvPrYd) : message.totCostTsrvPrYd;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.zip != null && message.hasOwnProperty("zip"))
                object.zip = message.zip;
            if (message.cty != null && message.hasOwnProperty("cty"))
                object.cty = message.cty;
            if (message.notes4 != null && message.hasOwnProperty("notes4"))
                object.notes4 = message.notes4;
            if (message.notes5 != null && message.hasOwnProperty("notes5"))
                object.notes5 = message.notes5;
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                object.userCustom4 = message.userCustom4;
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                object.userCustom5 = message.userCustom5;
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                object.srvcUnitNotes2 = message.srvcUnitNotes2;
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                object.srvcUnitNotes3 = message.srvcUnitNotes3;
            return object;
        };

        /**
         * Converts this CustomerShortMsg to JSON.
         * @function toJSON
         * @memberof customer.CustomerShortMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomerShortMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomerShortMsg;
    })();

    customer.DayOfWeek = (function() {

        /**
         * Properties of a DayOfWeek.
         * @memberof customer
         * @interface IDayOfWeek
         * @property {string|null} [monday] DayOfWeek monday
         * @property {string|null} [tuesday] DayOfWeek tuesday
         * @property {string|null} [wednesday] DayOfWeek wednesday
         * @property {string|null} [thursday] DayOfWeek thursday
         * @property {string|null} [friday] DayOfWeek friday
         * @property {string|null} [saturday] DayOfWeek saturday
         * @property {string|null} [sunday] DayOfWeek sunday
         */

        /**
         * Constructs a new DayOfWeek.
         * @memberof customer
         * @classdesc Represents a DayOfWeek.
         * @implements IDayOfWeek
         * @constructor
         * @param {customer.IDayOfWeek=} [properties] Properties to set
         */
        function DayOfWeek(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DayOfWeek monday.
         * @member {string} monday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.monday = "";

        /**
         * DayOfWeek tuesday.
         * @member {string} tuesday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.tuesday = "";

        /**
         * DayOfWeek wednesday.
         * @member {string} wednesday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.wednesday = "";

        /**
         * DayOfWeek thursday.
         * @member {string} thursday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.thursday = "";

        /**
         * DayOfWeek friday.
         * @member {string} friday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.friday = "";

        /**
         * DayOfWeek saturday.
         * @member {string} saturday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.saturday = "";

        /**
         * DayOfWeek sunday.
         * @member {string} sunday
         * @memberof customer.DayOfWeek
         * @instance
         */
        DayOfWeek.prototype.sunday = "";

        /**
         * Creates a new DayOfWeek instance using the specified properties.
         * @function create
         * @memberof customer.DayOfWeek
         * @static
         * @param {customer.IDayOfWeek=} [properties] Properties to set
         * @returns {customer.DayOfWeek} DayOfWeek instance
         */
        DayOfWeek.create = function create(properties) {
            return new DayOfWeek(properties);
        };

        /**
         * Encodes the specified DayOfWeek message. Does not implicitly {@link customer.DayOfWeek.verify|verify} messages.
         * @function encode
         * @memberof customer.DayOfWeek
         * @static
         * @param {customer.IDayOfWeek} message DayOfWeek message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DayOfWeek.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monday != null && Object.hasOwnProperty.call(message, "monday"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.monday);
            if (message.tuesday != null && Object.hasOwnProperty.call(message, "tuesday"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tuesday);
            if (message.wednesday != null && Object.hasOwnProperty.call(message, "wednesday"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.wednesday);
            if (message.thursday != null && Object.hasOwnProperty.call(message, "thursday"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.thursday);
            if (message.friday != null && Object.hasOwnProperty.call(message, "friday"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.friday);
            if (message.saturday != null && Object.hasOwnProperty.call(message, "saturday"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.saturday);
            if (message.sunday != null && Object.hasOwnProperty.call(message, "sunday"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.sunday);
            return writer;
        };

        /**
         * Encodes the specified DayOfWeek message, length delimited. Does not implicitly {@link customer.DayOfWeek.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.DayOfWeek
         * @static
         * @param {customer.IDayOfWeek} message DayOfWeek message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DayOfWeek.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DayOfWeek message from the specified reader or buffer.
         * @function decode
         * @memberof customer.DayOfWeek
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.DayOfWeek} DayOfWeek
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DayOfWeek.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.DayOfWeek();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.monday = reader.string();
                    break;
                case 2:
                    message.tuesday = reader.string();
                    break;
                case 3:
                    message.wednesday = reader.string();
                    break;
                case 4:
                    message.thursday = reader.string();
                    break;
                case 5:
                    message.friday = reader.string();
                    break;
                case 6:
                    message.saturday = reader.string();
                    break;
                case 7:
                    message.sunday = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DayOfWeek message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.DayOfWeek
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.DayOfWeek} DayOfWeek
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DayOfWeek.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DayOfWeek message.
         * @function verify
         * @memberof customer.DayOfWeek
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DayOfWeek.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.monday != null && message.hasOwnProperty("monday"))
                if (!$util.isString(message.monday))
                    return "monday: string expected";
            if (message.tuesday != null && message.hasOwnProperty("tuesday"))
                if (!$util.isString(message.tuesday))
                    return "tuesday: string expected";
            if (message.wednesday != null && message.hasOwnProperty("wednesday"))
                if (!$util.isString(message.wednesday))
                    return "wednesday: string expected";
            if (message.thursday != null && message.hasOwnProperty("thursday"))
                if (!$util.isString(message.thursday))
                    return "thursday: string expected";
            if (message.friday != null && message.hasOwnProperty("friday"))
                if (!$util.isString(message.friday))
                    return "friday: string expected";
            if (message.saturday != null && message.hasOwnProperty("saturday"))
                if (!$util.isString(message.saturday))
                    return "saturday: string expected";
            if (message.sunday != null && message.hasOwnProperty("sunday"))
                if (!$util.isString(message.sunday))
                    return "sunday: string expected";
            return null;
        };

        /**
         * Creates a DayOfWeek message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.DayOfWeek
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.DayOfWeek} DayOfWeek
         */
        DayOfWeek.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.DayOfWeek)
                return object;
            let message = new $root.customer.DayOfWeek();
            if (object.monday != null)
                message.monday = String(object.monday);
            if (object.tuesday != null)
                message.tuesday = String(object.tuesday);
            if (object.wednesday != null)
                message.wednesday = String(object.wednesday);
            if (object.thursday != null)
                message.thursday = String(object.thursday);
            if (object.friday != null)
                message.friday = String(object.friday);
            if (object.saturday != null)
                message.saturday = String(object.saturday);
            if (object.sunday != null)
                message.sunday = String(object.sunday);
            return message;
        };

        /**
         * Creates a plain object from a DayOfWeek message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.DayOfWeek
         * @static
         * @param {customer.DayOfWeek} message DayOfWeek
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DayOfWeek.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.monday = "";
                object.tuesday = "";
                object.wednesday = "";
                object.thursday = "";
                object.friday = "";
                object.saturday = "";
                object.sunday = "";
            }
            if (message.monday != null && message.hasOwnProperty("monday"))
                object.monday = message.monday;
            if (message.tuesday != null && message.hasOwnProperty("tuesday"))
                object.tuesday = message.tuesday;
            if (message.wednesday != null && message.hasOwnProperty("wednesday"))
                object.wednesday = message.wednesday;
            if (message.thursday != null && message.hasOwnProperty("thursday"))
                object.thursday = message.thursday;
            if (message.friday != null && message.hasOwnProperty("friday"))
                object.friday = message.friday;
            if (message.saturday != null && message.hasOwnProperty("saturday"))
                object.saturday = message.saturday;
            if (message.sunday != null && message.hasOwnProperty("sunday"))
                object.sunday = message.sunday;
            return object;
        };

        /**
         * Converts this DayOfWeek to JSON.
         * @function toJSON
         * @memberof customer.DayOfWeek
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DayOfWeek.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DayOfWeek;
    })();

    customer.WeeklyCustomer = (function() {

        /**
         * Properties of a WeeklyCustomer.
         * @memberof customer
         * @interface IWeeklyCustomer
         * @property {string|null} [cid] WeeklyCustomer cid
         * @property {string|null} [name] WeeklyCustomer name
         * @property {number|null} [uqty] WeeklyCustomer uqty
         * @property {number|null} [uVolVal] WeeklyCustomer uVolVal
         * @property {number|null} [uWtVal] WeeklyCustomer uWtVal
         * @property {string|null} [addr] WeeklyCustomer addr
         * @property {string|null} [cty] WeeklyCustomer cty
         * @property {string|null} [state] WeeklyCustomer state
         * @property {string|null} [zip] WeeklyCustomer zip
         * @property {string|null} [cntry] WeeklyCustomer cntry
         * @property {number|null} [lat] WeeklyCustomer lat
         * @property {number|null} [lon] WeeklyCustomer lon
         * @property {string|null} [geoSt] WeeklyCustomer geoSt
         * @property {number|null} [frqByWk] WeeklyCustomer frqByWk
         * @property {number|Long|null} [cuId] WeeklyCustomer cuId
         * @property {number|Long|null} [unId] WeeklyCustomer unId
         * @property {number|Long|null} [loId] WeeklyCustomer loId
         * @property {customer.IDayOfWeek|null} [orgRt] WeeklyCustomer orgRt
         * @property {customer.IDayOfWeek|null} [sRt] WeeklyCustomer sRt
         * @property {number|null} [wkClstId] WeeklyCustomer wkClstId
         * @property {string|null} [sos] WeeklyCustomer sos
         * @property {customer.IDayOfWeek|null} [pRt] WeeklyCustomer pRt
         * @property {string|null} [lkFlg] WeeklyCustomer lkFlg
         * @property {string|null} [edId] WeeklyCustomer edId
         * @property {string|null} [slockCd] WeeklyCustomer slockCd
         * @property {string|null} [rtWkCd] WeeklyCustomer rtWkCd
         * @property {string|null} [prRtWkCd] WeeklyCustomer prRtWkCd
         * @property {string|null} [prOpUnCd] WeeklyCustomer prOpUnCd
         * @property {string|null} [prDispCd] WeeklyCustomer prDispCd
         * @property {number|null} [wkNo] WeeklyCustomer wkNo
         * @property {string|null} [srvcUnitNote1] WeeklyCustomer srvcUnitNote1
         * @property {number|null} [srvcUnitAccCdId] WeeklyCustomer srvcUnitAccCdId
         * @property {string|null} [srvcUnitAccCd] WeeklyCustomer srvcUnitAccCd
         * @property {string|null} [srvcUnitCd] WeeklyCustomer srvcUnitCd
         * @property {string|null} [creationDtm] WeeklyCustomer creationDtm
         * @property {string|null} [userDefinedWeekCd] WeeklyCustomer userDefinedWeekCd
         * @property {number|null} [totCostTsrv] WeeklyCustomer totCostTsrv
         * @property {number|null} [totCostTsrvPrYd] WeeklyCustomer totCostTsrvPrYd
         * @property {number|null} [weekCodeLockFlag] WeeklyCustomer weekCodeLockFlag
         * @property {number|null} [priority] WeeklyCustomer priority
         * @property {string|null} [srvcUnitNotes2] WeeklyCustomer srvcUnitNotes2
         * @property {string|null} [materialType] WeeklyCustomer materialType
         * @property {string|null} [srvcUnitNotes3] WeeklyCustomer srvcUnitNotes3
         * @property {string|null} [srvcRtTypCd] WeeklyCustomer srvcRtTypCd
         * @property {number|null} [srvcUnitLftAccPnlt] WeeklyCustomer srvcUnitLftAccPnlt
         * @property {number|null} [srvcUnitRgtAccPnlt] WeeklyCustomer srvcUnitRgtAccPnlt
         * @property {string|null} [dchg] WeeklyCustomer dchg
         * @property {string|null} [dayChangeP] WeeklyCustomer dayChangeP
         * @property {string|null} [weekChange] WeeklyCustomer weekChange
         * @property {string|null} [weekChangeP] WeeklyCustomer weekChangeP
         */

        /**
         * Constructs a new WeeklyCustomer.
         * @memberof customer
         * @classdesc Represents a WeeklyCustomer.
         * @implements IWeeklyCustomer
         * @constructor
         * @param {customer.IWeeklyCustomer=} [properties] Properties to set
         */
        function WeeklyCustomer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyCustomer cid.
         * @member {string} cid
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.cid = "";

        /**
         * WeeklyCustomer name.
         * @member {string} name
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.name = "";

        /**
         * WeeklyCustomer uqty.
         * @member {number} uqty
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.uqty = 0;

        /**
         * WeeklyCustomer uVolVal.
         * @member {number} uVolVal
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.uVolVal = 0;

        /**
         * WeeklyCustomer uWtVal.
         * @member {number} uWtVal
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.uWtVal = 0;

        /**
         * WeeklyCustomer addr.
         * @member {string} addr
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.addr = "";

        /**
         * WeeklyCustomer cty.
         * @member {string} cty
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.cty = "";

        /**
         * WeeklyCustomer state.
         * @member {string} state
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.state = "";

        /**
         * WeeklyCustomer zip.
         * @member {string} zip
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.zip = "";

        /**
         * WeeklyCustomer cntry.
         * @member {string} cntry
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.cntry = "";

        /**
         * WeeklyCustomer lat.
         * @member {number} lat
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.lat = 0;

        /**
         * WeeklyCustomer lon.
         * @member {number} lon
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.lon = 0;

        /**
         * WeeklyCustomer geoSt.
         * @member {string} geoSt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.geoSt = "";

        /**
         * WeeklyCustomer frqByWk.
         * @member {number} frqByWk
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.frqByWk = 0;

        /**
         * WeeklyCustomer cuId.
         * @member {number|Long} cuId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.cuId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WeeklyCustomer unId.
         * @member {number|Long} unId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.unId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WeeklyCustomer loId.
         * @member {number|Long} loId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WeeklyCustomer orgRt.
         * @member {customer.IDayOfWeek|null|undefined} orgRt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.orgRt = null;

        /**
         * WeeklyCustomer sRt.
         * @member {customer.IDayOfWeek|null|undefined} sRt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.sRt = null;

        /**
         * WeeklyCustomer wkClstId.
         * @member {number} wkClstId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.wkClstId = 0;

        /**
         * WeeklyCustomer sos.
         * @member {string} sos
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.sos = "";

        /**
         * WeeklyCustomer pRt.
         * @member {customer.IDayOfWeek|null|undefined} pRt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.pRt = null;

        /**
         * WeeklyCustomer lkFlg.
         * @member {string} lkFlg
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.lkFlg = "";

        /**
         * WeeklyCustomer edId.
         * @member {string} edId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.edId = "";

        /**
         * WeeklyCustomer slockCd.
         * @member {string} slockCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.slockCd = "";

        /**
         * WeeklyCustomer rtWkCd.
         * @member {string} rtWkCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.rtWkCd = "";

        /**
         * WeeklyCustomer prRtWkCd.
         * @member {string} prRtWkCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.prRtWkCd = "";

        /**
         * WeeklyCustomer prOpUnCd.
         * @member {string} prOpUnCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.prOpUnCd = "";

        /**
         * WeeklyCustomer prDispCd.
         * @member {string} prDispCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.prDispCd = "";

        /**
         * WeeklyCustomer wkNo.
         * @member {number} wkNo
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.wkNo = 0;

        /**
         * WeeklyCustomer srvcUnitNote1.
         * @member {string} srvcUnitNote1
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitNote1 = "";

        /**
         * WeeklyCustomer srvcUnitAccCdId.
         * @member {number} srvcUnitAccCdId
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitAccCdId = 0;

        /**
         * WeeklyCustomer srvcUnitAccCd.
         * @member {string} srvcUnitAccCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitAccCd = "";

        /**
         * WeeklyCustomer srvcUnitCd.
         * @member {string} srvcUnitCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitCd = "";

        /**
         * WeeklyCustomer creationDtm.
         * @member {string} creationDtm
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.creationDtm = "";

        /**
         * WeeklyCustomer userDefinedWeekCd.
         * @member {string} userDefinedWeekCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.userDefinedWeekCd = "";

        /**
         * WeeklyCustomer totCostTsrv.
         * @member {number} totCostTsrv
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.totCostTsrv = 0;

        /**
         * WeeklyCustomer totCostTsrvPrYd.
         * @member {number} totCostTsrvPrYd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.totCostTsrvPrYd = 0;

        /**
         * WeeklyCustomer weekCodeLockFlag.
         * @member {number} weekCodeLockFlag
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.weekCodeLockFlag = 0;

        /**
         * WeeklyCustomer priority.
         * @member {number} priority
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.priority = 0;

        /**
         * WeeklyCustomer srvcUnitNotes2.
         * @member {string} srvcUnitNotes2
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitNotes2 = "";

        /**
         * WeeklyCustomer materialType.
         * @member {string} materialType
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.materialType = "";

        /**
         * WeeklyCustomer srvcUnitNotes3.
         * @member {string} srvcUnitNotes3
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitNotes3 = "";

        /**
         * WeeklyCustomer srvcRtTypCd.
         * @member {string} srvcRtTypCd
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcRtTypCd = "";

        /**
         * WeeklyCustomer srvcUnitLftAccPnlt.
         * @member {number} srvcUnitLftAccPnlt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitLftAccPnlt = 0;

        /**
         * WeeklyCustomer srvcUnitRgtAccPnlt.
         * @member {number} srvcUnitRgtAccPnlt
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.srvcUnitRgtAccPnlt = 0;

        /**
         * WeeklyCustomer dchg.
         * @member {string} dchg
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.dchg = "";

        /**
         * WeeklyCustomer dayChangeP.
         * @member {string} dayChangeP
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.dayChangeP = "";

        /**
         * WeeklyCustomer weekChange.
         * @member {string} weekChange
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.weekChange = "";

        /**
         * WeeklyCustomer weekChangeP.
         * @member {string} weekChangeP
         * @memberof customer.WeeklyCustomer
         * @instance
         */
        WeeklyCustomer.prototype.weekChangeP = "";

        /**
         * Creates a new WeeklyCustomer instance using the specified properties.
         * @function create
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {customer.IWeeklyCustomer=} [properties] Properties to set
         * @returns {customer.WeeklyCustomer} WeeklyCustomer instance
         */
        WeeklyCustomer.create = function create(properties) {
            return new WeeklyCustomer(properties);
        };

        /**
         * Encodes the specified WeeklyCustomer message. Does not implicitly {@link customer.WeeklyCustomer.verify|verify} messages.
         * @function encode
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {customer.IWeeklyCustomer} message WeeklyCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.uqty != null && Object.hasOwnProperty.call(message, "uqty"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.uqty);
            if (message.uVolVal != null && Object.hasOwnProperty.call(message, "uVolVal"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.uVolVal);
            if (message.uWtVal != null && Object.hasOwnProperty.call(message, "uWtVal"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.uWtVal);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.addr);
            if (message.cty != null && Object.hasOwnProperty.call(message, "cty"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.cty);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.state);
            if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.zip);
            if (message.cntry != null && Object.hasOwnProperty.call(message, "cntry"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.cntry);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.lon);
            if (message.geoSt != null && Object.hasOwnProperty.call(message, "geoSt"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.geoSt);
            if (message.frqByWk != null && Object.hasOwnProperty.call(message, "frqByWk"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.frqByWk);
            if (message.cuId != null && Object.hasOwnProperty.call(message, "cuId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.cuId);
            if (message.unId != null && Object.hasOwnProperty.call(message, "unId"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.unId);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.loId);
            if (message.orgRt != null && Object.hasOwnProperty.call(message, "orgRt"))
                $root.customer.DayOfWeek.encode(message.orgRt, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sRt != null && Object.hasOwnProperty.call(message, "sRt"))
                $root.customer.DayOfWeek.encode(message.sRt, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.wkClstId != null && Object.hasOwnProperty.call(message, "wkClstId"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.wkClstId);
            if (message.sos != null && Object.hasOwnProperty.call(message, "sos"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.sos);
            if (message.pRt != null && Object.hasOwnProperty.call(message, "pRt"))
                $root.customer.DayOfWeek.encode(message.pRt, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.lkFlg != null && Object.hasOwnProperty.call(message, "lkFlg"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.lkFlg);
            if (message.edId != null && Object.hasOwnProperty.call(message, "edId"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.edId);
            if (message.slockCd != null && Object.hasOwnProperty.call(message, "slockCd"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.slockCd);
            if (message.rtWkCd != null && Object.hasOwnProperty.call(message, "rtWkCd"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.rtWkCd);
            if (message.prRtWkCd != null && Object.hasOwnProperty.call(message, "prRtWkCd"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.prRtWkCd);
            if (message.prOpUnCd != null && Object.hasOwnProperty.call(message, "prOpUnCd"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.prOpUnCd);
            if (message.prDispCd != null && Object.hasOwnProperty.call(message, "prDispCd"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.prDispCd);
            if (message.wkNo != null && Object.hasOwnProperty.call(message, "wkNo"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.wkNo);
            if (message.srvcUnitNote1 != null && Object.hasOwnProperty.call(message, "srvcUnitNote1"))
                writer.uint32(/* id 32, wireType 2 =*/258).string(message.srvcUnitNote1);
            if (message.srvcUnitAccCdId != null && Object.hasOwnProperty.call(message, "srvcUnitAccCdId"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.srvcUnitAccCdId);
            if (message.srvcUnitAccCd != null && Object.hasOwnProperty.call(message, "srvcUnitAccCd"))
                writer.uint32(/* id 34, wireType 2 =*/274).string(message.srvcUnitAccCd);
            if (message.srvcUnitCd != null && Object.hasOwnProperty.call(message, "srvcUnitCd"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.srvcUnitCd);
            if (message.creationDtm != null && Object.hasOwnProperty.call(message, "creationDtm"))
                writer.uint32(/* id 36, wireType 2 =*/290).string(message.creationDtm);
            if (message.userDefinedWeekCd != null && Object.hasOwnProperty.call(message, "userDefinedWeekCd"))
                writer.uint32(/* id 37, wireType 2 =*/298).string(message.userDefinedWeekCd);
            if (message.totCostTsrv != null && Object.hasOwnProperty.call(message, "totCostTsrv"))
                writer.uint32(/* id 38, wireType 1 =*/305).double(message.totCostTsrv);
            if (message.totCostTsrvPrYd != null && Object.hasOwnProperty.call(message, "totCostTsrvPrYd"))
                writer.uint32(/* id 39, wireType 1 =*/313).double(message.totCostTsrvPrYd);
            if (message.weekCodeLockFlag != null && Object.hasOwnProperty.call(message, "weekCodeLockFlag"))
                writer.uint32(/* id 40, wireType 0 =*/320).int32(message.weekCodeLockFlag);
            if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
                writer.uint32(/* id 41, wireType 0 =*/328).int32(message.priority);
            if (message.srvcUnitNotes2 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes2"))
                writer.uint32(/* id 42, wireType 2 =*/338).string(message.srvcUnitNotes2);
            if (message.materialType != null && Object.hasOwnProperty.call(message, "materialType"))
                writer.uint32(/* id 43, wireType 2 =*/346).string(message.materialType);
            if (message.srvcUnitNotes3 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes3"))
                writer.uint32(/* id 44, wireType 2 =*/354).string(message.srvcUnitNotes3);
            if (message.srvcRtTypCd != null && Object.hasOwnProperty.call(message, "srvcRtTypCd"))
                writer.uint32(/* id 45, wireType 2 =*/362).string(message.srvcRtTypCd);
            if (message.srvcUnitLftAccPnlt != null && Object.hasOwnProperty.call(message, "srvcUnitLftAccPnlt"))
                writer.uint32(/* id 46, wireType 0 =*/368).int32(message.srvcUnitLftAccPnlt);
            if (message.srvcUnitRgtAccPnlt != null && Object.hasOwnProperty.call(message, "srvcUnitRgtAccPnlt"))
                writer.uint32(/* id 47, wireType 0 =*/376).int32(message.srvcUnitRgtAccPnlt);
            if (message.dchg != null && Object.hasOwnProperty.call(message, "dchg"))
                writer.uint32(/* id 48, wireType 2 =*/386).string(message.dchg);
            if (message.dayChangeP != null && Object.hasOwnProperty.call(message, "dayChangeP"))
                writer.uint32(/* id 49, wireType 2 =*/394).string(message.dayChangeP);
            if (message.weekChange != null && Object.hasOwnProperty.call(message, "weekChange"))
                writer.uint32(/* id 50, wireType 2 =*/402).string(message.weekChange);
            if (message.weekChangeP != null && Object.hasOwnProperty.call(message, "weekChangeP"))
                writer.uint32(/* id 51, wireType 2 =*/410).string(message.weekChangeP);
            return writer;
        };

        /**
         * Encodes the specified WeeklyCustomer message, length delimited. Does not implicitly {@link customer.WeeklyCustomer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {customer.IWeeklyCustomer} message WeeklyCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyCustomer message from the specified reader or buffer.
         * @function decode
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.WeeklyCustomer} WeeklyCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.WeeklyCustomer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.uqty = reader.double();
                    break;
                case 4:
                    message.uVolVal = reader.double();
                    break;
                case 5:
                    message.uWtVal = reader.double();
                    break;
                case 6:
                    message.addr = reader.string();
                    break;
                case 7:
                    message.cty = reader.string();
                    break;
                case 8:
                    message.state = reader.string();
                    break;
                case 9:
                    message.zip = reader.string();
                    break;
                case 10:
                    message.cntry = reader.string();
                    break;
                case 11:
                    message.lat = reader.double();
                    break;
                case 12:
                    message.lon = reader.double();
                    break;
                case 13:
                    message.geoSt = reader.string();
                    break;
                case 14:
                    message.frqByWk = reader.int32();
                    break;
                case 15:
                    message.cuId = reader.int64();
                    break;
                case 16:
                    message.unId = reader.int64();
                    break;
                case 17:
                    message.loId = reader.int64();
                    break;
                case 18:
                    message.orgRt = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.sRt = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.wkClstId = reader.int32();
                    break;
                case 21:
                    message.sos = reader.string();
                    break;
                case 22:
                    message.pRt = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.lkFlg = reader.string();
                    break;
                case 24:
                    message.edId = reader.string();
                    break;
                case 26:
                    message.slockCd = reader.string();
                    break;
                case 27:
                    message.rtWkCd = reader.string();
                    break;
                case 28:
                    message.prRtWkCd = reader.string();
                    break;
                case 29:
                    message.prOpUnCd = reader.string();
                    break;
                case 30:
                    message.prDispCd = reader.string();
                    break;
                case 31:
                    message.wkNo = reader.int32();
                    break;
                case 32:
                    message.srvcUnitNote1 = reader.string();
                    break;
                case 33:
                    message.srvcUnitAccCdId = reader.int32();
                    break;
                case 34:
                    message.srvcUnitAccCd = reader.string();
                    break;
                case 35:
                    message.srvcUnitCd = reader.string();
                    break;
                case 36:
                    message.creationDtm = reader.string();
                    break;
                case 37:
                    message.userDefinedWeekCd = reader.string();
                    break;
                case 38:
                    message.totCostTsrv = reader.double();
                    break;
                case 39:
                    message.totCostTsrvPrYd = reader.double();
                    break;
                case 40:
                    message.weekCodeLockFlag = reader.int32();
                    break;
                case 41:
                    message.priority = reader.int32();
                    break;
                case 42:
                    message.srvcUnitNotes2 = reader.string();
                    break;
                case 43:
                    message.materialType = reader.string();
                    break;
                case 44:
                    message.srvcUnitNotes3 = reader.string();
                    break;
                case 45:
                    message.srvcRtTypCd = reader.string();
                    break;
                case 46:
                    message.srvcUnitLftAccPnlt = reader.int32();
                    break;
                case 47:
                    message.srvcUnitRgtAccPnlt = reader.int32();
                    break;
                case 48:
                    message.dchg = reader.string();
                    break;
                case 49:
                    message.dayChangeP = reader.string();
                    break;
                case 50:
                    message.weekChange = reader.string();
                    break;
                case 51:
                    message.weekChangeP = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeeklyCustomer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.WeeklyCustomer} WeeklyCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyCustomer message.
         * @function verify
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyCustomer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                if (typeof message.uqty !== "number")
                    return "uqty: number expected";
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                if (typeof message.uVolVal !== "number")
                    return "uVolVal: number expected";
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                if (typeof message.uWtVal !== "number")
                    return "uWtVal: number expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.cty != null && message.hasOwnProperty("cty"))
                if (!$util.isString(message.cty))
                    return "cty: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.zip != null && message.hasOwnProperty("zip"))
                if (!$util.isString(message.zip))
                    return "zip: string expected";
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                if (!$util.isString(message.cntry))
                    return "cntry: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                if (!$util.isString(message.geoSt))
                    return "geoSt: string expected";
            if (message.frqByWk != null && message.hasOwnProperty("frqByWk"))
                if (!$util.isInteger(message.frqByWk))
                    return "frqByWk: integer expected";
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (!$util.isInteger(message.cuId) && !(message.cuId && $util.isInteger(message.cuId.low) && $util.isInteger(message.cuId.high)))
                    return "cuId: integer|Long expected";
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (!$util.isInteger(message.unId) && !(message.unId && $util.isInteger(message.unId.low) && $util.isInteger(message.unId.high)))
                    return "unId: integer|Long expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.orgRt != null && message.hasOwnProperty("orgRt")) {
                let error = $root.customer.DayOfWeek.verify(message.orgRt);
                if (error)
                    return "orgRt." + error;
            }
            if (message.sRt != null && message.hasOwnProperty("sRt")) {
                let error = $root.customer.DayOfWeek.verify(message.sRt);
                if (error)
                    return "sRt." + error;
            }
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                if (!$util.isInteger(message.wkClstId))
                    return "wkClstId: integer expected";
            if (message.sos != null && message.hasOwnProperty("sos"))
                if (!$util.isString(message.sos))
                    return "sos: string expected";
            if (message.pRt != null && message.hasOwnProperty("pRt")) {
                let error = $root.customer.DayOfWeek.verify(message.pRt);
                if (error)
                    return "pRt." + error;
            }
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                if (!$util.isString(message.lkFlg))
                    return "lkFlg: string expected";
            if (message.edId != null && message.hasOwnProperty("edId"))
                if (!$util.isString(message.edId))
                    return "edId: string expected";
            if (message.slockCd != null && message.hasOwnProperty("slockCd"))
                if (!$util.isString(message.slockCd))
                    return "slockCd: string expected";
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                if (!$util.isString(message.rtWkCd))
                    return "rtWkCd: string expected";
            if (message.prRtWkCd != null && message.hasOwnProperty("prRtWkCd"))
                if (!$util.isString(message.prRtWkCd))
                    return "prRtWkCd: string expected";
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                if (!$util.isString(message.prOpUnCd))
                    return "prOpUnCd: string expected";
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                if (!$util.isString(message.prDispCd))
                    return "prDispCd: string expected";
            if (message.wkNo != null && message.hasOwnProperty("wkNo"))
                if (!$util.isInteger(message.wkNo))
                    return "wkNo: integer expected";
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                if (!$util.isString(message.srvcUnitNote1))
                    return "srvcUnitNote1: string expected";
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                if (!$util.isInteger(message.srvcUnitAccCdId))
                    return "srvcUnitAccCdId: integer expected";
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                if (!$util.isString(message.srvcUnitAccCd))
                    return "srvcUnitAccCd: string expected";
            if (message.srvcUnitCd != null && message.hasOwnProperty("srvcUnitCd"))
                if (!$util.isString(message.srvcUnitCd))
                    return "srvcUnitCd: string expected";
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                if (!$util.isString(message.creationDtm))
                    return "creationDtm: string expected";
            if (message.userDefinedWeekCd != null && message.hasOwnProperty("userDefinedWeekCd"))
                if (!$util.isString(message.userDefinedWeekCd))
                    return "userDefinedWeekCd: string expected";
            if (message.totCostTsrv != null && message.hasOwnProperty("totCostTsrv"))
                if (typeof message.totCostTsrv !== "number")
                    return "totCostTsrv: number expected";
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                if (typeof message.totCostTsrvPrYd !== "number")
                    return "totCostTsrvPrYd: number expected";
            if (message.weekCodeLockFlag != null && message.hasOwnProperty("weekCodeLockFlag"))
                if (!$util.isInteger(message.weekCodeLockFlag))
                    return "weekCodeLockFlag: integer expected";
            if (message.priority != null && message.hasOwnProperty("priority"))
                if (!$util.isInteger(message.priority))
                    return "priority: integer expected";
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                if (!$util.isString(message.srvcUnitNotes2))
                    return "srvcUnitNotes2: string expected";
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                if (!$util.isString(message.materialType))
                    return "materialType: string expected";
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                if (!$util.isString(message.srvcUnitNotes3))
                    return "srvcUnitNotes3: string expected";
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                if (!$util.isString(message.srvcRtTypCd))
                    return "srvcRtTypCd: string expected";
            if (message.srvcUnitLftAccPnlt != null && message.hasOwnProperty("srvcUnitLftAccPnlt"))
                if (!$util.isInteger(message.srvcUnitLftAccPnlt))
                    return "srvcUnitLftAccPnlt: integer expected";
            if (message.srvcUnitRgtAccPnlt != null && message.hasOwnProperty("srvcUnitRgtAccPnlt"))
                if (!$util.isInteger(message.srvcUnitRgtAccPnlt))
                    return "srvcUnitRgtAccPnlt: integer expected";
            if (message.dchg != null && message.hasOwnProperty("dchg"))
                if (!$util.isString(message.dchg))
                    return "dchg: string expected";
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                if (!$util.isString(message.dayChangeP))
                    return "dayChangeP: string expected";
            if (message.weekChange != null && message.hasOwnProperty("weekChange"))
                if (!$util.isString(message.weekChange))
                    return "weekChange: string expected";
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                if (!$util.isString(message.weekChangeP))
                    return "weekChangeP: string expected";
            return null;
        };

        /**
         * Creates a WeeklyCustomer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.WeeklyCustomer} WeeklyCustomer
         */
        WeeklyCustomer.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.WeeklyCustomer)
                return object;
            let message = new $root.customer.WeeklyCustomer();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.uqty != null)
                message.uqty = Number(object.uqty);
            if (object.uVolVal != null)
                message.uVolVal = Number(object.uVolVal);
            if (object.uWtVal != null)
                message.uWtVal = Number(object.uWtVal);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.cty != null)
                message.cty = String(object.cty);
            if (object.state != null)
                message.state = String(object.state);
            if (object.zip != null)
                message.zip = String(object.zip);
            if (object.cntry != null)
                message.cntry = String(object.cntry);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.geoSt != null)
                message.geoSt = String(object.geoSt);
            if (object.frqByWk != null)
                message.frqByWk = object.frqByWk | 0;
            if (object.cuId != null)
                if ($util.Long)
                    (message.cuId = $util.Long.fromValue(object.cuId)).unsigned = false;
                else if (typeof object.cuId === "string")
                    message.cuId = parseInt(object.cuId, 10);
                else if (typeof object.cuId === "number")
                    message.cuId = object.cuId;
                else if (typeof object.cuId === "object")
                    message.cuId = new $util.LongBits(object.cuId.low >>> 0, object.cuId.high >>> 0).toNumber();
            if (object.unId != null)
                if ($util.Long)
                    (message.unId = $util.Long.fromValue(object.unId)).unsigned = false;
                else if (typeof object.unId === "string")
                    message.unId = parseInt(object.unId, 10);
                else if (typeof object.unId === "number")
                    message.unId = object.unId;
                else if (typeof object.unId === "object")
                    message.unId = new $util.LongBits(object.unId.low >>> 0, object.unId.high >>> 0).toNumber();
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.orgRt != null) {
                if (typeof object.orgRt !== "object")
                    throw TypeError(".customer.WeeklyCustomer.orgRt: object expected");
                message.orgRt = $root.customer.DayOfWeek.fromObject(object.orgRt);
            }
            if (object.sRt != null) {
                if (typeof object.sRt !== "object")
                    throw TypeError(".customer.WeeklyCustomer.sRt: object expected");
                message.sRt = $root.customer.DayOfWeek.fromObject(object.sRt);
            }
            if (object.wkClstId != null)
                message.wkClstId = object.wkClstId | 0;
            if (object.sos != null)
                message.sos = String(object.sos);
            if (object.pRt != null) {
                if (typeof object.pRt !== "object")
                    throw TypeError(".customer.WeeklyCustomer.pRt: object expected");
                message.pRt = $root.customer.DayOfWeek.fromObject(object.pRt);
            }
            if (object.lkFlg != null)
                message.lkFlg = String(object.lkFlg);
            if (object.edId != null)
                message.edId = String(object.edId);
            if (object.slockCd != null)
                message.slockCd = String(object.slockCd);
            if (object.rtWkCd != null)
                message.rtWkCd = String(object.rtWkCd);
            if (object.prRtWkCd != null)
                message.prRtWkCd = String(object.prRtWkCd);
            if (object.prOpUnCd != null)
                message.prOpUnCd = String(object.prOpUnCd);
            if (object.prDispCd != null)
                message.prDispCd = String(object.prDispCd);
            if (object.wkNo != null)
                message.wkNo = object.wkNo | 0;
            if (object.srvcUnitNote1 != null)
                message.srvcUnitNote1 = String(object.srvcUnitNote1);
            if (object.srvcUnitAccCdId != null)
                message.srvcUnitAccCdId = object.srvcUnitAccCdId | 0;
            if (object.srvcUnitAccCd != null)
                message.srvcUnitAccCd = String(object.srvcUnitAccCd);
            if (object.srvcUnitCd != null)
                message.srvcUnitCd = String(object.srvcUnitCd);
            if (object.creationDtm != null)
                message.creationDtm = String(object.creationDtm);
            if (object.userDefinedWeekCd != null)
                message.userDefinedWeekCd = String(object.userDefinedWeekCd);
            if (object.totCostTsrv != null)
                message.totCostTsrv = Number(object.totCostTsrv);
            if (object.totCostTsrvPrYd != null)
                message.totCostTsrvPrYd = Number(object.totCostTsrvPrYd);
            if (object.weekCodeLockFlag != null)
                message.weekCodeLockFlag = object.weekCodeLockFlag | 0;
            if (object.priority != null)
                message.priority = object.priority | 0;
            if (object.srvcUnitNotes2 != null)
                message.srvcUnitNotes2 = String(object.srvcUnitNotes2);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.srvcUnitNotes3 != null)
                message.srvcUnitNotes3 = String(object.srvcUnitNotes3);
            if (object.srvcRtTypCd != null)
                message.srvcRtTypCd = String(object.srvcRtTypCd);
            if (object.srvcUnitLftAccPnlt != null)
                message.srvcUnitLftAccPnlt = object.srvcUnitLftAccPnlt | 0;
            if (object.srvcUnitRgtAccPnlt != null)
                message.srvcUnitRgtAccPnlt = object.srvcUnitRgtAccPnlt | 0;
            if (object.dchg != null)
                message.dchg = String(object.dchg);
            if (object.dayChangeP != null)
                message.dayChangeP = String(object.dayChangeP);
            if (object.weekChange != null)
                message.weekChange = String(object.weekChange);
            if (object.weekChangeP != null)
                message.weekChangeP = String(object.weekChangeP);
            return message;
        };

        /**
         * Creates a plain object from a WeeklyCustomer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.WeeklyCustomer
         * @static
         * @param {customer.WeeklyCustomer} message WeeklyCustomer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyCustomer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.uqty = 0;
                object.uVolVal = 0;
                object.uWtVal = 0;
                object.addr = "";
                object.cty = "";
                object.state = "";
                object.zip = "";
                object.cntry = "";
                object.lat = 0;
                object.lon = 0;
                object.geoSt = "";
                object.frqByWk = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.cuId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cuId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                object.orgRt = null;
                object.sRt = null;
                object.wkClstId = 0;
                object.sos = "";
                object.pRt = null;
                object.lkFlg = "";
                object.edId = "";
                object.slockCd = "";
                object.rtWkCd = "";
                object.prRtWkCd = "";
                object.prOpUnCd = "";
                object.prDispCd = "";
                object.wkNo = 0;
                object.srvcUnitNote1 = "";
                object.srvcUnitAccCdId = 0;
                object.srvcUnitAccCd = "";
                object.srvcUnitCd = "";
                object.creationDtm = "";
                object.userDefinedWeekCd = "";
                object.totCostTsrv = 0;
                object.totCostTsrvPrYd = 0;
                object.weekCodeLockFlag = 0;
                object.priority = 0;
                object.srvcUnitNotes2 = "";
                object.materialType = "";
                object.srvcUnitNotes3 = "";
                object.srvcRtTypCd = "";
                object.srvcUnitLftAccPnlt = 0;
                object.srvcUnitRgtAccPnlt = 0;
                object.dchg = "";
                object.dayChangeP = "";
                object.weekChange = "";
                object.weekChangeP = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                object.uqty = options.json && !isFinite(message.uqty) ? String(message.uqty) : message.uqty;
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                object.uVolVal = options.json && !isFinite(message.uVolVal) ? String(message.uVolVal) : message.uVolVal;
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                object.uWtVal = options.json && !isFinite(message.uWtVal) ? String(message.uWtVal) : message.uWtVal;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.cty != null && message.hasOwnProperty("cty"))
                object.cty = message.cty;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.zip != null && message.hasOwnProperty("zip"))
                object.zip = message.zip;
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                object.cntry = message.cntry;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                object.geoSt = message.geoSt;
            if (message.frqByWk != null && message.hasOwnProperty("frqByWk"))
                object.frqByWk = message.frqByWk;
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (typeof message.cuId === "number")
                    object.cuId = options.longs === String ? String(message.cuId) : message.cuId;
                else
                    object.cuId = options.longs === String ? $util.Long.prototype.toString.call(message.cuId) : options.longs === Number ? new $util.LongBits(message.cuId.low >>> 0, message.cuId.high >>> 0).toNumber() : message.cuId;
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (typeof message.unId === "number")
                    object.unId = options.longs === String ? String(message.unId) : message.unId;
                else
                    object.unId = options.longs === String ? $util.Long.prototype.toString.call(message.unId) : options.longs === Number ? new $util.LongBits(message.unId.low >>> 0, message.unId.high >>> 0).toNumber() : message.unId;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.orgRt != null && message.hasOwnProperty("orgRt"))
                object.orgRt = $root.customer.DayOfWeek.toObject(message.orgRt, options);
            if (message.sRt != null && message.hasOwnProperty("sRt"))
                object.sRt = $root.customer.DayOfWeek.toObject(message.sRt, options);
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                object.wkClstId = message.wkClstId;
            if (message.sos != null && message.hasOwnProperty("sos"))
                object.sos = message.sos;
            if (message.pRt != null && message.hasOwnProperty("pRt"))
                object.pRt = $root.customer.DayOfWeek.toObject(message.pRt, options);
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                object.lkFlg = message.lkFlg;
            if (message.edId != null && message.hasOwnProperty("edId"))
                object.edId = message.edId;
            if (message.slockCd != null && message.hasOwnProperty("slockCd"))
                object.slockCd = message.slockCd;
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                object.rtWkCd = message.rtWkCd;
            if (message.prRtWkCd != null && message.hasOwnProperty("prRtWkCd"))
                object.prRtWkCd = message.prRtWkCd;
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                object.prOpUnCd = message.prOpUnCd;
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                object.prDispCd = message.prDispCd;
            if (message.wkNo != null && message.hasOwnProperty("wkNo"))
                object.wkNo = message.wkNo;
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                object.srvcUnitNote1 = message.srvcUnitNote1;
            if (message.srvcUnitAccCdId != null && message.hasOwnProperty("srvcUnitAccCdId"))
                object.srvcUnitAccCdId = message.srvcUnitAccCdId;
            if (message.srvcUnitAccCd != null && message.hasOwnProperty("srvcUnitAccCd"))
                object.srvcUnitAccCd = message.srvcUnitAccCd;
            if (message.srvcUnitCd != null && message.hasOwnProperty("srvcUnitCd"))
                object.srvcUnitCd = message.srvcUnitCd;
            if (message.creationDtm != null && message.hasOwnProperty("creationDtm"))
                object.creationDtm = message.creationDtm;
            if (message.userDefinedWeekCd != null && message.hasOwnProperty("userDefinedWeekCd"))
                object.userDefinedWeekCd = message.userDefinedWeekCd;
            if (message.totCostTsrv != null && message.hasOwnProperty("totCostTsrv"))
                object.totCostTsrv = options.json && !isFinite(message.totCostTsrv) ? String(message.totCostTsrv) : message.totCostTsrv;
            if (message.totCostTsrvPrYd != null && message.hasOwnProperty("totCostTsrvPrYd"))
                object.totCostTsrvPrYd = options.json && !isFinite(message.totCostTsrvPrYd) ? String(message.totCostTsrvPrYd) : message.totCostTsrvPrYd;
            if (message.weekCodeLockFlag != null && message.hasOwnProperty("weekCodeLockFlag"))
                object.weekCodeLockFlag = message.weekCodeLockFlag;
            if (message.priority != null && message.hasOwnProperty("priority"))
                object.priority = message.priority;
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                object.srvcUnitNotes2 = message.srvcUnitNotes2;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                object.srvcUnitNotes3 = message.srvcUnitNotes3;
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                object.srvcRtTypCd = message.srvcRtTypCd;
            if (message.srvcUnitLftAccPnlt != null && message.hasOwnProperty("srvcUnitLftAccPnlt"))
                object.srvcUnitLftAccPnlt = message.srvcUnitLftAccPnlt;
            if (message.srvcUnitRgtAccPnlt != null && message.hasOwnProperty("srvcUnitRgtAccPnlt"))
                object.srvcUnitRgtAccPnlt = message.srvcUnitRgtAccPnlt;
            if (message.dchg != null && message.hasOwnProperty("dchg"))
                object.dchg = message.dchg;
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                object.dayChangeP = message.dayChangeP;
            if (message.weekChange != null && message.hasOwnProperty("weekChange"))
                object.weekChange = message.weekChange;
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                object.weekChangeP = message.weekChangeP;
            return object;
        };

        /**
         * Converts this WeeklyCustomer to JSON.
         * @function toJSON
         * @memberof customer.WeeklyCustomer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyCustomer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeeklyCustomer;
    })();

    customer.WeeklyCustomerResponse = (function() {

        /**
         * Properties of a WeeklyCustomerResponse.
         * @memberof customer
         * @interface IWeeklyCustomerResponse
         * @property {Array.<customer.IWeeklyCustomer>|null} [weeklyCustomerList] WeeklyCustomerResponse weeklyCustomerList
         * @property {boolean|null} [shortRes] WeeklyCustomerResponse shortRes
         */

        /**
         * Constructs a new WeeklyCustomerResponse.
         * @memberof customer
         * @classdesc Represents a WeeklyCustomerResponse.
         * @implements IWeeklyCustomerResponse
         * @constructor
         * @param {customer.IWeeklyCustomerResponse=} [properties] Properties to set
         */
        function WeeklyCustomerResponse(properties) {
            this.weeklyCustomerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyCustomerResponse weeklyCustomerList.
         * @member {Array.<customer.IWeeklyCustomer>} weeklyCustomerList
         * @memberof customer.WeeklyCustomerResponse
         * @instance
         */
        WeeklyCustomerResponse.prototype.weeklyCustomerList = $util.emptyArray;

        /**
         * WeeklyCustomerResponse shortRes.
         * @member {boolean} shortRes
         * @memberof customer.WeeklyCustomerResponse
         * @instance
         */
        WeeklyCustomerResponse.prototype.shortRes = false;

        /**
         * Creates a new WeeklyCustomerResponse instance using the specified properties.
         * @function create
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {customer.IWeeklyCustomerResponse=} [properties] Properties to set
         * @returns {customer.WeeklyCustomerResponse} WeeklyCustomerResponse instance
         */
        WeeklyCustomerResponse.create = function create(properties) {
            return new WeeklyCustomerResponse(properties);
        };

        /**
         * Encodes the specified WeeklyCustomerResponse message. Does not implicitly {@link customer.WeeklyCustomerResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {customer.IWeeklyCustomerResponse} message WeeklyCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weeklyCustomerList != null && message.weeklyCustomerList.length)
                for (let i = 0; i < message.weeklyCustomerList.length; ++i)
                    $root.customer.WeeklyCustomer.encode(message.weeklyCustomerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.shortRes != null && Object.hasOwnProperty.call(message, "shortRes"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.shortRes);
            return writer;
        };

        /**
         * Encodes the specified WeeklyCustomerResponse message, length delimited. Does not implicitly {@link customer.WeeklyCustomerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {customer.IWeeklyCustomerResponse} message WeeklyCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyCustomerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.WeeklyCustomerResponse} WeeklyCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.WeeklyCustomerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.weeklyCustomerList && message.weeklyCustomerList.length))
                        message.weeklyCustomerList = [];
                    message.weeklyCustomerList.push($root.customer.WeeklyCustomer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.shortRes = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeeklyCustomerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.WeeklyCustomerResponse} WeeklyCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyCustomerResponse message.
         * @function verify
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyCustomerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weeklyCustomerList != null && message.hasOwnProperty("weeklyCustomerList")) {
                if (!Array.isArray(message.weeklyCustomerList))
                    return "weeklyCustomerList: array expected";
                for (let i = 0; i < message.weeklyCustomerList.length; ++i) {
                    let error = $root.customer.WeeklyCustomer.verify(message.weeklyCustomerList[i]);
                    if (error)
                        return "weeklyCustomerList." + error;
                }
            }
            if (message.shortRes != null && message.hasOwnProperty("shortRes"))
                if (typeof message.shortRes !== "boolean")
                    return "shortRes: boolean expected";
            return null;
        };

        /**
         * Creates a WeeklyCustomerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.WeeklyCustomerResponse} WeeklyCustomerResponse
         */
        WeeklyCustomerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.WeeklyCustomerResponse)
                return object;
            let message = new $root.customer.WeeklyCustomerResponse();
            if (object.weeklyCustomerList) {
                if (!Array.isArray(object.weeklyCustomerList))
                    throw TypeError(".customer.WeeklyCustomerResponse.weeklyCustomerList: array expected");
                message.weeklyCustomerList = [];
                for (let i = 0; i < object.weeklyCustomerList.length; ++i) {
                    if (typeof object.weeklyCustomerList[i] !== "object")
                        throw TypeError(".customer.WeeklyCustomerResponse.weeklyCustomerList: object expected");
                    message.weeklyCustomerList[i] = $root.customer.WeeklyCustomer.fromObject(object.weeklyCustomerList[i]);
                }
            }
            if (object.shortRes != null)
                message.shortRes = Boolean(object.shortRes);
            return message;
        };

        /**
         * Creates a plain object from a WeeklyCustomerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.WeeklyCustomerResponse
         * @static
         * @param {customer.WeeklyCustomerResponse} message WeeklyCustomerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyCustomerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.weeklyCustomerList = [];
            if (options.defaults)
                object.shortRes = false;
            if (message.weeklyCustomerList && message.weeklyCustomerList.length) {
                object.weeklyCustomerList = [];
                for (let j = 0; j < message.weeklyCustomerList.length; ++j)
                    object.weeklyCustomerList[j] = $root.customer.WeeklyCustomer.toObject(message.weeklyCustomerList[j], options);
            }
            if (message.shortRes != null && message.hasOwnProperty("shortRes"))
                object.shortRes = message.shortRes;
            return object;
        };

        /**
         * Converts this WeeklyCustomerResponse to JSON.
         * @function toJSON
         * @memberof customer.WeeklyCustomerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyCustomerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeeklyCustomerResponse;
    })();

    customer.ScenarioCustomerRequest = (function() {

        /**
         * Properties of a ScenarioCustomerRequest.
         * @memberof customer
         * @interface IScenarioCustomerRequest
         * @property {number|Long|null} [scenarioId] ScenarioCustomerRequest scenarioId
         * @property {string|null} [srvcOrdrRtDow] ScenarioCustomerRequest srvcOrdrRtDow
         * @property {Array.<string>|null} [srvcOrdrRtNo] ScenarioCustomerRequest srvcOrdrRtNo
         */

        /**
         * Constructs a new ScenarioCustomerRequest.
         * @memberof customer
         * @classdesc Represents a ScenarioCustomerRequest.
         * @implements IScenarioCustomerRequest
         * @constructor
         * @param {customer.IScenarioCustomerRequest=} [properties] Properties to set
         */
        function ScenarioCustomerRequest(properties) {
            this.srvcOrdrRtNo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScenarioCustomerRequest scenarioId.
         * @member {number|Long} scenarioId
         * @memberof customer.ScenarioCustomerRequest
         * @instance
         */
        ScenarioCustomerRequest.prototype.scenarioId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ScenarioCustomerRequest srvcOrdrRtDow.
         * @member {string} srvcOrdrRtDow
         * @memberof customer.ScenarioCustomerRequest
         * @instance
         */
        ScenarioCustomerRequest.prototype.srvcOrdrRtDow = "";

        /**
         * ScenarioCustomerRequest srvcOrdrRtNo.
         * @member {Array.<string>} srvcOrdrRtNo
         * @memberof customer.ScenarioCustomerRequest
         * @instance
         */
        ScenarioCustomerRequest.prototype.srvcOrdrRtNo = $util.emptyArray;

        /**
         * Creates a new ScenarioCustomerRequest instance using the specified properties.
         * @function create
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {customer.IScenarioCustomerRequest=} [properties] Properties to set
         * @returns {customer.ScenarioCustomerRequest} ScenarioCustomerRequest instance
         */
        ScenarioCustomerRequest.create = function create(properties) {
            return new ScenarioCustomerRequest(properties);
        };

        /**
         * Encodes the specified ScenarioCustomerRequest message. Does not implicitly {@link customer.ScenarioCustomerRequest.verify|verify} messages.
         * @function encode
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {customer.IScenarioCustomerRequest} message ScenarioCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScenarioCustomerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scenarioId != null && Object.hasOwnProperty.call(message, "scenarioId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scenarioId);
            if (message.srvcOrdrRtDow != null && Object.hasOwnProperty.call(message, "srvcOrdrRtDow"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.srvcOrdrRtDow);
            if (message.srvcOrdrRtNo != null && message.srvcOrdrRtNo.length)
                for (let i = 0; i < message.srvcOrdrRtNo.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.srvcOrdrRtNo[i]);
            return writer;
        };

        /**
         * Encodes the specified ScenarioCustomerRequest message, length delimited. Does not implicitly {@link customer.ScenarioCustomerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {customer.IScenarioCustomerRequest} message ScenarioCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScenarioCustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScenarioCustomerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.ScenarioCustomerRequest} ScenarioCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScenarioCustomerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.ScenarioCustomerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scenarioId = reader.int64();
                    break;
                case 2:
                    message.srvcOrdrRtDow = reader.string();
                    break;
                case 3:
                    if (!(message.srvcOrdrRtNo && message.srvcOrdrRtNo.length))
                        message.srvcOrdrRtNo = [];
                    message.srvcOrdrRtNo.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScenarioCustomerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.ScenarioCustomerRequest} ScenarioCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScenarioCustomerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScenarioCustomerRequest message.
         * @function verify
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScenarioCustomerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scenarioId != null && message.hasOwnProperty("scenarioId"))
                if (!$util.isInteger(message.scenarioId) && !(message.scenarioId && $util.isInteger(message.scenarioId.low) && $util.isInteger(message.scenarioId.high)))
                    return "scenarioId: integer|Long expected";
            if (message.srvcOrdrRtDow != null && message.hasOwnProperty("srvcOrdrRtDow"))
                if (!$util.isString(message.srvcOrdrRtDow))
                    return "srvcOrdrRtDow: string expected";
            if (message.srvcOrdrRtNo != null && message.hasOwnProperty("srvcOrdrRtNo")) {
                if (!Array.isArray(message.srvcOrdrRtNo))
                    return "srvcOrdrRtNo: array expected";
                for (let i = 0; i < message.srvcOrdrRtNo.length; ++i)
                    if (!$util.isString(message.srvcOrdrRtNo[i]))
                        return "srvcOrdrRtNo: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ScenarioCustomerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.ScenarioCustomerRequest} ScenarioCustomerRequest
         */
        ScenarioCustomerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.ScenarioCustomerRequest)
                return object;
            let message = new $root.customer.ScenarioCustomerRequest();
            if (object.scenarioId != null)
                if ($util.Long)
                    (message.scenarioId = $util.Long.fromValue(object.scenarioId)).unsigned = false;
                else if (typeof object.scenarioId === "string")
                    message.scenarioId = parseInt(object.scenarioId, 10);
                else if (typeof object.scenarioId === "number")
                    message.scenarioId = object.scenarioId;
                else if (typeof object.scenarioId === "object")
                    message.scenarioId = new $util.LongBits(object.scenarioId.low >>> 0, object.scenarioId.high >>> 0).toNumber();
            if (object.srvcOrdrRtDow != null)
                message.srvcOrdrRtDow = String(object.srvcOrdrRtDow);
            if (object.srvcOrdrRtNo) {
                if (!Array.isArray(object.srvcOrdrRtNo))
                    throw TypeError(".customer.ScenarioCustomerRequest.srvcOrdrRtNo: array expected");
                message.srvcOrdrRtNo = [];
                for (let i = 0; i < object.srvcOrdrRtNo.length; ++i)
                    message.srvcOrdrRtNo[i] = String(object.srvcOrdrRtNo[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ScenarioCustomerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.ScenarioCustomerRequest
         * @static
         * @param {customer.ScenarioCustomerRequest} message ScenarioCustomerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScenarioCustomerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.srvcOrdrRtNo = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.scenarioId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scenarioId = options.longs === String ? "0" : 0;
                object.srvcOrdrRtDow = "";
            }
            if (message.scenarioId != null && message.hasOwnProperty("scenarioId"))
                if (typeof message.scenarioId === "number")
                    object.scenarioId = options.longs === String ? String(message.scenarioId) : message.scenarioId;
                else
                    object.scenarioId = options.longs === String ? $util.Long.prototype.toString.call(message.scenarioId) : options.longs === Number ? new $util.LongBits(message.scenarioId.low >>> 0, message.scenarioId.high >>> 0).toNumber() : message.scenarioId;
            if (message.srvcOrdrRtDow != null && message.hasOwnProperty("srvcOrdrRtDow"))
                object.srvcOrdrRtDow = message.srvcOrdrRtDow;
            if (message.srvcOrdrRtNo && message.srvcOrdrRtNo.length) {
                object.srvcOrdrRtNo = [];
                for (let j = 0; j < message.srvcOrdrRtNo.length; ++j)
                    object.srvcOrdrRtNo[j] = message.srvcOrdrRtNo[j];
            }
            return object;
        };

        /**
         * Converts this ScenarioCustomerRequest to JSON.
         * @function toJSON
         * @memberof customer.ScenarioCustomerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScenarioCustomerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ScenarioCustomerRequest;
    })();

    customer.RPCustomerReportResponse = (function() {

        /**
         * Properties of a RPCustomerReportResponse.
         * @memberof customer
         * @interface IRPCustomerReportResponse
         * @property {Array.<customer.IRPCustomerReportData>|null} [rpCustomerList] RPCustomerReportResponse rpCustomerList
         */

        /**
         * Constructs a new RPCustomerReportResponse.
         * @memberof customer
         * @classdesc Represents a RPCustomerReportResponse.
         * @implements IRPCustomerReportResponse
         * @constructor
         * @param {customer.IRPCustomerReportResponse=} [properties] Properties to set
         */
        function RPCustomerReportResponse(properties) {
            this.rpCustomerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RPCustomerReportResponse rpCustomerList.
         * @member {Array.<customer.IRPCustomerReportData>} rpCustomerList
         * @memberof customer.RPCustomerReportResponse
         * @instance
         */
        RPCustomerReportResponse.prototype.rpCustomerList = $util.emptyArray;

        /**
         * Creates a new RPCustomerReportResponse instance using the specified properties.
         * @function create
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {customer.IRPCustomerReportResponse=} [properties] Properties to set
         * @returns {customer.RPCustomerReportResponse} RPCustomerReportResponse instance
         */
        RPCustomerReportResponse.create = function create(properties) {
            return new RPCustomerReportResponse(properties);
        };

        /**
         * Encodes the specified RPCustomerReportResponse message. Does not implicitly {@link customer.RPCustomerReportResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {customer.IRPCustomerReportResponse} message RPCustomerReportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCustomerReportResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpCustomerList != null && message.rpCustomerList.length)
                for (let i = 0; i < message.rpCustomerList.length; ++i)
                    $root.customer.RPCustomerReportData.encode(message.rpCustomerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RPCustomerReportResponse message, length delimited. Does not implicitly {@link customer.RPCustomerReportResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {customer.IRPCustomerReportResponse} message RPCustomerReportResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCustomerReportResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCustomerReportResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.RPCustomerReportResponse} RPCustomerReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCustomerReportResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.RPCustomerReportResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rpCustomerList && message.rpCustomerList.length))
                        message.rpCustomerList = [];
                    message.rpCustomerList.push($root.customer.RPCustomerReportData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RPCustomerReportResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.RPCustomerReportResponse} RPCustomerReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCustomerReportResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RPCustomerReportResponse message.
         * @function verify
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RPCustomerReportResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpCustomerList != null && message.hasOwnProperty("rpCustomerList")) {
                if (!Array.isArray(message.rpCustomerList))
                    return "rpCustomerList: array expected";
                for (let i = 0; i < message.rpCustomerList.length; ++i) {
                    let error = $root.customer.RPCustomerReportData.verify(message.rpCustomerList[i]);
                    if (error)
                        return "rpCustomerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RPCustomerReportResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.RPCustomerReportResponse} RPCustomerReportResponse
         */
        RPCustomerReportResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.RPCustomerReportResponse)
                return object;
            let message = new $root.customer.RPCustomerReportResponse();
            if (object.rpCustomerList) {
                if (!Array.isArray(object.rpCustomerList))
                    throw TypeError(".customer.RPCustomerReportResponse.rpCustomerList: array expected");
                message.rpCustomerList = [];
                for (let i = 0; i < object.rpCustomerList.length; ++i) {
                    if (typeof object.rpCustomerList[i] !== "object")
                        throw TypeError(".customer.RPCustomerReportResponse.rpCustomerList: object expected");
                    message.rpCustomerList[i] = $root.customer.RPCustomerReportData.fromObject(object.rpCustomerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RPCustomerReportResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.RPCustomerReportResponse
         * @static
         * @param {customer.RPCustomerReportResponse} message RPCustomerReportResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RPCustomerReportResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rpCustomerList = [];
            if (message.rpCustomerList && message.rpCustomerList.length) {
                object.rpCustomerList = [];
                for (let j = 0; j < message.rpCustomerList.length; ++j)
                    object.rpCustomerList[j] = $root.customer.RPCustomerReportData.toObject(message.rpCustomerList[j], options);
            }
            return object;
        };

        /**
         * Converts this RPCustomerReportResponse to JSON.
         * @function toJSON
         * @memberof customer.RPCustomerReportResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCustomerReportResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCustomerReportResponse;
    })();

    customer.RPCustomerReportData = (function() {

        /**
         * Properties of a RPCustomerReportData.
         * @memberof customer
         * @interface IRPCustomerReportData
         * @property {string|null} [cstmrNo] RPCustomerReportData cstmrNo
         * @property {string|null} [cstmrNm] RPCustomerReportData cstmrNm
         * @property {string|null} [srvcOrdrRtDow] RPCustomerReportData srvcOrdrRtDow
         * @property {string|null} [srvcOrdrRtNo] RPCustomerReportData srvcOrdrRtNo
         * @property {number|null} [srvcOrdrRtSeqNo] RPCustomerReportData srvcOrdrRtSeqNo
         * @property {number|null} [srvcUnitQty] RPCustomerReportData srvcUnitQty
         * @property {number|null} [srvcUnitVolVal] RPCustomerReportData srvcUnitVolVal
         * @property {number|null} [srvcUnitWtVal] RPCustomerReportData srvcUnitWtVal
         * @property {number|null} [srvcOrdrSrvcTm] RPCustomerReportData srvcOrdrSrvcTm
         * @property {string|null} [lockedFlag] RPCustomerReportData lockedFlag
         * @property {string|null} [srvcAddr1] RPCustomerReportData srvcAddr1
         * @property {string|null} [srvcCity] RPCustomerReportData srvcCity
         * @property {string|null} [srvcStateCd] RPCustomerReportData srvcStateCd
         * @property {string|null} [srvcZipCd] RPCustomerReportData srvcZipCd
         * @property {number|null} [srvcLat] RPCustomerReportData srvcLat
         * @property {number|null} [srvcLon] RPCustomerReportData srvcLon
         * @property {string|null} [notes1] RPCustomerReportData notes1
         * @property {string|null} [srvcOrdrStartTm1] RPCustomerReportData srvcOrdrStartTm1
         * @property {string|null} [srvcOrdrStopTm1] RPCustomerReportData srvcOrdrStopTm1
         * @property {string|null} [srvcOrdrWeekCode] RPCustomerReportData srvcOrdrWeekCode
         * @property {string|null} [containerNotes1] RPCustomerReportData containerNotes1
         * @property {string|null} [containerNotes2] RPCustomerReportData containerNotes2
         * @property {string|null} [containerNotes3] RPCustomerReportData containerNotes3
         * @property {string|null} [userCustom1] RPCustomerReportData userCustom1
         * @property {string|null} [userCustom2] RPCustomerReportData userCustom2
         * @property {string|null} [userCustom3] RPCustomerReportData userCustom3
         * @property {number|Long|null} [acctId] RPCustomerReportData acctId
         * @property {string|null} [opsUnitCd] RPCustomerReportData opsUnitCd
         * @property {string|null} [srvcRtTypCd] RPCustomerReportData srvcRtTypCd
         * @property {string|null} [acctNm] RPCustomerReportData acctNm
         * @property {string|null} [srvcUnitNotes1] RPCustomerReportData srvcUnitNotes1
         * @property {string|null} [srvcUnitNotes2] RPCustomerReportData srvcUnitNotes2
         * @property {string|null} [srvcUnitNotes3] RPCustomerReportData srvcUnitNotes3
         * @property {string|null} [srvcUnitNotes4] RPCustomerReportData srvcUnitNotes4
         * @property {string|null} [srvcUnitNotes5] RPCustomerReportData srvcUnitNotes5
         * @property {string|null} [userCustom4] RPCustomerReportData userCustom4
         * @property {string|null} [userCustom5] RPCustomerReportData userCustom5
         * @property {string|null} [containerNotesNo2] RPCustomerReportData containerNotesNo2
         */

        /**
         * Constructs a new RPCustomerReportData.
         * @memberof customer
         * @classdesc Represents a RPCustomerReportData.
         * @implements IRPCustomerReportData
         * @constructor
         * @param {customer.IRPCustomerReportData=} [properties] Properties to set
         */
        function RPCustomerReportData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RPCustomerReportData cstmrNo.
         * @member {string} cstmrNo
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.cstmrNo = "";

        /**
         * RPCustomerReportData cstmrNm.
         * @member {string} cstmrNm
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.cstmrNm = "";

        /**
         * RPCustomerReportData srvcOrdrRtDow.
         * @member {string} srvcOrdrRtDow
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrRtDow = "";

        /**
         * RPCustomerReportData srvcOrdrRtNo.
         * @member {string} srvcOrdrRtNo
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrRtNo = "";

        /**
         * RPCustomerReportData srvcOrdrRtSeqNo.
         * @member {number} srvcOrdrRtSeqNo
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrRtSeqNo = 0;

        /**
         * RPCustomerReportData srvcUnitQty.
         * @member {number} srvcUnitQty
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitQty = 0;

        /**
         * RPCustomerReportData srvcUnitVolVal.
         * @member {number} srvcUnitVolVal
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitVolVal = 0;

        /**
         * RPCustomerReportData srvcUnitWtVal.
         * @member {number} srvcUnitWtVal
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitWtVal = 0;

        /**
         * RPCustomerReportData srvcOrdrSrvcTm.
         * @member {number} srvcOrdrSrvcTm
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrSrvcTm = 0;

        /**
         * RPCustomerReportData lockedFlag.
         * @member {string} lockedFlag
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.lockedFlag = "";

        /**
         * RPCustomerReportData srvcAddr1.
         * @member {string} srvcAddr1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcAddr1 = "";

        /**
         * RPCustomerReportData srvcCity.
         * @member {string} srvcCity
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcCity = "";

        /**
         * RPCustomerReportData srvcStateCd.
         * @member {string} srvcStateCd
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcStateCd = "";

        /**
         * RPCustomerReportData srvcZipCd.
         * @member {string} srvcZipCd
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcZipCd = "";

        /**
         * RPCustomerReportData srvcLat.
         * @member {number} srvcLat
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcLat = 0;

        /**
         * RPCustomerReportData srvcLon.
         * @member {number} srvcLon
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcLon = 0;

        /**
         * RPCustomerReportData notes1.
         * @member {string} notes1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.notes1 = "";

        /**
         * RPCustomerReportData srvcOrdrStartTm1.
         * @member {string} srvcOrdrStartTm1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrStartTm1 = "";

        /**
         * RPCustomerReportData srvcOrdrStopTm1.
         * @member {string} srvcOrdrStopTm1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrStopTm1 = "";

        /**
         * RPCustomerReportData srvcOrdrWeekCode.
         * @member {string} srvcOrdrWeekCode
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcOrdrWeekCode = "";

        /**
         * RPCustomerReportData containerNotes1.
         * @member {string} containerNotes1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.containerNotes1 = "";

        /**
         * RPCustomerReportData containerNotes2.
         * @member {string} containerNotes2
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.containerNotes2 = "";

        /**
         * RPCustomerReportData containerNotes3.
         * @member {string} containerNotes3
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.containerNotes3 = "";

        /**
         * RPCustomerReportData userCustom1.
         * @member {string} userCustom1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.userCustom1 = "";

        /**
         * RPCustomerReportData userCustom2.
         * @member {string} userCustom2
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.userCustom2 = "";

        /**
         * RPCustomerReportData userCustom3.
         * @member {string} userCustom3
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.userCustom3 = "";

        /**
         * RPCustomerReportData acctId.
         * @member {number|Long} acctId
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.acctId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RPCustomerReportData opsUnitCd.
         * @member {string} opsUnitCd
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.opsUnitCd = "";

        /**
         * RPCustomerReportData srvcRtTypCd.
         * @member {string} srvcRtTypCd
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcRtTypCd = "";

        /**
         * RPCustomerReportData acctNm.
         * @member {string} acctNm
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.acctNm = "";

        /**
         * RPCustomerReportData srvcUnitNotes1.
         * @member {string} srvcUnitNotes1
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitNotes1 = "";

        /**
         * RPCustomerReportData srvcUnitNotes2.
         * @member {string} srvcUnitNotes2
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitNotes2 = "";

        /**
         * RPCustomerReportData srvcUnitNotes3.
         * @member {string} srvcUnitNotes3
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitNotes3 = "";

        /**
         * RPCustomerReportData srvcUnitNotes4.
         * @member {string} srvcUnitNotes4
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitNotes4 = "";

        /**
         * RPCustomerReportData srvcUnitNotes5.
         * @member {string} srvcUnitNotes5
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.srvcUnitNotes5 = "";

        /**
         * RPCustomerReportData userCustom4.
         * @member {string} userCustom4
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.userCustom4 = "";

        /**
         * RPCustomerReportData userCustom5.
         * @member {string} userCustom5
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.userCustom5 = "";

        /**
         * RPCustomerReportData containerNotesNo2.
         * @member {string} containerNotesNo2
         * @memberof customer.RPCustomerReportData
         * @instance
         */
        RPCustomerReportData.prototype.containerNotesNo2 = "";

        /**
         * Creates a new RPCustomerReportData instance using the specified properties.
         * @function create
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {customer.IRPCustomerReportData=} [properties] Properties to set
         * @returns {customer.RPCustomerReportData} RPCustomerReportData instance
         */
        RPCustomerReportData.create = function create(properties) {
            return new RPCustomerReportData(properties);
        };

        /**
         * Encodes the specified RPCustomerReportData message. Does not implicitly {@link customer.RPCustomerReportData.verify|verify} messages.
         * @function encode
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {customer.IRPCustomerReportData} message RPCustomerReportData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCustomerReportData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cstmrNo != null && Object.hasOwnProperty.call(message, "cstmrNo"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cstmrNo);
            if (message.cstmrNm != null && Object.hasOwnProperty.call(message, "cstmrNm"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cstmrNm);
            if (message.srvcOrdrRtDow != null && Object.hasOwnProperty.call(message, "srvcOrdrRtDow"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.srvcOrdrRtDow);
            if (message.srvcOrdrRtNo != null && Object.hasOwnProperty.call(message, "srvcOrdrRtNo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.srvcOrdrRtNo);
            if (message.srvcOrdrRtSeqNo != null && Object.hasOwnProperty.call(message, "srvcOrdrRtSeqNo"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.srvcOrdrRtSeqNo);
            if (message.srvcUnitQty != null && Object.hasOwnProperty.call(message, "srvcUnitQty"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.srvcUnitQty);
            if (message.srvcUnitVolVal != null && Object.hasOwnProperty.call(message, "srvcUnitVolVal"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.srvcUnitVolVal);
            if (message.srvcUnitWtVal != null && Object.hasOwnProperty.call(message, "srvcUnitWtVal"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.srvcUnitWtVal);
            if (message.srvcOrdrSrvcTm != null && Object.hasOwnProperty.call(message, "srvcOrdrSrvcTm"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.srvcOrdrSrvcTm);
            if (message.lockedFlag != null && Object.hasOwnProperty.call(message, "lockedFlag"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lockedFlag);
            if (message.srvcAddr1 != null && Object.hasOwnProperty.call(message, "srvcAddr1"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.srvcAddr1);
            if (message.srvcCity != null && Object.hasOwnProperty.call(message, "srvcCity"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.srvcCity);
            if (message.srvcStateCd != null && Object.hasOwnProperty.call(message, "srvcStateCd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.srvcStateCd);
            if (message.srvcZipCd != null && Object.hasOwnProperty.call(message, "srvcZipCd"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.srvcZipCd);
            if (message.srvcLat != null && Object.hasOwnProperty.call(message, "srvcLat"))
                writer.uint32(/* id 15, wireType 1 =*/121).double(message.srvcLat);
            if (message.srvcLon != null && Object.hasOwnProperty.call(message, "srvcLon"))
                writer.uint32(/* id 16, wireType 1 =*/129).double(message.srvcLon);
            if (message.notes1 != null && Object.hasOwnProperty.call(message, "notes1"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.notes1);
            if (message.srvcOrdrStartTm1 != null && Object.hasOwnProperty.call(message, "srvcOrdrStartTm1"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.srvcOrdrStartTm1);
            if (message.srvcOrdrStopTm1 != null && Object.hasOwnProperty.call(message, "srvcOrdrStopTm1"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.srvcOrdrStopTm1);
            if (message.srvcOrdrWeekCode != null && Object.hasOwnProperty.call(message, "srvcOrdrWeekCode"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.srvcOrdrWeekCode);
            if (message.containerNotes1 != null && Object.hasOwnProperty.call(message, "containerNotes1"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.containerNotes1);
            if (message.containerNotes2 != null && Object.hasOwnProperty.call(message, "containerNotes2"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.containerNotes2);
            if (message.containerNotes3 != null && Object.hasOwnProperty.call(message, "containerNotes3"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.containerNotes3);
            if (message.userCustom1 != null && Object.hasOwnProperty.call(message, "userCustom1"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.userCustom1);
            if (message.userCustom2 != null && Object.hasOwnProperty.call(message, "userCustom2"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.userCustom2);
            if (message.userCustom3 != null && Object.hasOwnProperty.call(message, "userCustom3"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.userCustom3);
            if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                writer.uint32(/* id 27, wireType 0 =*/216).int64(message.acctId);
            if (message.opsUnitCd != null && Object.hasOwnProperty.call(message, "opsUnitCd"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.opsUnitCd);
            if (message.srvcRtTypCd != null && Object.hasOwnProperty.call(message, "srvcRtTypCd"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.srvcRtTypCd);
            if (message.acctNm != null && Object.hasOwnProperty.call(message, "acctNm"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.acctNm);
            if (message.srvcUnitNotes1 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes1"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.srvcUnitNotes1);
            if (message.srvcUnitNotes2 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes2"))
                writer.uint32(/* id 32, wireType 2 =*/258).string(message.srvcUnitNotes2);
            if (message.srvcUnitNotes3 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes3"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.srvcUnitNotes3);
            if (message.srvcUnitNotes4 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes4"))
                writer.uint32(/* id 34, wireType 2 =*/274).string(message.srvcUnitNotes4);
            if (message.srvcUnitNotes5 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes5"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.srvcUnitNotes5);
            if (message.userCustom4 != null && Object.hasOwnProperty.call(message, "userCustom4"))
                writer.uint32(/* id 36, wireType 2 =*/290).string(message.userCustom4);
            if (message.userCustom5 != null && Object.hasOwnProperty.call(message, "userCustom5"))
                writer.uint32(/* id 37, wireType 2 =*/298).string(message.userCustom5);
            if (message.containerNotesNo2 != null && Object.hasOwnProperty.call(message, "containerNotesNo2"))
                writer.uint32(/* id 38, wireType 2 =*/306).string(message.containerNotesNo2);
            return writer;
        };

        /**
         * Encodes the specified RPCustomerReportData message, length delimited. Does not implicitly {@link customer.RPCustomerReportData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {customer.IRPCustomerReportData} message RPCustomerReportData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCustomerReportData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCustomerReportData message from the specified reader or buffer.
         * @function decode
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.RPCustomerReportData} RPCustomerReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCustomerReportData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.RPCustomerReportData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cstmrNo = reader.string();
                    break;
                case 2:
                    message.cstmrNm = reader.string();
                    break;
                case 3:
                    message.srvcOrdrRtDow = reader.string();
                    break;
                case 4:
                    message.srvcOrdrRtNo = reader.string();
                    break;
                case 5:
                    message.srvcOrdrRtSeqNo = reader.int32();
                    break;
                case 6:
                    message.srvcUnitQty = reader.double();
                    break;
                case 7:
                    message.srvcUnitVolVal = reader.double();
                    break;
                case 8:
                    message.srvcUnitWtVal = reader.double();
                    break;
                case 9:
                    message.srvcOrdrSrvcTm = reader.int32();
                    break;
                case 10:
                    message.lockedFlag = reader.string();
                    break;
                case 11:
                    message.srvcAddr1 = reader.string();
                    break;
                case 12:
                    message.srvcCity = reader.string();
                    break;
                case 13:
                    message.srvcStateCd = reader.string();
                    break;
                case 14:
                    message.srvcZipCd = reader.string();
                    break;
                case 15:
                    message.srvcLat = reader.double();
                    break;
                case 16:
                    message.srvcLon = reader.double();
                    break;
                case 17:
                    message.notes1 = reader.string();
                    break;
                case 18:
                    message.srvcOrdrStartTm1 = reader.string();
                    break;
                case 19:
                    message.srvcOrdrStopTm1 = reader.string();
                    break;
                case 20:
                    message.srvcOrdrWeekCode = reader.string();
                    break;
                case 21:
                    message.containerNotes1 = reader.string();
                    break;
                case 22:
                    message.containerNotes2 = reader.string();
                    break;
                case 23:
                    message.containerNotes3 = reader.string();
                    break;
                case 24:
                    message.userCustom1 = reader.string();
                    break;
                case 25:
                    message.userCustom2 = reader.string();
                    break;
                case 26:
                    message.userCustom3 = reader.string();
                    break;
                case 27:
                    message.acctId = reader.int64();
                    break;
                case 28:
                    message.opsUnitCd = reader.string();
                    break;
                case 29:
                    message.srvcRtTypCd = reader.string();
                    break;
                case 30:
                    message.acctNm = reader.string();
                    break;
                case 31:
                    message.srvcUnitNotes1 = reader.string();
                    break;
                case 32:
                    message.srvcUnitNotes2 = reader.string();
                    break;
                case 33:
                    message.srvcUnitNotes3 = reader.string();
                    break;
                case 34:
                    message.srvcUnitNotes4 = reader.string();
                    break;
                case 35:
                    message.srvcUnitNotes5 = reader.string();
                    break;
                case 36:
                    message.userCustom4 = reader.string();
                    break;
                case 37:
                    message.userCustom5 = reader.string();
                    break;
                case 38:
                    message.containerNotesNo2 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RPCustomerReportData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.RPCustomerReportData} RPCustomerReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCustomerReportData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RPCustomerReportData message.
         * @function verify
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RPCustomerReportData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cstmrNo != null && message.hasOwnProperty("cstmrNo"))
                if (!$util.isString(message.cstmrNo))
                    return "cstmrNo: string expected";
            if (message.cstmrNm != null && message.hasOwnProperty("cstmrNm"))
                if (!$util.isString(message.cstmrNm))
                    return "cstmrNm: string expected";
            if (message.srvcOrdrRtDow != null && message.hasOwnProperty("srvcOrdrRtDow"))
                if (!$util.isString(message.srvcOrdrRtDow))
                    return "srvcOrdrRtDow: string expected";
            if (message.srvcOrdrRtNo != null && message.hasOwnProperty("srvcOrdrRtNo"))
                if (!$util.isString(message.srvcOrdrRtNo))
                    return "srvcOrdrRtNo: string expected";
            if (message.srvcOrdrRtSeqNo != null && message.hasOwnProperty("srvcOrdrRtSeqNo"))
                if (!$util.isInteger(message.srvcOrdrRtSeqNo))
                    return "srvcOrdrRtSeqNo: integer expected";
            if (message.srvcUnitQty != null && message.hasOwnProperty("srvcUnitQty"))
                if (typeof message.srvcUnitQty !== "number")
                    return "srvcUnitQty: number expected";
            if (message.srvcUnitVolVal != null && message.hasOwnProperty("srvcUnitVolVal"))
                if (typeof message.srvcUnitVolVal !== "number")
                    return "srvcUnitVolVal: number expected";
            if (message.srvcUnitWtVal != null && message.hasOwnProperty("srvcUnitWtVal"))
                if (typeof message.srvcUnitWtVal !== "number")
                    return "srvcUnitWtVal: number expected";
            if (message.srvcOrdrSrvcTm != null && message.hasOwnProperty("srvcOrdrSrvcTm"))
                if (!$util.isInteger(message.srvcOrdrSrvcTm))
                    return "srvcOrdrSrvcTm: integer expected";
            if (message.lockedFlag != null && message.hasOwnProperty("lockedFlag"))
                if (!$util.isString(message.lockedFlag))
                    return "lockedFlag: string expected";
            if (message.srvcAddr1 != null && message.hasOwnProperty("srvcAddr1"))
                if (!$util.isString(message.srvcAddr1))
                    return "srvcAddr1: string expected";
            if (message.srvcCity != null && message.hasOwnProperty("srvcCity"))
                if (!$util.isString(message.srvcCity))
                    return "srvcCity: string expected";
            if (message.srvcStateCd != null && message.hasOwnProperty("srvcStateCd"))
                if (!$util.isString(message.srvcStateCd))
                    return "srvcStateCd: string expected";
            if (message.srvcZipCd != null && message.hasOwnProperty("srvcZipCd"))
                if (!$util.isString(message.srvcZipCd))
                    return "srvcZipCd: string expected";
            if (message.srvcLat != null && message.hasOwnProperty("srvcLat"))
                if (typeof message.srvcLat !== "number")
                    return "srvcLat: number expected";
            if (message.srvcLon != null && message.hasOwnProperty("srvcLon"))
                if (typeof message.srvcLon !== "number")
                    return "srvcLon: number expected";
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                if (!$util.isString(message.notes1))
                    return "notes1: string expected";
            if (message.srvcOrdrStartTm1 != null && message.hasOwnProperty("srvcOrdrStartTm1"))
                if (!$util.isString(message.srvcOrdrStartTm1))
                    return "srvcOrdrStartTm1: string expected";
            if (message.srvcOrdrStopTm1 != null && message.hasOwnProperty("srvcOrdrStopTm1"))
                if (!$util.isString(message.srvcOrdrStopTm1))
                    return "srvcOrdrStopTm1: string expected";
            if (message.srvcOrdrWeekCode != null && message.hasOwnProperty("srvcOrdrWeekCode"))
                if (!$util.isString(message.srvcOrdrWeekCode))
                    return "srvcOrdrWeekCode: string expected";
            if (message.containerNotes1 != null && message.hasOwnProperty("containerNotes1"))
                if (!$util.isString(message.containerNotes1))
                    return "containerNotes1: string expected";
            if (message.containerNotes2 != null && message.hasOwnProperty("containerNotes2"))
                if (!$util.isString(message.containerNotes2))
                    return "containerNotes2: string expected";
            if (message.containerNotes3 != null && message.hasOwnProperty("containerNotes3"))
                if (!$util.isString(message.containerNotes3))
                    return "containerNotes3: string expected";
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                if (!$util.isString(message.userCustom1))
                    return "userCustom1: string expected";
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                if (!$util.isString(message.userCustom2))
                    return "userCustom2: string expected";
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                if (!$util.isString(message.userCustom3))
                    return "userCustom3: string expected";
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (!$util.isInteger(message.acctId) && !(message.acctId && $util.isInteger(message.acctId.low) && $util.isInteger(message.acctId.high)))
                    return "acctId: integer|Long expected";
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                if (!$util.isString(message.opsUnitCd))
                    return "opsUnitCd: string expected";
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                if (!$util.isString(message.srvcRtTypCd))
                    return "srvcRtTypCd: string expected";
            if (message.acctNm != null && message.hasOwnProperty("acctNm"))
                if (!$util.isString(message.acctNm))
                    return "acctNm: string expected";
            if (message.srvcUnitNotes1 != null && message.hasOwnProperty("srvcUnitNotes1"))
                if (!$util.isString(message.srvcUnitNotes1))
                    return "srvcUnitNotes1: string expected";
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                if (!$util.isString(message.srvcUnitNotes2))
                    return "srvcUnitNotes2: string expected";
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                if (!$util.isString(message.srvcUnitNotes3))
                    return "srvcUnitNotes3: string expected";
            if (message.srvcUnitNotes4 != null && message.hasOwnProperty("srvcUnitNotes4"))
                if (!$util.isString(message.srvcUnitNotes4))
                    return "srvcUnitNotes4: string expected";
            if (message.srvcUnitNotes5 != null && message.hasOwnProperty("srvcUnitNotes5"))
                if (!$util.isString(message.srvcUnitNotes5))
                    return "srvcUnitNotes5: string expected";
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                if (!$util.isString(message.userCustom4))
                    return "userCustom4: string expected";
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                if (!$util.isString(message.userCustom5))
                    return "userCustom5: string expected";
            if (message.containerNotesNo2 != null && message.hasOwnProperty("containerNotesNo2"))
                if (!$util.isString(message.containerNotesNo2))
                    return "containerNotesNo2: string expected";
            return null;
        };

        /**
         * Creates a RPCustomerReportData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.RPCustomerReportData} RPCustomerReportData
         */
        RPCustomerReportData.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.RPCustomerReportData)
                return object;
            let message = new $root.customer.RPCustomerReportData();
            if (object.cstmrNo != null)
                message.cstmrNo = String(object.cstmrNo);
            if (object.cstmrNm != null)
                message.cstmrNm = String(object.cstmrNm);
            if (object.srvcOrdrRtDow != null)
                message.srvcOrdrRtDow = String(object.srvcOrdrRtDow);
            if (object.srvcOrdrRtNo != null)
                message.srvcOrdrRtNo = String(object.srvcOrdrRtNo);
            if (object.srvcOrdrRtSeqNo != null)
                message.srvcOrdrRtSeqNo = object.srvcOrdrRtSeqNo | 0;
            if (object.srvcUnitQty != null)
                message.srvcUnitQty = Number(object.srvcUnitQty);
            if (object.srvcUnitVolVal != null)
                message.srvcUnitVolVal = Number(object.srvcUnitVolVal);
            if (object.srvcUnitWtVal != null)
                message.srvcUnitWtVal = Number(object.srvcUnitWtVal);
            if (object.srvcOrdrSrvcTm != null)
                message.srvcOrdrSrvcTm = object.srvcOrdrSrvcTm | 0;
            if (object.lockedFlag != null)
                message.lockedFlag = String(object.lockedFlag);
            if (object.srvcAddr1 != null)
                message.srvcAddr1 = String(object.srvcAddr1);
            if (object.srvcCity != null)
                message.srvcCity = String(object.srvcCity);
            if (object.srvcStateCd != null)
                message.srvcStateCd = String(object.srvcStateCd);
            if (object.srvcZipCd != null)
                message.srvcZipCd = String(object.srvcZipCd);
            if (object.srvcLat != null)
                message.srvcLat = Number(object.srvcLat);
            if (object.srvcLon != null)
                message.srvcLon = Number(object.srvcLon);
            if (object.notes1 != null)
                message.notes1 = String(object.notes1);
            if (object.srvcOrdrStartTm1 != null)
                message.srvcOrdrStartTm1 = String(object.srvcOrdrStartTm1);
            if (object.srvcOrdrStopTm1 != null)
                message.srvcOrdrStopTm1 = String(object.srvcOrdrStopTm1);
            if (object.srvcOrdrWeekCode != null)
                message.srvcOrdrWeekCode = String(object.srvcOrdrWeekCode);
            if (object.containerNotes1 != null)
                message.containerNotes1 = String(object.containerNotes1);
            if (object.containerNotes2 != null)
                message.containerNotes2 = String(object.containerNotes2);
            if (object.containerNotes3 != null)
                message.containerNotes3 = String(object.containerNotes3);
            if (object.userCustom1 != null)
                message.userCustom1 = String(object.userCustom1);
            if (object.userCustom2 != null)
                message.userCustom2 = String(object.userCustom2);
            if (object.userCustom3 != null)
                message.userCustom3 = String(object.userCustom3);
            if (object.acctId != null)
                if ($util.Long)
                    (message.acctId = $util.Long.fromValue(object.acctId)).unsigned = false;
                else if (typeof object.acctId === "string")
                    message.acctId = parseInt(object.acctId, 10);
                else if (typeof object.acctId === "number")
                    message.acctId = object.acctId;
                else if (typeof object.acctId === "object")
                    message.acctId = new $util.LongBits(object.acctId.low >>> 0, object.acctId.high >>> 0).toNumber();
            if (object.opsUnitCd != null)
                message.opsUnitCd = String(object.opsUnitCd);
            if (object.srvcRtTypCd != null)
                message.srvcRtTypCd = String(object.srvcRtTypCd);
            if (object.acctNm != null)
                message.acctNm = String(object.acctNm);
            if (object.srvcUnitNotes1 != null)
                message.srvcUnitNotes1 = String(object.srvcUnitNotes1);
            if (object.srvcUnitNotes2 != null)
                message.srvcUnitNotes2 = String(object.srvcUnitNotes2);
            if (object.srvcUnitNotes3 != null)
                message.srvcUnitNotes3 = String(object.srvcUnitNotes3);
            if (object.srvcUnitNotes4 != null)
                message.srvcUnitNotes4 = String(object.srvcUnitNotes4);
            if (object.srvcUnitNotes5 != null)
                message.srvcUnitNotes5 = String(object.srvcUnitNotes5);
            if (object.userCustom4 != null)
                message.userCustom4 = String(object.userCustom4);
            if (object.userCustom5 != null)
                message.userCustom5 = String(object.userCustom5);
            if (object.containerNotesNo2 != null)
                message.containerNotesNo2 = String(object.containerNotesNo2);
            return message;
        };

        /**
         * Creates a plain object from a RPCustomerReportData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.RPCustomerReportData
         * @static
         * @param {customer.RPCustomerReportData} message RPCustomerReportData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RPCustomerReportData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cstmrNo = "";
                object.cstmrNm = "";
                object.srvcOrdrRtDow = "";
                object.srvcOrdrRtNo = "";
                object.srvcOrdrRtSeqNo = 0;
                object.srvcUnitQty = 0;
                object.srvcUnitVolVal = 0;
                object.srvcUnitWtVal = 0;
                object.srvcOrdrSrvcTm = 0;
                object.lockedFlag = "";
                object.srvcAddr1 = "";
                object.srvcCity = "";
                object.srvcStateCd = "";
                object.srvcZipCd = "";
                object.srvcLat = 0;
                object.srvcLon = 0;
                object.notes1 = "";
                object.srvcOrdrStartTm1 = "";
                object.srvcOrdrStopTm1 = "";
                object.srvcOrdrWeekCode = "";
                object.containerNotes1 = "";
                object.containerNotes2 = "";
                object.containerNotes3 = "";
                object.userCustom1 = "";
                object.userCustom2 = "";
                object.userCustom3 = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.acctId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.acctId = options.longs === String ? "0" : 0;
                object.opsUnitCd = "";
                object.srvcRtTypCd = "";
                object.acctNm = "";
                object.srvcUnitNotes1 = "";
                object.srvcUnitNotes2 = "";
                object.srvcUnitNotes3 = "";
                object.srvcUnitNotes4 = "";
                object.srvcUnitNotes5 = "";
                object.userCustom4 = "";
                object.userCustom5 = "";
                object.containerNotesNo2 = "";
            }
            if (message.cstmrNo != null && message.hasOwnProperty("cstmrNo"))
                object.cstmrNo = message.cstmrNo;
            if (message.cstmrNm != null && message.hasOwnProperty("cstmrNm"))
                object.cstmrNm = message.cstmrNm;
            if (message.srvcOrdrRtDow != null && message.hasOwnProperty("srvcOrdrRtDow"))
                object.srvcOrdrRtDow = message.srvcOrdrRtDow;
            if (message.srvcOrdrRtNo != null && message.hasOwnProperty("srvcOrdrRtNo"))
                object.srvcOrdrRtNo = message.srvcOrdrRtNo;
            if (message.srvcOrdrRtSeqNo != null && message.hasOwnProperty("srvcOrdrRtSeqNo"))
                object.srvcOrdrRtSeqNo = message.srvcOrdrRtSeqNo;
            if (message.srvcUnitQty != null && message.hasOwnProperty("srvcUnitQty"))
                object.srvcUnitQty = options.json && !isFinite(message.srvcUnitQty) ? String(message.srvcUnitQty) : message.srvcUnitQty;
            if (message.srvcUnitVolVal != null && message.hasOwnProperty("srvcUnitVolVal"))
                object.srvcUnitVolVal = options.json && !isFinite(message.srvcUnitVolVal) ? String(message.srvcUnitVolVal) : message.srvcUnitVolVal;
            if (message.srvcUnitWtVal != null && message.hasOwnProperty("srvcUnitWtVal"))
                object.srvcUnitWtVal = options.json && !isFinite(message.srvcUnitWtVal) ? String(message.srvcUnitWtVal) : message.srvcUnitWtVal;
            if (message.srvcOrdrSrvcTm != null && message.hasOwnProperty("srvcOrdrSrvcTm"))
                object.srvcOrdrSrvcTm = message.srvcOrdrSrvcTm;
            if (message.lockedFlag != null && message.hasOwnProperty("lockedFlag"))
                object.lockedFlag = message.lockedFlag;
            if (message.srvcAddr1 != null && message.hasOwnProperty("srvcAddr1"))
                object.srvcAddr1 = message.srvcAddr1;
            if (message.srvcCity != null && message.hasOwnProperty("srvcCity"))
                object.srvcCity = message.srvcCity;
            if (message.srvcStateCd != null && message.hasOwnProperty("srvcStateCd"))
                object.srvcStateCd = message.srvcStateCd;
            if (message.srvcZipCd != null && message.hasOwnProperty("srvcZipCd"))
                object.srvcZipCd = message.srvcZipCd;
            if (message.srvcLat != null && message.hasOwnProperty("srvcLat"))
                object.srvcLat = options.json && !isFinite(message.srvcLat) ? String(message.srvcLat) : message.srvcLat;
            if (message.srvcLon != null && message.hasOwnProperty("srvcLon"))
                object.srvcLon = options.json && !isFinite(message.srvcLon) ? String(message.srvcLon) : message.srvcLon;
            if (message.notes1 != null && message.hasOwnProperty("notes1"))
                object.notes1 = message.notes1;
            if (message.srvcOrdrStartTm1 != null && message.hasOwnProperty("srvcOrdrStartTm1"))
                object.srvcOrdrStartTm1 = message.srvcOrdrStartTm1;
            if (message.srvcOrdrStopTm1 != null && message.hasOwnProperty("srvcOrdrStopTm1"))
                object.srvcOrdrStopTm1 = message.srvcOrdrStopTm1;
            if (message.srvcOrdrWeekCode != null && message.hasOwnProperty("srvcOrdrWeekCode"))
                object.srvcOrdrWeekCode = message.srvcOrdrWeekCode;
            if (message.containerNotes1 != null && message.hasOwnProperty("containerNotes1"))
                object.containerNotes1 = message.containerNotes1;
            if (message.containerNotes2 != null && message.hasOwnProperty("containerNotes2"))
                object.containerNotes2 = message.containerNotes2;
            if (message.containerNotes3 != null && message.hasOwnProperty("containerNotes3"))
                object.containerNotes3 = message.containerNotes3;
            if (message.userCustom1 != null && message.hasOwnProperty("userCustom1"))
                object.userCustom1 = message.userCustom1;
            if (message.userCustom2 != null && message.hasOwnProperty("userCustom2"))
                object.userCustom2 = message.userCustom2;
            if (message.userCustom3 != null && message.hasOwnProperty("userCustom3"))
                object.userCustom3 = message.userCustom3;
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (typeof message.acctId === "number")
                    object.acctId = options.longs === String ? String(message.acctId) : message.acctId;
                else
                    object.acctId = options.longs === String ? $util.Long.prototype.toString.call(message.acctId) : options.longs === Number ? new $util.LongBits(message.acctId.low >>> 0, message.acctId.high >>> 0).toNumber() : message.acctId;
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                object.opsUnitCd = message.opsUnitCd;
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                object.srvcRtTypCd = message.srvcRtTypCd;
            if (message.acctNm != null && message.hasOwnProperty("acctNm"))
                object.acctNm = message.acctNm;
            if (message.srvcUnitNotes1 != null && message.hasOwnProperty("srvcUnitNotes1"))
                object.srvcUnitNotes1 = message.srvcUnitNotes1;
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                object.srvcUnitNotes2 = message.srvcUnitNotes2;
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                object.srvcUnitNotes3 = message.srvcUnitNotes3;
            if (message.srvcUnitNotes4 != null && message.hasOwnProperty("srvcUnitNotes4"))
                object.srvcUnitNotes4 = message.srvcUnitNotes4;
            if (message.srvcUnitNotes5 != null && message.hasOwnProperty("srvcUnitNotes5"))
                object.srvcUnitNotes5 = message.srvcUnitNotes5;
            if (message.userCustom4 != null && message.hasOwnProperty("userCustom4"))
                object.userCustom4 = message.userCustom4;
            if (message.userCustom5 != null && message.hasOwnProperty("userCustom5"))
                object.userCustom5 = message.userCustom5;
            if (message.containerNotesNo2 != null && message.hasOwnProperty("containerNotesNo2"))
                object.containerNotesNo2 = message.containerNotesNo2;
            return object;
        };

        /**
         * Converts this RPCustomerReportData to JSON.
         * @function toJSON
         * @memberof customer.RPCustomerReportData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCustomerReportData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCustomerReportData;
    })();

    customer.MonthlyPlannerCustomer = (function() {

        /**
         * Properties of a MonthlyPlannerCustomer.
         * @memberof customer
         * @interface IMonthlyPlannerCustomer
         * @property {string|null} [cid] MonthlyPlannerCustomer cid
         * @property {string|null} [name] MonthlyPlannerCustomer name
         * @property {number|null} [uqty] MonthlyPlannerCustomer uqty
         * @property {number|null} [uVolVal] MonthlyPlannerCustomer uVolVal
         * @property {number|null} [uWtVal] MonthlyPlannerCustomer uWtVal
         * @property {string|null} [addr] MonthlyPlannerCustomer addr
         * @property {string|null} [cty] MonthlyPlannerCustomer cty
         * @property {string|null} [state] MonthlyPlannerCustomer state
         * @property {string|null} [zip] MonthlyPlannerCustomer zip
         * @property {string|null} [cntry] MonthlyPlannerCustomer cntry
         * @property {number|null} [lat] MonthlyPlannerCustomer lat
         * @property {number|null} [lon] MonthlyPlannerCustomer lon
         * @property {string|null} [geoSt] MonthlyPlannerCustomer geoSt
         * @property {number|null} [frqByWk] MonthlyPlannerCustomer frqByWk
         * @property {number|Long|null} [cuId] MonthlyPlannerCustomer cuId
         * @property {number|Long|null} [unId] MonthlyPlannerCustomer unId
         * @property {number|Long|null} [loId] MonthlyPlannerCustomer loId
         * @property {customer.IDayOfWeek|null} [orgRt] MonthlyPlannerCustomer orgRt
         * @property {number|null} [wkClstId] MonthlyPlannerCustomer wkClstId
         * @property {string|null} [sos] MonthlyPlannerCustomer sos
         * @property {customer.IDayOfWeek|null} [pRt] MonthlyPlannerCustomer pRt
         * @property {string|null} [lkFlg] MonthlyPlannerCustomer lkFlg
         * @property {string|null} [edId] MonthlyPlannerCustomer edId
         * @property {string|null} [dayChangeP] MonthlyPlannerCustomer dayChangeP
         * @property {string|null} [slockCd] MonthlyPlannerCustomer slockCd
         * @property {string|null} [rtWkCd] MonthlyPlannerCustomer rtWkCd
         * @property {string|null} [prRtWkCd] MonthlyPlannerCustomer prRtWkCd
         * @property {string|null} [prOpUnCd] MonthlyPlannerCustomer prOpUnCd
         * @property {string|null} [prDispCd] MonthlyPlannerCustomer prDispCd
         * @property {string|null} [srvcUnitNote1] MonthlyPlannerCustomer srvcUnitNote1
         * @property {customer.IDayOfWeek|null} [prRouteWeek1] MonthlyPlannerCustomer prRouteWeek1
         * @property {customer.IDayOfWeek|null} [prSNoWeek1] MonthlyPlannerCustomer prSNoWeek1
         * @property {customer.IDayOfWeek|null} [prRouteWeek2] MonthlyPlannerCustomer prRouteWeek2
         * @property {customer.IDayOfWeek|null} [prSNoWeek2] MonthlyPlannerCustomer prSNoWeek2
         * @property {customer.IDayOfWeek|null} [prRouteWeek3] MonthlyPlannerCustomer prRouteWeek3
         * @property {customer.IDayOfWeek|null} [prSNoWeek3] MonthlyPlannerCustomer prSNoWeek3
         * @property {customer.IDayOfWeek|null} [prRouteWeek4] MonthlyPlannerCustomer prRouteWeek4
         * @property {customer.IDayOfWeek|null} [prSNoWeek4] MonthlyPlannerCustomer prSNoWeek4
         * @property {string|null} [srcWkCdCh] MonthlyPlannerCustomer srcWkCdCh
         * @property {string|null} [srcOrdrRtDow] MonthlyPlannerCustomer srcOrdrRtDow
         * @property {customer.IDayOfWeek|null} [srcRouteWeek] MonthlyPlannerCustomer srcRouteWeek
         * @property {string|null} [weekChangeP] MonthlyPlannerCustomer weekChangeP
         */

        /**
         * Constructs a new MonthlyPlannerCustomer.
         * @memberof customer
         * @classdesc Represents a MonthlyPlannerCustomer.
         * @implements IMonthlyPlannerCustomer
         * @constructor
         * @param {customer.IMonthlyPlannerCustomer=} [properties] Properties to set
         */
        function MonthlyPlannerCustomer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonthlyPlannerCustomer cid.
         * @member {string} cid
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.cid = "";

        /**
         * MonthlyPlannerCustomer name.
         * @member {string} name
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.name = "";

        /**
         * MonthlyPlannerCustomer uqty.
         * @member {number} uqty
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.uqty = 0;

        /**
         * MonthlyPlannerCustomer uVolVal.
         * @member {number} uVolVal
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.uVolVal = 0;

        /**
         * MonthlyPlannerCustomer uWtVal.
         * @member {number} uWtVal
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.uWtVal = 0;

        /**
         * MonthlyPlannerCustomer addr.
         * @member {string} addr
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.addr = "";

        /**
         * MonthlyPlannerCustomer cty.
         * @member {string} cty
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.cty = "";

        /**
         * MonthlyPlannerCustomer state.
         * @member {string} state
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.state = "";

        /**
         * MonthlyPlannerCustomer zip.
         * @member {string} zip
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.zip = "";

        /**
         * MonthlyPlannerCustomer cntry.
         * @member {string} cntry
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.cntry = "";

        /**
         * MonthlyPlannerCustomer lat.
         * @member {number} lat
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.lat = 0;

        /**
         * MonthlyPlannerCustomer lon.
         * @member {number} lon
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.lon = 0;

        /**
         * MonthlyPlannerCustomer geoSt.
         * @member {string} geoSt
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.geoSt = "";

        /**
         * MonthlyPlannerCustomer frqByWk.
         * @member {number} frqByWk
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.frqByWk = 0;

        /**
         * MonthlyPlannerCustomer cuId.
         * @member {number|Long} cuId
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.cuId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MonthlyPlannerCustomer unId.
         * @member {number|Long} unId
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.unId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MonthlyPlannerCustomer loId.
         * @member {number|Long} loId
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MonthlyPlannerCustomer orgRt.
         * @member {customer.IDayOfWeek|null|undefined} orgRt
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.orgRt = null;

        /**
         * MonthlyPlannerCustomer wkClstId.
         * @member {number} wkClstId
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.wkClstId = 0;

        /**
         * MonthlyPlannerCustomer sos.
         * @member {string} sos
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.sos = "";

        /**
         * MonthlyPlannerCustomer pRt.
         * @member {customer.IDayOfWeek|null|undefined} pRt
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.pRt = null;

        /**
         * MonthlyPlannerCustomer lkFlg.
         * @member {string} lkFlg
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.lkFlg = "";

        /**
         * MonthlyPlannerCustomer edId.
         * @member {string} edId
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.edId = "";

        /**
         * MonthlyPlannerCustomer dayChangeP.
         * @member {string} dayChangeP
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.dayChangeP = "";

        /**
         * MonthlyPlannerCustomer slockCd.
         * @member {string} slockCd
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.slockCd = "";

        /**
         * MonthlyPlannerCustomer rtWkCd.
         * @member {string} rtWkCd
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.rtWkCd = "";

        /**
         * MonthlyPlannerCustomer prRtWkCd.
         * @member {string} prRtWkCd
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prRtWkCd = "";

        /**
         * MonthlyPlannerCustomer prOpUnCd.
         * @member {string} prOpUnCd
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prOpUnCd = "";

        /**
         * MonthlyPlannerCustomer prDispCd.
         * @member {string} prDispCd
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prDispCd = "";

        /**
         * MonthlyPlannerCustomer srvcUnitNote1.
         * @member {string} srvcUnitNote1
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.srvcUnitNote1 = "";

        /**
         * MonthlyPlannerCustomer prRouteWeek1.
         * @member {customer.IDayOfWeek|null|undefined} prRouteWeek1
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prRouteWeek1 = null;

        /**
         * MonthlyPlannerCustomer prSNoWeek1.
         * @member {customer.IDayOfWeek|null|undefined} prSNoWeek1
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prSNoWeek1 = null;

        /**
         * MonthlyPlannerCustomer prRouteWeek2.
         * @member {customer.IDayOfWeek|null|undefined} prRouteWeek2
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prRouteWeek2 = null;

        /**
         * MonthlyPlannerCustomer prSNoWeek2.
         * @member {customer.IDayOfWeek|null|undefined} prSNoWeek2
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prSNoWeek2 = null;

        /**
         * MonthlyPlannerCustomer prRouteWeek3.
         * @member {customer.IDayOfWeek|null|undefined} prRouteWeek3
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prRouteWeek3 = null;

        /**
         * MonthlyPlannerCustomer prSNoWeek3.
         * @member {customer.IDayOfWeek|null|undefined} prSNoWeek3
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prSNoWeek3 = null;

        /**
         * MonthlyPlannerCustomer prRouteWeek4.
         * @member {customer.IDayOfWeek|null|undefined} prRouteWeek4
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prRouteWeek4 = null;

        /**
         * MonthlyPlannerCustomer prSNoWeek4.
         * @member {customer.IDayOfWeek|null|undefined} prSNoWeek4
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.prSNoWeek4 = null;

        /**
         * MonthlyPlannerCustomer srcWkCdCh.
         * @member {string} srcWkCdCh
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.srcWkCdCh = "";

        /**
         * MonthlyPlannerCustomer srcOrdrRtDow.
         * @member {string} srcOrdrRtDow
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.srcOrdrRtDow = "";

        /**
         * MonthlyPlannerCustomer srcRouteWeek.
         * @member {customer.IDayOfWeek|null|undefined} srcRouteWeek
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.srcRouteWeek = null;

        /**
         * MonthlyPlannerCustomer weekChangeP.
         * @member {string} weekChangeP
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         */
        MonthlyPlannerCustomer.prototype.weekChangeP = "";

        /**
         * Creates a new MonthlyPlannerCustomer instance using the specified properties.
         * @function create
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {customer.IMonthlyPlannerCustomer=} [properties] Properties to set
         * @returns {customer.MonthlyPlannerCustomer} MonthlyPlannerCustomer instance
         */
        MonthlyPlannerCustomer.create = function create(properties) {
            return new MonthlyPlannerCustomer(properties);
        };

        /**
         * Encodes the specified MonthlyPlannerCustomer message. Does not implicitly {@link customer.MonthlyPlannerCustomer.verify|verify} messages.
         * @function encode
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {customer.IMonthlyPlannerCustomer} message MonthlyPlannerCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.uqty != null && Object.hasOwnProperty.call(message, "uqty"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.uqty);
            if (message.uVolVal != null && Object.hasOwnProperty.call(message, "uVolVal"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.uVolVal);
            if (message.uWtVal != null && Object.hasOwnProperty.call(message, "uWtVal"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.uWtVal);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.addr);
            if (message.cty != null && Object.hasOwnProperty.call(message, "cty"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.cty);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.state);
            if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.zip);
            if (message.cntry != null && Object.hasOwnProperty.call(message, "cntry"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.cntry);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.lon);
            if (message.geoSt != null && Object.hasOwnProperty.call(message, "geoSt"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.geoSt);
            if (message.frqByWk != null && Object.hasOwnProperty.call(message, "frqByWk"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.frqByWk);
            if (message.cuId != null && Object.hasOwnProperty.call(message, "cuId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.cuId);
            if (message.unId != null && Object.hasOwnProperty.call(message, "unId"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.unId);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.loId);
            if (message.orgRt != null && Object.hasOwnProperty.call(message, "orgRt"))
                $root.customer.DayOfWeek.encode(message.orgRt, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.wkClstId != null && Object.hasOwnProperty.call(message, "wkClstId"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.wkClstId);
            if (message.sos != null && Object.hasOwnProperty.call(message, "sos"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.sos);
            if (message.pRt != null && Object.hasOwnProperty.call(message, "pRt"))
                $root.customer.DayOfWeek.encode(message.pRt, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.lkFlg != null && Object.hasOwnProperty.call(message, "lkFlg"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.lkFlg);
            if (message.edId != null && Object.hasOwnProperty.call(message, "edId"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.edId);
            if (message.dayChangeP != null && Object.hasOwnProperty.call(message, "dayChangeP"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.dayChangeP);
            if (message.slockCd != null && Object.hasOwnProperty.call(message, "slockCd"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.slockCd);
            if (message.rtWkCd != null && Object.hasOwnProperty.call(message, "rtWkCd"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.rtWkCd);
            if (message.prRtWkCd != null && Object.hasOwnProperty.call(message, "prRtWkCd"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.prRtWkCd);
            if (message.prOpUnCd != null && Object.hasOwnProperty.call(message, "prOpUnCd"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.prOpUnCd);
            if (message.prDispCd != null && Object.hasOwnProperty.call(message, "prDispCd"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.prDispCd);
            if (message.srvcUnitNote1 != null && Object.hasOwnProperty.call(message, "srvcUnitNote1"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.srvcUnitNote1);
            if (message.prRouteWeek1 != null && Object.hasOwnProperty.call(message, "prRouteWeek1"))
                $root.customer.DayOfWeek.encode(message.prRouteWeek1, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.prSNoWeek1 != null && Object.hasOwnProperty.call(message, "prSNoWeek1"))
                $root.customer.DayOfWeek.encode(message.prSNoWeek1, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message.prRouteWeek2 != null && Object.hasOwnProperty.call(message, "prRouteWeek2"))
                $root.customer.DayOfWeek.encode(message.prRouteWeek2, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.prSNoWeek2 != null && Object.hasOwnProperty.call(message, "prSNoWeek2"))
                $root.customer.DayOfWeek.encode(message.prSNoWeek2, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.prRouteWeek3 != null && Object.hasOwnProperty.call(message, "prRouteWeek3"))
                $root.customer.DayOfWeek.encode(message.prRouteWeek3, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.prSNoWeek3 != null && Object.hasOwnProperty.call(message, "prSNoWeek3"))
                $root.customer.DayOfWeek.encode(message.prSNoWeek3, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
            if (message.prRouteWeek4 != null && Object.hasOwnProperty.call(message, "prRouteWeek4"))
                $root.customer.DayOfWeek.encode(message.prRouteWeek4, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.prSNoWeek4 != null && Object.hasOwnProperty.call(message, "prSNoWeek4"))
                $root.customer.DayOfWeek.encode(message.prSNoWeek4, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.srcWkCdCh != null && Object.hasOwnProperty.call(message, "srcWkCdCh"))
                writer.uint32(/* id 39, wireType 2 =*/314).string(message.srcWkCdCh);
            if (message.srcOrdrRtDow != null && Object.hasOwnProperty.call(message, "srcOrdrRtDow"))
                writer.uint32(/* id 40, wireType 2 =*/322).string(message.srcOrdrRtDow);
            if (message.srcRouteWeek != null && Object.hasOwnProperty.call(message, "srcRouteWeek"))
                $root.customer.DayOfWeek.encode(message.srcRouteWeek, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.weekChangeP != null && Object.hasOwnProperty.call(message, "weekChangeP"))
                writer.uint32(/* id 42, wireType 2 =*/338).string(message.weekChangeP);
            return writer;
        };

        /**
         * Encodes the specified MonthlyPlannerCustomer message, length delimited. Does not implicitly {@link customer.MonthlyPlannerCustomer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {customer.IMonthlyPlannerCustomer} message MonthlyPlannerCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonthlyPlannerCustomer message from the specified reader or buffer.
         * @function decode
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.MonthlyPlannerCustomer} MonthlyPlannerCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.MonthlyPlannerCustomer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.uqty = reader.double();
                    break;
                case 4:
                    message.uVolVal = reader.double();
                    break;
                case 5:
                    message.uWtVal = reader.double();
                    break;
                case 6:
                    message.addr = reader.string();
                    break;
                case 7:
                    message.cty = reader.string();
                    break;
                case 8:
                    message.state = reader.string();
                    break;
                case 9:
                    message.zip = reader.string();
                    break;
                case 10:
                    message.cntry = reader.string();
                    break;
                case 11:
                    message.lat = reader.double();
                    break;
                case 12:
                    message.lon = reader.double();
                    break;
                case 13:
                    message.geoSt = reader.string();
                    break;
                case 14:
                    message.frqByWk = reader.int32();
                    break;
                case 15:
                    message.cuId = reader.int64();
                    break;
                case 16:
                    message.unId = reader.int64();
                    break;
                case 17:
                    message.loId = reader.int64();
                    break;
                case 18:
                    message.orgRt = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.wkClstId = reader.int32();
                    break;
                case 20:
                    message.sos = reader.string();
                    break;
                case 21:
                    message.pRt = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.lkFlg = reader.string();
                    break;
                case 23:
                    message.edId = reader.string();
                    break;
                case 24:
                    message.dayChangeP = reader.string();
                    break;
                case 25:
                    message.slockCd = reader.string();
                    break;
                case 26:
                    message.rtWkCd = reader.string();
                    break;
                case 27:
                    message.prRtWkCd = reader.string();
                    break;
                case 28:
                    message.prOpUnCd = reader.string();
                    break;
                case 29:
                    message.prDispCd = reader.string();
                    break;
                case 30:
                    message.srvcUnitNote1 = reader.string();
                    break;
                case 31:
                    message.prRouteWeek1 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.prSNoWeek1 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 33:
                    message.prRouteWeek2 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 34:
                    message.prSNoWeek2 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 35:
                    message.prRouteWeek3 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.prSNoWeek3 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 37:
                    message.prRouteWeek4 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 38:
                    message.prSNoWeek4 = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.srcWkCdCh = reader.string();
                    break;
                case 40:
                    message.srcOrdrRtDow = reader.string();
                    break;
                case 41:
                    message.srcRouteWeek = $root.customer.DayOfWeek.decode(reader, reader.uint32());
                    break;
                case 42:
                    message.weekChangeP = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonthlyPlannerCustomer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.MonthlyPlannerCustomer} MonthlyPlannerCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MonthlyPlannerCustomer message.
         * @function verify
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MonthlyPlannerCustomer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                if (typeof message.uqty !== "number")
                    return "uqty: number expected";
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                if (typeof message.uVolVal !== "number")
                    return "uVolVal: number expected";
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                if (typeof message.uWtVal !== "number")
                    return "uWtVal: number expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.cty != null && message.hasOwnProperty("cty"))
                if (!$util.isString(message.cty))
                    return "cty: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.zip != null && message.hasOwnProperty("zip"))
                if (!$util.isString(message.zip))
                    return "zip: string expected";
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                if (!$util.isString(message.cntry))
                    return "cntry: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                if (!$util.isString(message.geoSt))
                    return "geoSt: string expected";
            if (message.frqByWk != null && message.hasOwnProperty("frqByWk"))
                if (!$util.isInteger(message.frqByWk))
                    return "frqByWk: integer expected";
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (!$util.isInteger(message.cuId) && !(message.cuId && $util.isInteger(message.cuId.low) && $util.isInteger(message.cuId.high)))
                    return "cuId: integer|Long expected";
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (!$util.isInteger(message.unId) && !(message.unId && $util.isInteger(message.unId.low) && $util.isInteger(message.unId.high)))
                    return "unId: integer|Long expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.orgRt != null && message.hasOwnProperty("orgRt")) {
                let error = $root.customer.DayOfWeek.verify(message.orgRt);
                if (error)
                    return "orgRt." + error;
            }
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                if (!$util.isInteger(message.wkClstId))
                    return "wkClstId: integer expected";
            if (message.sos != null && message.hasOwnProperty("sos"))
                if (!$util.isString(message.sos))
                    return "sos: string expected";
            if (message.pRt != null && message.hasOwnProperty("pRt")) {
                let error = $root.customer.DayOfWeek.verify(message.pRt);
                if (error)
                    return "pRt." + error;
            }
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                if (!$util.isString(message.lkFlg))
                    return "lkFlg: string expected";
            if (message.edId != null && message.hasOwnProperty("edId"))
                if (!$util.isString(message.edId))
                    return "edId: string expected";
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                if (!$util.isString(message.dayChangeP))
                    return "dayChangeP: string expected";
            if (message.slockCd != null && message.hasOwnProperty("slockCd"))
                if (!$util.isString(message.slockCd))
                    return "slockCd: string expected";
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                if (!$util.isString(message.rtWkCd))
                    return "rtWkCd: string expected";
            if (message.prRtWkCd != null && message.hasOwnProperty("prRtWkCd"))
                if (!$util.isString(message.prRtWkCd))
                    return "prRtWkCd: string expected";
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                if (!$util.isString(message.prOpUnCd))
                    return "prOpUnCd: string expected";
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                if (!$util.isString(message.prDispCd))
                    return "prDispCd: string expected";
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                if (!$util.isString(message.srvcUnitNote1))
                    return "srvcUnitNote1: string expected";
            if (message.prRouteWeek1 != null && message.hasOwnProperty("prRouteWeek1")) {
                let error = $root.customer.DayOfWeek.verify(message.prRouteWeek1);
                if (error)
                    return "prRouteWeek1." + error;
            }
            if (message.prSNoWeek1 != null && message.hasOwnProperty("prSNoWeek1")) {
                let error = $root.customer.DayOfWeek.verify(message.prSNoWeek1);
                if (error)
                    return "prSNoWeek1." + error;
            }
            if (message.prRouteWeek2 != null && message.hasOwnProperty("prRouteWeek2")) {
                let error = $root.customer.DayOfWeek.verify(message.prRouteWeek2);
                if (error)
                    return "prRouteWeek2." + error;
            }
            if (message.prSNoWeek2 != null && message.hasOwnProperty("prSNoWeek2")) {
                let error = $root.customer.DayOfWeek.verify(message.prSNoWeek2);
                if (error)
                    return "prSNoWeek2." + error;
            }
            if (message.prRouteWeek3 != null && message.hasOwnProperty("prRouteWeek3")) {
                let error = $root.customer.DayOfWeek.verify(message.prRouteWeek3);
                if (error)
                    return "prRouteWeek3." + error;
            }
            if (message.prSNoWeek3 != null && message.hasOwnProperty("prSNoWeek3")) {
                let error = $root.customer.DayOfWeek.verify(message.prSNoWeek3);
                if (error)
                    return "prSNoWeek3." + error;
            }
            if (message.prRouteWeek4 != null && message.hasOwnProperty("prRouteWeek4")) {
                let error = $root.customer.DayOfWeek.verify(message.prRouteWeek4);
                if (error)
                    return "prRouteWeek4." + error;
            }
            if (message.prSNoWeek4 != null && message.hasOwnProperty("prSNoWeek4")) {
                let error = $root.customer.DayOfWeek.verify(message.prSNoWeek4);
                if (error)
                    return "prSNoWeek4." + error;
            }
            if (message.srcWkCdCh != null && message.hasOwnProperty("srcWkCdCh"))
                if (!$util.isString(message.srcWkCdCh))
                    return "srcWkCdCh: string expected";
            if (message.srcOrdrRtDow != null && message.hasOwnProperty("srcOrdrRtDow"))
                if (!$util.isString(message.srcOrdrRtDow))
                    return "srcOrdrRtDow: string expected";
            if (message.srcRouteWeek != null && message.hasOwnProperty("srcRouteWeek")) {
                let error = $root.customer.DayOfWeek.verify(message.srcRouteWeek);
                if (error)
                    return "srcRouteWeek." + error;
            }
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                if (!$util.isString(message.weekChangeP))
                    return "weekChangeP: string expected";
            return null;
        };

        /**
         * Creates a MonthlyPlannerCustomer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.MonthlyPlannerCustomer} MonthlyPlannerCustomer
         */
        MonthlyPlannerCustomer.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.MonthlyPlannerCustomer)
                return object;
            let message = new $root.customer.MonthlyPlannerCustomer();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.uqty != null)
                message.uqty = Number(object.uqty);
            if (object.uVolVal != null)
                message.uVolVal = Number(object.uVolVal);
            if (object.uWtVal != null)
                message.uWtVal = Number(object.uWtVal);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.cty != null)
                message.cty = String(object.cty);
            if (object.state != null)
                message.state = String(object.state);
            if (object.zip != null)
                message.zip = String(object.zip);
            if (object.cntry != null)
                message.cntry = String(object.cntry);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.geoSt != null)
                message.geoSt = String(object.geoSt);
            if (object.frqByWk != null)
                message.frqByWk = object.frqByWk | 0;
            if (object.cuId != null)
                if ($util.Long)
                    (message.cuId = $util.Long.fromValue(object.cuId)).unsigned = false;
                else if (typeof object.cuId === "string")
                    message.cuId = parseInt(object.cuId, 10);
                else if (typeof object.cuId === "number")
                    message.cuId = object.cuId;
                else if (typeof object.cuId === "object")
                    message.cuId = new $util.LongBits(object.cuId.low >>> 0, object.cuId.high >>> 0).toNumber();
            if (object.unId != null)
                if ($util.Long)
                    (message.unId = $util.Long.fromValue(object.unId)).unsigned = false;
                else if (typeof object.unId === "string")
                    message.unId = parseInt(object.unId, 10);
                else if (typeof object.unId === "number")
                    message.unId = object.unId;
                else if (typeof object.unId === "object")
                    message.unId = new $util.LongBits(object.unId.low >>> 0, object.unId.high >>> 0).toNumber();
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.orgRt != null) {
                if (typeof object.orgRt !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.orgRt: object expected");
                message.orgRt = $root.customer.DayOfWeek.fromObject(object.orgRt);
            }
            if (object.wkClstId != null)
                message.wkClstId = object.wkClstId | 0;
            if (object.sos != null)
                message.sos = String(object.sos);
            if (object.pRt != null) {
                if (typeof object.pRt !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.pRt: object expected");
                message.pRt = $root.customer.DayOfWeek.fromObject(object.pRt);
            }
            if (object.lkFlg != null)
                message.lkFlg = String(object.lkFlg);
            if (object.edId != null)
                message.edId = String(object.edId);
            if (object.dayChangeP != null)
                message.dayChangeP = String(object.dayChangeP);
            if (object.slockCd != null)
                message.slockCd = String(object.slockCd);
            if (object.rtWkCd != null)
                message.rtWkCd = String(object.rtWkCd);
            if (object.prRtWkCd != null)
                message.prRtWkCd = String(object.prRtWkCd);
            if (object.prOpUnCd != null)
                message.prOpUnCd = String(object.prOpUnCd);
            if (object.prDispCd != null)
                message.prDispCd = String(object.prDispCd);
            if (object.srvcUnitNote1 != null)
                message.srvcUnitNote1 = String(object.srvcUnitNote1);
            if (object.prRouteWeek1 != null) {
                if (typeof object.prRouteWeek1 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prRouteWeek1: object expected");
                message.prRouteWeek1 = $root.customer.DayOfWeek.fromObject(object.prRouteWeek1);
            }
            if (object.prSNoWeek1 != null) {
                if (typeof object.prSNoWeek1 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prSNoWeek1: object expected");
                message.prSNoWeek1 = $root.customer.DayOfWeek.fromObject(object.prSNoWeek1);
            }
            if (object.prRouteWeek2 != null) {
                if (typeof object.prRouteWeek2 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prRouteWeek2: object expected");
                message.prRouteWeek2 = $root.customer.DayOfWeek.fromObject(object.prRouteWeek2);
            }
            if (object.prSNoWeek2 != null) {
                if (typeof object.prSNoWeek2 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prSNoWeek2: object expected");
                message.prSNoWeek2 = $root.customer.DayOfWeek.fromObject(object.prSNoWeek2);
            }
            if (object.prRouteWeek3 != null) {
                if (typeof object.prRouteWeek3 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prRouteWeek3: object expected");
                message.prRouteWeek3 = $root.customer.DayOfWeek.fromObject(object.prRouteWeek3);
            }
            if (object.prSNoWeek3 != null) {
                if (typeof object.prSNoWeek3 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prSNoWeek3: object expected");
                message.prSNoWeek3 = $root.customer.DayOfWeek.fromObject(object.prSNoWeek3);
            }
            if (object.prRouteWeek4 != null) {
                if (typeof object.prRouteWeek4 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prRouteWeek4: object expected");
                message.prRouteWeek4 = $root.customer.DayOfWeek.fromObject(object.prRouteWeek4);
            }
            if (object.prSNoWeek4 != null) {
                if (typeof object.prSNoWeek4 !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.prSNoWeek4: object expected");
                message.prSNoWeek4 = $root.customer.DayOfWeek.fromObject(object.prSNoWeek4);
            }
            if (object.srcWkCdCh != null)
                message.srcWkCdCh = String(object.srcWkCdCh);
            if (object.srcOrdrRtDow != null)
                message.srcOrdrRtDow = String(object.srcOrdrRtDow);
            if (object.srcRouteWeek != null) {
                if (typeof object.srcRouteWeek !== "object")
                    throw TypeError(".customer.MonthlyPlannerCustomer.srcRouteWeek: object expected");
                message.srcRouteWeek = $root.customer.DayOfWeek.fromObject(object.srcRouteWeek);
            }
            if (object.weekChangeP != null)
                message.weekChangeP = String(object.weekChangeP);
            return message;
        };

        /**
         * Creates a plain object from a MonthlyPlannerCustomer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.MonthlyPlannerCustomer
         * @static
         * @param {customer.MonthlyPlannerCustomer} message MonthlyPlannerCustomer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonthlyPlannerCustomer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.uqty = 0;
                object.uVolVal = 0;
                object.uWtVal = 0;
                object.addr = "";
                object.cty = "";
                object.state = "";
                object.zip = "";
                object.cntry = "";
                object.lat = 0;
                object.lon = 0;
                object.geoSt = "";
                object.frqByWk = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.cuId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cuId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                object.orgRt = null;
                object.wkClstId = 0;
                object.sos = "";
                object.pRt = null;
                object.lkFlg = "";
                object.edId = "";
                object.dayChangeP = "";
                object.slockCd = "";
                object.rtWkCd = "";
                object.prRtWkCd = "";
                object.prOpUnCd = "";
                object.prDispCd = "";
                object.srvcUnitNote1 = "";
                object.prRouteWeek1 = null;
                object.prSNoWeek1 = null;
                object.prRouteWeek2 = null;
                object.prSNoWeek2 = null;
                object.prRouteWeek3 = null;
                object.prSNoWeek3 = null;
                object.prRouteWeek4 = null;
                object.prSNoWeek4 = null;
                object.srcWkCdCh = "";
                object.srcOrdrRtDow = "";
                object.srcRouteWeek = null;
                object.weekChangeP = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.uqty != null && message.hasOwnProperty("uqty"))
                object.uqty = options.json && !isFinite(message.uqty) ? String(message.uqty) : message.uqty;
            if (message.uVolVal != null && message.hasOwnProperty("uVolVal"))
                object.uVolVal = options.json && !isFinite(message.uVolVal) ? String(message.uVolVal) : message.uVolVal;
            if (message.uWtVal != null && message.hasOwnProperty("uWtVal"))
                object.uWtVal = options.json && !isFinite(message.uWtVal) ? String(message.uWtVal) : message.uWtVal;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.cty != null && message.hasOwnProperty("cty"))
                object.cty = message.cty;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.zip != null && message.hasOwnProperty("zip"))
                object.zip = message.zip;
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                object.cntry = message.cntry;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                object.geoSt = message.geoSt;
            if (message.frqByWk != null && message.hasOwnProperty("frqByWk"))
                object.frqByWk = message.frqByWk;
            if (message.cuId != null && message.hasOwnProperty("cuId"))
                if (typeof message.cuId === "number")
                    object.cuId = options.longs === String ? String(message.cuId) : message.cuId;
                else
                    object.cuId = options.longs === String ? $util.Long.prototype.toString.call(message.cuId) : options.longs === Number ? new $util.LongBits(message.cuId.low >>> 0, message.cuId.high >>> 0).toNumber() : message.cuId;
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (typeof message.unId === "number")
                    object.unId = options.longs === String ? String(message.unId) : message.unId;
                else
                    object.unId = options.longs === String ? $util.Long.prototype.toString.call(message.unId) : options.longs === Number ? new $util.LongBits(message.unId.low >>> 0, message.unId.high >>> 0).toNumber() : message.unId;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.orgRt != null && message.hasOwnProperty("orgRt"))
                object.orgRt = $root.customer.DayOfWeek.toObject(message.orgRt, options);
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                object.wkClstId = message.wkClstId;
            if (message.sos != null && message.hasOwnProperty("sos"))
                object.sos = message.sos;
            if (message.pRt != null && message.hasOwnProperty("pRt"))
                object.pRt = $root.customer.DayOfWeek.toObject(message.pRt, options);
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                object.lkFlg = message.lkFlg;
            if (message.edId != null && message.hasOwnProperty("edId"))
                object.edId = message.edId;
            if (message.dayChangeP != null && message.hasOwnProperty("dayChangeP"))
                object.dayChangeP = message.dayChangeP;
            if (message.slockCd != null && message.hasOwnProperty("slockCd"))
                object.slockCd = message.slockCd;
            if (message.rtWkCd != null && message.hasOwnProperty("rtWkCd"))
                object.rtWkCd = message.rtWkCd;
            if (message.prRtWkCd != null && message.hasOwnProperty("prRtWkCd"))
                object.prRtWkCd = message.prRtWkCd;
            if (message.prOpUnCd != null && message.hasOwnProperty("prOpUnCd"))
                object.prOpUnCd = message.prOpUnCd;
            if (message.prDispCd != null && message.hasOwnProperty("prDispCd"))
                object.prDispCd = message.prDispCd;
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                object.srvcUnitNote1 = message.srvcUnitNote1;
            if (message.prRouteWeek1 != null && message.hasOwnProperty("prRouteWeek1"))
                object.prRouteWeek1 = $root.customer.DayOfWeek.toObject(message.prRouteWeek1, options);
            if (message.prSNoWeek1 != null && message.hasOwnProperty("prSNoWeek1"))
                object.prSNoWeek1 = $root.customer.DayOfWeek.toObject(message.prSNoWeek1, options);
            if (message.prRouteWeek2 != null && message.hasOwnProperty("prRouteWeek2"))
                object.prRouteWeek2 = $root.customer.DayOfWeek.toObject(message.prRouteWeek2, options);
            if (message.prSNoWeek2 != null && message.hasOwnProperty("prSNoWeek2"))
                object.prSNoWeek2 = $root.customer.DayOfWeek.toObject(message.prSNoWeek2, options);
            if (message.prRouteWeek3 != null && message.hasOwnProperty("prRouteWeek3"))
                object.prRouteWeek3 = $root.customer.DayOfWeek.toObject(message.prRouteWeek3, options);
            if (message.prSNoWeek3 != null && message.hasOwnProperty("prSNoWeek3"))
                object.prSNoWeek3 = $root.customer.DayOfWeek.toObject(message.prSNoWeek3, options);
            if (message.prRouteWeek4 != null && message.hasOwnProperty("prRouteWeek4"))
                object.prRouteWeek4 = $root.customer.DayOfWeek.toObject(message.prRouteWeek4, options);
            if (message.prSNoWeek4 != null && message.hasOwnProperty("prSNoWeek4"))
                object.prSNoWeek4 = $root.customer.DayOfWeek.toObject(message.prSNoWeek4, options);
            if (message.srcWkCdCh != null && message.hasOwnProperty("srcWkCdCh"))
                object.srcWkCdCh = message.srcWkCdCh;
            if (message.srcOrdrRtDow != null && message.hasOwnProperty("srcOrdrRtDow"))
                object.srcOrdrRtDow = message.srcOrdrRtDow;
            if (message.srcRouteWeek != null && message.hasOwnProperty("srcRouteWeek"))
                object.srcRouteWeek = $root.customer.DayOfWeek.toObject(message.srcRouteWeek, options);
            if (message.weekChangeP != null && message.hasOwnProperty("weekChangeP"))
                object.weekChangeP = message.weekChangeP;
            return object;
        };

        /**
         * Converts this MonthlyPlannerCustomer to JSON.
         * @function toJSON
         * @memberof customer.MonthlyPlannerCustomer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonthlyPlannerCustomer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonthlyPlannerCustomer;
    })();

    customer.MonthlyPlannerCustomerRequest = (function() {

        /**
         * Properties of a MonthlyPlannerCustomerRequest.
         * @memberof customer
         * @interface IMonthlyPlannerCustomerRequest
         * @property {number|Long|null} [acctId] MonthlyPlannerCustomerRequest acctId
         * @property {string|null} [opsUnitCd] MonthlyPlannerCustomerRequest opsUnitCd
         * @property {Array.<string>|null} [srvcRtTypCd] MonthlyPlannerCustomerRequest srvcRtTypCd
         * @property {Array.<string>|null} [srvcOrdrRtWkCd] MonthlyPlannerCustomerRequest srvcOrdrRtWkCd
         * @property {Array.<number>|null} [selWeekNo] MonthlyPlannerCustomerRequest selWeekNo
         * @property {string|null} [userNm] MonthlyPlannerCustomerRequest userNm
         */

        /**
         * Constructs a new MonthlyPlannerCustomerRequest.
         * @memberof customer
         * @classdesc Represents a MonthlyPlannerCustomerRequest.
         * @implements IMonthlyPlannerCustomerRequest
         * @constructor
         * @param {customer.IMonthlyPlannerCustomerRequest=} [properties] Properties to set
         */
        function MonthlyPlannerCustomerRequest(properties) {
            this.srvcRtTypCd = [];
            this.srvcOrdrRtWkCd = [];
            this.selWeekNo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonthlyPlannerCustomerRequest acctId.
         * @member {number|Long} acctId
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.acctId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MonthlyPlannerCustomerRequest opsUnitCd.
         * @member {string} opsUnitCd
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.opsUnitCd = "";

        /**
         * MonthlyPlannerCustomerRequest srvcRtTypCd.
         * @member {Array.<string>} srvcRtTypCd
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.srvcRtTypCd = $util.emptyArray;

        /**
         * MonthlyPlannerCustomerRequest srvcOrdrRtWkCd.
         * @member {Array.<string>} srvcOrdrRtWkCd
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.srvcOrdrRtWkCd = $util.emptyArray;

        /**
         * MonthlyPlannerCustomerRequest selWeekNo.
         * @member {Array.<number>} selWeekNo
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.selWeekNo = $util.emptyArray;

        /**
         * MonthlyPlannerCustomerRequest userNm.
         * @member {string} userNm
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         */
        MonthlyPlannerCustomerRequest.prototype.userNm = "";

        /**
         * Creates a new MonthlyPlannerCustomerRequest instance using the specified properties.
         * @function create
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {customer.IMonthlyPlannerCustomerRequest=} [properties] Properties to set
         * @returns {customer.MonthlyPlannerCustomerRequest} MonthlyPlannerCustomerRequest instance
         */
        MonthlyPlannerCustomerRequest.create = function create(properties) {
            return new MonthlyPlannerCustomerRequest(properties);
        };

        /**
         * Encodes the specified MonthlyPlannerCustomerRequest message. Does not implicitly {@link customer.MonthlyPlannerCustomerRequest.verify|verify} messages.
         * @function encode
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {customer.IMonthlyPlannerCustomerRequest} message MonthlyPlannerCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.acctId);
            if (message.opsUnitCd != null && Object.hasOwnProperty.call(message, "opsUnitCd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.opsUnitCd);
            if (message.srvcRtTypCd != null && message.srvcRtTypCd.length)
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.srvcRtTypCd[i]);
            if (message.srvcOrdrRtWkCd != null && message.srvcOrdrRtWkCd.length)
                for (let i = 0; i < message.srvcOrdrRtWkCd.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.srvcOrdrRtWkCd[i]);
            if (message.selWeekNo != null && message.selWeekNo.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.selWeekNo.length; ++i)
                    writer.int32(message.selWeekNo[i]);
                writer.ldelim();
            }
            if (message.userNm != null && Object.hasOwnProperty.call(message, "userNm"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userNm);
            return writer;
        };

        /**
         * Encodes the specified MonthlyPlannerCustomerRequest message, length delimited. Does not implicitly {@link customer.MonthlyPlannerCustomerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {customer.IMonthlyPlannerCustomerRequest} message MonthlyPlannerCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonthlyPlannerCustomerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.MonthlyPlannerCustomerRequest} MonthlyPlannerCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.MonthlyPlannerCustomerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.acctId = reader.int64();
                    break;
                case 2:
                    message.opsUnitCd = reader.string();
                    break;
                case 3:
                    if (!(message.srvcRtTypCd && message.srvcRtTypCd.length))
                        message.srvcRtTypCd = [];
                    message.srvcRtTypCd.push(reader.string());
                    break;
                case 4:
                    if (!(message.srvcOrdrRtWkCd && message.srvcOrdrRtWkCd.length))
                        message.srvcOrdrRtWkCd = [];
                    message.srvcOrdrRtWkCd.push(reader.string());
                    break;
                case 5:
                    if (!(message.selWeekNo && message.selWeekNo.length))
                        message.selWeekNo = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.selWeekNo.push(reader.int32());
                    } else
                        message.selWeekNo.push(reader.int32());
                    break;
                case 6:
                    message.userNm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonthlyPlannerCustomerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.MonthlyPlannerCustomerRequest} MonthlyPlannerCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MonthlyPlannerCustomerRequest message.
         * @function verify
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MonthlyPlannerCustomerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (!$util.isInteger(message.acctId) && !(message.acctId && $util.isInteger(message.acctId.low) && $util.isInteger(message.acctId.high)))
                    return "acctId: integer|Long expected";
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                if (!$util.isString(message.opsUnitCd))
                    return "opsUnitCd: string expected";
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd")) {
                if (!Array.isArray(message.srvcRtTypCd))
                    return "srvcRtTypCd: array expected";
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    if (!$util.isString(message.srvcRtTypCd[i]))
                        return "srvcRtTypCd: string[] expected";
            }
            if (message.srvcOrdrRtWkCd != null && message.hasOwnProperty("srvcOrdrRtWkCd")) {
                if (!Array.isArray(message.srvcOrdrRtWkCd))
                    return "srvcOrdrRtWkCd: array expected";
                for (let i = 0; i < message.srvcOrdrRtWkCd.length; ++i)
                    if (!$util.isString(message.srvcOrdrRtWkCd[i]))
                        return "srvcOrdrRtWkCd: string[] expected";
            }
            if (message.selWeekNo != null && message.hasOwnProperty("selWeekNo")) {
                if (!Array.isArray(message.selWeekNo))
                    return "selWeekNo: array expected";
                for (let i = 0; i < message.selWeekNo.length; ++i)
                    if (!$util.isInteger(message.selWeekNo[i]))
                        return "selWeekNo: integer[] expected";
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                if (!$util.isString(message.userNm))
                    return "userNm: string expected";
            return null;
        };

        /**
         * Creates a MonthlyPlannerCustomerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.MonthlyPlannerCustomerRequest} MonthlyPlannerCustomerRequest
         */
        MonthlyPlannerCustomerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.MonthlyPlannerCustomerRequest)
                return object;
            let message = new $root.customer.MonthlyPlannerCustomerRequest();
            if (object.acctId != null)
                if ($util.Long)
                    (message.acctId = $util.Long.fromValue(object.acctId)).unsigned = false;
                else if (typeof object.acctId === "string")
                    message.acctId = parseInt(object.acctId, 10);
                else if (typeof object.acctId === "number")
                    message.acctId = object.acctId;
                else if (typeof object.acctId === "object")
                    message.acctId = new $util.LongBits(object.acctId.low >>> 0, object.acctId.high >>> 0).toNumber();
            if (object.opsUnitCd != null)
                message.opsUnitCd = String(object.opsUnitCd);
            if (object.srvcRtTypCd) {
                if (!Array.isArray(object.srvcRtTypCd))
                    throw TypeError(".customer.MonthlyPlannerCustomerRequest.srvcRtTypCd: array expected");
                message.srvcRtTypCd = [];
                for (let i = 0; i < object.srvcRtTypCd.length; ++i)
                    message.srvcRtTypCd[i] = String(object.srvcRtTypCd[i]);
            }
            if (object.srvcOrdrRtWkCd) {
                if (!Array.isArray(object.srvcOrdrRtWkCd))
                    throw TypeError(".customer.MonthlyPlannerCustomerRequest.srvcOrdrRtWkCd: array expected");
                message.srvcOrdrRtWkCd = [];
                for (let i = 0; i < object.srvcOrdrRtWkCd.length; ++i)
                    message.srvcOrdrRtWkCd[i] = String(object.srvcOrdrRtWkCd[i]);
            }
            if (object.selWeekNo) {
                if (!Array.isArray(object.selWeekNo))
                    throw TypeError(".customer.MonthlyPlannerCustomerRequest.selWeekNo: array expected");
                message.selWeekNo = [];
                for (let i = 0; i < object.selWeekNo.length; ++i)
                    message.selWeekNo[i] = object.selWeekNo[i] | 0;
            }
            if (object.userNm != null)
                message.userNm = String(object.userNm);
            return message;
        };

        /**
         * Creates a plain object from a MonthlyPlannerCustomerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @static
         * @param {customer.MonthlyPlannerCustomerRequest} message MonthlyPlannerCustomerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonthlyPlannerCustomerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.srvcRtTypCd = [];
                object.srvcOrdrRtWkCd = [];
                object.selWeekNo = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.acctId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.acctId = options.longs === String ? "0" : 0;
                object.opsUnitCd = "";
                object.userNm = "";
            }
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (typeof message.acctId === "number")
                    object.acctId = options.longs === String ? String(message.acctId) : message.acctId;
                else
                    object.acctId = options.longs === String ? $util.Long.prototype.toString.call(message.acctId) : options.longs === Number ? new $util.LongBits(message.acctId.low >>> 0, message.acctId.high >>> 0).toNumber() : message.acctId;
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                object.opsUnitCd = message.opsUnitCd;
            if (message.srvcRtTypCd && message.srvcRtTypCd.length) {
                object.srvcRtTypCd = [];
                for (let j = 0; j < message.srvcRtTypCd.length; ++j)
                    object.srvcRtTypCd[j] = message.srvcRtTypCd[j];
            }
            if (message.srvcOrdrRtWkCd && message.srvcOrdrRtWkCd.length) {
                object.srvcOrdrRtWkCd = [];
                for (let j = 0; j < message.srvcOrdrRtWkCd.length; ++j)
                    object.srvcOrdrRtWkCd[j] = message.srvcOrdrRtWkCd[j];
            }
            if (message.selWeekNo && message.selWeekNo.length) {
                object.selWeekNo = [];
                for (let j = 0; j < message.selWeekNo.length; ++j)
                    object.selWeekNo[j] = message.selWeekNo[j];
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                object.userNm = message.userNm;
            return object;
        };

        /**
         * Converts this MonthlyPlannerCustomerRequest to JSON.
         * @function toJSON
         * @memberof customer.MonthlyPlannerCustomerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonthlyPlannerCustomerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonthlyPlannerCustomerRequest;
    })();

    customer.MonthlyPlannerCustomerResponse = (function() {

        /**
         * Properties of a MonthlyPlannerCustomerResponse.
         * @memberof customer
         * @interface IMonthlyPlannerCustomerResponse
         * @property {Array.<customer.IMonthlyPlannerCustomer>|null} [monthlyPlannerCustomerList] MonthlyPlannerCustomerResponse monthlyPlannerCustomerList
         */

        /**
         * Constructs a new MonthlyPlannerCustomerResponse.
         * @memberof customer
         * @classdesc Represents a MonthlyPlannerCustomerResponse.
         * @implements IMonthlyPlannerCustomerResponse
         * @constructor
         * @param {customer.IMonthlyPlannerCustomerResponse=} [properties] Properties to set
         */
        function MonthlyPlannerCustomerResponse(properties) {
            this.monthlyPlannerCustomerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonthlyPlannerCustomerResponse monthlyPlannerCustomerList.
         * @member {Array.<customer.IMonthlyPlannerCustomer>} monthlyPlannerCustomerList
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @instance
         */
        MonthlyPlannerCustomerResponse.prototype.monthlyPlannerCustomerList = $util.emptyArray;

        /**
         * Creates a new MonthlyPlannerCustomerResponse instance using the specified properties.
         * @function create
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {customer.IMonthlyPlannerCustomerResponse=} [properties] Properties to set
         * @returns {customer.MonthlyPlannerCustomerResponse} MonthlyPlannerCustomerResponse instance
         */
        MonthlyPlannerCustomerResponse.create = function create(properties) {
            return new MonthlyPlannerCustomerResponse(properties);
        };

        /**
         * Encodes the specified MonthlyPlannerCustomerResponse message. Does not implicitly {@link customer.MonthlyPlannerCustomerResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {customer.IMonthlyPlannerCustomerResponse} message MonthlyPlannerCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monthlyPlannerCustomerList != null && message.monthlyPlannerCustomerList.length)
                for (let i = 0; i < message.monthlyPlannerCustomerList.length; ++i)
                    $root.customer.MonthlyPlannerCustomer.encode(message.monthlyPlannerCustomerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MonthlyPlannerCustomerResponse message, length delimited. Does not implicitly {@link customer.MonthlyPlannerCustomerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {customer.IMonthlyPlannerCustomerResponse} message MonthlyPlannerCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonthlyPlannerCustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonthlyPlannerCustomerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.MonthlyPlannerCustomerResponse} MonthlyPlannerCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.MonthlyPlannerCustomerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.monthlyPlannerCustomerList && message.monthlyPlannerCustomerList.length))
                        message.monthlyPlannerCustomerList = [];
                    message.monthlyPlannerCustomerList.push($root.customer.MonthlyPlannerCustomer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonthlyPlannerCustomerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.MonthlyPlannerCustomerResponse} MonthlyPlannerCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonthlyPlannerCustomerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MonthlyPlannerCustomerResponse message.
         * @function verify
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MonthlyPlannerCustomerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.monthlyPlannerCustomerList != null && message.hasOwnProperty("monthlyPlannerCustomerList")) {
                if (!Array.isArray(message.monthlyPlannerCustomerList))
                    return "monthlyPlannerCustomerList: array expected";
                for (let i = 0; i < message.monthlyPlannerCustomerList.length; ++i) {
                    let error = $root.customer.MonthlyPlannerCustomer.verify(message.monthlyPlannerCustomerList[i]);
                    if (error)
                        return "monthlyPlannerCustomerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MonthlyPlannerCustomerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.MonthlyPlannerCustomerResponse} MonthlyPlannerCustomerResponse
         */
        MonthlyPlannerCustomerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.MonthlyPlannerCustomerResponse)
                return object;
            let message = new $root.customer.MonthlyPlannerCustomerResponse();
            if (object.monthlyPlannerCustomerList) {
                if (!Array.isArray(object.monthlyPlannerCustomerList))
                    throw TypeError(".customer.MonthlyPlannerCustomerResponse.monthlyPlannerCustomerList: array expected");
                message.monthlyPlannerCustomerList = [];
                for (let i = 0; i < object.monthlyPlannerCustomerList.length; ++i) {
                    if (typeof object.monthlyPlannerCustomerList[i] !== "object")
                        throw TypeError(".customer.MonthlyPlannerCustomerResponse.monthlyPlannerCustomerList: object expected");
                    message.monthlyPlannerCustomerList[i] = $root.customer.MonthlyPlannerCustomer.fromObject(object.monthlyPlannerCustomerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MonthlyPlannerCustomerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @static
         * @param {customer.MonthlyPlannerCustomerResponse} message MonthlyPlannerCustomerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonthlyPlannerCustomerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monthlyPlannerCustomerList = [];
            if (message.monthlyPlannerCustomerList && message.monthlyPlannerCustomerList.length) {
                object.monthlyPlannerCustomerList = [];
                for (let j = 0; j < message.monthlyPlannerCustomerList.length; ++j)
                    object.monthlyPlannerCustomerList[j] = $root.customer.MonthlyPlannerCustomer.toObject(message.monthlyPlannerCustomerList[j], options);
            }
            return object;
        };

        /**
         * Converts this MonthlyPlannerCustomerResponse to JSON.
         * @function toJSON
         * @memberof customer.MonthlyPlannerCustomerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonthlyPlannerCustomerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonthlyPlannerCustomerResponse;
    })();

    customer.WeeklyCustomerShort = (function() {

        /**
         * Properties of a WeeklyCustomerShort.
         * @memberof customer
         * @interface IWeeklyCustomerShort
         * @property {string|null} [cid] WeeklyCustomerShort cid
         * @property {string|null} [name] WeeklyCustomerShort name
         * @property {number|null} [lat] WeeklyCustomerShort lat
         * @property {number|null} [lon] WeeklyCustomerShort lon
         * @property {string|null} [dow] WeeklyCustomerShort dow
         * @property {string|null} [lkFlg] WeeklyCustomerShort lkFlg
         * @property {string|null} [addr] WeeklyCustomerShort addr
         * @property {string|null} [srcDow] WeeklyCustomerShort srcDow
         * @property {number|Long|null} [unId] WeeklyCustomerShort unId
         * @property {number|null} [wkClstId] WeeklyCustomerShort wkClstId
         * @property {string|null} [srvcUnitNote1] WeeklyCustomerShort srvcUnitNote1
         * @property {number|Long|null} [loId] WeeklyCustomerShort loId
         * @property {string|null} [srvcUnitNotes2] WeeklyCustomerShort srvcUnitNotes2
         * @property {string|null} [materialType] WeeklyCustomerShort materialType
         * @property {string|null} [srvcUnitNotes3] WeeklyCustomerShort srvcUnitNotes3
         * @property {customer.IWeeklyCustomerOtherField|null} [weeklyCustomerOtherField] WeeklyCustomerShort weeklyCustomerOtherField
         * @property {string|null} [srvcRtTypCd] WeeklyCustomerShort srvcRtTypCd
         */

        /**
         * Constructs a new WeeklyCustomerShort.
         * @memberof customer
         * @classdesc Represents a WeeklyCustomerShort.
         * @implements IWeeklyCustomerShort
         * @constructor
         * @param {customer.IWeeklyCustomerShort=} [properties] Properties to set
         */
        function WeeklyCustomerShort(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyCustomerShort cid.
         * @member {string} cid
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.cid = "";

        /**
         * WeeklyCustomerShort name.
         * @member {string} name
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.name = "";

        /**
         * WeeklyCustomerShort lat.
         * @member {number} lat
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.lat = 0;

        /**
         * WeeklyCustomerShort lon.
         * @member {number} lon
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.lon = 0;

        /**
         * WeeklyCustomerShort dow.
         * @member {string} dow
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.dow = "";

        /**
         * WeeklyCustomerShort lkFlg.
         * @member {string} lkFlg
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.lkFlg = "";

        /**
         * WeeklyCustomerShort addr.
         * @member {string} addr
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.addr = "";

        /**
         * WeeklyCustomerShort srcDow.
         * @member {string} srcDow
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.srcDow = "";

        /**
         * WeeklyCustomerShort unId.
         * @member {number|Long} unId
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.unId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WeeklyCustomerShort wkClstId.
         * @member {number} wkClstId
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.wkClstId = 0;

        /**
         * WeeklyCustomerShort srvcUnitNote1.
         * @member {string} srvcUnitNote1
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.srvcUnitNote1 = "";

        /**
         * WeeklyCustomerShort loId.
         * @member {number|Long} loId
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WeeklyCustomerShort srvcUnitNotes2.
         * @member {string} srvcUnitNotes2
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.srvcUnitNotes2 = "";

        /**
         * WeeklyCustomerShort materialType.
         * @member {string} materialType
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.materialType = "";

        /**
         * WeeklyCustomerShort srvcUnitNotes3.
         * @member {string} srvcUnitNotes3
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.srvcUnitNotes3 = "";

        /**
         * WeeklyCustomerShort weeklyCustomerOtherField.
         * @member {customer.IWeeklyCustomerOtherField|null|undefined} weeklyCustomerOtherField
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.weeklyCustomerOtherField = null;

        /**
         * WeeklyCustomerShort srvcRtTypCd.
         * @member {string} srvcRtTypCd
         * @memberof customer.WeeklyCustomerShort
         * @instance
         */
        WeeklyCustomerShort.prototype.srvcRtTypCd = "";

        /**
         * Creates a new WeeklyCustomerShort instance using the specified properties.
         * @function create
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {customer.IWeeklyCustomerShort=} [properties] Properties to set
         * @returns {customer.WeeklyCustomerShort} WeeklyCustomerShort instance
         */
        WeeklyCustomerShort.create = function create(properties) {
            return new WeeklyCustomerShort(properties);
        };

        /**
         * Encodes the specified WeeklyCustomerShort message. Does not implicitly {@link customer.WeeklyCustomerShort.verify|verify} messages.
         * @function encode
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {customer.IWeeklyCustomerShort} message WeeklyCustomerShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerShort.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.lon);
            if (message.dow != null && Object.hasOwnProperty.call(message, "dow"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.dow);
            if (message.lkFlg != null && Object.hasOwnProperty.call(message, "lkFlg"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lkFlg);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.addr);
            if (message.srcDow != null && Object.hasOwnProperty.call(message, "srcDow"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.srcDow);
            if (message.unId != null && Object.hasOwnProperty.call(message, "unId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.unId);
            if (message.wkClstId != null && Object.hasOwnProperty.call(message, "wkClstId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.wkClstId);
            if (message.srvcUnitNote1 != null && Object.hasOwnProperty.call(message, "srvcUnitNote1"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.srvcUnitNote1);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.loId);
            if (message.weeklyCustomerOtherField != null && Object.hasOwnProperty.call(message, "weeklyCustomerOtherField"))
                $root.customer.WeeklyCustomerOtherField.encode(message.weeklyCustomerOtherField, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.srvcUnitNotes2 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes2"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.srvcUnitNotes2);
            if (message.materialType != null && Object.hasOwnProperty.call(message, "materialType"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.materialType);
            if (message.srvcUnitNotes3 != null && Object.hasOwnProperty.call(message, "srvcUnitNotes3"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.srvcUnitNotes3);
            if (message.srvcRtTypCd != null && Object.hasOwnProperty.call(message, "srvcRtTypCd"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.srvcRtTypCd);
            return writer;
        };

        /**
         * Encodes the specified WeeklyCustomerShort message, length delimited. Does not implicitly {@link customer.WeeklyCustomerShort.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {customer.IWeeklyCustomerShort} message WeeklyCustomerShort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerShort.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyCustomerShort message from the specified reader or buffer.
         * @function decode
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.WeeklyCustomerShort} WeeklyCustomerShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerShort.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.WeeklyCustomerShort();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.lat = reader.double();
                    break;
                case 4:
                    message.lon = reader.double();
                    break;
                case 5:
                    message.dow = reader.string();
                    break;
                case 6:
                    message.lkFlg = reader.string();
                    break;
                case 7:
                    message.addr = reader.string();
                    break;
                case 8:
                    message.srcDow = reader.string();
                    break;
                case 9:
                    message.unId = reader.int64();
                    break;
                case 10:
                    message.wkClstId = reader.int32();
                    break;
                case 11:
                    message.srvcUnitNote1 = reader.string();
                    break;
                case 12:
                    message.loId = reader.int64();
                    break;
                case 14:
                    message.srvcUnitNotes2 = reader.string();
                    break;
                case 15:
                    message.materialType = reader.string();
                    break;
                case 16:
                    message.srvcUnitNotes3 = reader.string();
                    break;
                case 13:
                    message.weeklyCustomerOtherField = $root.customer.WeeklyCustomerOtherField.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.srvcRtTypCd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeeklyCustomerShort message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.WeeklyCustomerShort} WeeklyCustomerShort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerShort.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyCustomerShort message.
         * @function verify
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyCustomerShort.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.dow != null && message.hasOwnProperty("dow"))
                if (!$util.isString(message.dow))
                    return "dow: string expected";
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                if (!$util.isString(message.lkFlg))
                    return "lkFlg: string expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.srcDow != null && message.hasOwnProperty("srcDow"))
                if (!$util.isString(message.srcDow))
                    return "srcDow: string expected";
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (!$util.isInteger(message.unId) && !(message.unId && $util.isInteger(message.unId.low) && $util.isInteger(message.unId.high)))
                    return "unId: integer|Long expected";
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                if (!$util.isInteger(message.wkClstId))
                    return "wkClstId: integer expected";
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                if (!$util.isString(message.srvcUnitNote1))
                    return "srvcUnitNote1: string expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                if (!$util.isString(message.srvcUnitNotes2))
                    return "srvcUnitNotes2: string expected";
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                if (!$util.isString(message.materialType))
                    return "materialType: string expected";
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                if (!$util.isString(message.srvcUnitNotes3))
                    return "srvcUnitNotes3: string expected";
            if (message.weeklyCustomerOtherField != null && message.hasOwnProperty("weeklyCustomerOtherField")) {
                let error = $root.customer.WeeklyCustomerOtherField.verify(message.weeklyCustomerOtherField);
                if (error)
                    return "weeklyCustomerOtherField." + error;
            }
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                if (!$util.isString(message.srvcRtTypCd))
                    return "srvcRtTypCd: string expected";
            return null;
        };

        /**
         * Creates a WeeklyCustomerShort message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.WeeklyCustomerShort} WeeklyCustomerShort
         */
        WeeklyCustomerShort.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.WeeklyCustomerShort)
                return object;
            let message = new $root.customer.WeeklyCustomerShort();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.dow != null)
                message.dow = String(object.dow);
            if (object.lkFlg != null)
                message.lkFlg = String(object.lkFlg);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.srcDow != null)
                message.srcDow = String(object.srcDow);
            if (object.unId != null)
                if ($util.Long)
                    (message.unId = $util.Long.fromValue(object.unId)).unsigned = false;
                else if (typeof object.unId === "string")
                    message.unId = parseInt(object.unId, 10);
                else if (typeof object.unId === "number")
                    message.unId = object.unId;
                else if (typeof object.unId === "object")
                    message.unId = new $util.LongBits(object.unId.low >>> 0, object.unId.high >>> 0).toNumber();
            if (object.wkClstId != null)
                message.wkClstId = object.wkClstId | 0;
            if (object.srvcUnitNote1 != null)
                message.srvcUnitNote1 = String(object.srvcUnitNote1);
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.srvcUnitNotes2 != null)
                message.srvcUnitNotes2 = String(object.srvcUnitNotes2);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.srvcUnitNotes3 != null)
                message.srvcUnitNotes3 = String(object.srvcUnitNotes3);
            if (object.weeklyCustomerOtherField != null) {
                if (typeof object.weeklyCustomerOtherField !== "object")
                    throw TypeError(".customer.WeeklyCustomerShort.weeklyCustomerOtherField: object expected");
                message.weeklyCustomerOtherField = $root.customer.WeeklyCustomerOtherField.fromObject(object.weeklyCustomerOtherField);
            }
            if (object.srvcRtTypCd != null)
                message.srvcRtTypCd = String(object.srvcRtTypCd);
            return message;
        };

        /**
         * Creates a plain object from a WeeklyCustomerShort message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.WeeklyCustomerShort
         * @static
         * @param {customer.WeeklyCustomerShort} message WeeklyCustomerShort
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyCustomerShort.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.lat = 0;
                object.lon = 0;
                object.dow = "";
                object.lkFlg = "";
                object.addr = "";
                object.srcDow = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unId = options.longs === String ? "0" : 0;
                object.wkClstId = 0;
                object.srvcUnitNote1 = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                object.weeklyCustomerOtherField = null;
                object.srvcUnitNotes2 = "";
                object.materialType = "";
                object.srvcUnitNotes3 = "";
                object.srvcRtTypCd = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.dow != null && message.hasOwnProperty("dow"))
                object.dow = message.dow;
            if (message.lkFlg != null && message.hasOwnProperty("lkFlg"))
                object.lkFlg = message.lkFlg;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.srcDow != null && message.hasOwnProperty("srcDow"))
                object.srcDow = message.srcDow;
            if (message.unId != null && message.hasOwnProperty("unId"))
                if (typeof message.unId === "number")
                    object.unId = options.longs === String ? String(message.unId) : message.unId;
                else
                    object.unId = options.longs === String ? $util.Long.prototype.toString.call(message.unId) : options.longs === Number ? new $util.LongBits(message.unId.low >>> 0, message.unId.high >>> 0).toNumber() : message.unId;
            if (message.wkClstId != null && message.hasOwnProperty("wkClstId"))
                object.wkClstId = message.wkClstId;
            if (message.srvcUnitNote1 != null && message.hasOwnProperty("srvcUnitNote1"))
                object.srvcUnitNote1 = message.srvcUnitNote1;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.weeklyCustomerOtherField != null && message.hasOwnProperty("weeklyCustomerOtherField"))
                object.weeklyCustomerOtherField = $root.customer.WeeklyCustomerOtherField.toObject(message.weeklyCustomerOtherField, options);
            if (message.srvcUnitNotes2 != null && message.hasOwnProperty("srvcUnitNotes2"))
                object.srvcUnitNotes2 = message.srvcUnitNotes2;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.srvcUnitNotes3 != null && message.hasOwnProperty("srvcUnitNotes3"))
                object.srvcUnitNotes3 = message.srvcUnitNotes3;
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd"))
                object.srvcRtTypCd = message.srvcRtTypCd;
            return object;
        };

        /**
         * Converts this WeeklyCustomerShort to JSON.
         * @function toJSON
         * @memberof customer.WeeklyCustomerShort
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyCustomerShort.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeeklyCustomerShort;
    })();

    customer.WeeklyCustomerOtherField = (function() {

        /**
         * Properties of a WeeklyCustomerOtherField.
         * @memberof customer
         * @interface IWeeklyCustomerOtherField
         * @property {string|null} [rtNo] WeeklyCustomerOtherField rtNo
         * @property {number|null} [srvcUnitQty] WeeklyCustomerOtherField srvcUnitQty
         * @property {number|null} [srvcUnitVolVal] WeeklyCustomerOtherField srvcUnitVolVal
         */

        /**
         * Constructs a new WeeklyCustomerOtherField.
         * @memberof customer
         * @classdesc Represents a WeeklyCustomerOtherField.
         * @implements IWeeklyCustomerOtherField
         * @constructor
         * @param {customer.IWeeklyCustomerOtherField=} [properties] Properties to set
         */
        function WeeklyCustomerOtherField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyCustomerOtherField rtNo.
         * @member {string} rtNo
         * @memberof customer.WeeklyCustomerOtherField
         * @instance
         */
        WeeklyCustomerOtherField.prototype.rtNo = "";

        /**
         * WeeklyCustomerOtherField srvcUnitQty.
         * @member {number} srvcUnitQty
         * @memberof customer.WeeklyCustomerOtherField
         * @instance
         */
        WeeklyCustomerOtherField.prototype.srvcUnitQty = 0;

        /**
         * WeeklyCustomerOtherField srvcUnitVolVal.
         * @member {number} srvcUnitVolVal
         * @memberof customer.WeeklyCustomerOtherField
         * @instance
         */
        WeeklyCustomerOtherField.prototype.srvcUnitVolVal = 0;

        /**
         * Creates a new WeeklyCustomerOtherField instance using the specified properties.
         * @function create
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {customer.IWeeklyCustomerOtherField=} [properties] Properties to set
         * @returns {customer.WeeklyCustomerOtherField} WeeklyCustomerOtherField instance
         */
        WeeklyCustomerOtherField.create = function create(properties) {
            return new WeeklyCustomerOtherField(properties);
        };

        /**
         * Encodes the specified WeeklyCustomerOtherField message. Does not implicitly {@link customer.WeeklyCustomerOtherField.verify|verify} messages.
         * @function encode
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {customer.IWeeklyCustomerOtherField} message WeeklyCustomerOtherField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerOtherField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rtNo != null && Object.hasOwnProperty.call(message, "rtNo"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rtNo);
            if (message.srvcUnitQty != null && Object.hasOwnProperty.call(message, "srvcUnitQty"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.srvcUnitQty);
            if (message.srvcUnitVolVal != null && Object.hasOwnProperty.call(message, "srvcUnitVolVal"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.srvcUnitVolVal);
            return writer;
        };

        /**
         * Encodes the specified WeeklyCustomerOtherField message, length delimited. Does not implicitly {@link customer.WeeklyCustomerOtherField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {customer.IWeeklyCustomerOtherField} message WeeklyCustomerOtherField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerOtherField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyCustomerOtherField message from the specified reader or buffer.
         * @function decode
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.WeeklyCustomerOtherField} WeeklyCustomerOtherField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerOtherField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.WeeklyCustomerOtherField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rtNo = reader.string();
                    break;
                case 8:
                    message.srvcUnitQty = reader.double();
                    break;
                case 9:
                    message.srvcUnitVolVal = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeeklyCustomerOtherField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.WeeklyCustomerOtherField} WeeklyCustomerOtherField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerOtherField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyCustomerOtherField message.
         * @function verify
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyCustomerOtherField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rtNo != null && message.hasOwnProperty("rtNo"))
                if (!$util.isString(message.rtNo))
                    return "rtNo: string expected";
            if (message.srvcUnitQty != null && message.hasOwnProperty("srvcUnitQty"))
                if (typeof message.srvcUnitQty !== "number")
                    return "srvcUnitQty: number expected";
            if (message.srvcUnitVolVal != null && message.hasOwnProperty("srvcUnitVolVal"))
                if (typeof message.srvcUnitVolVal !== "number")
                    return "srvcUnitVolVal: number expected";
            return null;
        };

        /**
         * Creates a WeeklyCustomerOtherField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.WeeklyCustomerOtherField} WeeklyCustomerOtherField
         */
        WeeklyCustomerOtherField.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.WeeklyCustomerOtherField)
                return object;
            let message = new $root.customer.WeeklyCustomerOtherField();
            if (object.rtNo != null)
                message.rtNo = String(object.rtNo);
            if (object.srvcUnitQty != null)
                message.srvcUnitQty = Number(object.srvcUnitQty);
            if (object.srvcUnitVolVal != null)
                message.srvcUnitVolVal = Number(object.srvcUnitVolVal);
            return message;
        };

        /**
         * Creates a plain object from a WeeklyCustomerOtherField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.WeeklyCustomerOtherField
         * @static
         * @param {customer.WeeklyCustomerOtherField} message WeeklyCustomerOtherField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyCustomerOtherField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.rtNo = "";
                object.srvcUnitQty = 0;
                object.srvcUnitVolVal = 0;
            }
            if (message.rtNo != null && message.hasOwnProperty("rtNo"))
                object.rtNo = message.rtNo;
            if (message.srvcUnitQty != null && message.hasOwnProperty("srvcUnitQty"))
                object.srvcUnitQty = options.json && !isFinite(message.srvcUnitQty) ? String(message.srvcUnitQty) : message.srvcUnitQty;
            if (message.srvcUnitVolVal != null && message.hasOwnProperty("srvcUnitVolVal"))
                object.srvcUnitVolVal = options.json && !isFinite(message.srvcUnitVolVal) ? String(message.srvcUnitVolVal) : message.srvcUnitVolVal;
            return object;
        };

        /**
         * Converts this WeeklyCustomerOtherField to JSON.
         * @function toJSON
         * @memberof customer.WeeklyCustomerOtherField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyCustomerOtherField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeeklyCustomerOtherField;
    })();

    customer.WeeklyCustomerShortResponse = (function() {

        /**
         * Properties of a WeeklyCustomerShortResponse.
         * @memberof customer
         * @interface IWeeklyCustomerShortResponse
         * @property {Array.<customer.IWeeklyCustomerShort>|null} [weeklyCustomerList] WeeklyCustomerShortResponse weeklyCustomerList
         * @property {boolean|null} [shortRes] WeeklyCustomerShortResponse shortRes
         */

        /**
         * Constructs a new WeeklyCustomerShortResponse.
         * @memberof customer
         * @classdesc Represents a WeeklyCustomerShortResponse.
         * @implements IWeeklyCustomerShortResponse
         * @constructor
         * @param {customer.IWeeklyCustomerShortResponse=} [properties] Properties to set
         */
        function WeeklyCustomerShortResponse(properties) {
            this.weeklyCustomerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyCustomerShortResponse weeklyCustomerList.
         * @member {Array.<customer.IWeeklyCustomerShort>} weeklyCustomerList
         * @memberof customer.WeeklyCustomerShortResponse
         * @instance
         */
        WeeklyCustomerShortResponse.prototype.weeklyCustomerList = $util.emptyArray;

        /**
         * WeeklyCustomerShortResponse shortRes.
         * @member {boolean} shortRes
         * @memberof customer.WeeklyCustomerShortResponse
         * @instance
         */
        WeeklyCustomerShortResponse.prototype.shortRes = false;

        /**
         * Creates a new WeeklyCustomerShortResponse instance using the specified properties.
         * @function create
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {customer.IWeeklyCustomerShortResponse=} [properties] Properties to set
         * @returns {customer.WeeklyCustomerShortResponse} WeeklyCustomerShortResponse instance
         */
        WeeklyCustomerShortResponse.create = function create(properties) {
            return new WeeklyCustomerShortResponse(properties);
        };

        /**
         * Encodes the specified WeeklyCustomerShortResponse message. Does not implicitly {@link customer.WeeklyCustomerShortResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {customer.IWeeklyCustomerShortResponse} message WeeklyCustomerShortResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerShortResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weeklyCustomerList != null && message.weeklyCustomerList.length)
                for (let i = 0; i < message.weeklyCustomerList.length; ++i)
                    $root.customer.WeeklyCustomerShort.encode(message.weeklyCustomerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.shortRes != null && Object.hasOwnProperty.call(message, "shortRes"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.shortRes);
            return writer;
        };

        /**
         * Encodes the specified WeeklyCustomerShortResponse message, length delimited. Does not implicitly {@link customer.WeeklyCustomerShortResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {customer.IWeeklyCustomerShortResponse} message WeeklyCustomerShortResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyCustomerShortResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyCustomerShortResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.WeeklyCustomerShortResponse} WeeklyCustomerShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerShortResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.WeeklyCustomerShortResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.weeklyCustomerList && message.weeklyCustomerList.length))
                        message.weeklyCustomerList = [];
                    message.weeklyCustomerList.push($root.customer.WeeklyCustomerShort.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.shortRes = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeeklyCustomerShortResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.WeeklyCustomerShortResponse} WeeklyCustomerShortResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyCustomerShortResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyCustomerShortResponse message.
         * @function verify
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyCustomerShortResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weeklyCustomerList != null && message.hasOwnProperty("weeklyCustomerList")) {
                if (!Array.isArray(message.weeklyCustomerList))
                    return "weeklyCustomerList: array expected";
                for (let i = 0; i < message.weeklyCustomerList.length; ++i) {
                    let error = $root.customer.WeeklyCustomerShort.verify(message.weeklyCustomerList[i]);
                    if (error)
                        return "weeklyCustomerList." + error;
                }
            }
            if (message.shortRes != null && message.hasOwnProperty("shortRes"))
                if (typeof message.shortRes !== "boolean")
                    return "shortRes: boolean expected";
            return null;
        };

        /**
         * Creates a WeeklyCustomerShortResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.WeeklyCustomerShortResponse} WeeklyCustomerShortResponse
         */
        WeeklyCustomerShortResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.WeeklyCustomerShortResponse)
                return object;
            let message = new $root.customer.WeeklyCustomerShortResponse();
            if (object.weeklyCustomerList) {
                if (!Array.isArray(object.weeklyCustomerList))
                    throw TypeError(".customer.WeeklyCustomerShortResponse.weeklyCustomerList: array expected");
                message.weeklyCustomerList = [];
                for (let i = 0; i < object.weeklyCustomerList.length; ++i) {
                    if (typeof object.weeklyCustomerList[i] !== "object")
                        throw TypeError(".customer.WeeklyCustomerShortResponse.weeklyCustomerList: object expected");
                    message.weeklyCustomerList[i] = $root.customer.WeeklyCustomerShort.fromObject(object.weeklyCustomerList[i]);
                }
            }
            if (object.shortRes != null)
                message.shortRes = Boolean(object.shortRes);
            return message;
        };

        /**
         * Creates a plain object from a WeeklyCustomerShortResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.WeeklyCustomerShortResponse
         * @static
         * @param {customer.WeeklyCustomerShortResponse} message WeeklyCustomerShortResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyCustomerShortResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.weeklyCustomerList = [];
            if (options.defaults)
                object.shortRes = false;
            if (message.weeklyCustomerList && message.weeklyCustomerList.length) {
                object.weeklyCustomerList = [];
                for (let j = 0; j < message.weeklyCustomerList.length; ++j)
                    object.weeklyCustomerList[j] = $root.customer.WeeklyCustomerShort.toObject(message.weeklyCustomerList[j], options);
            }
            if (message.shortRes != null && message.hasOwnProperty("shortRes"))
                object.shortRes = message.shortRes;
            return object;
        };

        /**
         * Converts this WeeklyCustomerShortResponse to JSON.
         * @function toJSON
         * @memberof customer.WeeklyCustomerShortResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyCustomerShortResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WeeklyCustomerShortResponse;
    })();

    customer.UngeocodedCustomerRequest = (function() {

        /**
         * Properties of an UngeocodedCustomerRequest.
         * @memberof customer
         * @interface IUngeocodedCustomerRequest
         * @property {number|Long|null} [acctId] UngeocodedCustomerRequest acctId
         * @property {string|null} [opsUnitCd] UngeocodedCustomerRequest opsUnitCd
         * @property {Array.<string>|null} [srvcRtTypCd] UngeocodedCustomerRequest srvcRtTypCd
         * @property {string|null} [userNm] UngeocodedCustomerRequest userNm
         * @property {string|null} [lobCd] UngeocodedCustomerRequest lobCd
         */

        /**
         * Constructs a new UngeocodedCustomerRequest.
         * @memberof customer
         * @classdesc Represents an UngeocodedCustomerRequest.
         * @implements IUngeocodedCustomerRequest
         * @constructor
         * @param {customer.IUngeocodedCustomerRequest=} [properties] Properties to set
         */
        function UngeocodedCustomerRequest(properties) {
            this.srvcRtTypCd = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UngeocodedCustomerRequest acctId.
         * @member {number|Long} acctId
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         */
        UngeocodedCustomerRequest.prototype.acctId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UngeocodedCustomerRequest opsUnitCd.
         * @member {string} opsUnitCd
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         */
        UngeocodedCustomerRequest.prototype.opsUnitCd = "";

        /**
         * UngeocodedCustomerRequest srvcRtTypCd.
         * @member {Array.<string>} srvcRtTypCd
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         */
        UngeocodedCustomerRequest.prototype.srvcRtTypCd = $util.emptyArray;

        /**
         * UngeocodedCustomerRequest userNm.
         * @member {string} userNm
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         */
        UngeocodedCustomerRequest.prototype.userNm = "";

        /**
         * UngeocodedCustomerRequest lobCd.
         * @member {string} lobCd
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         */
        UngeocodedCustomerRequest.prototype.lobCd = "";

        /**
         * Creates a new UngeocodedCustomerRequest instance using the specified properties.
         * @function create
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {customer.IUngeocodedCustomerRequest=} [properties] Properties to set
         * @returns {customer.UngeocodedCustomerRequest} UngeocodedCustomerRequest instance
         */
        UngeocodedCustomerRequest.create = function create(properties) {
            return new UngeocodedCustomerRequest(properties);
        };

        /**
         * Encodes the specified UngeocodedCustomerRequest message. Does not implicitly {@link customer.UngeocodedCustomerRequest.verify|verify} messages.
         * @function encode
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {customer.IUngeocodedCustomerRequest} message UngeocodedCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.acctId);
            if (message.opsUnitCd != null && Object.hasOwnProperty.call(message, "opsUnitCd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.opsUnitCd);
            if (message.srvcRtTypCd != null && message.srvcRtTypCd.length)
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.srvcRtTypCd[i]);
            if (message.userNm != null && Object.hasOwnProperty.call(message, "userNm"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userNm);
            if (message.lobCd != null && Object.hasOwnProperty.call(message, "lobCd"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lobCd);
            return writer;
        };

        /**
         * Encodes the specified UngeocodedCustomerRequest message, length delimited. Does not implicitly {@link customer.UngeocodedCustomerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {customer.IUngeocodedCustomerRequest} message UngeocodedCustomerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UngeocodedCustomerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.UngeocodedCustomerRequest} UngeocodedCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.UngeocodedCustomerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.acctId = reader.int64();
                    break;
                case 2:
                    message.opsUnitCd = reader.string();
                    break;
                case 3:
                    if (!(message.srvcRtTypCd && message.srvcRtTypCd.length))
                        message.srvcRtTypCd = [];
                    message.srvcRtTypCd.push(reader.string());
                    break;
                case 4:
                    message.userNm = reader.string();
                    break;
                case 5:
                    message.lobCd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UngeocodedCustomerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.UngeocodedCustomerRequest} UngeocodedCustomerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UngeocodedCustomerRequest message.
         * @function verify
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UngeocodedCustomerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (!$util.isInteger(message.acctId) && !(message.acctId && $util.isInteger(message.acctId.low) && $util.isInteger(message.acctId.high)))
                    return "acctId: integer|Long expected";
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                if (!$util.isString(message.opsUnitCd))
                    return "opsUnitCd: string expected";
            if (message.srvcRtTypCd != null && message.hasOwnProperty("srvcRtTypCd")) {
                if (!Array.isArray(message.srvcRtTypCd))
                    return "srvcRtTypCd: array expected";
                for (let i = 0; i < message.srvcRtTypCd.length; ++i)
                    if (!$util.isString(message.srvcRtTypCd[i]))
                        return "srvcRtTypCd: string[] expected";
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                if (!$util.isString(message.userNm))
                    return "userNm: string expected";
            if (message.lobCd != null && message.hasOwnProperty("lobCd"))
                if (!$util.isString(message.lobCd))
                    return "lobCd: string expected";
            return null;
        };

        /**
         * Creates an UngeocodedCustomerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.UngeocodedCustomerRequest} UngeocodedCustomerRequest
         */
        UngeocodedCustomerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.UngeocodedCustomerRequest)
                return object;
            let message = new $root.customer.UngeocodedCustomerRequest();
            if (object.acctId != null)
                if ($util.Long)
                    (message.acctId = $util.Long.fromValue(object.acctId)).unsigned = false;
                else if (typeof object.acctId === "string")
                    message.acctId = parseInt(object.acctId, 10);
                else if (typeof object.acctId === "number")
                    message.acctId = object.acctId;
                else if (typeof object.acctId === "object")
                    message.acctId = new $util.LongBits(object.acctId.low >>> 0, object.acctId.high >>> 0).toNumber();
            if (object.opsUnitCd != null)
                message.opsUnitCd = String(object.opsUnitCd);
            if (object.srvcRtTypCd) {
                if (!Array.isArray(object.srvcRtTypCd))
                    throw TypeError(".customer.UngeocodedCustomerRequest.srvcRtTypCd: array expected");
                message.srvcRtTypCd = [];
                for (let i = 0; i < object.srvcRtTypCd.length; ++i)
                    message.srvcRtTypCd[i] = String(object.srvcRtTypCd[i]);
            }
            if (object.userNm != null)
                message.userNm = String(object.userNm);
            if (object.lobCd != null)
                message.lobCd = String(object.lobCd);
            return message;
        };

        /**
         * Creates a plain object from an UngeocodedCustomerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.UngeocodedCustomerRequest
         * @static
         * @param {customer.UngeocodedCustomerRequest} message UngeocodedCustomerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UngeocodedCustomerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.srvcRtTypCd = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.acctId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.acctId = options.longs === String ? "0" : 0;
                object.opsUnitCd = "";
                object.userNm = "";
                object.lobCd = "";
            }
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (typeof message.acctId === "number")
                    object.acctId = options.longs === String ? String(message.acctId) : message.acctId;
                else
                    object.acctId = options.longs === String ? $util.Long.prototype.toString.call(message.acctId) : options.longs === Number ? new $util.LongBits(message.acctId.low >>> 0, message.acctId.high >>> 0).toNumber() : message.acctId;
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                object.opsUnitCd = message.opsUnitCd;
            if (message.srvcRtTypCd && message.srvcRtTypCd.length) {
                object.srvcRtTypCd = [];
                for (let j = 0; j < message.srvcRtTypCd.length; ++j)
                    object.srvcRtTypCd[j] = message.srvcRtTypCd[j];
            }
            if (message.userNm != null && message.hasOwnProperty("userNm"))
                object.userNm = message.userNm;
            if (message.lobCd != null && message.hasOwnProperty("lobCd"))
                object.lobCd = message.lobCd;
            return object;
        };

        /**
         * Converts this UngeocodedCustomerRequest to JSON.
         * @function toJSON
         * @memberof customer.UngeocodedCustomerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UngeocodedCustomerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UngeocodedCustomerRequest;
    })();

    customer.UngeocodedCustomer = (function() {

        /**
         * Properties of an UngeocodedCustomer.
         * @memberof customer
         * @interface IUngeocodedCustomer
         * @property {string|null} [cid] UngeocodedCustomer cid
         * @property {string|null} [name] UngeocodedCustomer name
         * @property {string|null} [addr] UngeocodedCustomer addr
         * @property {string|null} [cty] UngeocodedCustomer cty
         * @property {string|null} [state] UngeocodedCustomer state
         * @property {string|null} [zip] UngeocodedCustomer zip
         * @property {string|null} [cntry] UngeocodedCustomer cntry
         * @property {number|null} [lat] UngeocodedCustomer lat
         * @property {number|null} [lon] UngeocodedCustomer lon
         * @property {string|null} [sos] UngeocodedCustomer sos
         * @property {string|null} [edId] UngeocodedCustomer edId
         * @property {number|Long|null} [loId] UngeocodedCustomer loId
         * @property {string|null} [geoSt] UngeocodedCustomer geoSt
         * @property {number|Long|null} [srvcUnitId] UngeocodedCustomer srvcUnitId
         * @property {string|null} [srvcGeocodeSrc] UngeocodedCustomer srvcGeocodeSrc
         * @property {string|null} [srvcGeocodeSrcDesc] UngeocodedCustomer srvcGeocodeSrcDesc
         * @property {string|null} [srvcGeocodeConf] UngeocodedCustomer srvcGeocodeConf
         */

        /**
         * Constructs a new UngeocodedCustomer.
         * @memberof customer
         * @classdesc Represents an UngeocodedCustomer.
         * @implements IUngeocodedCustomer
         * @constructor
         * @param {customer.IUngeocodedCustomer=} [properties] Properties to set
         */
        function UngeocodedCustomer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UngeocodedCustomer cid.
         * @member {string} cid
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.cid = "";

        /**
         * UngeocodedCustomer name.
         * @member {string} name
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.name = "";

        /**
         * UngeocodedCustomer addr.
         * @member {string} addr
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.addr = "";

        /**
         * UngeocodedCustomer cty.
         * @member {string} cty
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.cty = "";

        /**
         * UngeocodedCustomer state.
         * @member {string} state
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.state = "";

        /**
         * UngeocodedCustomer zip.
         * @member {string} zip
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.zip = "";

        /**
         * UngeocodedCustomer cntry.
         * @member {string} cntry
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.cntry = "";

        /**
         * UngeocodedCustomer lat.
         * @member {number} lat
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.lat = 0;

        /**
         * UngeocodedCustomer lon.
         * @member {number} lon
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.lon = 0;

        /**
         * UngeocodedCustomer sos.
         * @member {string} sos
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.sos = "";

        /**
         * UngeocodedCustomer edId.
         * @member {string} edId
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.edId = "";

        /**
         * UngeocodedCustomer loId.
         * @member {number|Long} loId
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.loId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UngeocodedCustomer geoSt.
         * @member {string} geoSt
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.geoSt = "";

        /**
         * UngeocodedCustomer srvcUnitId.
         * @member {number|Long} srvcUnitId
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.srvcUnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UngeocodedCustomer srvcGeocodeSrc.
         * @member {string} srvcGeocodeSrc
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.srvcGeocodeSrc = "";

        /**
         * UngeocodedCustomer srvcGeocodeSrcDesc.
         * @member {string} srvcGeocodeSrcDesc
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.srvcGeocodeSrcDesc = "";

        /**
         * UngeocodedCustomer srvcGeocodeConf.
         * @member {string} srvcGeocodeConf
         * @memberof customer.UngeocodedCustomer
         * @instance
         */
        UngeocodedCustomer.prototype.srvcGeocodeConf = "";

        /**
         * Creates a new UngeocodedCustomer instance using the specified properties.
         * @function create
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {customer.IUngeocodedCustomer=} [properties] Properties to set
         * @returns {customer.UngeocodedCustomer} UngeocodedCustomer instance
         */
        UngeocodedCustomer.create = function create(properties) {
            return new UngeocodedCustomer(properties);
        };

        /**
         * Encodes the specified UngeocodedCustomer message. Does not implicitly {@link customer.UngeocodedCustomer.verify|verify} messages.
         * @function encode
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {customer.IUngeocodedCustomer} message UngeocodedCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.addr);
            if (message.cty != null && Object.hasOwnProperty.call(message, "cty"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cty);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.state);
            if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.zip);
            if (message.cntry != null && Object.hasOwnProperty.call(message, "cntry"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.cntry);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.lon);
            if (message.sos != null && Object.hasOwnProperty.call(message, "sos"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.sos);
            if (message.edId != null && Object.hasOwnProperty.call(message, "edId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.edId);
            if (message.loId != null && Object.hasOwnProperty.call(message, "loId"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.loId);
            if (message.geoSt != null && Object.hasOwnProperty.call(message, "geoSt"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.geoSt);
            if (message.srvcUnitId != null && Object.hasOwnProperty.call(message, "srvcUnitId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.srvcUnitId);
            if (message.srvcGeocodeSrc != null && Object.hasOwnProperty.call(message, "srvcGeocodeSrc"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.srvcGeocodeSrc);
            if (message.srvcGeocodeSrcDesc != null && Object.hasOwnProperty.call(message, "srvcGeocodeSrcDesc"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.srvcGeocodeSrcDesc);
            if (message.srvcGeocodeConf != null && Object.hasOwnProperty.call(message, "srvcGeocodeConf"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.srvcGeocodeConf);
            return writer;
        };

        /**
         * Encodes the specified UngeocodedCustomer message, length delimited. Does not implicitly {@link customer.UngeocodedCustomer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {customer.IUngeocodedCustomer} message UngeocodedCustomer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UngeocodedCustomer message from the specified reader or buffer.
         * @function decode
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.UngeocodedCustomer} UngeocodedCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.UngeocodedCustomer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.addr = reader.string();
                    break;
                case 4:
                    message.cty = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
                    message.zip = reader.string();
                    break;
                case 7:
                    message.cntry = reader.string();
                    break;
                case 8:
                    message.lat = reader.double();
                    break;
                case 9:
                    message.lon = reader.double();
                    break;
                case 10:
                    message.sos = reader.string();
                    break;
                case 11:
                    message.edId = reader.string();
                    break;
                case 12:
                    message.loId = reader.int64();
                    break;
                case 13:
                    message.geoSt = reader.string();
                    break;
                case 14:
                    message.srvcUnitId = reader.int64();
                    break;
                case 15:
                    message.srvcGeocodeSrc = reader.string();
                    break;
                case 16:
                    message.srvcGeocodeSrcDesc = reader.string();
                    break;
                case 17:
                    message.srvcGeocodeConf = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UngeocodedCustomer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.UngeocodedCustomer} UngeocodedCustomer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UngeocodedCustomer message.
         * @function verify
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UngeocodedCustomer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isString(message.cid))
                    return "cid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.cty != null && message.hasOwnProperty("cty"))
                if (!$util.isString(message.cty))
                    return "cty: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.zip != null && message.hasOwnProperty("zip"))
                if (!$util.isString(message.zip))
                    return "zip: string expected";
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                if (!$util.isString(message.cntry))
                    return "cntry: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.sos != null && message.hasOwnProperty("sos"))
                if (!$util.isString(message.sos))
                    return "sos: string expected";
            if (message.edId != null && message.hasOwnProperty("edId"))
                if (!$util.isString(message.edId))
                    return "edId: string expected";
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (!$util.isInteger(message.loId) && !(message.loId && $util.isInteger(message.loId.low) && $util.isInteger(message.loId.high)))
                    return "loId: integer|Long expected";
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                if (!$util.isString(message.geoSt))
                    return "geoSt: string expected";
            if (message.srvcUnitId != null && message.hasOwnProperty("srvcUnitId"))
                if (!$util.isInteger(message.srvcUnitId) && !(message.srvcUnitId && $util.isInteger(message.srvcUnitId.low) && $util.isInteger(message.srvcUnitId.high)))
                    return "srvcUnitId: integer|Long expected";
            if (message.srvcGeocodeSrc != null && message.hasOwnProperty("srvcGeocodeSrc"))
                if (!$util.isString(message.srvcGeocodeSrc))
                    return "srvcGeocodeSrc: string expected";
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                if (!$util.isString(message.srvcGeocodeSrcDesc))
                    return "srvcGeocodeSrcDesc: string expected";
            if (message.srvcGeocodeConf != null && message.hasOwnProperty("srvcGeocodeConf"))
                if (!$util.isString(message.srvcGeocodeConf))
                    return "srvcGeocodeConf: string expected";
            return null;
        };

        /**
         * Creates an UngeocodedCustomer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.UngeocodedCustomer} UngeocodedCustomer
         */
        UngeocodedCustomer.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.UngeocodedCustomer)
                return object;
            let message = new $root.customer.UngeocodedCustomer();
            if (object.cid != null)
                message.cid = String(object.cid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.cty != null)
                message.cty = String(object.cty);
            if (object.state != null)
                message.state = String(object.state);
            if (object.zip != null)
                message.zip = String(object.zip);
            if (object.cntry != null)
                message.cntry = String(object.cntry);
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.sos != null)
                message.sos = String(object.sos);
            if (object.edId != null)
                message.edId = String(object.edId);
            if (object.loId != null)
                if ($util.Long)
                    (message.loId = $util.Long.fromValue(object.loId)).unsigned = false;
                else if (typeof object.loId === "string")
                    message.loId = parseInt(object.loId, 10);
                else if (typeof object.loId === "number")
                    message.loId = object.loId;
                else if (typeof object.loId === "object")
                    message.loId = new $util.LongBits(object.loId.low >>> 0, object.loId.high >>> 0).toNumber();
            if (object.geoSt != null)
                message.geoSt = String(object.geoSt);
            if (object.srvcUnitId != null)
                if ($util.Long)
                    (message.srvcUnitId = $util.Long.fromValue(object.srvcUnitId)).unsigned = false;
                else if (typeof object.srvcUnitId === "string")
                    message.srvcUnitId = parseInt(object.srvcUnitId, 10);
                else if (typeof object.srvcUnitId === "number")
                    message.srvcUnitId = object.srvcUnitId;
                else if (typeof object.srvcUnitId === "object")
                    message.srvcUnitId = new $util.LongBits(object.srvcUnitId.low >>> 0, object.srvcUnitId.high >>> 0).toNumber();
            if (object.srvcGeocodeSrc != null)
                message.srvcGeocodeSrc = String(object.srvcGeocodeSrc);
            if (object.srvcGeocodeSrcDesc != null)
                message.srvcGeocodeSrcDesc = String(object.srvcGeocodeSrcDesc);
            if (object.srvcGeocodeConf != null)
                message.srvcGeocodeConf = String(object.srvcGeocodeConf);
            return message;
        };

        /**
         * Creates a plain object from an UngeocodedCustomer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.UngeocodedCustomer
         * @static
         * @param {customer.UngeocodedCustomer} message UngeocodedCustomer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UngeocodedCustomer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.cid = "";
                object.name = "";
                object.addr = "";
                object.cty = "";
                object.state = "";
                object.zip = "";
                object.cntry = "";
                object.lat = 0;
                object.lon = 0;
                object.sos = "";
                object.edId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.loId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loId = options.longs === String ? "0" : 0;
                object.geoSt = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.srvcUnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.srvcUnitId = options.longs === String ? "0" : 0;
                object.srvcGeocodeSrc = "";
                object.srvcGeocodeSrcDesc = "";
                object.srvcGeocodeConf = "";
            }
            if (message.cid != null && message.hasOwnProperty("cid"))
                object.cid = message.cid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.cty != null && message.hasOwnProperty("cty"))
                object.cty = message.cty;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.zip != null && message.hasOwnProperty("zip"))
                object.zip = message.zip;
            if (message.cntry != null && message.hasOwnProperty("cntry"))
                object.cntry = message.cntry;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            if (message.sos != null && message.hasOwnProperty("sos"))
                object.sos = message.sos;
            if (message.edId != null && message.hasOwnProperty("edId"))
                object.edId = message.edId;
            if (message.loId != null && message.hasOwnProperty("loId"))
                if (typeof message.loId === "number")
                    object.loId = options.longs === String ? String(message.loId) : message.loId;
                else
                    object.loId = options.longs === String ? $util.Long.prototype.toString.call(message.loId) : options.longs === Number ? new $util.LongBits(message.loId.low >>> 0, message.loId.high >>> 0).toNumber() : message.loId;
            if (message.geoSt != null && message.hasOwnProperty("geoSt"))
                object.geoSt = message.geoSt;
            if (message.srvcUnitId != null && message.hasOwnProperty("srvcUnitId"))
                if (typeof message.srvcUnitId === "number")
                    object.srvcUnitId = options.longs === String ? String(message.srvcUnitId) : message.srvcUnitId;
                else
                    object.srvcUnitId = options.longs === String ? $util.Long.prototype.toString.call(message.srvcUnitId) : options.longs === Number ? new $util.LongBits(message.srvcUnitId.low >>> 0, message.srvcUnitId.high >>> 0).toNumber() : message.srvcUnitId;
            if (message.srvcGeocodeSrc != null && message.hasOwnProperty("srvcGeocodeSrc"))
                object.srvcGeocodeSrc = message.srvcGeocodeSrc;
            if (message.srvcGeocodeSrcDesc != null && message.hasOwnProperty("srvcGeocodeSrcDesc"))
                object.srvcGeocodeSrcDesc = message.srvcGeocodeSrcDesc;
            if (message.srvcGeocodeConf != null && message.hasOwnProperty("srvcGeocodeConf"))
                object.srvcGeocodeConf = message.srvcGeocodeConf;
            return object;
        };

        /**
         * Converts this UngeocodedCustomer to JSON.
         * @function toJSON
         * @memberof customer.UngeocodedCustomer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UngeocodedCustomer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UngeocodedCustomer;
    })();

    customer.UngeocodedCustomerResponse = (function() {

        /**
         * Properties of an UngeocodedCustomerResponse.
         * @memberof customer
         * @interface IUngeocodedCustomerResponse
         * @property {Array.<customer.IUngeocodedCustomer>|null} [ungeocodedCustomerList] UngeocodedCustomerResponse ungeocodedCustomerList
         */

        /**
         * Constructs a new UngeocodedCustomerResponse.
         * @memberof customer
         * @classdesc Represents an UngeocodedCustomerResponse.
         * @implements IUngeocodedCustomerResponse
         * @constructor
         * @param {customer.IUngeocodedCustomerResponse=} [properties] Properties to set
         */
        function UngeocodedCustomerResponse(properties) {
            this.ungeocodedCustomerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UngeocodedCustomerResponse ungeocodedCustomerList.
         * @member {Array.<customer.IUngeocodedCustomer>} ungeocodedCustomerList
         * @memberof customer.UngeocodedCustomerResponse
         * @instance
         */
        UngeocodedCustomerResponse.prototype.ungeocodedCustomerList = $util.emptyArray;

        /**
         * Creates a new UngeocodedCustomerResponse instance using the specified properties.
         * @function create
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {customer.IUngeocodedCustomerResponse=} [properties] Properties to set
         * @returns {customer.UngeocodedCustomerResponse} UngeocodedCustomerResponse instance
         */
        UngeocodedCustomerResponse.create = function create(properties) {
            return new UngeocodedCustomerResponse(properties);
        };

        /**
         * Encodes the specified UngeocodedCustomerResponse message. Does not implicitly {@link customer.UngeocodedCustomerResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {customer.IUngeocodedCustomerResponse} message UngeocodedCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ungeocodedCustomerList != null && message.ungeocodedCustomerList.length)
                for (let i = 0; i < message.ungeocodedCustomerList.length; ++i)
                    $root.customer.UngeocodedCustomer.encode(message.ungeocodedCustomerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UngeocodedCustomerResponse message, length delimited. Does not implicitly {@link customer.UngeocodedCustomerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {customer.IUngeocodedCustomerResponse} message UngeocodedCustomerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UngeocodedCustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UngeocodedCustomerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.UngeocodedCustomerResponse} UngeocodedCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.UngeocodedCustomerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ungeocodedCustomerList && message.ungeocodedCustomerList.length))
                        message.ungeocodedCustomerList = [];
                    message.ungeocodedCustomerList.push($root.customer.UngeocodedCustomer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UngeocodedCustomerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.UngeocodedCustomerResponse} UngeocodedCustomerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UngeocodedCustomerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UngeocodedCustomerResponse message.
         * @function verify
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UngeocodedCustomerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ungeocodedCustomerList != null && message.hasOwnProperty("ungeocodedCustomerList")) {
                if (!Array.isArray(message.ungeocodedCustomerList))
                    return "ungeocodedCustomerList: array expected";
                for (let i = 0; i < message.ungeocodedCustomerList.length; ++i) {
                    let error = $root.customer.UngeocodedCustomer.verify(message.ungeocodedCustomerList[i]);
                    if (error)
                        return "ungeocodedCustomerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UngeocodedCustomerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.UngeocodedCustomerResponse} UngeocodedCustomerResponse
         */
        UngeocodedCustomerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.UngeocodedCustomerResponse)
                return object;
            let message = new $root.customer.UngeocodedCustomerResponse();
            if (object.ungeocodedCustomerList) {
                if (!Array.isArray(object.ungeocodedCustomerList))
                    throw TypeError(".customer.UngeocodedCustomerResponse.ungeocodedCustomerList: array expected");
                message.ungeocodedCustomerList = [];
                for (let i = 0; i < object.ungeocodedCustomerList.length; ++i) {
                    if (typeof object.ungeocodedCustomerList[i] !== "object")
                        throw TypeError(".customer.UngeocodedCustomerResponse.ungeocodedCustomerList: object expected");
                    message.ungeocodedCustomerList[i] = $root.customer.UngeocodedCustomer.fromObject(object.ungeocodedCustomerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UngeocodedCustomerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.UngeocodedCustomerResponse
         * @static
         * @param {customer.UngeocodedCustomerResponse} message UngeocodedCustomerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UngeocodedCustomerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ungeocodedCustomerList = [];
            if (message.ungeocodedCustomerList && message.ungeocodedCustomerList.length) {
                object.ungeocodedCustomerList = [];
                for (let j = 0; j < message.ungeocodedCustomerList.length; ++j)
                    object.ungeocodedCustomerList[j] = $root.customer.UngeocodedCustomer.toObject(message.ungeocodedCustomerList[j], options);
            }
            return object;
        };

        /**
         * Converts this UngeocodedCustomerResponse to JSON.
         * @function toJSON
         * @memberof customer.UngeocodedCustomerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UngeocodedCustomerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UngeocodedCustomerResponse;
    })();

    customer.LocationResponse = (function() {

        /**
         * Properties of a LocationResponse.
         * @memberof customer
         * @interface ILocationResponse
         * @property {string|null} [roadId] LocationResponse roadId
         * @property {string|null} [sideOfStreet] LocationResponse sideOfStreet
         * @property {number|null} [offsetLat] LocationResponse offsetLat
         * @property {number|null} [offsetLon] LocationResponse offsetLon
         * @property {string|null} [censusId] LocationResponse censusId
         * @property {string|null} [streetName] LocationResponse streetName
         * @property {string|null} [locSrc] LocationResponse locSrc
         * @property {number|Long|null} [srvcLocId] LocationResponse srvcLocId
         * @property {string|null} [userId] LocationResponse userId
         * @property {boolean|null} [geocodeStatus] LocationResponse geocodeStatus
         * @property {number|null} [srvcLon] LocationResponse srvcLon
         * @property {number|null} [srvcLat] LocationResponse srvcLat
         * @property {string|null} [geoConf] LocationResponse geoConf
         * @property {number|Long|null} [acctId] LocationResponse acctId
         * @property {string|null} [opsUnitCd] LocationResponse opsUnitCd
         * @property {string|null} [routeType] LocationResponse routeType
         */

        /**
         * Constructs a new LocationResponse.
         * @memberof customer
         * @classdesc Represents a LocationResponse.
         * @implements ILocationResponse
         * @constructor
         * @param {customer.ILocationResponse=} [properties] Properties to set
         */
        function LocationResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocationResponse roadId.
         * @member {string} roadId
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.roadId = "";

        /**
         * LocationResponse sideOfStreet.
         * @member {string} sideOfStreet
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.sideOfStreet = "";

        /**
         * LocationResponse offsetLat.
         * @member {number} offsetLat
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.offsetLat = 0;

        /**
         * LocationResponse offsetLon.
         * @member {number} offsetLon
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.offsetLon = 0;

        /**
         * LocationResponse censusId.
         * @member {string} censusId
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.censusId = "";

        /**
         * LocationResponse streetName.
         * @member {string} streetName
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.streetName = "";

        /**
         * LocationResponse locSrc.
         * @member {string} locSrc
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.locSrc = "";

        /**
         * LocationResponse srvcLocId.
         * @member {number|Long} srvcLocId
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.srvcLocId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LocationResponse userId.
         * @member {string} userId
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.userId = "";

        /**
         * LocationResponse geocodeStatus.
         * @member {boolean} geocodeStatus
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.geocodeStatus = false;

        /**
         * LocationResponse srvcLon.
         * @member {number} srvcLon
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.srvcLon = 0;

        /**
         * LocationResponse srvcLat.
         * @member {number} srvcLat
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.srvcLat = 0;

        /**
         * LocationResponse geoConf.
         * @member {string} geoConf
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.geoConf = "";

        /**
         * LocationResponse acctId.
         * @member {number|Long} acctId
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.acctId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LocationResponse opsUnitCd.
         * @member {string} opsUnitCd
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.opsUnitCd = "";

        /**
         * LocationResponse routeType.
         * @member {string} routeType
         * @memberof customer.LocationResponse
         * @instance
         */
        LocationResponse.prototype.routeType = "";

        /**
         * Creates a new LocationResponse instance using the specified properties.
         * @function create
         * @memberof customer.LocationResponse
         * @static
         * @param {customer.ILocationResponse=} [properties] Properties to set
         * @returns {customer.LocationResponse} LocationResponse instance
         */
        LocationResponse.create = function create(properties) {
            return new LocationResponse(properties);
        };

        /**
         * Encodes the specified LocationResponse message. Does not implicitly {@link customer.LocationResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.LocationResponse
         * @static
         * @param {customer.ILocationResponse} message LocationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roadId != null && Object.hasOwnProperty.call(message, "roadId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roadId);
            if (message.sideOfStreet != null && Object.hasOwnProperty.call(message, "sideOfStreet"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sideOfStreet);
            if (message.offsetLat != null && Object.hasOwnProperty.call(message, "offsetLat"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.offsetLat);
            if (message.offsetLon != null && Object.hasOwnProperty.call(message, "offsetLon"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.offsetLon);
            if (message.censusId != null && Object.hasOwnProperty.call(message, "censusId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.censusId);
            if (message.streetName != null && Object.hasOwnProperty.call(message, "streetName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.streetName);
            if (message.locSrc != null && Object.hasOwnProperty.call(message, "locSrc"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.locSrc);
            if (message.srvcLocId != null && Object.hasOwnProperty.call(message, "srvcLocId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.srvcLocId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.userId);
            if (message.geocodeStatus != null && Object.hasOwnProperty.call(message, "geocodeStatus"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.geocodeStatus);
            if (message.srvcLon != null && Object.hasOwnProperty.call(message, "srvcLon"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.srvcLon);
            if (message.srvcLat != null && Object.hasOwnProperty.call(message, "srvcLat"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.srvcLat);
            if (message.geoConf != null && Object.hasOwnProperty.call(message, "geoConf"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.geoConf);
            if (message.acctId != null && Object.hasOwnProperty.call(message, "acctId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.acctId);
            if (message.opsUnitCd != null && Object.hasOwnProperty.call(message, "opsUnitCd"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.opsUnitCd);
            if (message.routeType != null && Object.hasOwnProperty.call(message, "routeType"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.routeType);
            return writer;
        };

        /**
         * Encodes the specified LocationResponse message, length delimited. Does not implicitly {@link customer.LocationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.LocationResponse
         * @static
         * @param {customer.ILocationResponse} message LocationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LocationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.LocationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.LocationResponse} LocationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.LocationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roadId = reader.string();
                    break;
                case 2:
                    message.sideOfStreet = reader.string();
                    break;
                case 3:
                    message.offsetLat = reader.double();
                    break;
                case 4:
                    message.offsetLon = reader.double();
                    break;
                case 5:
                    message.censusId = reader.string();
                    break;
                case 6:
                    message.streetName = reader.string();
                    break;
                case 7:
                    message.locSrc = reader.string();
                    break;
                case 8:
                    message.srvcLocId = reader.int64();
                    break;
                case 9:
                    message.userId = reader.string();
                    break;
                case 10:
                    message.geocodeStatus = reader.bool();
                    break;
                case 11:
                    message.srvcLon = reader.double();
                    break;
                case 12:
                    message.srvcLat = reader.double();
                    break;
                case 13:
                    message.geoConf = reader.string();
                    break;
                case 14:
                    message.acctId = reader.int64();
                    break;
                case 15:
                    message.opsUnitCd = reader.string();
                    break;
                case 16:
                    message.routeType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LocationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.LocationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.LocationResponse} LocationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocationResponse message.
         * @function verify
         * @memberof customer.LocationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roadId != null && message.hasOwnProperty("roadId"))
                if (!$util.isString(message.roadId))
                    return "roadId: string expected";
            if (message.sideOfStreet != null && message.hasOwnProperty("sideOfStreet"))
                if (!$util.isString(message.sideOfStreet))
                    return "sideOfStreet: string expected";
            if (message.offsetLat != null && message.hasOwnProperty("offsetLat"))
                if (typeof message.offsetLat !== "number")
                    return "offsetLat: number expected";
            if (message.offsetLon != null && message.hasOwnProperty("offsetLon"))
                if (typeof message.offsetLon !== "number")
                    return "offsetLon: number expected";
            if (message.censusId != null && message.hasOwnProperty("censusId"))
                if (!$util.isString(message.censusId))
                    return "censusId: string expected";
            if (message.streetName != null && message.hasOwnProperty("streetName"))
                if (!$util.isString(message.streetName))
                    return "streetName: string expected";
            if (message.locSrc != null && message.hasOwnProperty("locSrc"))
                if (!$util.isString(message.locSrc))
                    return "locSrc: string expected";
            if (message.srvcLocId != null && message.hasOwnProperty("srvcLocId"))
                if (!$util.isInteger(message.srvcLocId) && !(message.srvcLocId && $util.isInteger(message.srvcLocId.low) && $util.isInteger(message.srvcLocId.high)))
                    return "srvcLocId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.geocodeStatus != null && message.hasOwnProperty("geocodeStatus"))
                if (typeof message.geocodeStatus !== "boolean")
                    return "geocodeStatus: boolean expected";
            if (message.srvcLon != null && message.hasOwnProperty("srvcLon"))
                if (typeof message.srvcLon !== "number")
                    return "srvcLon: number expected";
            if (message.srvcLat != null && message.hasOwnProperty("srvcLat"))
                if (typeof message.srvcLat !== "number")
                    return "srvcLat: number expected";
            if (message.geoConf != null && message.hasOwnProperty("geoConf"))
                if (!$util.isString(message.geoConf))
                    return "geoConf: string expected";
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (!$util.isInteger(message.acctId) && !(message.acctId && $util.isInteger(message.acctId.low) && $util.isInteger(message.acctId.high)))
                    return "acctId: integer|Long expected";
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                if (!$util.isString(message.opsUnitCd))
                    return "opsUnitCd: string expected";
            if (message.routeType != null && message.hasOwnProperty("routeType"))
                if (!$util.isString(message.routeType))
                    return "routeType: string expected";
            return null;
        };

        /**
         * Creates a LocationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.LocationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.LocationResponse} LocationResponse
         */
        LocationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.LocationResponse)
                return object;
            let message = new $root.customer.LocationResponse();
            if (object.roadId != null)
                message.roadId = String(object.roadId);
            if (object.sideOfStreet != null)
                message.sideOfStreet = String(object.sideOfStreet);
            if (object.offsetLat != null)
                message.offsetLat = Number(object.offsetLat);
            if (object.offsetLon != null)
                message.offsetLon = Number(object.offsetLon);
            if (object.censusId != null)
                message.censusId = String(object.censusId);
            if (object.streetName != null)
                message.streetName = String(object.streetName);
            if (object.locSrc != null)
                message.locSrc = String(object.locSrc);
            if (object.srvcLocId != null)
                if ($util.Long)
                    (message.srvcLocId = $util.Long.fromValue(object.srvcLocId)).unsigned = false;
                else if (typeof object.srvcLocId === "string")
                    message.srvcLocId = parseInt(object.srvcLocId, 10);
                else if (typeof object.srvcLocId === "number")
                    message.srvcLocId = object.srvcLocId;
                else if (typeof object.srvcLocId === "object")
                    message.srvcLocId = new $util.LongBits(object.srvcLocId.low >>> 0, object.srvcLocId.high >>> 0).toNumber();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.geocodeStatus != null)
                message.geocodeStatus = Boolean(object.geocodeStatus);
            if (object.srvcLon != null)
                message.srvcLon = Number(object.srvcLon);
            if (object.srvcLat != null)
                message.srvcLat = Number(object.srvcLat);
            if (object.geoConf != null)
                message.geoConf = String(object.geoConf);
            if (object.acctId != null)
                if ($util.Long)
                    (message.acctId = $util.Long.fromValue(object.acctId)).unsigned = false;
                else if (typeof object.acctId === "string")
                    message.acctId = parseInt(object.acctId, 10);
                else if (typeof object.acctId === "number")
                    message.acctId = object.acctId;
                else if (typeof object.acctId === "object")
                    message.acctId = new $util.LongBits(object.acctId.low >>> 0, object.acctId.high >>> 0).toNumber();
            if (object.opsUnitCd != null)
                message.opsUnitCd = String(object.opsUnitCd);
            if (object.routeType != null)
                message.routeType = String(object.routeType);
            return message;
        };

        /**
         * Creates a plain object from a LocationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.LocationResponse
         * @static
         * @param {customer.LocationResponse} message LocationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.roadId = "";
                object.sideOfStreet = "";
                object.offsetLat = 0;
                object.offsetLon = 0;
                object.censusId = "";
                object.streetName = "";
                object.locSrc = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.srvcLocId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.srvcLocId = options.longs === String ? "0" : 0;
                object.userId = "";
                object.geocodeStatus = false;
                object.srvcLon = 0;
                object.srvcLat = 0;
                object.geoConf = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.acctId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.acctId = options.longs === String ? "0" : 0;
                object.opsUnitCd = "";
                object.routeType = "";
            }
            if (message.roadId != null && message.hasOwnProperty("roadId"))
                object.roadId = message.roadId;
            if (message.sideOfStreet != null && message.hasOwnProperty("sideOfStreet"))
                object.sideOfStreet = message.sideOfStreet;
            if (message.offsetLat != null && message.hasOwnProperty("offsetLat"))
                object.offsetLat = options.json && !isFinite(message.offsetLat) ? String(message.offsetLat) : message.offsetLat;
            if (message.offsetLon != null && message.hasOwnProperty("offsetLon"))
                object.offsetLon = options.json && !isFinite(message.offsetLon) ? String(message.offsetLon) : message.offsetLon;
            if (message.censusId != null && message.hasOwnProperty("censusId"))
                object.censusId = message.censusId;
            if (message.streetName != null && message.hasOwnProperty("streetName"))
                object.streetName = message.streetName;
            if (message.locSrc != null && message.hasOwnProperty("locSrc"))
                object.locSrc = message.locSrc;
            if (message.srvcLocId != null && message.hasOwnProperty("srvcLocId"))
                if (typeof message.srvcLocId === "number")
                    object.srvcLocId = options.longs === String ? String(message.srvcLocId) : message.srvcLocId;
                else
                    object.srvcLocId = options.longs === String ? $util.Long.prototype.toString.call(message.srvcLocId) : options.longs === Number ? new $util.LongBits(message.srvcLocId.low >>> 0, message.srvcLocId.high >>> 0).toNumber() : message.srvcLocId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.geocodeStatus != null && message.hasOwnProperty("geocodeStatus"))
                object.geocodeStatus = message.geocodeStatus;
            if (message.srvcLon != null && message.hasOwnProperty("srvcLon"))
                object.srvcLon = options.json && !isFinite(message.srvcLon) ? String(message.srvcLon) : message.srvcLon;
            if (message.srvcLat != null && message.hasOwnProperty("srvcLat"))
                object.srvcLat = options.json && !isFinite(message.srvcLat) ? String(message.srvcLat) : message.srvcLat;
            if (message.geoConf != null && message.hasOwnProperty("geoConf"))
                object.geoConf = message.geoConf;
            if (message.acctId != null && message.hasOwnProperty("acctId"))
                if (typeof message.acctId === "number")
                    object.acctId = options.longs === String ? String(message.acctId) : message.acctId;
                else
                    object.acctId = options.longs === String ? $util.Long.prototype.toString.call(message.acctId) : options.longs === Number ? new $util.LongBits(message.acctId.low >>> 0, message.acctId.high >>> 0).toNumber() : message.acctId;
            if (message.opsUnitCd != null && message.hasOwnProperty("opsUnitCd"))
                object.opsUnitCd = message.opsUnitCd;
            if (message.routeType != null && message.hasOwnProperty("routeType"))
                object.routeType = message.routeType;
            return object;
        };

        /**
         * Converts this LocationResponse to JSON.
         * @function toJSON
         * @memberof customer.LocationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LocationResponse;
    })();

    customer.BatchLocationResponse = (function() {

        /**
         * Properties of a BatchLocationResponse.
         * @memberof customer
         * @interface IBatchLocationResponse
         * @property {Array.<customer.ILocationResponse>|null} [batchLocationResponseList] BatchLocationResponse batchLocationResponseList
         */

        /**
         * Constructs a new BatchLocationResponse.
         * @memberof customer
         * @classdesc Represents a BatchLocationResponse.
         * @implements IBatchLocationResponse
         * @constructor
         * @param {customer.IBatchLocationResponse=} [properties] Properties to set
         */
        function BatchLocationResponse(properties) {
            this.batchLocationResponseList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchLocationResponse batchLocationResponseList.
         * @member {Array.<customer.ILocationResponse>} batchLocationResponseList
         * @memberof customer.BatchLocationResponse
         * @instance
         */
        BatchLocationResponse.prototype.batchLocationResponseList = $util.emptyArray;

        /**
         * Creates a new BatchLocationResponse instance using the specified properties.
         * @function create
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {customer.IBatchLocationResponse=} [properties] Properties to set
         * @returns {customer.BatchLocationResponse} BatchLocationResponse instance
         */
        BatchLocationResponse.create = function create(properties) {
            return new BatchLocationResponse(properties);
        };

        /**
         * Encodes the specified BatchLocationResponse message. Does not implicitly {@link customer.BatchLocationResponse.verify|verify} messages.
         * @function encode
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {customer.IBatchLocationResponse} message BatchLocationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchLocationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.batchLocationResponseList != null && message.batchLocationResponseList.length)
                for (let i = 0; i < message.batchLocationResponseList.length; ++i)
                    $root.customer.LocationResponse.encode(message.batchLocationResponseList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BatchLocationResponse message, length delimited. Does not implicitly {@link customer.BatchLocationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {customer.IBatchLocationResponse} message BatchLocationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchLocationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchLocationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.BatchLocationResponse} BatchLocationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchLocationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.BatchLocationResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.batchLocationResponseList && message.batchLocationResponseList.length))
                        message.batchLocationResponseList = [];
                    message.batchLocationResponseList.push($root.customer.LocationResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BatchLocationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.BatchLocationResponse} BatchLocationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchLocationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchLocationResponse message.
         * @function verify
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchLocationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.batchLocationResponseList != null && message.hasOwnProperty("batchLocationResponseList")) {
                if (!Array.isArray(message.batchLocationResponseList))
                    return "batchLocationResponseList: array expected";
                for (let i = 0; i < message.batchLocationResponseList.length; ++i) {
                    let error = $root.customer.LocationResponse.verify(message.batchLocationResponseList[i]);
                    if (error)
                        return "batchLocationResponseList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BatchLocationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.BatchLocationResponse} BatchLocationResponse
         */
        BatchLocationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.BatchLocationResponse)
                return object;
            let message = new $root.customer.BatchLocationResponse();
            if (object.batchLocationResponseList) {
                if (!Array.isArray(object.batchLocationResponseList))
                    throw TypeError(".customer.BatchLocationResponse.batchLocationResponseList: array expected");
                message.batchLocationResponseList = [];
                for (let i = 0; i < object.batchLocationResponseList.length; ++i) {
                    if (typeof object.batchLocationResponseList[i] !== "object")
                        throw TypeError(".customer.BatchLocationResponse.batchLocationResponseList: object expected");
                    message.batchLocationResponseList[i] = $root.customer.LocationResponse.fromObject(object.batchLocationResponseList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BatchLocationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.BatchLocationResponse
         * @static
         * @param {customer.BatchLocationResponse} message BatchLocationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchLocationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.batchLocationResponseList = [];
            if (message.batchLocationResponseList && message.batchLocationResponseList.length) {
                object.batchLocationResponseList = [];
                for (let j = 0; j < message.batchLocationResponseList.length; ++j)
                    object.batchLocationResponseList[j] = $root.customer.LocationResponse.toObject(message.batchLocationResponseList[j], options);
            }
            return object;
        };

        /**
         * Converts this BatchLocationResponse to JSON.
         * @function toJSON
         * @memberof customer.BatchLocationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchLocationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BatchLocationResponse;
    })();

    customer.BatchLocationRequest = (function() {

        /**
         * Properties of a BatchLocationRequest.
         * @memberof customer
         * @interface IBatchLocationRequest
         * @property {Array.<customer.ILocationResponse>|null} [batchLocationRequest] BatchLocationRequest batchLocationRequest
         */

        /**
         * Constructs a new BatchLocationRequest.
         * @memberof customer
         * @classdesc Represents a BatchLocationRequest.
         * @implements IBatchLocationRequest
         * @constructor
         * @param {customer.IBatchLocationRequest=} [properties] Properties to set
         */
        function BatchLocationRequest(properties) {
            this.batchLocationRequest = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchLocationRequest batchLocationRequest.
         * @member {Array.<customer.ILocationResponse>} batchLocationRequest
         * @memberof customer.BatchLocationRequest
         * @instance
         */
        BatchLocationRequest.prototype.batchLocationRequest = $util.emptyArray;

        /**
         * Creates a new BatchLocationRequest instance using the specified properties.
         * @function create
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {customer.IBatchLocationRequest=} [properties] Properties to set
         * @returns {customer.BatchLocationRequest} BatchLocationRequest instance
         */
        BatchLocationRequest.create = function create(properties) {
            return new BatchLocationRequest(properties);
        };

        /**
         * Encodes the specified BatchLocationRequest message. Does not implicitly {@link customer.BatchLocationRequest.verify|verify} messages.
         * @function encode
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {customer.IBatchLocationRequest} message BatchLocationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchLocationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.batchLocationRequest != null && message.batchLocationRequest.length)
                for (let i = 0; i < message.batchLocationRequest.length; ++i)
                    $root.customer.LocationResponse.encode(message.batchLocationRequest[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BatchLocationRequest message, length delimited. Does not implicitly {@link customer.BatchLocationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {customer.IBatchLocationRequest} message BatchLocationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchLocationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchLocationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.BatchLocationRequest} BatchLocationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchLocationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.BatchLocationRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.batchLocationRequest && message.batchLocationRequest.length))
                        message.batchLocationRequest = [];
                    message.batchLocationRequest.push($root.customer.LocationResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BatchLocationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.BatchLocationRequest} BatchLocationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchLocationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchLocationRequest message.
         * @function verify
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchLocationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.batchLocationRequest != null && message.hasOwnProperty("batchLocationRequest")) {
                if (!Array.isArray(message.batchLocationRequest))
                    return "batchLocationRequest: array expected";
                for (let i = 0; i < message.batchLocationRequest.length; ++i) {
                    let error = $root.customer.LocationResponse.verify(message.batchLocationRequest[i]);
                    if (error)
                        return "batchLocationRequest." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BatchLocationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.BatchLocationRequest} BatchLocationRequest
         */
        BatchLocationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.BatchLocationRequest)
                return object;
            let message = new $root.customer.BatchLocationRequest();
            if (object.batchLocationRequest) {
                if (!Array.isArray(object.batchLocationRequest))
                    throw TypeError(".customer.BatchLocationRequest.batchLocationRequest: array expected");
                message.batchLocationRequest = [];
                for (let i = 0; i < object.batchLocationRequest.length; ++i) {
                    if (typeof object.batchLocationRequest[i] !== "object")
                        throw TypeError(".customer.BatchLocationRequest.batchLocationRequest: object expected");
                    message.batchLocationRequest[i] = $root.customer.LocationResponse.fromObject(object.batchLocationRequest[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BatchLocationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.BatchLocationRequest
         * @static
         * @param {customer.BatchLocationRequest} message BatchLocationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchLocationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.batchLocationRequest = [];
            if (message.batchLocationRequest && message.batchLocationRequest.length) {
                object.batchLocationRequest = [];
                for (let j = 0; j < message.batchLocationRequest.length; ++j)
                    object.batchLocationRequest[j] = $root.customer.LocationResponse.toObject(message.batchLocationRequest[j], options);
            }
            return object;
        };

        /**
         * Converts this BatchLocationRequest to JSON.
         * @function toJSON
         * @memberof customer.BatchLocationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchLocationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BatchLocationRequest;
    })();

    customer.CustomerService = (function() {

        /**
         * Constructs a new CustomerService service.
         * @memberof customer
         * @classdesc Represents a CustomerService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CustomerService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CustomerService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CustomerService;

        /**
         * Creates new CustomerService service using the specified rpc implementation.
         * @function create
         * @memberof customer.CustomerService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CustomerService} RPC service. Useful where requests and/or responses are streamed.
         */
        CustomerService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link customer.CustomerService#fetchWeeklyCustomersShort}.
         * @memberof customer.CustomerService
         * @typedef fetchWeeklyCustomersShortCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {customer.WeeklyCustomerShortResponse} [response] WeeklyCustomerShortResponse
         */

        /**
         * Calls fetchWeeklyCustomersShort.
         * @function fetchWeeklyCustomersShort
         * @memberof customer.CustomerService
         * @instance
         * @param {customer.ICustomerRequest} request CustomerRequest message or plain object
         * @param {customer.CustomerService.fetchWeeklyCustomersShortCallback} callback Node-style callback called with the error, if any, and WeeklyCustomerShortResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CustomerService.prototype.fetchWeeklyCustomersShort = function fetchWeeklyCustomersShort(request, callback) {
            return this.rpcCall(fetchWeeklyCustomersShort, $root.customer.CustomerRequest, $root.customer.WeeklyCustomerShortResponse, request, callback);
        }, "name", { value: "fetchWeeklyCustomersShort" });

        /**
         * Calls fetchWeeklyCustomersShort.
         * @function fetchWeeklyCustomersShort
         * @memberof customer.CustomerService
         * @instance
         * @param {customer.ICustomerRequest} request CustomerRequest message or plain object
         * @returns {Promise<customer.WeeklyCustomerShortResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link customer.CustomerService#fetchBatchGeocodeResponse}.
         * @memberof customer.CustomerService
         * @typedef fetchBatchGeocodeResponseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {customer.BatchLocationResponse} [response] BatchLocationResponse
         */

        /**
         * Calls fetchBatchGeocodeResponse.
         * @function fetchBatchGeocodeResponse
         * @memberof customer.CustomerService
         * @instance
         * @param {customer.IBatchLocationRequest} request BatchLocationRequest message or plain object
         * @param {customer.CustomerService.fetchBatchGeocodeResponseCallback} callback Node-style callback called with the error, if any, and BatchLocationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CustomerService.prototype.fetchBatchGeocodeResponse = function fetchBatchGeocodeResponse(request, callback) {
            return this.rpcCall(fetchBatchGeocodeResponse, $root.customer.BatchLocationRequest, $root.customer.BatchLocationResponse, request, callback);
        }, "name", { value: "fetchBatchGeocodeResponse" });

        /**
         * Calls fetchBatchGeocodeResponse.
         * @function fetchBatchGeocodeResponse
         * @memberof customer.CustomerService
         * @instance
         * @param {customer.IBatchLocationRequest} request BatchLocationRequest message or plain object
         * @returns {Promise<customer.BatchLocationResponse>} Promise
         * @variation 2
         */

        return CustomerService;
    })();

    return customer;
})();

export { $root as default };
