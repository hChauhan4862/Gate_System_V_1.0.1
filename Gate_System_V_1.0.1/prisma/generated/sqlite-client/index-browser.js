
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CommandsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  command_value: 'command_value',
  description: 'description',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.Device_typeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  operation: 'operation',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.Devices_setupScalarFieldEnum = makeEnum({
  id: 'id',
  friendlyName: 'friendlyName',
  locationId: 'locationId',
  manufacturer: 'manufacturer',
  path: 'path',
  pnpId: 'pnpId',
  productId: 'productId',
  serialNumber: 'serialNumber',
  vendorId: 'vendorId',
  devicesType: 'devicesType',
  door_id: 'door_id',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.DoorsScalarFieldEnum = makeEnum({
  id: 'id',
  org_id: 'org_id',
  name: 'name',
  description: 'description',
  door_no: 'door_no',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.Inout_logScalarFieldEnum = makeEnum({
  id: 'id',
  organization: 'organization',
  org_id: 'org_id',
  devicePort: 'devicePort',
  device_id: 'device_id',
  doorNo: 'doorNo',
  door_id: 'door_id',
  studentName: 'studentName',
  student_id: 'student_id',
  operation: 'operation',
  log_date: 'log_date',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.OrganizationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  address: 'address',
  contact_no: 'contact_no',
  contact_person: 'contact_person',
  description: 'description',
  email: 'email',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.Organization_groupScalarFieldEnum = makeEnum({
  id: 'id',
  org_id: 'org_id',
  name: 'name',
  description: 'description',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.PermissionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.Rfid_cardScalarFieldEnum = makeEnum({
  id: 'id',
  card_no: 'card_no',
  description: 'description',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentsScalarFieldEnum = makeEnum({
  id: 'id',
  org_id: 'org_id',
  student_id: 'student_id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  address: 'address',
  isActive: 'isActive',
  barcode: 'barcode',
  user_group_id: 'user_group_id',
  rfid_card_id: 'rfid_card_id',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  org_id: 'org_id',
  name: 'name',
  email: 'email',
  password: 'password',
  phone_no: 'phone_no',
  address: 'address',
  description: 'description',
  user_img: 'user_img',
  user_group_id: 'user_group_id',
  rfid_card_id: 'rfid_card_id',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.User_groupScalarFieldEnum = makeEnum({
  id: 'id',
  org_id: 'org_id',
  group_name: 'group_name',
  permission_id: 'permission_id',
  isActive: 'isActive',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});

exports.Prisma.User_settingsScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  language: 'language',
  theme: 'theme',
  city: 'city',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
});


exports.Prisma.ModelName = makeEnum({
  organization: 'organization',
  organization_group: 'organization_group',
  user: 'user',
  user_group: 'user_group',
  permission: 'permission',
  doors: 'doors',
  device_type: 'device_type',
  inout_log: 'inout_log',
  commands: 'commands',
  rfid_card: 'rfid_card',
  devices_setup: 'devices_setup',
  students: 'students',
  user_settings: 'user_settings'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
