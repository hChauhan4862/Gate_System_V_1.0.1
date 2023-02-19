
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model organization
 * 
 */
export type organization = {
  id: number
  name: string
  address: string
  contact_no: string
  contact_person: string
  description: string
  email: string | null
  isActive: boolean
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model organization_group
 * 
 */
export type organization_group = {
  id: number
  org_id: number
  name: string
  description: string
  isActive: boolean
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model user
 * 
 */
export type user = {
  id: number
  org_id: number
  name: string
  email: string
  password: string
  phone_no: string
  address: string
  description: string
  user_img: string | null
  user_group_id: number | null
  rfid_card_id: number | null
  isActive: boolean | null
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model user_group
 * 
 */
export type user_group = {
  id: number
  org_id: number
  group_name: string
  permission_id: number
  isActive: boolean | null
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model permission
 * 
 */
export type permission = {
  id: number
  name: string
  description: string
  isActive: boolean | null
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model doors
 * 
 */
export type doors = {
  id: number
  org_id: number
  name: string
  description: string
  door_no: string
  isActive: boolean | null
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model device_type
 * 
 */
export type device_type = {
  id: number
  name: string
  description: string
  operation: string
  isActive: boolean | null
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model inout_log
 * 
 */
export type inout_log = {
  id: number
  organization: string | null
  org_id: number
  devicePort: string | null
  device_id: number | null
  doorNo: string | null
  door_id: number
  studentName: string | null
  student_id: number
  operation: string
  log_date: Date
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model commands
 * 
 */
export type commands = {
  id: number
  name: string
  command_value: string
  description: string
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model rfid_card
 * 
 */
export type rfid_card = {
  id: number
  card_no: string
  description: string
  isActive: boolean
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model devices_setup
 * 
 */
export type devices_setup = {
  id: number
  friendlyName: string
  locationId: string | null
  manufacturer: string
  path: string
  pnpId: string
  productId: string | null
  serialNumber: string | null
  vendorId: string | null
  devicesType: number | null
  door_id: number | null
  isActive: boolean
  updatedAt: Date | null
  createdAt: Date
}

/**
 * Model students
 * 
 */
export type students = {
  id: number
  org_id: number | null
  student_id: string
  name: string
  email: string
  phone: string
  address: string
  isActive: boolean | null
  barcode: string | null
  user_group_id: number | null
  rfid_card_id: number | null
  updatedAt: Date | null
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<GlobalReject>;

  /**
   * `prisma.organization_group`: Exposes CRUD operations for the **organization_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_groups
    * const organization_groups = await prisma.organization_group.findMany()
    * ```
    */
  get organization_group(): Prisma.organization_groupDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.user_group`: Exposes CRUD operations for the **user_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_groups
    * const user_groups = await prisma.user_group.findMany()
    * ```
    */
  get user_group(): Prisma.user_groupDelegate<GlobalReject>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<GlobalReject>;

  /**
   * `prisma.doors`: Exposes CRUD operations for the **doors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doors
    * const doors = await prisma.doors.findMany()
    * ```
    */
  get doors(): Prisma.doorsDelegate<GlobalReject>;

  /**
   * `prisma.device_type`: Exposes CRUD operations for the **device_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Device_types
    * const device_types = await prisma.device_type.findMany()
    * ```
    */
  get device_type(): Prisma.device_typeDelegate<GlobalReject>;

  /**
   * `prisma.inout_log`: Exposes CRUD operations for the **inout_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inout_logs
    * const inout_logs = await prisma.inout_log.findMany()
    * ```
    */
  get inout_log(): Prisma.inout_logDelegate<GlobalReject>;

  /**
   * `prisma.commands`: Exposes CRUD operations for the **commands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.commands.findMany()
    * ```
    */
  get commands(): Prisma.commandsDelegate<GlobalReject>;

  /**
   * `prisma.rfid_card`: Exposes CRUD operations for the **rfid_card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rfid_cards
    * const rfid_cards = await prisma.rfid_card.findMany()
    * ```
    */
  get rfid_card(): Prisma.rfid_cardDelegate<GlobalReject>;

  /**
   * `prisma.devices_setup`: Exposes CRUD operations for the **devices_setup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices_setups
    * const devices_setups = await prisma.devices_setup.findMany()
    * ```
    */
  get devices_setup(): Prisma.devices_setupDelegate<GlobalReject>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    students: 'students'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    org_group: number
    user: number
    user_group: number
    doors: number
    inout_log: number
    students: number
  }

  export type OrganizationCountOutputTypeSelect = {
    org_group?: boolean
    user?: boolean
    user_group?: boolean
    doors?: boolean
    inout_log?: boolean
    students?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<S extends boolean | null | undefined | OrganizationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrganizationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrganizationCountOutputTypeArgs)
    ? OrganizationCountOutputType 
    : S extends { select: any } & (OrganizationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrganizationCountOutputType ? OrganizationCountOutputType[P] : never
  } 
      : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Count Type User_groupCountOutputType
   */


  export type User_groupCountOutputType = {
    user: number
    students: number
  }

  export type User_groupCountOutputTypeSelect = {
    user?: boolean
    students?: boolean
  }

  export type User_groupCountOutputTypeGetPayload<S extends boolean | null | undefined | User_groupCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User_groupCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (User_groupCountOutputTypeArgs)
    ? User_groupCountOutputType 
    : S extends { select: any } & (User_groupCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User_groupCountOutputType ? User_groupCountOutputType[P] : never
  } 
      : User_groupCountOutputType




  // Custom InputTypes

  /**
   * User_groupCountOutputType without action
   */
  export type User_groupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the User_groupCountOutputType
     */
    select?: User_groupCountOutputTypeSelect | null
  }



  /**
   * Count Type PermissionCountOutputType
   */


  export type PermissionCountOutputType = {
    user_group: number
  }

  export type PermissionCountOutputTypeSelect = {
    user_group?: boolean
  }

  export type PermissionCountOutputTypeGetPayload<S extends boolean | null | undefined | PermissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PermissionCountOutputTypeArgs)
    ? PermissionCountOutputType 
    : S extends { select: any } & (PermissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PermissionCountOutputType ? PermissionCountOutputType[P] : never
  } 
      : PermissionCountOutputType




  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect | null
  }



  /**
   * Count Type DoorsCountOutputType
   */


  export type DoorsCountOutputType = {
    inout_log: number
    devices_setup: number
  }

  export type DoorsCountOutputTypeSelect = {
    inout_log?: boolean
    devices_setup?: boolean
  }

  export type DoorsCountOutputTypeGetPayload<S extends boolean | null | undefined | DoorsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DoorsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DoorsCountOutputTypeArgs)
    ? DoorsCountOutputType 
    : S extends { select: any } & (DoorsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DoorsCountOutputType ? DoorsCountOutputType[P] : never
  } 
      : DoorsCountOutputType




  // Custom InputTypes

  /**
   * DoorsCountOutputType without action
   */
  export type DoorsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DoorsCountOutputType
     */
    select?: DoorsCountOutputTypeSelect | null
  }



  /**
   * Count Type Device_typeCountOutputType
   */


  export type Device_typeCountOutputType = {
    devices_setup: number
  }

  export type Device_typeCountOutputTypeSelect = {
    devices_setup?: boolean
  }

  export type Device_typeCountOutputTypeGetPayload<S extends boolean | null | undefined | Device_typeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Device_typeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Device_typeCountOutputTypeArgs)
    ? Device_typeCountOutputType 
    : S extends { select: any } & (Device_typeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Device_typeCountOutputType ? Device_typeCountOutputType[P] : never
  } 
      : Device_typeCountOutputType




  // Custom InputTypes

  /**
   * Device_typeCountOutputType without action
   */
  export type Device_typeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Device_typeCountOutputType
     */
    select?: Device_typeCountOutputTypeSelect | null
  }



  /**
   * Count Type Rfid_cardCountOutputType
   */


  export type Rfid_cardCountOutputType = {
    user: number
    students: number
  }

  export type Rfid_cardCountOutputTypeSelect = {
    user?: boolean
    students?: boolean
  }

  export type Rfid_cardCountOutputTypeGetPayload<S extends boolean | null | undefined | Rfid_cardCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rfid_cardCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Rfid_cardCountOutputTypeArgs)
    ? Rfid_cardCountOutputType 
    : S extends { select: any } & (Rfid_cardCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Rfid_cardCountOutputType ? Rfid_cardCountOutputType[P] : never
  } 
      : Rfid_cardCountOutputType




  // Custom InputTypes

  /**
   * Rfid_cardCountOutputType without action
   */
  export type Rfid_cardCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Rfid_cardCountOutputType
     */
    select?: Rfid_cardCountOutputTypeSelect | null
  }



  /**
   * Count Type StudentsCountOutputType
   */


  export type StudentsCountOutputType = {
    inout_log: number
  }

  export type StudentsCountOutputTypeSelect = {
    inout_log?: boolean
  }

  export type StudentsCountOutputTypeGetPayload<S extends boolean | null | undefined | StudentsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudentsCountOutputTypeArgs)
    ? StudentsCountOutputType 
    : S extends { select: any } & (StudentsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudentsCountOutputType ? StudentsCountOutputType[P] : never
  } 
      : StudentsCountOutputType




  // Custom InputTypes

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    contact_no: string | null
    contact_person: string | null
    description: string | null
    email: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    contact_no: string | null
    contact_person: string | null
    description: string | null
    email: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    contact_no: number
    contact_person: number
    description: number
    email: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact_no?: true
    contact_person?: true
    description?: true
    email?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact_no?: true
    contact_person?: true
    description?: true
    email?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact_no?: true
    contact_person?: true
    description?: true
    email?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: organizationWhereInput
    orderBy?: Enumerable<organizationOrderByWithAggregationInput>
    by: OrganizationScalarFieldEnum[]
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email: string | null
    isActive: boolean
    updatedAt: Date | null
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    contact_no?: boolean
    contact_person?: boolean
    description?: boolean
    email?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    org_group?: boolean | organization$org_groupArgs
    user?: boolean | organization$userArgs
    user_group?: boolean | organization$user_groupArgs
    doors?: boolean | organization$doorsArgs
    inout_log?: boolean | organization$inout_logArgs
    students?: boolean | organization$studentsArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }


  export type organizationInclude = {
    org_group?: boolean | organization$org_groupArgs
    user?: boolean | organization$userArgs
    user_group?: boolean | organization$user_groupArgs
    doors?: boolean | organization$doorsArgs
    inout_log?: boolean | organization$inout_logArgs
    students?: boolean | organization$studentsArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type organizationGetPayload<S extends boolean | null | undefined | organizationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organization :
    S extends undefined ? never :
    S extends { include: any } & (organizationArgs | organizationFindManyArgs)
    ? organization  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org_group' ? Array < organization_groupGetPayload<S['include'][P]>>  :
        P extends 'user' ? Array < userGetPayload<S['include'][P]>>  :
        P extends 'user_group' ? Array < user_groupGetPayload<S['include'][P]>>  :
        P extends 'doors' ? Array < doorsGetPayload<S['include'][P]>>  :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['include'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organizationArgs | organizationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org_group' ? Array < organization_groupGetPayload<S['select'][P]>>  :
        P extends 'user' ? Array < userGetPayload<S['select'][P]>>  :
        P extends 'user_group' ? Array < user_groupGetPayload<S['select'][P]>>  :
        P extends 'doors' ? Array < doorsGetPayload<S['select'][P]>>  :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['select'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof organization ? organization[P] : never
  } 
      : organization


  type organizationCountArgs = 
    Omit<organizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organization'> extends True ? Prisma__organizationClient<organizationGetPayload<T>> : Prisma__organizationClient<organizationGetPayload<T> | null, null>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organization'> extends True ? Prisma__organizationClient<organizationGetPayload<T>> : Prisma__organizationClient<organizationGetPayload<T> | null, null>

    /**
     * Find the first Organization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organizationFindManyArgs>(
      args?: SelectSubset<T, organizationFindManyArgs>
    ): Prisma.PrismaPromise<Array<organizationGetPayload<T>>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends organizationCreateArgs>(
      args: SelectSubset<T, organizationCreateArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends organizationDeleteArgs>(
      args: SelectSubset<T, organizationDeleteArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organizationUpdateArgs>(
      args: SelectSubset<T, organizationUpdateArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organizationDeleteManyArgs>(
      args?: SelectSubset<T, organizationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organizationUpdateManyArgs>(
      args: SelectSubset<T, organizationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends organizationUpsertArgs>(
      args: SelectSubset<T, organizationUpsertArgs>
    ): Prisma__organizationClient<organizationGetPayload<T>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organizationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org_group<T extends organization$org_groupArgs= {}>(args?: Subset<T, organization$org_groupArgs>): Prisma.PrismaPromise<Array<organization_groupGetPayload<T>>| Null>;

    user<T extends organization$userArgs= {}>(args?: Subset<T, organization$userArgs>): Prisma.PrismaPromise<Array<userGetPayload<T>>| Null>;

    user_group<T extends organization$user_groupArgs= {}>(args?: Subset<T, organization$user_groupArgs>): Prisma.PrismaPromise<Array<user_groupGetPayload<T>>| Null>;

    doors<T extends organization$doorsArgs= {}>(args?: Subset<T, organization$doorsArgs>): Prisma.PrismaPromise<Array<doorsGetPayload<T>>| Null>;

    inout_log<T extends organization$inout_logArgs= {}>(args?: Subset<T, organization$inout_logArgs>): Prisma.PrismaPromise<Array<inout_logGetPayload<T>>| Null>;

    students<T extends organization$studentsArgs= {}>(args?: Subset<T, organization$studentsArgs>): Prisma.PrismaPromise<Array<studentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organization base type for findUnique actions
   */
  export type organizationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findUnique
   */
  export interface organizationFindUniqueArgs extends organizationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization base type for findFirst actions
   */
  export type organizationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }

  /**
   * organization findFirst
   */
  export interface organizationFindFirstArgs extends organizationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * organization findMany
   */
  export type organizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: Enumerable<organizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * organization create
   */
  export type organizationCreateArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }


  /**
   * organization update
   */
  export type organizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
  }


  /**
   * organization upsert
   */
  export type organizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }


  /**
   * organization delete
   */
  export type organizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
  }


  /**
   * organization.org_group
   */
  export type organization$org_groupArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    where?: organization_groupWhereInput
    orderBy?: Enumerable<organization_groupOrderByWithRelationInput>
    cursor?: organization_groupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Organization_groupScalarFieldEnum>
  }


  /**
   * organization.user
   */
  export type organization$userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithRelationInput>
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * organization.user_group
   */
  export type organization$user_groupArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    where?: user_groupWhereInput
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    cursor?: user_groupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_groupScalarFieldEnum>
  }


  /**
   * organization.doors
   */
  export type organization$doorsArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    where?: doorsWhereInput
    orderBy?: Enumerable<doorsOrderByWithRelationInput>
    cursor?: doorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DoorsScalarFieldEnum>
  }


  /**
   * organization.inout_log
   */
  export type organization$inout_logArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    where?: inout_logWhereInput
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    cursor?: inout_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }


  /**
   * organization.students
   */
  export type organization$studentsArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    where?: studentsWhereInput
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }


  /**
   * organization without action
   */
  export type organizationArgs = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude | null
  }



  /**
   * Model organization_group
   */


  export type AggregateOrganization_group = {
    _count: Organization_groupCountAggregateOutputType | null
    _avg: Organization_groupAvgAggregateOutputType | null
    _sum: Organization_groupSumAggregateOutputType | null
    _min: Organization_groupMinAggregateOutputType | null
    _max: Organization_groupMaxAggregateOutputType | null
  }

  export type Organization_groupAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
  }

  export type Organization_groupSumAggregateOutputType = {
    id: number | null
    org_id: number | null
  }

  export type Organization_groupMinAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Organization_groupMaxAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Organization_groupCountAggregateOutputType = {
    id: number
    org_id: number
    name: number
    description: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Organization_groupAvgAggregateInputType = {
    id?: true
    org_id?: true
  }

  export type Organization_groupSumAggregateInputType = {
    id?: true
    org_id?: true
  }

  export type Organization_groupMinAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Organization_groupMaxAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Organization_groupCountAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Organization_groupAggregateArgs = {
    /**
     * Filter which organization_group to aggregate.
     */
    where?: organization_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_groups to fetch.
     */
    orderBy?: Enumerable<organization_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organization_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organization_groups
    **/
    _count?: true | Organization_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Organization_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Organization_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_groupMaxAggregateInputType
  }

  export type GetOrganization_groupAggregateType<T extends Organization_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_group[P]>
      : GetScalarType<T[P], AggregateOrganization_group[P]>
  }




  export type Organization_groupGroupByArgs = {
    where?: organization_groupWhereInput
    orderBy?: Enumerable<organization_groupOrderByWithAggregationInput>
    by: Organization_groupScalarFieldEnum[]
    having?: organization_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_groupCountAggregateInputType | true
    _avg?: Organization_groupAvgAggregateInputType
    _sum?: Organization_groupSumAggregateInputType
    _min?: Organization_groupMinAggregateInputType
    _max?: Organization_groupMaxAggregateInputType
  }


  export type Organization_groupGroupByOutputType = {
    id: number
    org_id: number
    name: string
    description: string
    isActive: boolean
    updatedAt: Date | null
    createdAt: Date
    _count: Organization_groupCountAggregateOutputType | null
    _avg: Organization_groupAvgAggregateOutputType | null
    _sum: Organization_groupSumAggregateOutputType | null
    _min: Organization_groupMinAggregateOutputType | null
    _max: Organization_groupMaxAggregateOutputType | null
  }

  type GetOrganization_groupGroupByPayload<T extends Organization_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Organization_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_groupGroupByOutputType[P]>
        }
      >
    >


  export type organization_groupSelect = {
    id?: boolean
    org?: boolean | organizationArgs
    org_id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type organization_groupInclude = {
    org?: boolean | organizationArgs
  }

  export type organization_groupGetPayload<S extends boolean | null | undefined | organization_groupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? organization_group :
    S extends undefined ? never :
    S extends { include: any } & (organization_groupArgs | organization_groupFindManyArgs)
    ? organization_group  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (organization_groupArgs | organization_groupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> :  P extends keyof organization_group ? organization_group[P] : never
  } 
      : organization_group


  type organization_groupCountArgs = 
    Omit<organization_groupFindManyArgs, 'select' | 'include'> & {
      select?: Organization_groupCountAggregateInputType | true
    }

  export interface organization_groupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Organization_group that matches the filter.
     * @param {organization_groupFindUniqueArgs} args - Arguments to find a Organization_group
     * @example
     * // Get one Organization_group
     * const organization_group = await prisma.organization_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organization_groupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, organization_groupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'organization_group'> extends True ? Prisma__organization_groupClient<organization_groupGetPayload<T>> : Prisma__organization_groupClient<organization_groupGetPayload<T> | null, null>

    /**
     * Find one Organization_group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organization_groupFindUniqueOrThrowArgs} args - Arguments to find a Organization_group
     * @example
     * // Get one Organization_group
     * const organization_group = await prisma.organization_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organization_groupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, organization_groupFindUniqueOrThrowArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Find the first Organization_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_groupFindFirstArgs} args - Arguments to find a Organization_group
     * @example
     * // Get one Organization_group
     * const organization_group = await prisma.organization_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organization_groupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, organization_groupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'organization_group'> extends True ? Prisma__organization_groupClient<organization_groupGetPayload<T>> : Prisma__organization_groupClient<organization_groupGetPayload<T> | null, null>

    /**
     * Find the first Organization_group that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_groupFindFirstOrThrowArgs} args - Arguments to find a Organization_group
     * @example
     * // Get one Organization_group
     * const organization_group = await prisma.organization_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organization_groupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, organization_groupFindFirstOrThrowArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Find zero or more Organization_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_groups
     * const organization_groups = await prisma.organization_group.findMany()
     * 
     * // Get first 10 Organization_groups
     * const organization_groups = await prisma.organization_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organization_groupWithIdOnly = await prisma.organization_group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organization_groupFindManyArgs>(
      args?: SelectSubset<T, organization_groupFindManyArgs>
    ): Prisma.PrismaPromise<Array<organization_groupGetPayload<T>>>

    /**
     * Create a Organization_group.
     * @param {organization_groupCreateArgs} args - Arguments to create a Organization_group.
     * @example
     * // Create one Organization_group
     * const Organization_group = await prisma.organization_group.create({
     *   data: {
     *     // ... data to create a Organization_group
     *   }
     * })
     * 
    **/
    create<T extends organization_groupCreateArgs>(
      args: SelectSubset<T, organization_groupCreateArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Delete a Organization_group.
     * @param {organization_groupDeleteArgs} args - Arguments to delete one Organization_group.
     * @example
     * // Delete one Organization_group
     * const Organization_group = await prisma.organization_group.delete({
     *   where: {
     *     // ... filter to delete one Organization_group
     *   }
     * })
     * 
    **/
    delete<T extends organization_groupDeleteArgs>(
      args: SelectSubset<T, organization_groupDeleteArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Update one Organization_group.
     * @param {organization_groupUpdateArgs} args - Arguments to update one Organization_group.
     * @example
     * // Update one Organization_group
     * const organization_group = await prisma.organization_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organization_groupUpdateArgs>(
      args: SelectSubset<T, organization_groupUpdateArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Delete zero or more Organization_groups.
     * @param {organization_groupDeleteManyArgs} args - Arguments to filter Organization_groups to delete.
     * @example
     * // Delete a few Organization_groups
     * const { count } = await prisma.organization_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organization_groupDeleteManyArgs>(
      args?: SelectSubset<T, organization_groupDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_groups
     * const organization_group = await prisma.organization_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organization_groupUpdateManyArgs>(
      args: SelectSubset<T, organization_groupUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization_group.
     * @param {organization_groupUpsertArgs} args - Arguments to update or create a Organization_group.
     * @example
     * // Update or create a Organization_group
     * const organization_group = await prisma.organization_group.upsert({
     *   create: {
     *     // ... data to create a Organization_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_group we want to update
     *   }
     * })
    **/
    upsert<T extends organization_groupUpsertArgs>(
      args: SelectSubset<T, organization_groupUpsertArgs>
    ): Prisma__organization_groupClient<organization_groupGetPayload<T>>

    /**
     * Count the number of Organization_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_groupCountArgs} args - Arguments to filter Organization_groups to count.
     * @example
     * // Count the number of Organization_groups
     * const count = await prisma.organization_group.count({
     *   where: {
     *     // ... the filter for the Organization_groups we want to count
     *   }
     * })
    **/
    count<T extends organization_groupCountArgs>(
      args?: Subset<T, organization_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Organization_groupAggregateArgs>(args: Subset<T, Organization_groupAggregateArgs>): Prisma.PrismaPromise<GetOrganization_groupAggregateType<T>>

    /**
     * Group by Organization_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Organization_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Organization_groupGroupByArgs['orderBy'] }
        : { orderBy?: Organization_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Organization_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for organization_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__organization_groupClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * organization_group base type for findUnique actions
   */
  export type organization_groupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter, which organization_group to fetch.
     */
    where: organization_groupWhereUniqueInput
  }

  /**
   * organization_group findUnique
   */
  export interface organization_groupFindUniqueArgs extends organization_groupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_group findUniqueOrThrow
   */
  export type organization_groupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter, which organization_group to fetch.
     */
    where: organization_groupWhereUniqueInput
  }


  /**
   * organization_group base type for findFirst actions
   */
  export type organization_groupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter, which organization_group to fetch.
     */
    where?: organization_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_groups to fetch.
     */
    orderBy?: Enumerable<organization_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_groups.
     */
    cursor?: organization_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_groups.
     */
    distinct?: Enumerable<Organization_groupScalarFieldEnum>
  }

  /**
   * organization_group findFirst
   */
  export interface organization_groupFindFirstArgs extends organization_groupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * organization_group findFirstOrThrow
   */
  export type organization_groupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter, which organization_group to fetch.
     */
    where?: organization_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_groups to fetch.
     */
    orderBy?: Enumerable<organization_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_groups.
     */
    cursor?: organization_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_groups.
     */
    distinct?: Enumerable<Organization_groupScalarFieldEnum>
  }


  /**
   * organization_group findMany
   */
  export type organization_groupFindManyArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter, which organization_groups to fetch.
     */
    where?: organization_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_groups to fetch.
     */
    orderBy?: Enumerable<organization_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organization_groups.
     */
    cursor?: organization_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_groups.
     */
    skip?: number
    distinct?: Enumerable<Organization_groupScalarFieldEnum>
  }


  /**
   * organization_group create
   */
  export type organization_groupCreateArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * The data needed to create a organization_group.
     */
    data: XOR<organization_groupCreateInput, organization_groupUncheckedCreateInput>
  }


  /**
   * organization_group update
   */
  export type organization_groupUpdateArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * The data needed to update a organization_group.
     */
    data: XOR<organization_groupUpdateInput, organization_groupUncheckedUpdateInput>
    /**
     * Choose, which organization_group to update.
     */
    where: organization_groupWhereUniqueInput
  }


  /**
   * organization_group updateMany
   */
  export type organization_groupUpdateManyArgs = {
    /**
     * The data used to update organization_groups.
     */
    data: XOR<organization_groupUpdateManyMutationInput, organization_groupUncheckedUpdateManyInput>
    /**
     * Filter which organization_groups to update
     */
    where?: organization_groupWhereInput
  }


  /**
   * organization_group upsert
   */
  export type organization_groupUpsertArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * The filter to search for the organization_group to update in case it exists.
     */
    where: organization_groupWhereUniqueInput
    /**
     * In case the organization_group found by the `where` argument doesn't exist, create a new organization_group with this data.
     */
    create: XOR<organization_groupCreateInput, organization_groupUncheckedCreateInput>
    /**
     * In case the organization_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organization_groupUpdateInput, organization_groupUncheckedUpdateInput>
  }


  /**
   * organization_group delete
   */
  export type organization_groupDeleteArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
    /**
     * Filter which organization_group to delete.
     */
    where: organization_groupWhereUniqueInput
  }


  /**
   * organization_group deleteMany
   */
  export type organization_groupDeleteManyArgs = {
    /**
     * Filter which organization_groups to delete
     */
    where?: organization_groupWhereInput
  }


  /**
   * organization_group without action
   */
  export type organization_groupArgs = {
    /**
     * Select specific fields to fetch from the organization_group
     */
    select?: organization_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_groupInclude | null
  }



  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
    user_group_id: number | null
    rfid_card_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    org_id: number | null
    user_group_id: number | null
    rfid_card_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone_no: string | null
    address: string | null
    description: string | null
    user_img: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone_no: string | null
    address: string | null
    description: string | null
    user_img: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    org_id: number
    name: number
    email: number
    password: number
    phone_no: number
    address: number
    description: number
    user_img: number
    user_group_id: number
    rfid_card_id: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    org_id?: true
    user_group_id?: true
    rfid_card_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    org_id?: true
    user_group_id?: true
    rfid_card_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    email?: true
    password?: true
    phone_no?: true
    address?: true
    description?: true
    user_img?: true
    user_group_id?: true
    rfid_card_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    email?: true
    password?: true
    phone_no?: true
    address?: true
    description?: true
    user_img?: true
    user_group_id?: true
    rfid_card_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    email?: true
    password?: true
    phone_no?: true
    address?: true
    description?: true
    user_img?: true
    user_group_id?: true
    rfid_card_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    org_id: number
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    org_id?: boolean
    org?: boolean | organizationArgs
    name?: boolean
    email?: boolean
    password?: boolean
    phone_no?: boolean
    address?: boolean
    description?: boolean
    user_img?: boolean
    user_group_id?: boolean
    rfid_card_id?: boolean
    rfid_card?: boolean | rfid_cardArgs
    user_group?: boolean | user_groupArgs
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type userInclude = {
    org?: boolean | organizationArgs
    rfid_card?: boolean | rfid_cardArgs
    user_group?: boolean | user_groupArgs
  }

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> :
        P extends 'rfid_card' ? rfid_cardGetPayload<S['include'][P]> | null :
        P extends 'user_group' ? user_groupGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> :
        P extends 'rfid_card' ? rfid_cardGetPayload<S['select'][P]> | null :
        P extends 'user_group' ? user_groupGetPayload<S['select'][P]> | null :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    rfid_card<T extends rfid_cardArgs= {}>(args?: Subset<T, rfid_cardArgs>): Prisma__rfid_cardClient<rfid_cardGetPayload<T> | Null>;

    user_group<T extends user_groupArgs= {}>(args?: Subset<T, user_groupArgs>): Prisma__user_groupClient<user_groupGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
  }



  /**
   * Model user_group
   */


  export type AggregateUser_group = {
    _count: User_groupCountAggregateOutputType | null
    _avg: User_groupAvgAggregateOutputType | null
    _sum: User_groupSumAggregateOutputType | null
    _min: User_groupMinAggregateOutputType | null
    _max: User_groupMaxAggregateOutputType | null
  }

  export type User_groupAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
    permission_id: number | null
  }

  export type User_groupSumAggregateOutputType = {
    id: number | null
    org_id: number | null
    permission_id: number | null
  }

  export type User_groupMinAggregateOutputType = {
    id: number | null
    org_id: number | null
    group_name: string | null
    permission_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type User_groupMaxAggregateOutputType = {
    id: number | null
    org_id: number | null
    group_name: string | null
    permission_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type User_groupCountAggregateOutputType = {
    id: number
    org_id: number
    group_name: number
    permission_id: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type User_groupAvgAggregateInputType = {
    id?: true
    org_id?: true
    permission_id?: true
  }

  export type User_groupSumAggregateInputType = {
    id?: true
    org_id?: true
    permission_id?: true
  }

  export type User_groupMinAggregateInputType = {
    id?: true
    org_id?: true
    group_name?: true
    permission_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type User_groupMaxAggregateInputType = {
    id?: true
    org_id?: true
    group_name?: true
    permission_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type User_groupCountAggregateInputType = {
    id?: true
    org_id?: true
    group_name?: true
    permission_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type User_groupAggregateArgs = {
    /**
     * Filter which user_group to aggregate.
     */
    where?: user_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_groups
    **/
    _count?: true | User_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_groupMaxAggregateInputType
  }

  export type GetUser_groupAggregateType<T extends User_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_group[P]>
      : GetScalarType<T[P], AggregateUser_group[P]>
  }




  export type User_groupGroupByArgs = {
    where?: user_groupWhereInput
    orderBy?: Enumerable<user_groupOrderByWithAggregationInput>
    by: User_groupScalarFieldEnum[]
    having?: user_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_groupCountAggregateInputType | true
    _avg?: User_groupAvgAggregateInputType
    _sum?: User_groupSumAggregateInputType
    _min?: User_groupMinAggregateInputType
    _max?: User_groupMaxAggregateInputType
  }


  export type User_groupGroupByOutputType = {
    id: number
    org_id: number
    group_name: string
    permission_id: number
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date
    _count: User_groupCountAggregateOutputType | null
    _avg: User_groupAvgAggregateOutputType | null
    _sum: User_groupSumAggregateOutputType | null
    _min: User_groupMinAggregateOutputType | null
    _max: User_groupMaxAggregateOutputType | null
  }

  type GetUser_groupGroupByPayload<T extends User_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_groupGroupByOutputType[P]>
            : GetScalarType<T[P], User_groupGroupByOutputType[P]>
        }
      >
    >


  export type user_groupSelect = {
    id?: boolean
    org_id?: boolean
    org?: boolean | organizationArgs
    group_name?: boolean
    permission_id?: boolean
    permission?: boolean | permissionArgs
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | user_group$userArgs
    students?: boolean | user_group$studentsArgs
    _count?: boolean | User_groupCountOutputTypeArgs
  }


  export type user_groupInclude = {
    org?: boolean | organizationArgs
    permission?: boolean | permissionArgs
    user?: boolean | user_group$userArgs
    students?: boolean | user_group$studentsArgs
    _count?: boolean | User_groupCountOutputTypeArgs
  }

  export type user_groupGetPayload<S extends boolean | null | undefined | user_groupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_group :
    S extends undefined ? never :
    S extends { include: any } & (user_groupArgs | user_groupFindManyArgs)
    ? user_group  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> :
        P extends 'permission' ? permissionGetPayload<S['include'][P]> :
        P extends 'user' ? Array < userGetPayload<S['include'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? User_groupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_groupArgs | user_groupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> :
        P extends 'permission' ? permissionGetPayload<S['select'][P]> :
        P extends 'user' ? Array < userGetPayload<S['select'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? User_groupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user_group ? user_group[P] : never
  } 
      : user_group


  type user_groupCountArgs = 
    Omit<user_groupFindManyArgs, 'select' | 'include'> & {
      select?: User_groupCountAggregateInputType | true
    }

  export interface user_groupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_group that matches the filter.
     * @param {user_groupFindUniqueArgs} args - Arguments to find a User_group
     * @example
     * // Get one User_group
     * const user_group = await prisma.user_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_groupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_groupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_group'> extends True ? Prisma__user_groupClient<user_groupGetPayload<T>> : Prisma__user_groupClient<user_groupGetPayload<T> | null, null>

    /**
     * Find one User_group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_groupFindUniqueOrThrowArgs} args - Arguments to find a User_group
     * @example
     * // Get one User_group
     * const user_group = await prisma.user_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_groupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_groupFindUniqueOrThrowArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Find the first User_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupFindFirstArgs} args - Arguments to find a User_group
     * @example
     * // Get one User_group
     * const user_group = await prisma.user_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_groupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_groupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_group'> extends True ? Prisma__user_groupClient<user_groupGetPayload<T>> : Prisma__user_groupClient<user_groupGetPayload<T> | null, null>

    /**
     * Find the first User_group that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupFindFirstOrThrowArgs} args - Arguments to find a User_group
     * @example
     * // Get one User_group
     * const user_group = await prisma.user_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_groupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_groupFindFirstOrThrowArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Find zero or more User_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_groups
     * const user_groups = await prisma.user_group.findMany()
     * 
     * // Get first 10 User_groups
     * const user_groups = await prisma.user_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_groupWithIdOnly = await prisma.user_group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_groupFindManyArgs>(
      args?: SelectSubset<T, user_groupFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_groupGetPayload<T>>>

    /**
     * Create a User_group.
     * @param {user_groupCreateArgs} args - Arguments to create a User_group.
     * @example
     * // Create one User_group
     * const User_group = await prisma.user_group.create({
     *   data: {
     *     // ... data to create a User_group
     *   }
     * })
     * 
    **/
    create<T extends user_groupCreateArgs>(
      args: SelectSubset<T, user_groupCreateArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Delete a User_group.
     * @param {user_groupDeleteArgs} args - Arguments to delete one User_group.
     * @example
     * // Delete one User_group
     * const User_group = await prisma.user_group.delete({
     *   where: {
     *     // ... filter to delete one User_group
     *   }
     * })
     * 
    **/
    delete<T extends user_groupDeleteArgs>(
      args: SelectSubset<T, user_groupDeleteArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Update one User_group.
     * @param {user_groupUpdateArgs} args - Arguments to update one User_group.
     * @example
     * // Update one User_group
     * const user_group = await prisma.user_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_groupUpdateArgs>(
      args: SelectSubset<T, user_groupUpdateArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Delete zero or more User_groups.
     * @param {user_groupDeleteManyArgs} args - Arguments to filter User_groups to delete.
     * @example
     * // Delete a few User_groups
     * const { count } = await prisma.user_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_groupDeleteManyArgs>(
      args?: SelectSubset<T, user_groupDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_groups
     * const user_group = await prisma.user_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_groupUpdateManyArgs>(
      args: SelectSubset<T, user_groupUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_group.
     * @param {user_groupUpsertArgs} args - Arguments to update or create a User_group.
     * @example
     * // Update or create a User_group
     * const user_group = await prisma.user_group.upsert({
     *   create: {
     *     // ... data to create a User_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_group we want to update
     *   }
     * })
    **/
    upsert<T extends user_groupUpsertArgs>(
      args: SelectSubset<T, user_groupUpsertArgs>
    ): Prisma__user_groupClient<user_groupGetPayload<T>>

    /**
     * Count the number of User_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_groupCountArgs} args - Arguments to filter User_groups to count.
     * @example
     * // Count the number of User_groups
     * const count = await prisma.user_group.count({
     *   where: {
     *     // ... the filter for the User_groups we want to count
     *   }
     * })
    **/
    count<T extends user_groupCountArgs>(
      args?: Subset<T, user_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_groupAggregateArgs>(args: Subset<T, User_groupAggregateArgs>): Prisma.PrismaPromise<GetUser_groupAggregateType<T>>

    /**
     * Group by User_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_groupGroupByArgs['orderBy'] }
        : { orderBy?: User_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_groupClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    permission<T extends permissionArgs= {}>(args?: Subset<T, permissionArgs>): Prisma__permissionClient<permissionGetPayload<T> | Null>;

    user<T extends user_group$userArgs= {}>(args?: Subset<T, user_group$userArgs>): Prisma.PrismaPromise<Array<userGetPayload<T>>| Null>;

    students<T extends user_group$studentsArgs= {}>(args?: Subset<T, user_group$studentsArgs>): Prisma.PrismaPromise<Array<studentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user_group base type for findUnique actions
   */
  export type user_groupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter, which user_group to fetch.
     */
    where: user_groupWhereUniqueInput
  }

  /**
   * user_group findUnique
   */
  export interface user_groupFindUniqueArgs extends user_groupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_group findUniqueOrThrow
   */
  export type user_groupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter, which user_group to fetch.
     */
    where: user_groupWhereUniqueInput
  }


  /**
   * user_group base type for findFirst actions
   */
  export type user_groupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter, which user_group to fetch.
     */
    where?: user_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_groups.
     */
    cursor?: user_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_groups.
     */
    distinct?: Enumerable<User_groupScalarFieldEnum>
  }

  /**
   * user_group findFirst
   */
  export interface user_groupFindFirstArgs extends user_groupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_group findFirstOrThrow
   */
  export type user_groupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter, which user_group to fetch.
     */
    where?: user_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_groups.
     */
    cursor?: user_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_groups.
     */
    distinct?: Enumerable<User_groupScalarFieldEnum>
  }


  /**
   * user_group findMany
   */
  export type user_groupFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter, which user_groups to fetch.
     */
    where?: user_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_groups to fetch.
     */
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_groups.
     */
    cursor?: user_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_groups.
     */
    skip?: number
    distinct?: Enumerable<User_groupScalarFieldEnum>
  }


  /**
   * user_group create
   */
  export type user_groupCreateArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * The data needed to create a user_group.
     */
    data: XOR<user_groupCreateInput, user_groupUncheckedCreateInput>
  }


  /**
   * user_group update
   */
  export type user_groupUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * The data needed to update a user_group.
     */
    data: XOR<user_groupUpdateInput, user_groupUncheckedUpdateInput>
    /**
     * Choose, which user_group to update.
     */
    where: user_groupWhereUniqueInput
  }


  /**
   * user_group updateMany
   */
  export type user_groupUpdateManyArgs = {
    /**
     * The data used to update user_groups.
     */
    data: XOR<user_groupUpdateManyMutationInput, user_groupUncheckedUpdateManyInput>
    /**
     * Filter which user_groups to update
     */
    where?: user_groupWhereInput
  }


  /**
   * user_group upsert
   */
  export type user_groupUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * The filter to search for the user_group to update in case it exists.
     */
    where: user_groupWhereUniqueInput
    /**
     * In case the user_group found by the `where` argument doesn't exist, create a new user_group with this data.
     */
    create: XOR<user_groupCreateInput, user_groupUncheckedCreateInput>
    /**
     * In case the user_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_groupUpdateInput, user_groupUncheckedUpdateInput>
  }


  /**
   * user_group delete
   */
  export type user_groupDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    /**
     * Filter which user_group to delete.
     */
    where: user_groupWhereUniqueInput
  }


  /**
   * user_group deleteMany
   */
  export type user_groupDeleteManyArgs = {
    /**
     * Filter which user_groups to delete
     */
    where?: user_groupWhereInput
  }


  /**
   * user_group.user
   */
  export type user_group$userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithRelationInput>
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user_group.students
   */
  export type user_group$studentsArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    where?: studentsWhereInput
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }


  /**
   * user_group without action
   */
  export type user_groupArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
  }



  /**
   * Model permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs = {
    where?: permissionWhereInput
    orderBy?: Enumerable<permissionOrderByWithAggregationInput>
    by: PermissionScalarFieldEnum[]
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    id: number
    name: string
    description: string
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user_group?: boolean | permission$user_groupArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }


  export type permissionInclude = {
    user_group?: boolean | permission$user_groupArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }

  export type permissionGetPayload<S extends boolean | null | undefined | permissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? permission :
    S extends undefined ? never :
    S extends { include: any } & (permissionArgs | permissionFindManyArgs)
    ? permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_group' ? Array < user_groupGetPayload<S['include'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (permissionArgs | permissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_group' ? Array < user_groupGetPayload<S['select'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof permission ? permission[P] : never
  } 
      : permission


  type permissionCountArgs = 
    Omit<permissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends permissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, permissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'permission'> extends True ? Prisma__permissionClient<permissionGetPayload<T>> : Prisma__permissionClient<permissionGetPayload<T> | null, null>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, permissionFindUniqueOrThrowArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends permissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, permissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'permission'> extends True ? Prisma__permissionClient<permissionGetPayload<T>> : Prisma__permissionClient<permissionGetPayload<T> | null, null>

    /**
     * Find the first Permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, permissionFindFirstOrThrowArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends permissionFindManyArgs>(
      args?: SelectSubset<T, permissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<permissionGetPayload<T>>>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends permissionCreateArgs>(
      args: SelectSubset<T, permissionCreateArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends permissionDeleteArgs>(
      args: SelectSubset<T, permissionDeleteArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends permissionUpdateArgs>(
      args: SelectSubset<T, permissionUpdateArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends permissionDeleteManyArgs>(
      args?: SelectSubset<T, permissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends permissionUpdateManyArgs>(
      args: SelectSubset<T, permissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends permissionUpsertArgs>(
      args: SelectSubset<T, permissionUpsertArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__permissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user_group<T extends permission$user_groupArgs= {}>(args?: Subset<T, permission$user_groupArgs>): Prisma.PrismaPromise<Array<user_groupGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * permission base type for findUnique actions
   */
  export type permissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUnique
   */
  export interface permissionFindUniqueArgs extends permissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission base type for findFirst actions
   */
  export type permissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }

  /**
   * permission findFirst
   */
  export interface permissionFindFirstArgs extends permissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * permission findMany
   */
  export type permissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * permission create
   */
  export type permissionCreateArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }


  /**
   * permission update
   */
  export type permissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
  }


  /**
   * permission upsert
   */
  export type permissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }


  /**
   * permission delete
   */
  export type permissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
  }


  /**
   * permission.user_group
   */
  export type permission$user_groupArgs = {
    /**
     * Select specific fields to fetch from the user_group
     */
    select?: user_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_groupInclude | null
    where?: user_groupWhereInput
    orderBy?: Enumerable<user_groupOrderByWithRelationInput>
    cursor?: user_groupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_groupScalarFieldEnum>
  }


  /**
   * permission without action
   */
  export type permissionArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
  }



  /**
   * Model doors
   */


  export type AggregateDoors = {
    _count: DoorsCountAggregateOutputType | null
    _avg: DoorsAvgAggregateOutputType | null
    _sum: DoorsSumAggregateOutputType | null
    _min: DoorsMinAggregateOutputType | null
    _max: DoorsMaxAggregateOutputType | null
  }

  export type DoorsAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
  }

  export type DoorsSumAggregateOutputType = {
    id: number | null
    org_id: number | null
  }

  export type DoorsMinAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    description: string | null
    door_no: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DoorsMaxAggregateOutputType = {
    id: number | null
    org_id: number | null
    name: string | null
    description: string | null
    door_no: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DoorsCountAggregateOutputType = {
    id: number
    org_id: number
    name: number
    description: number
    door_no: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type DoorsAvgAggregateInputType = {
    id?: true
    org_id?: true
  }

  export type DoorsSumAggregateInputType = {
    id?: true
    org_id?: true
  }

  export type DoorsMinAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    door_no?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DoorsMaxAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    door_no?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DoorsCountAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    description?: true
    door_no?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DoorsAggregateArgs = {
    /**
     * Filter which doors to aggregate.
     */
    where?: doorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doors to fetch.
     */
    orderBy?: Enumerable<doorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doors
    **/
    _count?: true | DoorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoorsMaxAggregateInputType
  }

  export type GetDoorsAggregateType<T extends DoorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoors[P]>
      : GetScalarType<T[P], AggregateDoors[P]>
  }




  export type DoorsGroupByArgs = {
    where?: doorsWhereInput
    orderBy?: Enumerable<doorsOrderByWithAggregationInput>
    by: DoorsScalarFieldEnum[]
    having?: doorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoorsCountAggregateInputType | true
    _avg?: DoorsAvgAggregateInputType
    _sum?: DoorsSumAggregateInputType
    _min?: DoorsMinAggregateInputType
    _max?: DoorsMaxAggregateInputType
  }


  export type DoorsGroupByOutputType = {
    id: number
    org_id: number
    name: string
    description: string
    door_no: string
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date
    _count: DoorsCountAggregateOutputType | null
    _avg: DoorsAvgAggregateOutputType | null
    _sum: DoorsSumAggregateOutputType | null
    _min: DoorsMinAggregateOutputType | null
    _max: DoorsMaxAggregateOutputType | null
  }

  type GetDoorsGroupByPayload<T extends DoorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DoorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoorsGroupByOutputType[P]>
        }
      >
    >


  export type doorsSelect = {
    id?: boolean
    org_id?: boolean
    org?: boolean | organizationArgs
    name?: boolean
    description?: boolean
    door_no?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    inout_log?: boolean | doors$inout_logArgs
    devices_setup?: boolean | doors$devices_setupArgs
    _count?: boolean | DoorsCountOutputTypeArgs
  }


  export type doorsInclude = {
    org?: boolean | organizationArgs
    inout_log?: boolean | doors$inout_logArgs
    devices_setup?: boolean | doors$devices_setupArgs
    _count?: boolean | DoorsCountOutputTypeArgs
  }

  export type doorsGetPayload<S extends boolean | null | undefined | doorsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? doors :
    S extends undefined ? never :
    S extends { include: any } & (doorsArgs | doorsFindManyArgs)
    ? doors  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['include'][P]>>  :
        P extends 'devices_setup' ? Array < devices_setupGetPayload<S['include'][P]>>  :
        P extends '_count' ? DoorsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (doorsArgs | doorsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['select'][P]>>  :
        P extends 'devices_setup' ? Array < devices_setupGetPayload<S['select'][P]>>  :
        P extends '_count' ? DoorsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof doors ? doors[P] : never
  } 
      : doors


  type doorsCountArgs = 
    Omit<doorsFindManyArgs, 'select' | 'include'> & {
      select?: DoorsCountAggregateInputType | true
    }

  export interface doorsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Doors that matches the filter.
     * @param {doorsFindUniqueArgs} args - Arguments to find a Doors
     * @example
     * // Get one Doors
     * const doors = await prisma.doors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends doorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, doorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'doors'> extends True ? Prisma__doorsClient<doorsGetPayload<T>> : Prisma__doorsClient<doorsGetPayload<T> | null, null>

    /**
     * Find one Doors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {doorsFindUniqueOrThrowArgs} args - Arguments to find a Doors
     * @example
     * // Get one Doors
     * const doors = await prisma.doors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends doorsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, doorsFindUniqueOrThrowArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Find the first Doors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doorsFindFirstArgs} args - Arguments to find a Doors
     * @example
     * // Get one Doors
     * const doors = await prisma.doors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends doorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, doorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'doors'> extends True ? Prisma__doorsClient<doorsGetPayload<T>> : Prisma__doorsClient<doorsGetPayload<T> | null, null>

    /**
     * Find the first Doors that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doorsFindFirstOrThrowArgs} args - Arguments to find a Doors
     * @example
     * // Get one Doors
     * const doors = await prisma.doors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends doorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, doorsFindFirstOrThrowArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Find zero or more Doors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doors
     * const doors = await prisma.doors.findMany()
     * 
     * // Get first 10 Doors
     * const doors = await prisma.doors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doorsWithIdOnly = await prisma.doors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends doorsFindManyArgs>(
      args?: SelectSubset<T, doorsFindManyArgs>
    ): Prisma.PrismaPromise<Array<doorsGetPayload<T>>>

    /**
     * Create a Doors.
     * @param {doorsCreateArgs} args - Arguments to create a Doors.
     * @example
     * // Create one Doors
     * const Doors = await prisma.doors.create({
     *   data: {
     *     // ... data to create a Doors
     *   }
     * })
     * 
    **/
    create<T extends doorsCreateArgs>(
      args: SelectSubset<T, doorsCreateArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Delete a Doors.
     * @param {doorsDeleteArgs} args - Arguments to delete one Doors.
     * @example
     * // Delete one Doors
     * const Doors = await prisma.doors.delete({
     *   where: {
     *     // ... filter to delete one Doors
     *   }
     * })
     * 
    **/
    delete<T extends doorsDeleteArgs>(
      args: SelectSubset<T, doorsDeleteArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Update one Doors.
     * @param {doorsUpdateArgs} args - Arguments to update one Doors.
     * @example
     * // Update one Doors
     * const doors = await prisma.doors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends doorsUpdateArgs>(
      args: SelectSubset<T, doorsUpdateArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Delete zero or more Doors.
     * @param {doorsDeleteManyArgs} args - Arguments to filter Doors to delete.
     * @example
     * // Delete a few Doors
     * const { count } = await prisma.doors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends doorsDeleteManyArgs>(
      args?: SelectSubset<T, doorsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doors
     * const doors = await prisma.doors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends doorsUpdateManyArgs>(
      args: SelectSubset<T, doorsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doors.
     * @param {doorsUpsertArgs} args - Arguments to update or create a Doors.
     * @example
     * // Update or create a Doors
     * const doors = await prisma.doors.upsert({
     *   create: {
     *     // ... data to create a Doors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doors we want to update
     *   }
     * })
    **/
    upsert<T extends doorsUpsertArgs>(
      args: SelectSubset<T, doorsUpsertArgs>
    ): Prisma__doorsClient<doorsGetPayload<T>>

    /**
     * Count the number of Doors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doorsCountArgs} args - Arguments to filter Doors to count.
     * @example
     * // Count the number of Doors
     * const count = await prisma.doors.count({
     *   where: {
     *     // ... the filter for the Doors we want to count
     *   }
     * })
    **/
    count<T extends doorsCountArgs>(
      args?: Subset<T, doorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoorsAggregateArgs>(args: Subset<T, DoorsAggregateArgs>): Prisma.PrismaPromise<GetDoorsAggregateType<T>>

    /**
     * Group by Doors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoorsGroupByArgs['orderBy'] }
        : { orderBy?: DoorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for doors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__doorsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    inout_log<T extends doors$inout_logArgs= {}>(args?: Subset<T, doors$inout_logArgs>): Prisma.PrismaPromise<Array<inout_logGetPayload<T>>| Null>;

    devices_setup<T extends doors$devices_setupArgs= {}>(args?: Subset<T, doors$devices_setupArgs>): Prisma.PrismaPromise<Array<devices_setupGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * doors base type for findUnique actions
   */
  export type doorsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter, which doors to fetch.
     */
    where: doorsWhereUniqueInput
  }

  /**
   * doors findUnique
   */
  export interface doorsFindUniqueArgs extends doorsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * doors findUniqueOrThrow
   */
  export type doorsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter, which doors to fetch.
     */
    where: doorsWhereUniqueInput
  }


  /**
   * doors base type for findFirst actions
   */
  export type doorsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter, which doors to fetch.
     */
    where?: doorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doors to fetch.
     */
    orderBy?: Enumerable<doorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doors.
     */
    cursor?: doorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doors.
     */
    distinct?: Enumerable<DoorsScalarFieldEnum>
  }

  /**
   * doors findFirst
   */
  export interface doorsFindFirstArgs extends doorsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * doors findFirstOrThrow
   */
  export type doorsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter, which doors to fetch.
     */
    where?: doorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doors to fetch.
     */
    orderBy?: Enumerable<doorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doors.
     */
    cursor?: doorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doors.
     */
    distinct?: Enumerable<DoorsScalarFieldEnum>
  }


  /**
   * doors findMany
   */
  export type doorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter, which doors to fetch.
     */
    where?: doorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doors to fetch.
     */
    orderBy?: Enumerable<doorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doors.
     */
    cursor?: doorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doors.
     */
    skip?: number
    distinct?: Enumerable<DoorsScalarFieldEnum>
  }


  /**
   * doors create
   */
  export type doorsCreateArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * The data needed to create a doors.
     */
    data: XOR<doorsCreateInput, doorsUncheckedCreateInput>
  }


  /**
   * doors update
   */
  export type doorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * The data needed to update a doors.
     */
    data: XOR<doorsUpdateInput, doorsUncheckedUpdateInput>
    /**
     * Choose, which doors to update.
     */
    where: doorsWhereUniqueInput
  }


  /**
   * doors updateMany
   */
  export type doorsUpdateManyArgs = {
    /**
     * The data used to update doors.
     */
    data: XOR<doorsUpdateManyMutationInput, doorsUncheckedUpdateManyInput>
    /**
     * Filter which doors to update
     */
    where?: doorsWhereInput
  }


  /**
   * doors upsert
   */
  export type doorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * The filter to search for the doors to update in case it exists.
     */
    where: doorsWhereUniqueInput
    /**
     * In case the doors found by the `where` argument doesn't exist, create a new doors with this data.
     */
    create: XOR<doorsCreateInput, doorsUncheckedCreateInput>
    /**
     * In case the doors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doorsUpdateInput, doorsUncheckedUpdateInput>
  }


  /**
   * doors delete
   */
  export type doorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
    /**
     * Filter which doors to delete.
     */
    where: doorsWhereUniqueInput
  }


  /**
   * doors deleteMany
   */
  export type doorsDeleteManyArgs = {
    /**
     * Filter which doors to delete
     */
    where?: doorsWhereInput
  }


  /**
   * doors.inout_log
   */
  export type doors$inout_logArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    where?: inout_logWhereInput
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    cursor?: inout_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }


  /**
   * doors.devices_setup
   */
  export type doors$devices_setupArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    where?: devices_setupWhereInput
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    cursor?: devices_setupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Devices_setupScalarFieldEnum>
  }


  /**
   * doors without action
   */
  export type doorsArgs = {
    /**
     * Select specific fields to fetch from the doors
     */
    select?: doorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doorsInclude | null
  }



  /**
   * Model device_type
   */


  export type AggregateDevice_type = {
    _count: Device_typeCountAggregateOutputType | null
    _avg: Device_typeAvgAggregateOutputType | null
    _sum: Device_typeSumAggregateOutputType | null
    _min: Device_typeMinAggregateOutputType | null
    _max: Device_typeMaxAggregateOutputType | null
  }

  export type Device_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Device_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Device_typeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    operation: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Device_typeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    operation: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Device_typeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    operation: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Device_typeAvgAggregateInputType = {
    id?: true
  }

  export type Device_typeSumAggregateInputType = {
    id?: true
  }

  export type Device_typeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    operation?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Device_typeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    operation?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Device_typeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    operation?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Device_typeAggregateArgs = {
    /**
     * Filter which device_type to aggregate.
     */
    where?: device_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_types to fetch.
     */
    orderBy?: Enumerable<device_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: device_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned device_types
    **/
    _count?: true | Device_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Device_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Device_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Device_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Device_typeMaxAggregateInputType
  }

  export type GetDevice_typeAggregateType<T extends Device_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice_type[P]>
      : GetScalarType<T[P], AggregateDevice_type[P]>
  }




  export type Device_typeGroupByArgs = {
    where?: device_typeWhereInput
    orderBy?: Enumerable<device_typeOrderByWithAggregationInput>
    by: Device_typeScalarFieldEnum[]
    having?: device_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Device_typeCountAggregateInputType | true
    _avg?: Device_typeAvgAggregateInputType
    _sum?: Device_typeSumAggregateInputType
    _min?: Device_typeMinAggregateInputType
    _max?: Device_typeMaxAggregateInputType
  }


  export type Device_typeGroupByOutputType = {
    id: number
    name: string
    description: string
    operation: string
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date
    _count: Device_typeCountAggregateOutputType | null
    _avg: Device_typeAvgAggregateOutputType | null
    _sum: Device_typeSumAggregateOutputType | null
    _min: Device_typeMinAggregateOutputType | null
    _max: Device_typeMaxAggregateOutputType | null
  }

  type GetDevice_typeGroupByPayload<T extends Device_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Device_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Device_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Device_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Device_typeGroupByOutputType[P]>
        }
      >
    >


  export type device_typeSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    operation?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    devices_setup?: boolean | device_type$devices_setupArgs
    _count?: boolean | Device_typeCountOutputTypeArgs
  }


  export type device_typeInclude = {
    devices_setup?: boolean | device_type$devices_setupArgs
    _count?: boolean | Device_typeCountOutputTypeArgs
  }

  export type device_typeGetPayload<S extends boolean | null | undefined | device_typeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? device_type :
    S extends undefined ? never :
    S extends { include: any } & (device_typeArgs | device_typeFindManyArgs)
    ? device_type  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'devices_setup' ? Array < devices_setupGetPayload<S['include'][P]>>  :
        P extends '_count' ? Device_typeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (device_typeArgs | device_typeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'devices_setup' ? Array < devices_setupGetPayload<S['select'][P]>>  :
        P extends '_count' ? Device_typeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof device_type ? device_type[P] : never
  } 
      : device_type


  type device_typeCountArgs = 
    Omit<device_typeFindManyArgs, 'select' | 'include'> & {
      select?: Device_typeCountAggregateInputType | true
    }

  export interface device_typeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Device_type that matches the filter.
     * @param {device_typeFindUniqueArgs} args - Arguments to find a Device_type
     * @example
     * // Get one Device_type
     * const device_type = await prisma.device_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends device_typeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, device_typeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'device_type'> extends True ? Prisma__device_typeClient<device_typeGetPayload<T>> : Prisma__device_typeClient<device_typeGetPayload<T> | null, null>

    /**
     * Find one Device_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {device_typeFindUniqueOrThrowArgs} args - Arguments to find a Device_type
     * @example
     * // Get one Device_type
     * const device_type = await prisma.device_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends device_typeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, device_typeFindUniqueOrThrowArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Find the first Device_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_typeFindFirstArgs} args - Arguments to find a Device_type
     * @example
     * // Get one Device_type
     * const device_type = await prisma.device_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends device_typeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, device_typeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'device_type'> extends True ? Prisma__device_typeClient<device_typeGetPayload<T>> : Prisma__device_typeClient<device_typeGetPayload<T> | null, null>

    /**
     * Find the first Device_type that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_typeFindFirstOrThrowArgs} args - Arguments to find a Device_type
     * @example
     * // Get one Device_type
     * const device_type = await prisma.device_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends device_typeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, device_typeFindFirstOrThrowArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Find zero or more Device_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Device_types
     * const device_types = await prisma.device_type.findMany()
     * 
     * // Get first 10 Device_types
     * const device_types = await prisma.device_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const device_typeWithIdOnly = await prisma.device_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends device_typeFindManyArgs>(
      args?: SelectSubset<T, device_typeFindManyArgs>
    ): Prisma.PrismaPromise<Array<device_typeGetPayload<T>>>

    /**
     * Create a Device_type.
     * @param {device_typeCreateArgs} args - Arguments to create a Device_type.
     * @example
     * // Create one Device_type
     * const Device_type = await prisma.device_type.create({
     *   data: {
     *     // ... data to create a Device_type
     *   }
     * })
     * 
    **/
    create<T extends device_typeCreateArgs>(
      args: SelectSubset<T, device_typeCreateArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Delete a Device_type.
     * @param {device_typeDeleteArgs} args - Arguments to delete one Device_type.
     * @example
     * // Delete one Device_type
     * const Device_type = await prisma.device_type.delete({
     *   where: {
     *     // ... filter to delete one Device_type
     *   }
     * })
     * 
    **/
    delete<T extends device_typeDeleteArgs>(
      args: SelectSubset<T, device_typeDeleteArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Update one Device_type.
     * @param {device_typeUpdateArgs} args - Arguments to update one Device_type.
     * @example
     * // Update one Device_type
     * const device_type = await prisma.device_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends device_typeUpdateArgs>(
      args: SelectSubset<T, device_typeUpdateArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Delete zero or more Device_types.
     * @param {device_typeDeleteManyArgs} args - Arguments to filter Device_types to delete.
     * @example
     * // Delete a few Device_types
     * const { count } = await prisma.device_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends device_typeDeleteManyArgs>(
      args?: SelectSubset<T, device_typeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Device_types
     * const device_type = await prisma.device_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends device_typeUpdateManyArgs>(
      args: SelectSubset<T, device_typeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device_type.
     * @param {device_typeUpsertArgs} args - Arguments to update or create a Device_type.
     * @example
     * // Update or create a Device_type
     * const device_type = await prisma.device_type.upsert({
     *   create: {
     *     // ... data to create a Device_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device_type we want to update
     *   }
     * })
    **/
    upsert<T extends device_typeUpsertArgs>(
      args: SelectSubset<T, device_typeUpsertArgs>
    ): Prisma__device_typeClient<device_typeGetPayload<T>>

    /**
     * Count the number of Device_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_typeCountArgs} args - Arguments to filter Device_types to count.
     * @example
     * // Count the number of Device_types
     * const count = await prisma.device_type.count({
     *   where: {
     *     // ... the filter for the Device_types we want to count
     *   }
     * })
    **/
    count<T extends device_typeCountArgs>(
      args?: Subset<T, device_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Device_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Device_typeAggregateArgs>(args: Subset<T, Device_typeAggregateArgs>): Prisma.PrismaPromise<GetDevice_typeAggregateType<T>>

    /**
     * Group by Device_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Device_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Device_typeGroupByArgs['orderBy'] }
        : { orderBy?: Device_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Device_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevice_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for device_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__device_typeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    devices_setup<T extends device_type$devices_setupArgs= {}>(args?: Subset<T, device_type$devices_setupArgs>): Prisma.PrismaPromise<Array<devices_setupGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * device_type base type for findUnique actions
   */
  export type device_typeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter, which device_type to fetch.
     */
    where: device_typeWhereUniqueInput
  }

  /**
   * device_type findUnique
   */
  export interface device_typeFindUniqueArgs extends device_typeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * device_type findUniqueOrThrow
   */
  export type device_typeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter, which device_type to fetch.
     */
    where: device_typeWhereUniqueInput
  }


  /**
   * device_type base type for findFirst actions
   */
  export type device_typeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter, which device_type to fetch.
     */
    where?: device_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_types to fetch.
     */
    orderBy?: Enumerable<device_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_types.
     */
    cursor?: device_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_types.
     */
    distinct?: Enumerable<Device_typeScalarFieldEnum>
  }

  /**
   * device_type findFirst
   */
  export interface device_typeFindFirstArgs extends device_typeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * device_type findFirstOrThrow
   */
  export type device_typeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter, which device_type to fetch.
     */
    where?: device_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_types to fetch.
     */
    orderBy?: Enumerable<device_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_types.
     */
    cursor?: device_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_types.
     */
    distinct?: Enumerable<Device_typeScalarFieldEnum>
  }


  /**
   * device_type findMany
   */
  export type device_typeFindManyArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter, which device_types to fetch.
     */
    where?: device_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_types to fetch.
     */
    orderBy?: Enumerable<device_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing device_types.
     */
    cursor?: device_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_types.
     */
    skip?: number
    distinct?: Enumerable<Device_typeScalarFieldEnum>
  }


  /**
   * device_type create
   */
  export type device_typeCreateArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * The data needed to create a device_type.
     */
    data: XOR<device_typeCreateInput, device_typeUncheckedCreateInput>
  }


  /**
   * device_type update
   */
  export type device_typeUpdateArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * The data needed to update a device_type.
     */
    data: XOR<device_typeUpdateInput, device_typeUncheckedUpdateInput>
    /**
     * Choose, which device_type to update.
     */
    where: device_typeWhereUniqueInput
  }


  /**
   * device_type updateMany
   */
  export type device_typeUpdateManyArgs = {
    /**
     * The data used to update device_types.
     */
    data: XOR<device_typeUpdateManyMutationInput, device_typeUncheckedUpdateManyInput>
    /**
     * Filter which device_types to update
     */
    where?: device_typeWhereInput
  }


  /**
   * device_type upsert
   */
  export type device_typeUpsertArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * The filter to search for the device_type to update in case it exists.
     */
    where: device_typeWhereUniqueInput
    /**
     * In case the device_type found by the `where` argument doesn't exist, create a new device_type with this data.
     */
    create: XOR<device_typeCreateInput, device_typeUncheckedCreateInput>
    /**
     * In case the device_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<device_typeUpdateInput, device_typeUncheckedUpdateInput>
  }


  /**
   * device_type delete
   */
  export type device_typeDeleteArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
    /**
     * Filter which device_type to delete.
     */
    where: device_typeWhereUniqueInput
  }


  /**
   * device_type deleteMany
   */
  export type device_typeDeleteManyArgs = {
    /**
     * Filter which device_types to delete
     */
    where?: device_typeWhereInput
  }


  /**
   * device_type.devices_setup
   */
  export type device_type$devices_setupArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    where?: devices_setupWhereInput
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    cursor?: devices_setupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Devices_setupScalarFieldEnum>
  }


  /**
   * device_type without action
   */
  export type device_typeArgs = {
    /**
     * Select specific fields to fetch from the device_type
     */
    select?: device_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: device_typeInclude | null
  }



  /**
   * Model inout_log
   */


  export type AggregateInout_log = {
    _count: Inout_logCountAggregateOutputType | null
    _avg: Inout_logAvgAggregateOutputType | null
    _sum: Inout_logSumAggregateOutputType | null
    _min: Inout_logMinAggregateOutputType | null
    _max: Inout_logMaxAggregateOutputType | null
  }

  export type Inout_logAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
    device_id: number | null
    door_id: number | null
    student_id: number | null
  }

  export type Inout_logSumAggregateOutputType = {
    id: number | null
    org_id: number | null
    device_id: number | null
    door_id: number | null
    student_id: number | null
  }

  export type Inout_logMinAggregateOutputType = {
    id: number | null
    organization: string | null
    org_id: number | null
    devicePort: string | null
    device_id: number | null
    doorNo: string | null
    door_id: number | null
    studentName: string | null
    student_id: number | null
    operation: string | null
    log_date: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Inout_logMaxAggregateOutputType = {
    id: number | null
    organization: string | null
    org_id: number | null
    devicePort: string | null
    device_id: number | null
    doorNo: string | null
    door_id: number | null
    studentName: string | null
    student_id: number | null
    operation: string | null
    log_date: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Inout_logCountAggregateOutputType = {
    id: number
    organization: number
    org_id: number
    devicePort: number
    device_id: number
    doorNo: number
    door_id: number
    studentName: number
    student_id: number
    operation: number
    log_date: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Inout_logAvgAggregateInputType = {
    id?: true
    org_id?: true
    device_id?: true
    door_id?: true
    student_id?: true
  }

  export type Inout_logSumAggregateInputType = {
    id?: true
    org_id?: true
    device_id?: true
    door_id?: true
    student_id?: true
  }

  export type Inout_logMinAggregateInputType = {
    id?: true
    organization?: true
    org_id?: true
    devicePort?: true
    device_id?: true
    doorNo?: true
    door_id?: true
    studentName?: true
    student_id?: true
    operation?: true
    log_date?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Inout_logMaxAggregateInputType = {
    id?: true
    organization?: true
    org_id?: true
    devicePort?: true
    device_id?: true
    doorNo?: true
    door_id?: true
    studentName?: true
    student_id?: true
    operation?: true
    log_date?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Inout_logCountAggregateInputType = {
    id?: true
    organization?: true
    org_id?: true
    devicePort?: true
    device_id?: true
    doorNo?: true
    door_id?: true
    studentName?: true
    student_id?: true
    operation?: true
    log_date?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Inout_logAggregateArgs = {
    /**
     * Filter which inout_log to aggregate.
     */
    where?: inout_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inout_logs to fetch.
     */
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inout_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inout_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inout_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inout_logs
    **/
    _count?: true | Inout_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inout_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inout_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inout_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inout_logMaxAggregateInputType
  }

  export type GetInout_logAggregateType<T extends Inout_logAggregateArgs> = {
        [P in keyof T & keyof AggregateInout_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInout_log[P]>
      : GetScalarType<T[P], AggregateInout_log[P]>
  }




  export type Inout_logGroupByArgs = {
    where?: inout_logWhereInput
    orderBy?: Enumerable<inout_logOrderByWithAggregationInput>
    by: Inout_logScalarFieldEnum[]
    having?: inout_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inout_logCountAggregateInputType | true
    _avg?: Inout_logAvgAggregateInputType
    _sum?: Inout_logSumAggregateInputType
    _min?: Inout_logMinAggregateInputType
    _max?: Inout_logMaxAggregateInputType
  }


  export type Inout_logGroupByOutputType = {
    id: number
    organization: string | null
    org_id: number
    devicePort: string | null
    device_id: number | null
    doorNo: string | null
    door_id: number
    studentName: string | null
    student_id: number
    operation: string
    log_date: Date
    updatedAt: Date | null
    createdAt: Date
    _count: Inout_logCountAggregateOutputType | null
    _avg: Inout_logAvgAggregateOutputType | null
    _sum: Inout_logSumAggregateOutputType | null
    _min: Inout_logMinAggregateOutputType | null
    _max: Inout_logMaxAggregateOutputType | null
  }

  type GetInout_logGroupByPayload<T extends Inout_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Inout_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inout_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inout_logGroupByOutputType[P]>
            : GetScalarType<T[P], Inout_logGroupByOutputType[P]>
        }
      >
    >


  export type inout_logSelect = {
    id?: boolean
    organization?: boolean
    org_id?: boolean
    org?: boolean | organizationArgs
    devicePort?: boolean
    device_id?: boolean
    doorNo?: boolean
    door_id?: boolean
    door?: boolean | doorsArgs
    studentName?: boolean
    student_id?: boolean
    students?: boolean | studentsArgs
    operation?: boolean
    log_date?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type inout_logInclude = {
    org?: boolean | organizationArgs
    door?: boolean | doorsArgs
    students?: boolean | studentsArgs
  }

  export type inout_logGetPayload<S extends boolean | null | undefined | inout_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? inout_log :
    S extends undefined ? never :
    S extends { include: any } & (inout_logArgs | inout_logFindManyArgs)
    ? inout_log  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> :
        P extends 'door' ? doorsGetPayload<S['include'][P]> :
        P extends 'students' ? studentsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (inout_logArgs | inout_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> :
        P extends 'door' ? doorsGetPayload<S['select'][P]> :
        P extends 'students' ? studentsGetPayload<S['select'][P]> :  P extends keyof inout_log ? inout_log[P] : never
  } 
      : inout_log


  type inout_logCountArgs = 
    Omit<inout_logFindManyArgs, 'select' | 'include'> & {
      select?: Inout_logCountAggregateInputType | true
    }

  export interface inout_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Inout_log that matches the filter.
     * @param {inout_logFindUniqueArgs} args - Arguments to find a Inout_log
     * @example
     * // Get one Inout_log
     * const inout_log = await prisma.inout_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inout_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, inout_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'inout_log'> extends True ? Prisma__inout_logClient<inout_logGetPayload<T>> : Prisma__inout_logClient<inout_logGetPayload<T> | null, null>

    /**
     * Find one Inout_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inout_logFindUniqueOrThrowArgs} args - Arguments to find a Inout_log
     * @example
     * // Get one Inout_log
     * const inout_log = await prisma.inout_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inout_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, inout_logFindUniqueOrThrowArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Find the first Inout_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inout_logFindFirstArgs} args - Arguments to find a Inout_log
     * @example
     * // Get one Inout_log
     * const inout_log = await prisma.inout_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inout_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, inout_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'inout_log'> extends True ? Prisma__inout_logClient<inout_logGetPayload<T>> : Prisma__inout_logClient<inout_logGetPayload<T> | null, null>

    /**
     * Find the first Inout_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inout_logFindFirstOrThrowArgs} args - Arguments to find a Inout_log
     * @example
     * // Get one Inout_log
     * const inout_log = await prisma.inout_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inout_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, inout_logFindFirstOrThrowArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Find zero or more Inout_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inout_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inout_logs
     * const inout_logs = await prisma.inout_log.findMany()
     * 
     * // Get first 10 Inout_logs
     * const inout_logs = await prisma.inout_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inout_logWithIdOnly = await prisma.inout_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inout_logFindManyArgs>(
      args?: SelectSubset<T, inout_logFindManyArgs>
    ): Prisma.PrismaPromise<Array<inout_logGetPayload<T>>>

    /**
     * Create a Inout_log.
     * @param {inout_logCreateArgs} args - Arguments to create a Inout_log.
     * @example
     * // Create one Inout_log
     * const Inout_log = await prisma.inout_log.create({
     *   data: {
     *     // ... data to create a Inout_log
     *   }
     * })
     * 
    **/
    create<T extends inout_logCreateArgs>(
      args: SelectSubset<T, inout_logCreateArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Delete a Inout_log.
     * @param {inout_logDeleteArgs} args - Arguments to delete one Inout_log.
     * @example
     * // Delete one Inout_log
     * const Inout_log = await prisma.inout_log.delete({
     *   where: {
     *     // ... filter to delete one Inout_log
     *   }
     * })
     * 
    **/
    delete<T extends inout_logDeleteArgs>(
      args: SelectSubset<T, inout_logDeleteArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Update one Inout_log.
     * @param {inout_logUpdateArgs} args - Arguments to update one Inout_log.
     * @example
     * // Update one Inout_log
     * const inout_log = await prisma.inout_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inout_logUpdateArgs>(
      args: SelectSubset<T, inout_logUpdateArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Delete zero or more Inout_logs.
     * @param {inout_logDeleteManyArgs} args - Arguments to filter Inout_logs to delete.
     * @example
     * // Delete a few Inout_logs
     * const { count } = await prisma.inout_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inout_logDeleteManyArgs>(
      args?: SelectSubset<T, inout_logDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inout_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inout_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inout_logs
     * const inout_log = await prisma.inout_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inout_logUpdateManyArgs>(
      args: SelectSubset<T, inout_logUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inout_log.
     * @param {inout_logUpsertArgs} args - Arguments to update or create a Inout_log.
     * @example
     * // Update or create a Inout_log
     * const inout_log = await prisma.inout_log.upsert({
     *   create: {
     *     // ... data to create a Inout_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inout_log we want to update
     *   }
     * })
    **/
    upsert<T extends inout_logUpsertArgs>(
      args: SelectSubset<T, inout_logUpsertArgs>
    ): Prisma__inout_logClient<inout_logGetPayload<T>>

    /**
     * Count the number of Inout_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inout_logCountArgs} args - Arguments to filter Inout_logs to count.
     * @example
     * // Count the number of Inout_logs
     * const count = await prisma.inout_log.count({
     *   where: {
     *     // ... the filter for the Inout_logs we want to count
     *   }
     * })
    **/
    count<T extends inout_logCountArgs>(
      args?: Subset<T, inout_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inout_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inout_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inout_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inout_logAggregateArgs>(args: Subset<T, Inout_logAggregateArgs>): Prisma.PrismaPromise<GetInout_logAggregateType<T>>

    /**
     * Group by Inout_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inout_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Inout_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Inout_logGroupByArgs['orderBy'] }
        : { orderBy?: Inout_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Inout_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInout_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for inout_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__inout_logClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    door<T extends doorsArgs= {}>(args?: Subset<T, doorsArgs>): Prisma__doorsClient<doorsGetPayload<T> | Null>;

    students<T extends studentsArgs= {}>(args?: Subset<T, studentsArgs>): Prisma__studentsClient<studentsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * inout_log base type for findUnique actions
   */
  export type inout_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter, which inout_log to fetch.
     */
    where: inout_logWhereUniqueInput
  }

  /**
   * inout_log findUnique
   */
  export interface inout_logFindUniqueArgs extends inout_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * inout_log findUniqueOrThrow
   */
  export type inout_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter, which inout_log to fetch.
     */
    where: inout_logWhereUniqueInput
  }


  /**
   * inout_log base type for findFirst actions
   */
  export type inout_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter, which inout_log to fetch.
     */
    where?: inout_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inout_logs to fetch.
     */
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inout_logs.
     */
    cursor?: inout_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inout_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inout_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inout_logs.
     */
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }

  /**
   * inout_log findFirst
   */
  export interface inout_logFindFirstArgs extends inout_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * inout_log findFirstOrThrow
   */
  export type inout_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter, which inout_log to fetch.
     */
    where?: inout_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inout_logs to fetch.
     */
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inout_logs.
     */
    cursor?: inout_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inout_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inout_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inout_logs.
     */
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }


  /**
   * inout_log findMany
   */
  export type inout_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter, which inout_logs to fetch.
     */
    where?: inout_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inout_logs to fetch.
     */
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inout_logs.
     */
    cursor?: inout_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inout_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inout_logs.
     */
    skip?: number
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }


  /**
   * inout_log create
   */
  export type inout_logCreateArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * The data needed to create a inout_log.
     */
    data: XOR<inout_logCreateInput, inout_logUncheckedCreateInput>
  }


  /**
   * inout_log update
   */
  export type inout_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * The data needed to update a inout_log.
     */
    data: XOR<inout_logUpdateInput, inout_logUncheckedUpdateInput>
    /**
     * Choose, which inout_log to update.
     */
    where: inout_logWhereUniqueInput
  }


  /**
   * inout_log updateMany
   */
  export type inout_logUpdateManyArgs = {
    /**
     * The data used to update inout_logs.
     */
    data: XOR<inout_logUpdateManyMutationInput, inout_logUncheckedUpdateManyInput>
    /**
     * Filter which inout_logs to update
     */
    where?: inout_logWhereInput
  }


  /**
   * inout_log upsert
   */
  export type inout_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * The filter to search for the inout_log to update in case it exists.
     */
    where: inout_logWhereUniqueInput
    /**
     * In case the inout_log found by the `where` argument doesn't exist, create a new inout_log with this data.
     */
    create: XOR<inout_logCreateInput, inout_logUncheckedCreateInput>
    /**
     * In case the inout_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inout_logUpdateInput, inout_logUncheckedUpdateInput>
  }


  /**
   * inout_log delete
   */
  export type inout_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    /**
     * Filter which inout_log to delete.
     */
    where: inout_logWhereUniqueInput
  }


  /**
   * inout_log deleteMany
   */
  export type inout_logDeleteManyArgs = {
    /**
     * Filter which inout_logs to delete
     */
    where?: inout_logWhereInput
  }


  /**
   * inout_log without action
   */
  export type inout_logArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
  }



  /**
   * Model commands
   */


  export type AggregateCommands = {
    _count: CommandsCountAggregateOutputType | null
    _avg: CommandsAvgAggregateOutputType | null
    _sum: CommandsSumAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  export type CommandsAvgAggregateOutputType = {
    id: number | null
  }

  export type CommandsSumAggregateOutputType = {
    id: number | null
  }

  export type CommandsMinAggregateOutputType = {
    id: number | null
    name: string | null
    command_value: string | null
    description: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CommandsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    command_value: string | null
    description: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CommandsCountAggregateOutputType = {
    id: number
    name: number
    command_value: number
    description: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type CommandsAvgAggregateInputType = {
    id?: true
  }

  export type CommandsSumAggregateInputType = {
    id?: true
  }

  export type CommandsMinAggregateInputType = {
    id?: true
    name?: true
    command_value?: true
    description?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CommandsMaxAggregateInputType = {
    id?: true
    name?: true
    command_value?: true
    description?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CommandsCountAggregateInputType = {
    id?: true
    name?: true
    command_value?: true
    description?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CommandsAggregateArgs = {
    /**
     * Filter which commands to aggregate.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commands
    **/
    _count?: true | CommandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandsMaxAggregateInputType
  }

  export type GetCommandsAggregateType<T extends CommandsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommands[P]>
      : GetScalarType<T[P], AggregateCommands[P]>
  }




  export type CommandsGroupByArgs = {
    where?: commandsWhereInput
    orderBy?: Enumerable<commandsOrderByWithAggregationInput>
    by: CommandsScalarFieldEnum[]
    having?: commandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandsCountAggregateInputType | true
    _avg?: CommandsAvgAggregateInputType
    _sum?: CommandsSumAggregateInputType
    _min?: CommandsMinAggregateInputType
    _max?: CommandsMaxAggregateInputType
  }


  export type CommandsGroupByOutputType = {
    id: number
    name: string
    command_value: string
    description: string
    updatedAt: Date | null
    createdAt: Date
    _count: CommandsCountAggregateOutputType | null
    _avg: CommandsAvgAggregateOutputType | null
    _sum: CommandsSumAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  type GetCommandsGroupByPayload<T extends CommandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CommandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandsGroupByOutputType[P]>
            : GetScalarType<T[P], CommandsGroupByOutputType[P]>
        }
      >
    >


  export type commandsSelect = {
    id?: boolean
    name?: boolean
    command_value?: boolean
    description?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type commandsGetPayload<S extends boolean | null | undefined | commandsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? commands :
    S extends undefined ? never :
    S extends { include: any } & (commandsArgs | commandsFindManyArgs)
    ? commands 
    : S extends { select: any } & (commandsArgs | commandsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof commands ? commands[P] : never
  } 
      : commands


  type commandsCountArgs = 
    Omit<commandsFindManyArgs, 'select' | 'include'> & {
      select?: CommandsCountAggregateInputType | true
    }

  export interface commandsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Commands that matches the filter.
     * @param {commandsFindUniqueArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commandsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, commandsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'commands'> extends True ? Prisma__commandsClient<commandsGetPayload<T>> : Prisma__commandsClient<commandsGetPayload<T> | null, null>

    /**
     * Find one Commands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commandsFindUniqueOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commandsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, commandsFindUniqueOrThrowArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Find the first Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commandsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, commandsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'commands'> extends True ? Prisma__commandsClient<commandsGetPayload<T>> : Prisma__commandsClient<commandsGetPayload<T> | null, null>

    /**
     * Find the first Commands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commandsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, commandsFindFirstOrThrowArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.commands.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.commands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandsWithIdOnly = await prisma.commands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commandsFindManyArgs>(
      args?: SelectSubset<T, commandsFindManyArgs>
    ): Prisma.PrismaPromise<Array<commandsGetPayload<T>>>

    /**
     * Create a Commands.
     * @param {commandsCreateArgs} args - Arguments to create a Commands.
     * @example
     * // Create one Commands
     * const Commands = await prisma.commands.create({
     *   data: {
     *     // ... data to create a Commands
     *   }
     * })
     * 
    **/
    create<T extends commandsCreateArgs>(
      args: SelectSubset<T, commandsCreateArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Delete a Commands.
     * @param {commandsDeleteArgs} args - Arguments to delete one Commands.
     * @example
     * // Delete one Commands
     * const Commands = await prisma.commands.delete({
     *   where: {
     *     // ... filter to delete one Commands
     *   }
     * })
     * 
    **/
    delete<T extends commandsDeleteArgs>(
      args: SelectSubset<T, commandsDeleteArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Update one Commands.
     * @param {commandsUpdateArgs} args - Arguments to update one Commands.
     * @example
     * // Update one Commands
     * const commands = await prisma.commands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commandsUpdateArgs>(
      args: SelectSubset<T, commandsUpdateArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Delete zero or more Commands.
     * @param {commandsDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.commands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commandsDeleteManyArgs>(
      args?: SelectSubset<T, commandsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const commands = await prisma.commands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commandsUpdateManyArgs>(
      args: SelectSubset<T, commandsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commands.
     * @param {commandsUpsertArgs} args - Arguments to update or create a Commands.
     * @example
     * // Update or create a Commands
     * const commands = await prisma.commands.upsert({
     *   create: {
     *     // ... data to create a Commands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commands we want to update
     *   }
     * })
    **/
    upsert<T extends commandsUpsertArgs>(
      args: SelectSubset<T, commandsUpsertArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.commands.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends commandsCountArgs>(
      args?: Subset<T, commandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommandsAggregateArgs>(args: Subset<T, CommandsAggregateArgs>): Prisma.PrismaPromise<GetCommandsAggregateType<T>>

    /**
     * Group by Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandsGroupByArgs['orderBy'] }
        : { orderBy?: CommandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for commands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__commandsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * commands base type for findUnique actions
   */
  export type commandsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands findUnique
   */
  export interface commandsFindUniqueArgs extends commandsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * commands findUniqueOrThrow
   */
  export type commandsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands base type for findFirst actions
   */
  export type commandsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }

  /**
   * commands findFirst
   */
  export interface commandsFindFirstArgs extends commandsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * commands findFirstOrThrow
   */
  export type commandsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }


  /**
   * commands findMany
   */
  export type commandsFindManyArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }


  /**
   * commands create
   */
  export type commandsCreateArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * The data needed to create a commands.
     */
    data: XOR<commandsCreateInput, commandsUncheckedCreateInput>
  }


  /**
   * commands update
   */
  export type commandsUpdateArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * The data needed to update a commands.
     */
    data: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
    /**
     * Choose, which commands to update.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands updateMany
   */
  export type commandsUpdateManyArgs = {
    /**
     * The data used to update commands.
     */
    data: XOR<commandsUpdateManyMutationInput, commandsUncheckedUpdateManyInput>
    /**
     * Filter which commands to update
     */
    where?: commandsWhereInput
  }


  /**
   * commands upsert
   */
  export type commandsUpsertArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * The filter to search for the commands to update in case it exists.
     */
    where: commandsWhereUniqueInput
    /**
     * In case the commands found by the `where` argument doesn't exist, create a new commands with this data.
     */
    create: XOR<commandsCreateInput, commandsUncheckedCreateInput>
    /**
     * In case the commands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
  }


  /**
   * commands delete
   */
  export type commandsDeleteArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Filter which commands to delete.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands deleteMany
   */
  export type commandsDeleteManyArgs = {
    /**
     * Filter which commands to delete
     */
    where?: commandsWhereInput
  }


  /**
   * commands without action
   */
  export type commandsArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
  }



  /**
   * Model rfid_card
   */


  export type AggregateRfid_card = {
    _count: Rfid_cardCountAggregateOutputType | null
    _avg: Rfid_cardAvgAggregateOutputType | null
    _sum: Rfid_cardSumAggregateOutputType | null
    _min: Rfid_cardMinAggregateOutputType | null
    _max: Rfid_cardMaxAggregateOutputType | null
  }

  export type Rfid_cardAvgAggregateOutputType = {
    id: number | null
  }

  export type Rfid_cardSumAggregateOutputType = {
    id: number | null
  }

  export type Rfid_cardMinAggregateOutputType = {
    id: number | null
    card_no: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Rfid_cardMaxAggregateOutputType = {
    id: number | null
    card_no: string | null
    description: string | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Rfid_cardCountAggregateOutputType = {
    id: number
    card_no: number
    description: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Rfid_cardAvgAggregateInputType = {
    id?: true
  }

  export type Rfid_cardSumAggregateInputType = {
    id?: true
  }

  export type Rfid_cardMinAggregateInputType = {
    id?: true
    card_no?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Rfid_cardMaxAggregateInputType = {
    id?: true
    card_no?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Rfid_cardCountAggregateInputType = {
    id?: true
    card_no?: true
    description?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Rfid_cardAggregateArgs = {
    /**
     * Filter which rfid_card to aggregate.
     */
    where?: rfid_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_cards to fetch.
     */
    orderBy?: Enumerable<rfid_cardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rfid_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rfid_cards
    **/
    _count?: true | Rfid_cardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rfid_cardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rfid_cardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rfid_cardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rfid_cardMaxAggregateInputType
  }

  export type GetRfid_cardAggregateType<T extends Rfid_cardAggregateArgs> = {
        [P in keyof T & keyof AggregateRfid_card]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfid_card[P]>
      : GetScalarType<T[P], AggregateRfid_card[P]>
  }




  export type Rfid_cardGroupByArgs = {
    where?: rfid_cardWhereInput
    orderBy?: Enumerable<rfid_cardOrderByWithAggregationInput>
    by: Rfid_cardScalarFieldEnum[]
    having?: rfid_cardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rfid_cardCountAggregateInputType | true
    _avg?: Rfid_cardAvgAggregateInputType
    _sum?: Rfid_cardSumAggregateInputType
    _min?: Rfid_cardMinAggregateInputType
    _max?: Rfid_cardMaxAggregateInputType
  }


  export type Rfid_cardGroupByOutputType = {
    id: number
    card_no: string
    description: string
    isActive: boolean
    updatedAt: Date | null
    createdAt: Date
    _count: Rfid_cardCountAggregateOutputType | null
    _avg: Rfid_cardAvgAggregateOutputType | null
    _sum: Rfid_cardSumAggregateOutputType | null
    _min: Rfid_cardMinAggregateOutputType | null
    _max: Rfid_cardMaxAggregateOutputType | null
  }

  type GetRfid_cardGroupByPayload<T extends Rfid_cardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Rfid_cardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rfid_cardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rfid_cardGroupByOutputType[P]>
            : GetScalarType<T[P], Rfid_cardGroupByOutputType[P]>
        }
      >
    >


  export type rfid_cardSelect = {
    id?: boolean
    card_no?: boolean
    description?: boolean
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | rfid_card$userArgs
    students?: boolean | rfid_card$studentsArgs
    _count?: boolean | Rfid_cardCountOutputTypeArgs
  }


  export type rfid_cardInclude = {
    user?: boolean | rfid_card$userArgs
    students?: boolean | rfid_card$studentsArgs
    _count?: boolean | Rfid_cardCountOutputTypeArgs
  }

  export type rfid_cardGetPayload<S extends boolean | null | undefined | rfid_cardArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? rfid_card :
    S extends undefined ? never :
    S extends { include: any } & (rfid_cardArgs | rfid_cardFindManyArgs)
    ? rfid_card  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < userGetPayload<S['include'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Rfid_cardCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (rfid_cardArgs | rfid_cardFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < userGetPayload<S['select'][P]>>  :
        P extends 'students' ? Array < studentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Rfid_cardCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof rfid_card ? rfid_card[P] : never
  } 
      : rfid_card


  type rfid_cardCountArgs = 
    Omit<rfid_cardFindManyArgs, 'select' | 'include'> & {
      select?: Rfid_cardCountAggregateInputType | true
    }

  export interface rfid_cardDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Rfid_card that matches the filter.
     * @param {rfid_cardFindUniqueArgs} args - Arguments to find a Rfid_card
     * @example
     * // Get one Rfid_card
     * const rfid_card = await prisma.rfid_card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rfid_cardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rfid_cardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'rfid_card'> extends True ? Prisma__rfid_cardClient<rfid_cardGetPayload<T>> : Prisma__rfid_cardClient<rfid_cardGetPayload<T> | null, null>

    /**
     * Find one Rfid_card that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rfid_cardFindUniqueOrThrowArgs} args - Arguments to find a Rfid_card
     * @example
     * // Get one Rfid_card
     * const rfid_card = await prisma.rfid_card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rfid_cardFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, rfid_cardFindUniqueOrThrowArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Find the first Rfid_card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_cardFindFirstArgs} args - Arguments to find a Rfid_card
     * @example
     * // Get one Rfid_card
     * const rfid_card = await prisma.rfid_card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rfid_cardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rfid_cardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'rfid_card'> extends True ? Prisma__rfid_cardClient<rfid_cardGetPayload<T>> : Prisma__rfid_cardClient<rfid_cardGetPayload<T> | null, null>

    /**
     * Find the first Rfid_card that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_cardFindFirstOrThrowArgs} args - Arguments to find a Rfid_card
     * @example
     * // Get one Rfid_card
     * const rfid_card = await prisma.rfid_card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rfid_cardFindFirstOrThrowArgs>(
      args?: SelectSubset<T, rfid_cardFindFirstOrThrowArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Find zero or more Rfid_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_cardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rfid_cards
     * const rfid_cards = await prisma.rfid_card.findMany()
     * 
     * // Get first 10 Rfid_cards
     * const rfid_cards = await prisma.rfid_card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfid_cardWithIdOnly = await prisma.rfid_card.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rfid_cardFindManyArgs>(
      args?: SelectSubset<T, rfid_cardFindManyArgs>
    ): Prisma.PrismaPromise<Array<rfid_cardGetPayload<T>>>

    /**
     * Create a Rfid_card.
     * @param {rfid_cardCreateArgs} args - Arguments to create a Rfid_card.
     * @example
     * // Create one Rfid_card
     * const Rfid_card = await prisma.rfid_card.create({
     *   data: {
     *     // ... data to create a Rfid_card
     *   }
     * })
     * 
    **/
    create<T extends rfid_cardCreateArgs>(
      args: SelectSubset<T, rfid_cardCreateArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Delete a Rfid_card.
     * @param {rfid_cardDeleteArgs} args - Arguments to delete one Rfid_card.
     * @example
     * // Delete one Rfid_card
     * const Rfid_card = await prisma.rfid_card.delete({
     *   where: {
     *     // ... filter to delete one Rfid_card
     *   }
     * })
     * 
    **/
    delete<T extends rfid_cardDeleteArgs>(
      args: SelectSubset<T, rfid_cardDeleteArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Update one Rfid_card.
     * @param {rfid_cardUpdateArgs} args - Arguments to update one Rfid_card.
     * @example
     * // Update one Rfid_card
     * const rfid_card = await prisma.rfid_card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rfid_cardUpdateArgs>(
      args: SelectSubset<T, rfid_cardUpdateArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Delete zero or more Rfid_cards.
     * @param {rfid_cardDeleteManyArgs} args - Arguments to filter Rfid_cards to delete.
     * @example
     * // Delete a few Rfid_cards
     * const { count } = await prisma.rfid_card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rfid_cardDeleteManyArgs>(
      args?: SelectSubset<T, rfid_cardDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfid_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_cardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rfid_cards
     * const rfid_card = await prisma.rfid_card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rfid_cardUpdateManyArgs>(
      args: SelectSubset<T, rfid_cardUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rfid_card.
     * @param {rfid_cardUpsertArgs} args - Arguments to update or create a Rfid_card.
     * @example
     * // Update or create a Rfid_card
     * const rfid_card = await prisma.rfid_card.upsert({
     *   create: {
     *     // ... data to create a Rfid_card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rfid_card we want to update
     *   }
     * })
    **/
    upsert<T extends rfid_cardUpsertArgs>(
      args: SelectSubset<T, rfid_cardUpsertArgs>
    ): Prisma__rfid_cardClient<rfid_cardGetPayload<T>>

    /**
     * Count the number of Rfid_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_cardCountArgs} args - Arguments to filter Rfid_cards to count.
     * @example
     * // Count the number of Rfid_cards
     * const count = await prisma.rfid_card.count({
     *   where: {
     *     // ... the filter for the Rfid_cards we want to count
     *   }
     * })
    **/
    count<T extends rfid_cardCountArgs>(
      args?: Subset<T, rfid_cardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rfid_cardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rfid_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rfid_cardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rfid_cardAggregateArgs>(args: Subset<T, Rfid_cardAggregateArgs>): Prisma.PrismaPromise<GetRfid_cardAggregateType<T>>

    /**
     * Group by Rfid_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rfid_cardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Rfid_cardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rfid_cardGroupByArgs['orderBy'] }
        : { orderBy?: Rfid_cardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Rfid_cardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfid_cardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for rfid_card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rfid_cardClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends rfid_card$userArgs= {}>(args?: Subset<T, rfid_card$userArgs>): Prisma.PrismaPromise<Array<userGetPayload<T>>| Null>;

    students<T extends rfid_card$studentsArgs= {}>(args?: Subset<T, rfid_card$studentsArgs>): Prisma.PrismaPromise<Array<studentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * rfid_card base type for findUnique actions
   */
  export type rfid_cardFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter, which rfid_card to fetch.
     */
    where: rfid_cardWhereUniqueInput
  }

  /**
   * rfid_card findUnique
   */
  export interface rfid_cardFindUniqueArgs extends rfid_cardFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rfid_card findUniqueOrThrow
   */
  export type rfid_cardFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter, which rfid_card to fetch.
     */
    where: rfid_cardWhereUniqueInput
  }


  /**
   * rfid_card base type for findFirst actions
   */
  export type rfid_cardFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter, which rfid_card to fetch.
     */
    where?: rfid_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_cards to fetch.
     */
    orderBy?: Enumerable<rfid_cardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfid_cards.
     */
    cursor?: rfid_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfid_cards.
     */
    distinct?: Enumerable<Rfid_cardScalarFieldEnum>
  }

  /**
   * rfid_card findFirst
   */
  export interface rfid_cardFindFirstArgs extends rfid_cardFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rfid_card findFirstOrThrow
   */
  export type rfid_cardFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter, which rfid_card to fetch.
     */
    where?: rfid_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_cards to fetch.
     */
    orderBy?: Enumerable<rfid_cardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfid_cards.
     */
    cursor?: rfid_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfid_cards.
     */
    distinct?: Enumerable<Rfid_cardScalarFieldEnum>
  }


  /**
   * rfid_card findMany
   */
  export type rfid_cardFindManyArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter, which rfid_cards to fetch.
     */
    where?: rfid_cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_cards to fetch.
     */
    orderBy?: Enumerable<rfid_cardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rfid_cards.
     */
    cursor?: rfid_cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_cards.
     */
    skip?: number
    distinct?: Enumerable<Rfid_cardScalarFieldEnum>
  }


  /**
   * rfid_card create
   */
  export type rfid_cardCreateArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * The data needed to create a rfid_card.
     */
    data: XOR<rfid_cardCreateInput, rfid_cardUncheckedCreateInput>
  }


  /**
   * rfid_card update
   */
  export type rfid_cardUpdateArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * The data needed to update a rfid_card.
     */
    data: XOR<rfid_cardUpdateInput, rfid_cardUncheckedUpdateInput>
    /**
     * Choose, which rfid_card to update.
     */
    where: rfid_cardWhereUniqueInput
  }


  /**
   * rfid_card updateMany
   */
  export type rfid_cardUpdateManyArgs = {
    /**
     * The data used to update rfid_cards.
     */
    data: XOR<rfid_cardUpdateManyMutationInput, rfid_cardUncheckedUpdateManyInput>
    /**
     * Filter which rfid_cards to update
     */
    where?: rfid_cardWhereInput
  }


  /**
   * rfid_card upsert
   */
  export type rfid_cardUpsertArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * The filter to search for the rfid_card to update in case it exists.
     */
    where: rfid_cardWhereUniqueInput
    /**
     * In case the rfid_card found by the `where` argument doesn't exist, create a new rfid_card with this data.
     */
    create: XOR<rfid_cardCreateInput, rfid_cardUncheckedCreateInput>
    /**
     * In case the rfid_card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rfid_cardUpdateInput, rfid_cardUncheckedUpdateInput>
  }


  /**
   * rfid_card delete
   */
  export type rfid_cardDeleteArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
    /**
     * Filter which rfid_card to delete.
     */
    where: rfid_cardWhereUniqueInput
  }


  /**
   * rfid_card deleteMany
   */
  export type rfid_cardDeleteManyArgs = {
    /**
     * Filter which rfid_cards to delete
     */
    where?: rfid_cardWhereInput
  }


  /**
   * rfid_card.user
   */
  export type rfid_card$userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithRelationInput>
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * rfid_card.students
   */
  export type rfid_card$studentsArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    where?: studentsWhereInput
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }


  /**
   * rfid_card without action
   */
  export type rfid_cardArgs = {
    /**
     * Select specific fields to fetch from the rfid_card
     */
    select?: rfid_cardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rfid_cardInclude | null
  }



  /**
   * Model devices_setup
   */


  export type AggregateDevices_setup = {
    _count: Devices_setupCountAggregateOutputType | null
    _avg: Devices_setupAvgAggregateOutputType | null
    _sum: Devices_setupSumAggregateOutputType | null
    _min: Devices_setupMinAggregateOutputType | null
    _max: Devices_setupMaxAggregateOutputType | null
  }

  export type Devices_setupAvgAggregateOutputType = {
    id: number | null
    devicesType: number | null
    door_id: number | null
  }

  export type Devices_setupSumAggregateOutputType = {
    id: number | null
    devicesType: number | null
    door_id: number | null
  }

  export type Devices_setupMinAggregateOutputType = {
    id: number | null
    friendlyName: string | null
    locationId: string | null
    manufacturer: string | null
    path: string | null
    pnpId: string | null
    productId: string | null
    serialNumber: string | null
    vendorId: string | null
    devicesType: number | null
    door_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Devices_setupMaxAggregateOutputType = {
    id: number | null
    friendlyName: string | null
    locationId: string | null
    manufacturer: string | null
    path: string | null
    pnpId: string | null
    productId: string | null
    serialNumber: string | null
    vendorId: string | null
    devicesType: number | null
    door_id: number | null
    isActive: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type Devices_setupCountAggregateOutputType = {
    id: number
    friendlyName: number
    locationId: number
    manufacturer: number
    path: number
    pnpId: number
    productId: number
    serialNumber: number
    vendorId: number
    devicesType: number
    door_id: number
    isActive: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Devices_setupAvgAggregateInputType = {
    id?: true
    devicesType?: true
    door_id?: true
  }

  export type Devices_setupSumAggregateInputType = {
    id?: true
    devicesType?: true
    door_id?: true
  }

  export type Devices_setupMinAggregateInputType = {
    id?: true
    friendlyName?: true
    locationId?: true
    manufacturer?: true
    path?: true
    pnpId?: true
    productId?: true
    serialNumber?: true
    vendorId?: true
    devicesType?: true
    door_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Devices_setupMaxAggregateInputType = {
    id?: true
    friendlyName?: true
    locationId?: true
    manufacturer?: true
    path?: true
    pnpId?: true
    productId?: true
    serialNumber?: true
    vendorId?: true
    devicesType?: true
    door_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Devices_setupCountAggregateInputType = {
    id?: true
    friendlyName?: true
    locationId?: true
    manufacturer?: true
    path?: true
    pnpId?: true
    productId?: true
    serialNumber?: true
    vendorId?: true
    devicesType?: true
    door_id?: true
    isActive?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Devices_setupAggregateArgs = {
    /**
     * Filter which devices_setup to aggregate.
     */
    where?: devices_setupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices_setups to fetch.
     */
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: devices_setupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices_setups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices_setups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devices_setups
    **/
    _count?: true | Devices_setupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Devices_setupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Devices_setupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Devices_setupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Devices_setupMaxAggregateInputType
  }

  export type GetDevices_setupAggregateType<T extends Devices_setupAggregateArgs> = {
        [P in keyof T & keyof AggregateDevices_setup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevices_setup[P]>
      : GetScalarType<T[P], AggregateDevices_setup[P]>
  }




  export type Devices_setupGroupByArgs = {
    where?: devices_setupWhereInput
    orderBy?: Enumerable<devices_setupOrderByWithAggregationInput>
    by: Devices_setupScalarFieldEnum[]
    having?: devices_setupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Devices_setupCountAggregateInputType | true
    _avg?: Devices_setupAvgAggregateInputType
    _sum?: Devices_setupSumAggregateInputType
    _min?: Devices_setupMinAggregateInputType
    _max?: Devices_setupMaxAggregateInputType
  }


  export type Devices_setupGroupByOutputType = {
    id: number
    friendlyName: string
    locationId: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId: string | null
    serialNumber: string | null
    vendorId: string | null
    devicesType: number | null
    door_id: number | null
    isActive: boolean
    updatedAt: Date | null
    createdAt: Date
    _count: Devices_setupCountAggregateOutputType | null
    _avg: Devices_setupAvgAggregateOutputType | null
    _sum: Devices_setupSumAggregateOutputType | null
    _min: Devices_setupMinAggregateOutputType | null
    _max: Devices_setupMaxAggregateOutputType | null
  }

  type GetDevices_setupGroupByPayload<T extends Devices_setupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Devices_setupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Devices_setupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Devices_setupGroupByOutputType[P]>
            : GetScalarType<T[P], Devices_setupGroupByOutputType[P]>
        }
      >
    >


  export type devices_setupSelect = {
    id?: boolean
    friendlyName?: boolean
    locationId?: boolean
    manufacturer?: boolean
    path?: boolean
    pnpId?: boolean
    productId?: boolean
    serialNumber?: boolean
    vendorId?: boolean
    devicesType?: boolean
    device_type?: boolean | device_typeArgs
    door_id?: boolean
    door?: boolean | doorsArgs
    isActive?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type devices_setupInclude = {
    device_type?: boolean | device_typeArgs
    door?: boolean | doorsArgs
  }

  export type devices_setupGetPayload<S extends boolean | null | undefined | devices_setupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? devices_setup :
    S extends undefined ? never :
    S extends { include: any } & (devices_setupArgs | devices_setupFindManyArgs)
    ? devices_setup  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'device_type' ? device_typeGetPayload<S['include'][P]> | null :
        P extends 'door' ? doorsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (devices_setupArgs | devices_setupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'device_type' ? device_typeGetPayload<S['select'][P]> | null :
        P extends 'door' ? doorsGetPayload<S['select'][P]> | null :  P extends keyof devices_setup ? devices_setup[P] : never
  } 
      : devices_setup


  type devices_setupCountArgs = 
    Omit<devices_setupFindManyArgs, 'select' | 'include'> & {
      select?: Devices_setupCountAggregateInputType | true
    }

  export interface devices_setupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Devices_setup that matches the filter.
     * @param {devices_setupFindUniqueArgs} args - Arguments to find a Devices_setup
     * @example
     * // Get one Devices_setup
     * const devices_setup = await prisma.devices_setup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends devices_setupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, devices_setupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'devices_setup'> extends True ? Prisma__devices_setupClient<devices_setupGetPayload<T>> : Prisma__devices_setupClient<devices_setupGetPayload<T> | null, null>

    /**
     * Find one Devices_setup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {devices_setupFindUniqueOrThrowArgs} args - Arguments to find a Devices_setup
     * @example
     * // Get one Devices_setup
     * const devices_setup = await prisma.devices_setup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends devices_setupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, devices_setupFindUniqueOrThrowArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Find the first Devices_setup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devices_setupFindFirstArgs} args - Arguments to find a Devices_setup
     * @example
     * // Get one Devices_setup
     * const devices_setup = await prisma.devices_setup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends devices_setupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, devices_setupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'devices_setup'> extends True ? Prisma__devices_setupClient<devices_setupGetPayload<T>> : Prisma__devices_setupClient<devices_setupGetPayload<T> | null, null>

    /**
     * Find the first Devices_setup that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devices_setupFindFirstOrThrowArgs} args - Arguments to find a Devices_setup
     * @example
     * // Get one Devices_setup
     * const devices_setup = await prisma.devices_setup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends devices_setupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, devices_setupFindFirstOrThrowArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Find zero or more Devices_setups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devices_setupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices_setups
     * const devices_setups = await prisma.devices_setup.findMany()
     * 
     * // Get first 10 Devices_setups
     * const devices_setups = await prisma.devices_setup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devices_setupWithIdOnly = await prisma.devices_setup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends devices_setupFindManyArgs>(
      args?: SelectSubset<T, devices_setupFindManyArgs>
    ): Prisma.PrismaPromise<Array<devices_setupGetPayload<T>>>

    /**
     * Create a Devices_setup.
     * @param {devices_setupCreateArgs} args - Arguments to create a Devices_setup.
     * @example
     * // Create one Devices_setup
     * const Devices_setup = await prisma.devices_setup.create({
     *   data: {
     *     // ... data to create a Devices_setup
     *   }
     * })
     * 
    **/
    create<T extends devices_setupCreateArgs>(
      args: SelectSubset<T, devices_setupCreateArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Delete a Devices_setup.
     * @param {devices_setupDeleteArgs} args - Arguments to delete one Devices_setup.
     * @example
     * // Delete one Devices_setup
     * const Devices_setup = await prisma.devices_setup.delete({
     *   where: {
     *     // ... filter to delete one Devices_setup
     *   }
     * })
     * 
    **/
    delete<T extends devices_setupDeleteArgs>(
      args: SelectSubset<T, devices_setupDeleteArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Update one Devices_setup.
     * @param {devices_setupUpdateArgs} args - Arguments to update one Devices_setup.
     * @example
     * // Update one Devices_setup
     * const devices_setup = await prisma.devices_setup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends devices_setupUpdateArgs>(
      args: SelectSubset<T, devices_setupUpdateArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Delete zero or more Devices_setups.
     * @param {devices_setupDeleteManyArgs} args - Arguments to filter Devices_setups to delete.
     * @example
     * // Delete a few Devices_setups
     * const { count } = await prisma.devices_setup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends devices_setupDeleteManyArgs>(
      args?: SelectSubset<T, devices_setupDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices_setups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devices_setupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices_setups
     * const devices_setup = await prisma.devices_setup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends devices_setupUpdateManyArgs>(
      args: SelectSubset<T, devices_setupUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devices_setup.
     * @param {devices_setupUpsertArgs} args - Arguments to update or create a Devices_setup.
     * @example
     * // Update or create a Devices_setup
     * const devices_setup = await prisma.devices_setup.upsert({
     *   create: {
     *     // ... data to create a Devices_setup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices_setup we want to update
     *   }
     * })
    **/
    upsert<T extends devices_setupUpsertArgs>(
      args: SelectSubset<T, devices_setupUpsertArgs>
    ): Prisma__devices_setupClient<devices_setupGetPayload<T>>

    /**
     * Count the number of Devices_setups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devices_setupCountArgs} args - Arguments to filter Devices_setups to count.
     * @example
     * // Count the number of Devices_setups
     * const count = await prisma.devices_setup.count({
     *   where: {
     *     // ... the filter for the Devices_setups we want to count
     *   }
     * })
    **/
    count<T extends devices_setupCountArgs>(
      args?: Subset<T, devices_setupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Devices_setupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devices_setup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Devices_setupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Devices_setupAggregateArgs>(args: Subset<T, Devices_setupAggregateArgs>): Prisma.PrismaPromise<GetDevices_setupAggregateType<T>>

    /**
     * Group by Devices_setup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Devices_setupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Devices_setupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Devices_setupGroupByArgs['orderBy'] }
        : { orderBy?: Devices_setupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Devices_setupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevices_setupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for devices_setup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__devices_setupClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    device_type<T extends device_typeArgs= {}>(args?: Subset<T, device_typeArgs>): Prisma__device_typeClient<device_typeGetPayload<T> | Null>;

    door<T extends doorsArgs= {}>(args?: Subset<T, doorsArgs>): Prisma__doorsClient<doorsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * devices_setup base type for findUnique actions
   */
  export type devices_setupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter, which devices_setup to fetch.
     */
    where: devices_setupWhereUniqueInput
  }

  /**
   * devices_setup findUnique
   */
  export interface devices_setupFindUniqueArgs extends devices_setupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * devices_setup findUniqueOrThrow
   */
  export type devices_setupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter, which devices_setup to fetch.
     */
    where: devices_setupWhereUniqueInput
  }


  /**
   * devices_setup base type for findFirst actions
   */
  export type devices_setupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter, which devices_setup to fetch.
     */
    where?: devices_setupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices_setups to fetch.
     */
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices_setups.
     */
    cursor?: devices_setupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices_setups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices_setups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices_setups.
     */
    distinct?: Enumerable<Devices_setupScalarFieldEnum>
  }

  /**
   * devices_setup findFirst
   */
  export interface devices_setupFindFirstArgs extends devices_setupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * devices_setup findFirstOrThrow
   */
  export type devices_setupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter, which devices_setup to fetch.
     */
    where?: devices_setupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices_setups to fetch.
     */
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices_setups.
     */
    cursor?: devices_setupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices_setups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices_setups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices_setups.
     */
    distinct?: Enumerable<Devices_setupScalarFieldEnum>
  }


  /**
   * devices_setup findMany
   */
  export type devices_setupFindManyArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter, which devices_setups to fetch.
     */
    where?: devices_setupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices_setups to fetch.
     */
    orderBy?: Enumerable<devices_setupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devices_setups.
     */
    cursor?: devices_setupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices_setups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices_setups.
     */
    skip?: number
    distinct?: Enumerable<Devices_setupScalarFieldEnum>
  }


  /**
   * devices_setup create
   */
  export type devices_setupCreateArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * The data needed to create a devices_setup.
     */
    data: XOR<devices_setupCreateInput, devices_setupUncheckedCreateInput>
  }


  /**
   * devices_setup update
   */
  export type devices_setupUpdateArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * The data needed to update a devices_setup.
     */
    data: XOR<devices_setupUpdateInput, devices_setupUncheckedUpdateInput>
    /**
     * Choose, which devices_setup to update.
     */
    where: devices_setupWhereUniqueInput
  }


  /**
   * devices_setup updateMany
   */
  export type devices_setupUpdateManyArgs = {
    /**
     * The data used to update devices_setups.
     */
    data: XOR<devices_setupUpdateManyMutationInput, devices_setupUncheckedUpdateManyInput>
    /**
     * Filter which devices_setups to update
     */
    where?: devices_setupWhereInput
  }


  /**
   * devices_setup upsert
   */
  export type devices_setupUpsertArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * The filter to search for the devices_setup to update in case it exists.
     */
    where: devices_setupWhereUniqueInput
    /**
     * In case the devices_setup found by the `where` argument doesn't exist, create a new devices_setup with this data.
     */
    create: XOR<devices_setupCreateInput, devices_setupUncheckedCreateInput>
    /**
     * In case the devices_setup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<devices_setupUpdateInput, devices_setupUncheckedUpdateInput>
  }


  /**
   * devices_setup delete
   */
  export type devices_setupDeleteArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
    /**
     * Filter which devices_setup to delete.
     */
    where: devices_setupWhereUniqueInput
  }


  /**
   * devices_setup deleteMany
   */
  export type devices_setupDeleteManyArgs = {
    /**
     * Filter which devices_setups to delete
     */
    where?: devices_setupWhereInput
  }


  /**
   * devices_setup without action
   */
  export type devices_setupArgs = {
    /**
     * Select specific fields to fetch from the devices_setup
     */
    select?: devices_setupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: devices_setupInclude | null
  }



  /**
   * Model students
   */


  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    id: number | null
    org_id: number | null
    user_group_id: number | null
    rfid_card_id: number | null
  }

  export type StudentsSumAggregateOutputType = {
    id: number | null
    org_id: number | null
    user_group_id: number | null
    rfid_card_id: number | null
  }

  export type StudentsMinAggregateOutputType = {
    id: number | null
    org_id: number | null
    student_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    isActive: boolean | null
    barcode: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: number | null
    org_id: number | null
    student_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    isActive: boolean | null
    barcode: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    org_id: number
    student_id: number
    name: number
    email: number
    phone: number
    address: number
    isActive: number
    barcode: number
    user_group_id: number
    rfid_card_id: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    id?: true
    org_id?: true
    user_group_id?: true
    rfid_card_id?: true
  }

  export type StudentsSumAggregateInputType = {
    id?: true
    org_id?: true
    user_group_id?: true
    rfid_card_id?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    org_id?: true
    student_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    isActive?: true
    barcode?: true
    user_group_id?: true
    rfid_card_id?: true
    updatedAt?: true
    createdAt?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    org_id?: true
    student_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    isActive?: true
    barcode?: true
    user_group_id?: true
    rfid_card_id?: true
    updatedAt?: true
    createdAt?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    org_id?: true
    student_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    isActive?: true
    barcode?: true
    user_group_id?: true
    rfid_card_id?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type StudentsAggregateArgs = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs = {
    where?: studentsWhereInput
    orderBy?: Enumerable<studentsOrderByWithAggregationInput>
    by: StudentsScalarFieldEnum[]
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }


  export type StudentsGroupByOutputType = {
    id: number
    org_id: number | null
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive: boolean | null
    barcode: string | null
    user_group_id: number | null
    rfid_card_id: number | null
    updatedAt: Date | null
    createdAt: Date
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect = {
    id?: boolean
    org_id?: boolean
    student_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    isActive?: boolean
    barcode?: boolean
    user_group_id?: boolean
    rfid_card_id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    org?: boolean | organizationArgs
    user_group?: boolean | user_groupArgs
    rfid_card?: boolean | rfid_cardArgs
    inout_log?: boolean | students$inout_logArgs
    _count?: boolean | StudentsCountOutputTypeArgs
  }


  export type studentsInclude = {
    org?: boolean | organizationArgs
    user_group?: boolean | user_groupArgs
    rfid_card?: boolean | rfid_cardArgs
    inout_log?: boolean | students$inout_logArgs
    _count?: boolean | StudentsCountOutputTypeArgs
  }

  export type studentsGetPayload<S extends boolean | null | undefined | studentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? students :
    S extends undefined ? never :
    S extends { include: any } & (studentsArgs | studentsFindManyArgs)
    ? students  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'org' ? organizationGetPayload<S['include'][P]> | null :
        P extends 'user_group' ? user_groupGetPayload<S['include'][P]> | null :
        P extends 'rfid_card' ? rfid_cardGetPayload<S['include'][P]> | null :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (studentsArgs | studentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'org' ? organizationGetPayload<S['select'][P]> | null :
        P extends 'user_group' ? user_groupGetPayload<S['select'][P]> | null :
        P extends 'rfid_card' ? rfid_cardGetPayload<S['select'][P]> | null :
        P extends 'inout_log' ? Array < inout_logGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof students ? students[P] : never
  } 
      : students


  type studentsCountArgs = 
    Omit<studentsFindManyArgs, 'select' | 'include'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, studentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'students'> extends True ? Prisma__studentsClient<studentsGetPayload<T>> : Prisma__studentsClient<studentsGetPayload<T> | null, null>

    /**
     * Find one Students that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, studentsFindUniqueOrThrowArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, studentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'students'> extends True ? Prisma__studentsClient<studentsGetPayload<T>> : Prisma__studentsClient<studentsGetPayload<T> | null, null>

    /**
     * Find the first Students that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, studentsFindFirstOrThrowArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends studentsFindManyArgs>(
      args?: SelectSubset<T, studentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<studentsGetPayload<T>>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
    **/
    create<T extends studentsCreateArgs>(
      args: SelectSubset<T, studentsCreateArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
    **/
    delete<T extends studentsDeleteArgs>(
      args: SelectSubset<T, studentsDeleteArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends studentsUpdateArgs>(
      args: SelectSubset<T, studentsUpdateArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studentsDeleteManyArgs>(
      args?: SelectSubset<T, studentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends studentsUpdateManyArgs>(
      args: SelectSubset<T, studentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
    **/
    upsert<T extends studentsUpsertArgs>(
      args: SelectSubset<T, studentsUpsertArgs>
    ): Prisma__studentsClient<studentsGetPayload<T>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__studentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    org<T extends organizationArgs= {}>(args?: Subset<T, organizationArgs>): Prisma__organizationClient<organizationGetPayload<T> | Null>;

    user_group<T extends user_groupArgs= {}>(args?: Subset<T, user_groupArgs>): Prisma__user_groupClient<user_groupGetPayload<T> | Null>;

    rfid_card<T extends rfid_cardArgs= {}>(args?: Subset<T, rfid_cardArgs>): Prisma__rfid_cardClient<rfid_cardGetPayload<T> | Null>;

    inout_log<T extends students$inout_logArgs= {}>(args?: Subset<T, students$inout_logArgs>): Prisma.PrismaPromise<Array<inout_logGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * students base type for findUnique actions
   */
  export type studentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUnique
   */
  export interface studentsFindUniqueArgs extends studentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students base type for findFirst actions
   */
  export type studentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }

  /**
   * students findFirst
   */
  export interface studentsFindFirstArgs extends studentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }


  /**
   * students findMany
   */
  export type studentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: Enumerable<StudentsScalarFieldEnum>
  }


  /**
   * students create
   */
  export type studentsCreateArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }


  /**
   * students update
   */
  export type studentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
  }


  /**
   * students upsert
   */
  export type studentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }


  /**
   * students delete
   */
  export type studentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
  }


  /**
   * students.inout_log
   */
  export type students$inout_logArgs = {
    /**
     * Select specific fields to fetch from the inout_log
     */
    select?: inout_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inout_logInclude | null
    where?: inout_logWhereInput
    orderBy?: Enumerable<inout_logOrderByWithRelationInput>
    cursor?: inout_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Inout_logScalarFieldEnum>
  }


  /**
   * students without action
   */
  export type studentsArgs = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommandsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    command_value: 'command_value',
    description: 'description',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type CommandsScalarFieldEnum = (typeof CommandsScalarFieldEnum)[keyof typeof CommandsScalarFieldEnum]


  export const Device_typeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    operation: 'operation',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type Device_typeScalarFieldEnum = (typeof Device_typeScalarFieldEnum)[keyof typeof Device_typeScalarFieldEnum]


  export const Devices_setupScalarFieldEnum: {
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
  };

  export type Devices_setupScalarFieldEnum = (typeof Devices_setupScalarFieldEnum)[keyof typeof Devices_setupScalarFieldEnum]


  export const DoorsScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    name: 'name',
    description: 'description',
    door_no: 'door_no',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type DoorsScalarFieldEnum = (typeof DoorsScalarFieldEnum)[keyof typeof DoorsScalarFieldEnum]


  export const Inout_logScalarFieldEnum: {
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
  };

  export type Inout_logScalarFieldEnum = (typeof Inout_logScalarFieldEnum)[keyof typeof Inout_logScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
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
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const Organization_groupScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type Organization_groupScalarFieldEnum = (typeof Organization_groupScalarFieldEnum)[keyof typeof Organization_groupScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const Rfid_cardScalarFieldEnum: {
    id: 'id',
    card_no: 'card_no',
    description: 'description',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type Rfid_cardScalarFieldEnum = (typeof Rfid_cardScalarFieldEnum)[keyof typeof Rfid_cardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentsScalarFieldEnum: {
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
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_groupScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    group_name: 'group_name',
    permission_id: 'permission_id',
    isActive: 'isActive',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type User_groupScalarFieldEnum = (typeof User_groupScalarFieldEnum)[keyof typeof User_groupScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type organizationWhereInput = {
    AND?: Enumerable<organizationWhereInput>
    OR?: Enumerable<organizationWhereInput>
    NOT?: Enumerable<organizationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    contact_no?: StringFilter | string
    contact_person?: StringFilter | string
    description?: StringFilter | string
    email?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    org_group?: Organization_groupListRelationFilter
    user?: UserListRelationFilter
    user_group?: User_groupListRelationFilter
    doors?: DoorsListRelationFilter
    inout_log?: Inout_logListRelationFilter
    students?: StudentsListRelationFilter
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_no?: SortOrder
    contact_person?: SortOrder
    description?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    org_group?: organization_groupOrderByRelationAggregateInput
    user?: userOrderByRelationAggregateInput
    user_group?: user_groupOrderByRelationAggregateInput
    doors?: doorsOrderByRelationAggregateInput
    inout_log?: inout_logOrderByRelationAggregateInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type organizationWhereUniqueInput = {
    id?: number
  }

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_no?: SortOrder
    contact_person?: SortOrder
    description?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: organizationCountOrderByAggregateInput
    _avg?: organizationAvgOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
    _sum?: organizationSumOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<organizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organizationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    contact_no?: StringWithAggregatesFilter | string
    contact_person?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    isActive?: BoolWithAggregatesFilter | boolean
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type organization_groupWhereInput = {
    AND?: Enumerable<organization_groupWhereInput>
    OR?: Enumerable<organization_groupWhereInput>
    NOT?: Enumerable<organization_groupWhereInput>
    id?: IntFilter | number
    org?: XOR<OrganizationRelationFilter, organizationWhereInput>
    org_id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type organization_groupOrderByWithRelationInput = {
    id?: SortOrder
    org?: organizationOrderByWithRelationInput
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organization_groupWhereUniqueInput = {
    id?: number
  }

  export type organization_groupOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: organization_groupCountOrderByAggregateInput
    _avg?: organization_groupAvgOrderByAggregateInput
    _max?: organization_groupMaxOrderByAggregateInput
    _min?: organization_groupMinOrderByAggregateInput
    _sum?: organization_groupSumOrderByAggregateInput
  }

  export type organization_groupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<organization_groupScalarWhereWithAggregatesInput>
    OR?: Enumerable<organization_groupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<organization_groupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    org_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    isActive?: BoolWithAggregatesFilter | boolean
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    org?: XOR<OrganizationRelationFilter, organizationWhereInput>
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    phone_no?: StringFilter | string
    address?: StringFilter | string
    description?: StringFilter | string
    user_img?: StringNullableFilter | string | null
    user_group_id?: IntNullableFilter | number | null
    rfid_card_id?: IntNullableFilter | number | null
    rfid_card?: XOR<Rfid_cardRelationFilter, rfid_cardWhereInput> | null
    user_group?: XOR<User_groupRelationFilter, user_groupWhereInput> | null
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    org?: organizationOrderByWithRelationInput
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    address?: SortOrder
    description?: SortOrder
    user_img?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    rfid_card?: rfid_cardOrderByWithRelationInput
    user_group?: user_groupOrderByWithRelationInput
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type userWhereUniqueInput = {
    id?: number
    id_rfid_card_id?: userIdRfid_card_idCompoundUniqueInput
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    address?: SortOrder
    description?: SortOrder
    user_img?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    org_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    phone_no?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    user_img?: StringNullableWithAggregatesFilter | string | null
    user_group_id?: IntNullableWithAggregatesFilter | number | null
    rfid_card_id?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type user_groupWhereInput = {
    AND?: Enumerable<user_groupWhereInput>
    OR?: Enumerable<user_groupWhereInput>
    NOT?: Enumerable<user_groupWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    org?: XOR<OrganizationRelationFilter, organizationWhereInput>
    group_name?: StringFilter | string
    permission_id?: IntFilter | number
    permission?: XOR<PermissionRelationFilter, permissionWhereInput>
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    user?: UserListRelationFilter
    students?: StudentsListRelationFilter
  }

  export type user_groupOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    org?: organizationOrderByWithRelationInput
    group_name?: SortOrder
    permission_id?: SortOrder
    permission?: permissionOrderByWithRelationInput
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByRelationAggregateInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type user_groupWhereUniqueInput = {
    id?: number
  }

  export type user_groupOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    group_name?: SortOrder
    permission_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: user_groupCountOrderByAggregateInput
    _avg?: user_groupAvgOrderByAggregateInput
    _max?: user_groupMaxOrderByAggregateInput
    _min?: user_groupMinOrderByAggregateInput
    _sum?: user_groupSumOrderByAggregateInput
  }

  export type user_groupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_groupScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_groupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_groupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    org_id?: IntWithAggregatesFilter | number
    group_name?: StringWithAggregatesFilter | string
    permission_id?: IntWithAggregatesFilter | number
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type permissionWhereInput = {
    AND?: Enumerable<permissionWhereInput>
    OR?: Enumerable<permissionWhereInput>
    NOT?: Enumerable<permissionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    user_group?: User_groupListRelationFilter
  }

  export type permissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user_group?: user_groupOrderByRelationAggregateInput
  }

  export type permissionWhereUniqueInput = {
    id?: number
  }

  export type permissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: permissionCountOrderByAggregateInput
    _avg?: permissionAvgOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
    _sum?: permissionSumOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<permissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<permissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<permissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type doorsWhereInput = {
    AND?: Enumerable<doorsWhereInput>
    OR?: Enumerable<doorsWhereInput>
    NOT?: Enumerable<doorsWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    org?: XOR<OrganizationRelationFilter, organizationWhereInput>
    name?: StringFilter | string
    description?: StringFilter | string
    door_no?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    inout_log?: Inout_logListRelationFilter
    devices_setup?: Devices_setupListRelationFilter
  }

  export type doorsOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    org?: organizationOrderByWithRelationInput
    name?: SortOrder
    description?: SortOrder
    door_no?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    inout_log?: inout_logOrderByRelationAggregateInput
    devices_setup?: devices_setupOrderByRelationAggregateInput
  }

  export type doorsWhereUniqueInput = {
    id?: number
  }

  export type doorsOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    door_no?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: doorsCountOrderByAggregateInput
    _avg?: doorsAvgOrderByAggregateInput
    _max?: doorsMaxOrderByAggregateInput
    _min?: doorsMinOrderByAggregateInput
    _sum?: doorsSumOrderByAggregateInput
  }

  export type doorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<doorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<doorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<doorsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    org_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    door_no?: StringWithAggregatesFilter | string
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type device_typeWhereInput = {
    AND?: Enumerable<device_typeWhereInput>
    OR?: Enumerable<device_typeWhereInput>
    NOT?: Enumerable<device_typeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    operation?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    devices_setup?: Devices_setupListRelationFilter
  }

  export type device_typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    operation?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    devices_setup?: devices_setupOrderByRelationAggregateInput
  }

  export type device_typeWhereUniqueInput = {
    id?: number
  }

  export type device_typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    operation?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: device_typeCountOrderByAggregateInput
    _avg?: device_typeAvgOrderByAggregateInput
    _max?: device_typeMaxOrderByAggregateInput
    _min?: device_typeMinOrderByAggregateInput
    _sum?: device_typeSumOrderByAggregateInput
  }

  export type device_typeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<device_typeScalarWhereWithAggregatesInput>
    OR?: Enumerable<device_typeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<device_typeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    operation?: StringWithAggregatesFilter | string
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type inout_logWhereInput = {
    AND?: Enumerable<inout_logWhereInput>
    OR?: Enumerable<inout_logWhereInput>
    NOT?: Enumerable<inout_logWhereInput>
    id?: IntFilter | number
    organization?: StringNullableFilter | string | null
    org_id?: IntFilter | number
    org?: XOR<OrganizationRelationFilter, organizationWhereInput>
    devicePort?: StringNullableFilter | string | null
    device_id?: IntNullableFilter | number | null
    doorNo?: StringNullableFilter | string | null
    door_id?: IntFilter | number
    door?: XOR<DoorsRelationFilter, doorsWhereInput>
    studentName?: StringNullableFilter | string | null
    student_id?: IntFilter | number
    students?: XOR<StudentsRelationFilter, studentsWhereInput>
    operation?: StringFilter | string
    log_date?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type inout_logOrderByWithRelationInput = {
    id?: SortOrder
    organization?: SortOrder
    org_id?: SortOrder
    org?: organizationOrderByWithRelationInput
    devicePort?: SortOrder
    device_id?: SortOrder
    doorNo?: SortOrder
    door_id?: SortOrder
    door?: doorsOrderByWithRelationInput
    studentName?: SortOrder
    student_id?: SortOrder
    students?: studentsOrderByWithRelationInput
    operation?: SortOrder
    log_date?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type inout_logWhereUniqueInput = {
    id?: number
  }

  export type inout_logOrderByWithAggregationInput = {
    id?: SortOrder
    organization?: SortOrder
    org_id?: SortOrder
    devicePort?: SortOrder
    device_id?: SortOrder
    doorNo?: SortOrder
    door_id?: SortOrder
    studentName?: SortOrder
    student_id?: SortOrder
    operation?: SortOrder
    log_date?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: inout_logCountOrderByAggregateInput
    _avg?: inout_logAvgOrderByAggregateInput
    _max?: inout_logMaxOrderByAggregateInput
    _min?: inout_logMinOrderByAggregateInput
    _sum?: inout_logSumOrderByAggregateInput
  }

  export type inout_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<inout_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<inout_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<inout_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    organization?: StringNullableWithAggregatesFilter | string | null
    org_id?: IntWithAggregatesFilter | number
    devicePort?: StringNullableWithAggregatesFilter | string | null
    device_id?: IntNullableWithAggregatesFilter | number | null
    doorNo?: StringNullableWithAggregatesFilter | string | null
    door_id?: IntWithAggregatesFilter | number
    studentName?: StringNullableWithAggregatesFilter | string | null
    student_id?: IntWithAggregatesFilter | number
    operation?: StringWithAggregatesFilter | string
    log_date?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type commandsWhereInput = {
    AND?: Enumerable<commandsWhereInput>
    OR?: Enumerable<commandsWhereInput>
    NOT?: Enumerable<commandsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    command_value?: StringFilter | string
    description?: StringFilter | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type commandsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    command_value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type commandsWhereUniqueInput = {
    id?: number
  }

  export type commandsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    command_value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: commandsCountOrderByAggregateInput
    _avg?: commandsAvgOrderByAggregateInput
    _max?: commandsMaxOrderByAggregateInput
    _min?: commandsMinOrderByAggregateInput
    _sum?: commandsSumOrderByAggregateInput
  }

  export type commandsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<commandsScalarWhereWithAggregatesInput>
    OR?: Enumerable<commandsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<commandsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    command_value?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type rfid_cardWhereInput = {
    AND?: Enumerable<rfid_cardWhereInput>
    OR?: Enumerable<rfid_cardWhereInput>
    NOT?: Enumerable<rfid_cardWhereInput>
    id?: IntFilter | number
    card_no?: StringFilter | string
    description?: StringFilter | string
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    user?: UserListRelationFilter
    students?: StudentsListRelationFilter
  }

  export type rfid_cardOrderByWithRelationInput = {
    id?: SortOrder
    card_no?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByRelationAggregateInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type rfid_cardWhereUniqueInput = {
    id?: number
  }

  export type rfid_cardOrderByWithAggregationInput = {
    id?: SortOrder
    card_no?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: rfid_cardCountOrderByAggregateInput
    _avg?: rfid_cardAvgOrderByAggregateInput
    _max?: rfid_cardMaxOrderByAggregateInput
    _min?: rfid_cardMinOrderByAggregateInput
    _sum?: rfid_cardSumOrderByAggregateInput
  }

  export type rfid_cardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rfid_cardScalarWhereWithAggregatesInput>
    OR?: Enumerable<rfid_cardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rfid_cardScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    card_no?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    isActive?: BoolWithAggregatesFilter | boolean
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type devices_setupWhereInput = {
    AND?: Enumerable<devices_setupWhereInput>
    OR?: Enumerable<devices_setupWhereInput>
    NOT?: Enumerable<devices_setupWhereInput>
    id?: IntFilter | number
    friendlyName?: StringFilter | string
    locationId?: StringNullableFilter | string | null
    manufacturer?: StringFilter | string
    path?: StringFilter | string
    pnpId?: StringFilter | string
    productId?: StringNullableFilter | string | null
    serialNumber?: StringNullableFilter | string | null
    vendorId?: StringNullableFilter | string | null
    devicesType?: IntNullableFilter | number | null
    device_type?: XOR<Device_typeRelationFilter, device_typeWhereInput> | null
    door_id?: IntNullableFilter | number | null
    door?: XOR<DoorsRelationFilter, doorsWhereInput> | null
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type devices_setupOrderByWithRelationInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    locationId?: SortOrder
    manufacturer?: SortOrder
    path?: SortOrder
    pnpId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    vendorId?: SortOrder
    devicesType?: SortOrder
    device_type?: device_typeOrderByWithRelationInput
    door_id?: SortOrder
    door?: doorsOrderByWithRelationInput
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type devices_setupWhereUniqueInput = {
    id?: number
  }

  export type devices_setupOrderByWithAggregationInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    locationId?: SortOrder
    manufacturer?: SortOrder
    path?: SortOrder
    pnpId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    vendorId?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: devices_setupCountOrderByAggregateInput
    _avg?: devices_setupAvgOrderByAggregateInput
    _max?: devices_setupMaxOrderByAggregateInput
    _min?: devices_setupMinOrderByAggregateInput
    _sum?: devices_setupSumOrderByAggregateInput
  }

  export type devices_setupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<devices_setupScalarWhereWithAggregatesInput>
    OR?: Enumerable<devices_setupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<devices_setupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    friendlyName?: StringWithAggregatesFilter | string
    locationId?: StringNullableWithAggregatesFilter | string | null
    manufacturer?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    pnpId?: StringWithAggregatesFilter | string
    productId?: StringNullableWithAggregatesFilter | string | null
    serialNumber?: StringNullableWithAggregatesFilter | string | null
    vendorId?: StringNullableWithAggregatesFilter | string | null
    devicesType?: IntNullableWithAggregatesFilter | number | null
    door_id?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolWithAggregatesFilter | boolean
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type studentsWhereInput = {
    AND?: Enumerable<studentsWhereInput>
    OR?: Enumerable<studentsWhereInput>
    NOT?: Enumerable<studentsWhereInput>
    id?: IntFilter | number
    org_id?: IntNullableFilter | number | null
    student_id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    address?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    barcode?: StringNullableFilter | string | null
    user_group_id?: IntNullableFilter | number | null
    rfid_card_id?: IntNullableFilter | number | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    org?: XOR<OrganizationRelationFilter, organizationWhereInput> | null
    user_group?: XOR<User_groupRelationFilter, user_groupWhereInput> | null
    rfid_card?: XOR<Rfid_cardRelationFilter, rfid_cardWhereInput> | null
    inout_log?: Inout_logListRelationFilter
  }

  export type studentsOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    barcode?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    org?: organizationOrderByWithRelationInput
    user_group?: user_groupOrderByWithRelationInput
    rfid_card?: rfid_cardOrderByWithRelationInput
    inout_log?: inout_logOrderByRelationAggregateInput
  }

  export type studentsWhereUniqueInput = {
    id?: number
  }

  export type studentsOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    barcode?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<studentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<studentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<studentsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    org_id?: IntNullableWithAggregatesFilter | number | null
    student_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    barcode?: StringNullableWithAggregatesFilter | string | null
    user_group_id?: IntNullableWithAggregatesFilter | number | null
    rfid_card_id?: IntNullableWithAggregatesFilter | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type organizationCreateInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user?: userCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user?: userUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type organizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupCreateInput = {
    org: organizationCreateNestedOneWithoutOrg_groupInput
    name: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type organization_groupUncheckedCreateInput = {
    id?: number
    org_id: number
    name: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type organization_groupUpdateInput = {
    org?: organizationUpdateOneRequiredWithoutOrg_groupNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    org: organizationCreateNestedOneWithoutUserInput
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    rfid_card?: rfid_cardCreateNestedOneWithoutUserInput
    user_group?: user_groupCreateNestedOneWithoutUserInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: number
    org_id: number
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    user_group_id?: number | null
    rfid_card_id?: number | null
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userUpdateInput = {
    org?: organizationUpdateOneRequiredWithoutUserNestedInput
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    rfid_card?: rfid_cardUpdateOneWithoutUserNestedInput
    user_group?: user_groupUpdateOneWithoutUserNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_groupCreateInput = {
    org: organizationCreateNestedOneWithoutUser_groupInput
    group_name: string
    permission: permissionCreateNestedOneWithoutUser_groupInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutUser_groupInput
    students?: studentsCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUncheckedCreateInput = {
    id?: number
    org_id: number
    group_name: string
    permission_id: number
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutUser_groupInput
    students?: studentsUncheckedCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUpdateInput = {
    org?: organizationUpdateOneRequiredWithoutUser_groupNestedInput
    group_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateOneRequiredWithoutUser_groupNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutUser_groupNestedInput
    students?: studentsUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutUser_groupNestedInput
    students?: studentsUncheckedUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUpdateManyMutationInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionCreateInput = {
    name: string
    description: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user_group?: user_groupCreateNestedManyWithoutPermissionInput
  }

  export type permissionUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user_group?: user_groupUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_group?: user_groupUpdateManyWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_group?: user_groupUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doorsCreateInput = {
    org: organizationCreateNestedOneWithoutDoorsInput
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logCreateNestedManyWithoutDoorInput
    devices_setup?: devices_setupCreateNestedManyWithoutDoorInput
  }

  export type doorsUncheckedCreateInput = {
    id?: number
    org_id: number
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutDoorInput
    devices_setup?: devices_setupUncheckedCreateNestedManyWithoutDoorInput
  }

  export type doorsUpdateInput = {
    org?: organizationUpdateOneRequiredWithoutDoorsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUpdateManyWithoutDoorNestedInput
    devices_setup?: devices_setupUpdateManyWithoutDoorNestedInput
  }

  export type doorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutDoorNestedInput
    devices_setup?: devices_setupUncheckedUpdateManyWithoutDoorNestedInput
  }

  export type doorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_typeCreateInput = {
    name: string
    description: string
    operation: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    devices_setup?: devices_setupCreateNestedManyWithoutDevice_typeInput
  }

  export type device_typeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    operation: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    devices_setup?: devices_setupUncheckedCreateNestedManyWithoutDevice_typeInput
  }

  export type device_typeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices_setup?: devices_setupUpdateManyWithoutDevice_typeNestedInput
  }

  export type device_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices_setup?: devices_setupUncheckedUpdateManyWithoutDevice_typeNestedInput
  }

  export type device_typeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logCreateInput = {
    organization?: string | null
    org: organizationCreateNestedOneWithoutInout_logInput
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door: doorsCreateNestedOneWithoutInout_logInput
    studentName?: string | null
    students: studentsCreateNestedOneWithoutInout_logInput
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logUncheckedCreateInput = {
    id?: number
    organization?: string | null
    org_id: number
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door_id: number
    studentName?: string | null
    student_id: number
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logUpdateInput = {
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org?: organizationUpdateOneRequiredWithoutInout_logNestedInput
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door?: doorsUpdateOneRequiredWithoutInout_logNestedInput
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    students?: studentsUpdateOneRequiredWithoutInout_logNestedInput
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: IntFieldUpdateOperationsInput | number
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: IntFieldUpdateOperationsInput | number
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUpdateManyMutationInput = {
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: IntFieldUpdateOperationsInput | number
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: IntFieldUpdateOperationsInput | number
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commandsCreateInput = {
    name: string
    command_value: string
    description: string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type commandsUncheckedCreateInput = {
    id?: number
    name: string
    command_value: string
    description: string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type commandsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    command_value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    command_value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commandsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    command_value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    command_value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rfid_cardCreateInput = {
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutRfid_cardInput
    students?: studentsCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardUncheckedCreateInput = {
    id?: number
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutRfid_cardInput
    students?: studentsUncheckedCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardUpdateInput = {
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutRfid_cardNestedInput
    students?: studentsUpdateManyWithoutRfid_cardNestedInput
  }

  export type rfid_cardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutRfid_cardNestedInput
    students?: studentsUncheckedUpdateManyWithoutRfid_cardNestedInput
  }

  export type rfid_cardUpdateManyMutationInput = {
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rfid_cardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupCreateInput = {
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    device_type?: device_typeCreateNestedOneWithoutDevices_setupInput
    door?: doorsCreateNestedOneWithoutDevices_setupInput
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupUncheckedCreateInput = {
    id?: number
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    devicesType?: number | null
    door_id?: number | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupUpdateInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: device_typeUpdateOneWithoutDevices_setupNestedInput
    door?: doorsUpdateOneWithoutDevices_setupNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    devicesType?: NullableIntFieldUpdateOperationsInput | number | null
    door_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUpdateManyMutationInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    devicesType?: NullableIntFieldUpdateOperationsInput | number | null
    door_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsCreateInput = {
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org?: organizationCreateNestedOneWithoutStudentsInput
    user_group?: user_groupCreateNestedOneWithoutStudentsInput
    rfid_card?: rfid_cardCreateNestedOneWithoutStudentsInput
    inout_log?: inout_logCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    id?: number
    org_id?: number | null
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    user_group_id?: number | null
    rfid_card_id?: number | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsUpdateInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: organizationUpdateOneWithoutStudentsNestedInput
    user_group?: user_groupUpdateOneWithoutStudentsNestedInput
    rfid_card?: rfid_cardUpdateOneWithoutStudentsNestedInput
    inout_log?: inout_logUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUpdateManyMutationInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Organization_groupListRelationFilter = {
    every?: organization_groupWhereInput
    some?: organization_groupWhereInput
    none?: organization_groupWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type User_groupListRelationFilter = {
    every?: user_groupWhereInput
    some?: user_groupWhereInput
    none?: user_groupWhereInput
  }

  export type DoorsListRelationFilter = {
    every?: doorsWhereInput
    some?: doorsWhereInput
    none?: doorsWhereInput
  }

  export type Inout_logListRelationFilter = {
    every?: inout_logWhereInput
    some?: inout_logWhereInput
    none?: inout_logWhereInput
  }

  export type StudentsListRelationFilter = {
    every?: studentsWhereInput
    some?: studentsWhereInput
    none?: studentsWhereInput
  }

  export type organization_groupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_groupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inout_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_no?: SortOrder
    contact_person?: SortOrder
    description?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_no?: SortOrder
    contact_person?: SortOrder
    description?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_no?: SortOrder
    contact_person?: SortOrder
    description?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput
    isNot?: organizationWhereInput
  }

  export type organization_groupCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organization_groupAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
  }

  export type organization_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organization_groupMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type organization_groupSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type Rfid_cardRelationFilter = {
    is?: rfid_cardWhereInput | null
    isNot?: rfid_cardWhereInput | null
  }

  export type User_groupRelationFilter = {
    is?: user_groupWhereInput | null
    isNot?: user_groupWhereInput | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type userIdRfid_card_idCompoundUniqueInput = {
    id: number
    rfid_card_id: number
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    address?: SortOrder
    description?: SortOrder
    user_img?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    address?: SortOrder
    description?: SortOrder
    user_img?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    address?: SortOrder
    description?: SortOrder
    user_img?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type PermissionRelationFilter = {
    is?: permissionWhereInput
    isNot?: permissionWhereInput
  }

  export type user_groupCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    group_name?: SortOrder
    permission_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type user_groupAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    permission_id?: SortOrder
  }

  export type user_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    group_name?: SortOrder
    permission_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type user_groupMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    group_name?: SortOrder
    permission_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type user_groupSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    permission_id?: SortOrder
  }

  export type permissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type permissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type permissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Devices_setupListRelationFilter = {
    every?: devices_setupWhereInput
    some?: devices_setupWhereInput
    none?: devices_setupWhereInput
  }

  export type devices_setupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doorsCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    door_no?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type doorsAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
  }

  export type doorsMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    door_no?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type doorsMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    door_no?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type doorsSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
  }

  export type device_typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    operation?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type device_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type device_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    operation?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type device_typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    operation?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type device_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoorsRelationFilter = {
    is?: doorsWhereInput | null
    isNot?: doorsWhereInput | null
  }

  export type StudentsRelationFilter = {
    is?: studentsWhereInput
    isNot?: studentsWhereInput
  }

  export type inout_logCountOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    org_id?: SortOrder
    devicePort?: SortOrder
    device_id?: SortOrder
    doorNo?: SortOrder
    door_id?: SortOrder
    studentName?: SortOrder
    student_id?: SortOrder
    operation?: SortOrder
    log_date?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type inout_logAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    device_id?: SortOrder
    door_id?: SortOrder
    student_id?: SortOrder
  }

  export type inout_logMaxOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    org_id?: SortOrder
    devicePort?: SortOrder
    device_id?: SortOrder
    doorNo?: SortOrder
    door_id?: SortOrder
    studentName?: SortOrder
    student_id?: SortOrder
    operation?: SortOrder
    log_date?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type inout_logMinOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    org_id?: SortOrder
    devicePort?: SortOrder
    device_id?: SortOrder
    doorNo?: SortOrder
    door_id?: SortOrder
    studentName?: SortOrder
    student_id?: SortOrder
    operation?: SortOrder
    log_date?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type inout_logSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    device_id?: SortOrder
    door_id?: SortOrder
    student_id?: SortOrder
  }

  export type commandsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    command_value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type commandsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    command_value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type commandsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    command_value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type commandsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rfid_cardCountOrderByAggregateInput = {
    id?: SortOrder
    card_no?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type rfid_cardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rfid_cardMaxOrderByAggregateInput = {
    id?: SortOrder
    card_no?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type rfid_cardMinOrderByAggregateInput = {
    id?: SortOrder
    card_no?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type rfid_cardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Device_typeRelationFilter = {
    is?: device_typeWhereInput | null
    isNot?: device_typeWhereInput | null
  }

  export type devices_setupCountOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    locationId?: SortOrder
    manufacturer?: SortOrder
    path?: SortOrder
    pnpId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    vendorId?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type devices_setupAvgOrderByAggregateInput = {
    id?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
  }

  export type devices_setupMaxOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    locationId?: SortOrder
    manufacturer?: SortOrder
    path?: SortOrder
    pnpId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    vendorId?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type devices_setupMinOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    locationId?: SortOrder
    manufacturer?: SortOrder
    path?: SortOrder
    pnpId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    vendorId?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type devices_setupSumOrderByAggregateInput = {
    id?: SortOrder
    devicesType?: SortOrder
    door_id?: SortOrder
  }

  export type studentsCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    barcode?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    barcode?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    barcode?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_group_id?: SortOrder
    rfid_card_id?: SortOrder
  }

  export type organization_groupCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<organization_groupCreateWithoutOrgInput>, Enumerable<organization_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<organization_groupCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<organization_groupWhereUniqueInput>
  }

  export type userCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<userCreateWithoutOrgInput>, Enumerable<userUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type user_groupCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutOrgInput>, Enumerable<user_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
  }

  export type doorsCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<doorsCreateWithoutOrgInput>, Enumerable<doorsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<doorsCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<doorsWhereUniqueInput>
  }

  export type inout_logCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutOrgInput>, Enumerable<inout_logUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type studentsCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<studentsCreateWithoutOrgInput>, Enumerable<studentsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type organization_groupUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<organization_groupCreateWithoutOrgInput>, Enumerable<organization_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<organization_groupCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<organization_groupWhereUniqueInput>
  }

  export type userUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<userCreateWithoutOrgInput>, Enumerable<userUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type user_groupUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutOrgInput>, Enumerable<user_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
  }

  export type doorsUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<doorsCreateWithoutOrgInput>, Enumerable<doorsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<doorsCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<doorsWhereUniqueInput>
  }

  export type inout_logUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutOrgInput>, Enumerable<inout_logUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type studentsUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<Enumerable<studentsCreateWithoutOrgInput>, Enumerable<studentsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutOrgInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type organization_groupUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<organization_groupCreateWithoutOrgInput>, Enumerable<organization_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<organization_groupCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<organization_groupUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<organization_groupWhereUniqueInput>
    disconnect?: Enumerable<organization_groupWhereUniqueInput>
    delete?: Enumerable<organization_groupWhereUniqueInput>
    connect?: Enumerable<organization_groupWhereUniqueInput>
    update?: Enumerable<organization_groupUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<organization_groupUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<organization_groupScalarWhereInput>
  }

  export type userUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutOrgInput>, Enumerable<userUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type user_groupUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutOrgInput>, Enumerable<user_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<user_groupUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<user_groupWhereUniqueInput>
    disconnect?: Enumerable<user_groupWhereUniqueInput>
    delete?: Enumerable<user_groupWhereUniqueInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
    update?: Enumerable<user_groupUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<user_groupUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<user_groupScalarWhereInput>
  }

  export type doorsUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<doorsCreateWithoutOrgInput>, Enumerable<doorsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<doorsCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<doorsUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<doorsWhereUniqueInput>
    disconnect?: Enumerable<doorsWhereUniqueInput>
    delete?: Enumerable<doorsWhereUniqueInput>
    connect?: Enumerable<doorsWhereUniqueInput>
    update?: Enumerable<doorsUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<doorsUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<doorsScalarWhereInput>
  }

  export type inout_logUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutOrgInput>, Enumerable<inout_logUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type studentsUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutOrgInput>, Enumerable<studentsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type organization_groupUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<organization_groupCreateWithoutOrgInput>, Enumerable<organization_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<organization_groupCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<organization_groupUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<organization_groupWhereUniqueInput>
    disconnect?: Enumerable<organization_groupWhereUniqueInput>
    delete?: Enumerable<organization_groupWhereUniqueInput>
    connect?: Enumerable<organization_groupWhereUniqueInput>
    update?: Enumerable<organization_groupUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<organization_groupUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<organization_groupScalarWhereInput>
  }

  export type userUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutOrgInput>, Enumerable<userUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type user_groupUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutOrgInput>, Enumerable<user_groupUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<user_groupUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<user_groupWhereUniqueInput>
    disconnect?: Enumerable<user_groupWhereUniqueInput>
    delete?: Enumerable<user_groupWhereUniqueInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
    update?: Enumerable<user_groupUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<user_groupUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<user_groupScalarWhereInput>
  }

  export type doorsUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<doorsCreateWithoutOrgInput>, Enumerable<doorsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<doorsCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<doorsUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<doorsWhereUniqueInput>
    disconnect?: Enumerable<doorsWhereUniqueInput>
    delete?: Enumerable<doorsWhereUniqueInput>
    connect?: Enumerable<doorsWhereUniqueInput>
    update?: Enumerable<doorsUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<doorsUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<doorsScalarWhereInput>
  }

  export type inout_logUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutOrgInput>, Enumerable<inout_logUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type studentsUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutOrgInput>, Enumerable<studentsUncheckedCreateWithoutOrgInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutOrgInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutOrgInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutOrgInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutOrgInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type organizationCreateNestedOneWithoutOrg_groupInput = {
    create?: XOR<organizationCreateWithoutOrg_groupInput, organizationUncheckedCreateWithoutOrg_groupInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrg_groupInput
    connect?: organizationWhereUniqueInput
  }

  export type organizationUpdateOneRequiredWithoutOrg_groupNestedInput = {
    create?: XOR<organizationCreateWithoutOrg_groupInput, organizationUncheckedCreateWithoutOrg_groupInput>
    connectOrCreate?: organizationCreateOrConnectWithoutOrg_groupInput
    upsert?: organizationUpsertWithoutOrg_groupInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutOrg_groupInput, organizationUncheckedUpdateWithoutOrg_groupInput>
  }

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput
    connect?: organizationWhereUniqueInput
  }

  export type rfid_cardCreateNestedOneWithoutUserInput = {
    create?: XOR<rfid_cardCreateWithoutUserInput, rfid_cardUncheckedCreateWithoutUserInput>
    connectOrCreate?: rfid_cardCreateOrConnectWithoutUserInput
    connect?: rfid_cardWhereUniqueInput
  }

  export type user_groupCreateNestedOneWithoutUserInput = {
    create?: XOR<user_groupCreateWithoutUserInput, user_groupUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_groupCreateOrConnectWithoutUserInput
    connect?: user_groupWhereUniqueInput
  }

  export type organizationUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput
    upsert?: organizationUpsertWithoutUserInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>
  }

  export type rfid_cardUpdateOneWithoutUserNestedInput = {
    create?: XOR<rfid_cardCreateWithoutUserInput, rfid_cardUncheckedCreateWithoutUserInput>
    connectOrCreate?: rfid_cardCreateOrConnectWithoutUserInput
    upsert?: rfid_cardUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: rfid_cardWhereUniqueInput
    update?: XOR<rfid_cardUpdateWithoutUserInput, rfid_cardUncheckedUpdateWithoutUserInput>
  }

  export type user_groupUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_groupCreateWithoutUserInput, user_groupUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_groupCreateOrConnectWithoutUserInput
    upsert?: user_groupUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: user_groupWhereUniqueInput
    update?: XOR<user_groupUpdateWithoutUserInput, user_groupUncheckedUpdateWithoutUserInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type organizationCreateNestedOneWithoutUser_groupInput = {
    create?: XOR<organizationCreateWithoutUser_groupInput, organizationUncheckedCreateWithoutUser_groupInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUser_groupInput
    connect?: organizationWhereUniqueInput
  }

  export type permissionCreateNestedOneWithoutUser_groupInput = {
    create?: XOR<permissionCreateWithoutUser_groupInput, permissionUncheckedCreateWithoutUser_groupInput>
    connectOrCreate?: permissionCreateOrConnectWithoutUser_groupInput
    connect?: permissionWhereUniqueInput
  }

  export type userCreateNestedManyWithoutUser_groupInput = {
    create?: XOR<Enumerable<userCreateWithoutUser_groupInput>, Enumerable<userUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutUser_groupInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type studentsCreateNestedManyWithoutUser_groupInput = {
    create?: XOR<Enumerable<studentsCreateWithoutUser_groupInput>, Enumerable<studentsUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutUser_groupInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type userUncheckedCreateNestedManyWithoutUser_groupInput = {
    create?: XOR<Enumerable<userCreateWithoutUser_groupInput>, Enumerable<userUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutUser_groupInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type studentsUncheckedCreateNestedManyWithoutUser_groupInput = {
    create?: XOR<Enumerable<studentsCreateWithoutUser_groupInput>, Enumerable<studentsUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutUser_groupInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type organizationUpdateOneRequiredWithoutUser_groupNestedInput = {
    create?: XOR<organizationCreateWithoutUser_groupInput, organizationUncheckedCreateWithoutUser_groupInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUser_groupInput
    upsert?: organizationUpsertWithoutUser_groupInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutUser_groupInput, organizationUncheckedUpdateWithoutUser_groupInput>
  }

  export type permissionUpdateOneRequiredWithoutUser_groupNestedInput = {
    create?: XOR<permissionCreateWithoutUser_groupInput, permissionUncheckedCreateWithoutUser_groupInput>
    connectOrCreate?: permissionCreateOrConnectWithoutUser_groupInput
    upsert?: permissionUpsertWithoutUser_groupInput
    connect?: permissionWhereUniqueInput
    update?: XOR<permissionUpdateWithoutUser_groupInput, permissionUncheckedUpdateWithoutUser_groupInput>
  }

  export type userUpdateManyWithoutUser_groupNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutUser_groupInput>, Enumerable<userUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutUser_groupInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutUser_groupInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutUser_groupInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutUser_groupInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type studentsUpdateManyWithoutUser_groupNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutUser_groupInput>, Enumerable<studentsUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutUser_groupInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutUser_groupInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutUser_groupInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutUser_groupInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type userUncheckedUpdateManyWithoutUser_groupNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutUser_groupInput>, Enumerable<userUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutUser_groupInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutUser_groupInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutUser_groupInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutUser_groupInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type studentsUncheckedUpdateManyWithoutUser_groupNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutUser_groupInput>, Enumerable<studentsUncheckedCreateWithoutUser_groupInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutUser_groupInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutUser_groupInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutUser_groupInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutUser_groupInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type user_groupCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutPermissionInput>, Enumerable<user_groupUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutPermissionInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
  }

  export type user_groupUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutPermissionInput>, Enumerable<user_groupUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutPermissionInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
  }

  export type user_groupUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutPermissionInput>, Enumerable<user_groupUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<user_groupUpsertWithWhereUniqueWithoutPermissionInput>
    set?: Enumerable<user_groupWhereUniqueInput>
    disconnect?: Enumerable<user_groupWhereUniqueInput>
    delete?: Enumerable<user_groupWhereUniqueInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
    update?: Enumerable<user_groupUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<user_groupUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<user_groupScalarWhereInput>
  }

  export type user_groupUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<user_groupCreateWithoutPermissionInput>, Enumerable<user_groupUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<user_groupCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<user_groupUpsertWithWhereUniqueWithoutPermissionInput>
    set?: Enumerable<user_groupWhereUniqueInput>
    disconnect?: Enumerable<user_groupWhereUniqueInput>
    delete?: Enumerable<user_groupWhereUniqueInput>
    connect?: Enumerable<user_groupWhereUniqueInput>
    update?: Enumerable<user_groupUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<user_groupUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<user_groupScalarWhereInput>
  }

  export type organizationCreateNestedOneWithoutDoorsInput = {
    create?: XOR<organizationCreateWithoutDoorsInput, organizationUncheckedCreateWithoutDoorsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutDoorsInput
    connect?: organizationWhereUniqueInput
  }

  export type inout_logCreateNestedManyWithoutDoorInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutDoorInput>, Enumerable<inout_logUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutDoorInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type devices_setupCreateNestedManyWithoutDoorInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDoorInput>, Enumerable<devices_setupUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDoorInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
  }

  export type inout_logUncheckedCreateNestedManyWithoutDoorInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutDoorInput>, Enumerable<inout_logUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutDoorInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type devices_setupUncheckedCreateNestedManyWithoutDoorInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDoorInput>, Enumerable<devices_setupUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDoorInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
  }

  export type organizationUpdateOneRequiredWithoutDoorsNestedInput = {
    create?: XOR<organizationCreateWithoutDoorsInput, organizationUncheckedCreateWithoutDoorsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutDoorsInput
    upsert?: organizationUpsertWithoutDoorsInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutDoorsInput, organizationUncheckedUpdateWithoutDoorsInput>
  }

  export type inout_logUpdateManyWithoutDoorNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutDoorInput>, Enumerable<inout_logUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutDoorInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutDoorInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutDoorInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutDoorInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type devices_setupUpdateManyWithoutDoorNestedInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDoorInput>, Enumerable<devices_setupUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDoorInput>
    upsert?: Enumerable<devices_setupUpsertWithWhereUniqueWithoutDoorInput>
    set?: Enumerable<devices_setupWhereUniqueInput>
    disconnect?: Enumerable<devices_setupWhereUniqueInput>
    delete?: Enumerable<devices_setupWhereUniqueInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
    update?: Enumerable<devices_setupUpdateWithWhereUniqueWithoutDoorInput>
    updateMany?: Enumerable<devices_setupUpdateManyWithWhereWithoutDoorInput>
    deleteMany?: Enumerable<devices_setupScalarWhereInput>
  }

  export type inout_logUncheckedUpdateManyWithoutDoorNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutDoorInput>, Enumerable<inout_logUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutDoorInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutDoorInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutDoorInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutDoorInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type devices_setupUncheckedUpdateManyWithoutDoorNestedInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDoorInput>, Enumerable<devices_setupUncheckedCreateWithoutDoorInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDoorInput>
    upsert?: Enumerable<devices_setupUpsertWithWhereUniqueWithoutDoorInput>
    set?: Enumerable<devices_setupWhereUniqueInput>
    disconnect?: Enumerable<devices_setupWhereUniqueInput>
    delete?: Enumerable<devices_setupWhereUniqueInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
    update?: Enumerable<devices_setupUpdateWithWhereUniqueWithoutDoorInput>
    updateMany?: Enumerable<devices_setupUpdateManyWithWhereWithoutDoorInput>
    deleteMany?: Enumerable<devices_setupScalarWhereInput>
  }

  export type devices_setupCreateNestedManyWithoutDevice_typeInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDevice_typeInput>, Enumerable<devices_setupUncheckedCreateWithoutDevice_typeInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDevice_typeInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
  }

  export type devices_setupUncheckedCreateNestedManyWithoutDevice_typeInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDevice_typeInput>, Enumerable<devices_setupUncheckedCreateWithoutDevice_typeInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDevice_typeInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
  }

  export type devices_setupUpdateManyWithoutDevice_typeNestedInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDevice_typeInput>, Enumerable<devices_setupUncheckedCreateWithoutDevice_typeInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDevice_typeInput>
    upsert?: Enumerable<devices_setupUpsertWithWhereUniqueWithoutDevice_typeInput>
    set?: Enumerable<devices_setupWhereUniqueInput>
    disconnect?: Enumerable<devices_setupWhereUniqueInput>
    delete?: Enumerable<devices_setupWhereUniqueInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
    update?: Enumerable<devices_setupUpdateWithWhereUniqueWithoutDevice_typeInput>
    updateMany?: Enumerable<devices_setupUpdateManyWithWhereWithoutDevice_typeInput>
    deleteMany?: Enumerable<devices_setupScalarWhereInput>
  }

  export type devices_setupUncheckedUpdateManyWithoutDevice_typeNestedInput = {
    create?: XOR<Enumerable<devices_setupCreateWithoutDevice_typeInput>, Enumerable<devices_setupUncheckedCreateWithoutDevice_typeInput>>
    connectOrCreate?: Enumerable<devices_setupCreateOrConnectWithoutDevice_typeInput>
    upsert?: Enumerable<devices_setupUpsertWithWhereUniqueWithoutDevice_typeInput>
    set?: Enumerable<devices_setupWhereUniqueInput>
    disconnect?: Enumerable<devices_setupWhereUniqueInput>
    delete?: Enumerable<devices_setupWhereUniqueInput>
    connect?: Enumerable<devices_setupWhereUniqueInput>
    update?: Enumerable<devices_setupUpdateWithWhereUniqueWithoutDevice_typeInput>
    updateMany?: Enumerable<devices_setupUpdateManyWithWhereWithoutDevice_typeInput>
    deleteMany?: Enumerable<devices_setupScalarWhereInput>
  }

  export type organizationCreateNestedOneWithoutInout_logInput = {
    create?: XOR<organizationCreateWithoutInout_logInput, organizationUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: organizationCreateOrConnectWithoutInout_logInput
    connect?: organizationWhereUniqueInput
  }

  export type doorsCreateNestedOneWithoutInout_logInput = {
    create?: XOR<doorsCreateWithoutInout_logInput, doorsUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: doorsCreateOrConnectWithoutInout_logInput
    connect?: doorsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutInout_logInput = {
    create?: XOR<studentsCreateWithoutInout_logInput, studentsUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: studentsCreateOrConnectWithoutInout_logInput
    connect?: studentsWhereUniqueInput
  }

  export type organizationUpdateOneRequiredWithoutInout_logNestedInput = {
    create?: XOR<organizationCreateWithoutInout_logInput, organizationUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: organizationCreateOrConnectWithoutInout_logInput
    upsert?: organizationUpsertWithoutInout_logInput
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutInout_logInput, organizationUncheckedUpdateWithoutInout_logInput>
  }

  export type doorsUpdateOneRequiredWithoutInout_logNestedInput = {
    create?: XOR<doorsCreateWithoutInout_logInput, doorsUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: doorsCreateOrConnectWithoutInout_logInput
    upsert?: doorsUpsertWithoutInout_logInput
    connect?: doorsWhereUniqueInput
    update?: XOR<doorsUpdateWithoutInout_logInput, doorsUncheckedUpdateWithoutInout_logInput>
  }

  export type studentsUpdateOneRequiredWithoutInout_logNestedInput = {
    create?: XOR<studentsCreateWithoutInout_logInput, studentsUncheckedCreateWithoutInout_logInput>
    connectOrCreate?: studentsCreateOrConnectWithoutInout_logInput
    upsert?: studentsUpsertWithoutInout_logInput
    connect?: studentsWhereUniqueInput
    update?: XOR<studentsUpdateWithoutInout_logInput, studentsUncheckedUpdateWithoutInout_logInput>
  }

  export type userCreateNestedManyWithoutRfid_cardInput = {
    create?: XOR<Enumerable<userCreateWithoutRfid_cardInput>, Enumerable<userUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutRfid_cardInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type studentsCreateNestedManyWithoutRfid_cardInput = {
    create?: XOR<Enumerable<studentsCreateWithoutRfid_cardInput>, Enumerable<studentsUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutRfid_cardInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type userUncheckedCreateNestedManyWithoutRfid_cardInput = {
    create?: XOR<Enumerable<userCreateWithoutRfid_cardInput>, Enumerable<userUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutRfid_cardInput>
    connect?: Enumerable<userWhereUniqueInput>
  }

  export type studentsUncheckedCreateNestedManyWithoutRfid_cardInput = {
    create?: XOR<Enumerable<studentsCreateWithoutRfid_cardInput>, Enumerable<studentsUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutRfid_cardInput>
    connect?: Enumerable<studentsWhereUniqueInput>
  }

  export type userUpdateManyWithoutRfid_cardNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutRfid_cardInput>, Enumerable<userUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutRfid_cardInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutRfid_cardInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutRfid_cardInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutRfid_cardInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type studentsUpdateManyWithoutRfid_cardNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutRfid_cardInput>, Enumerable<studentsUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutRfid_cardInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutRfid_cardInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutRfid_cardInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutRfid_cardInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type userUncheckedUpdateManyWithoutRfid_cardNestedInput = {
    create?: XOR<Enumerable<userCreateWithoutRfid_cardInput>, Enumerable<userUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<userCreateOrConnectWithoutRfid_cardInput>
    upsert?: Enumerable<userUpsertWithWhereUniqueWithoutRfid_cardInput>
    set?: Enumerable<userWhereUniqueInput>
    disconnect?: Enumerable<userWhereUniqueInput>
    delete?: Enumerable<userWhereUniqueInput>
    connect?: Enumerable<userWhereUniqueInput>
    update?: Enumerable<userUpdateWithWhereUniqueWithoutRfid_cardInput>
    updateMany?: Enumerable<userUpdateManyWithWhereWithoutRfid_cardInput>
    deleteMany?: Enumerable<userScalarWhereInput>
  }

  export type studentsUncheckedUpdateManyWithoutRfid_cardNestedInput = {
    create?: XOR<Enumerable<studentsCreateWithoutRfid_cardInput>, Enumerable<studentsUncheckedCreateWithoutRfid_cardInput>>
    connectOrCreate?: Enumerable<studentsCreateOrConnectWithoutRfid_cardInput>
    upsert?: Enumerable<studentsUpsertWithWhereUniqueWithoutRfid_cardInput>
    set?: Enumerable<studentsWhereUniqueInput>
    disconnect?: Enumerable<studentsWhereUniqueInput>
    delete?: Enumerable<studentsWhereUniqueInput>
    connect?: Enumerable<studentsWhereUniqueInput>
    update?: Enumerable<studentsUpdateWithWhereUniqueWithoutRfid_cardInput>
    updateMany?: Enumerable<studentsUpdateManyWithWhereWithoutRfid_cardInput>
    deleteMany?: Enumerable<studentsScalarWhereInput>
  }

  export type device_typeCreateNestedOneWithoutDevices_setupInput = {
    create?: XOR<device_typeCreateWithoutDevices_setupInput, device_typeUncheckedCreateWithoutDevices_setupInput>
    connectOrCreate?: device_typeCreateOrConnectWithoutDevices_setupInput
    connect?: device_typeWhereUniqueInput
  }

  export type doorsCreateNestedOneWithoutDevices_setupInput = {
    create?: XOR<doorsCreateWithoutDevices_setupInput, doorsUncheckedCreateWithoutDevices_setupInput>
    connectOrCreate?: doorsCreateOrConnectWithoutDevices_setupInput
    connect?: doorsWhereUniqueInput
  }

  export type device_typeUpdateOneWithoutDevices_setupNestedInput = {
    create?: XOR<device_typeCreateWithoutDevices_setupInput, device_typeUncheckedCreateWithoutDevices_setupInput>
    connectOrCreate?: device_typeCreateOrConnectWithoutDevices_setupInput
    upsert?: device_typeUpsertWithoutDevices_setupInput
    disconnect?: boolean
    delete?: boolean
    connect?: device_typeWhereUniqueInput
    update?: XOR<device_typeUpdateWithoutDevices_setupInput, device_typeUncheckedUpdateWithoutDevices_setupInput>
  }

  export type doorsUpdateOneWithoutDevices_setupNestedInput = {
    create?: XOR<doorsCreateWithoutDevices_setupInput, doorsUncheckedCreateWithoutDevices_setupInput>
    connectOrCreate?: doorsCreateOrConnectWithoutDevices_setupInput
    upsert?: doorsUpsertWithoutDevices_setupInput
    disconnect?: boolean
    delete?: boolean
    connect?: doorsWhereUniqueInput
    update?: XOR<doorsUpdateWithoutDevices_setupInput, doorsUncheckedUpdateWithoutDevices_setupInput>
  }

  export type organizationCreateNestedOneWithoutStudentsInput = {
    create?: XOR<organizationCreateWithoutStudentsInput, organizationUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutStudentsInput
    connect?: organizationWhereUniqueInput
  }

  export type user_groupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<user_groupCreateWithoutStudentsInput, user_groupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: user_groupCreateOrConnectWithoutStudentsInput
    connect?: user_groupWhereUniqueInput
  }

  export type rfid_cardCreateNestedOneWithoutStudentsInput = {
    create?: XOR<rfid_cardCreateWithoutStudentsInput, rfid_cardUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: rfid_cardCreateOrConnectWithoutStudentsInput
    connect?: rfid_cardWhereUniqueInput
  }

  export type inout_logCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutStudentsInput>, Enumerable<inout_logUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type inout_logUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutStudentsInput>, Enumerable<inout_logUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
  }

  export type organizationUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<organizationCreateWithoutStudentsInput, organizationUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutStudentsInput
    upsert?: organizationUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: organizationWhereUniqueInput
    update?: XOR<organizationUpdateWithoutStudentsInput, organizationUncheckedUpdateWithoutStudentsInput>
  }

  export type user_groupUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<user_groupCreateWithoutStudentsInput, user_groupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: user_groupCreateOrConnectWithoutStudentsInput
    upsert?: user_groupUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: user_groupWhereUniqueInput
    update?: XOR<user_groupUpdateWithoutStudentsInput, user_groupUncheckedUpdateWithoutStudentsInput>
  }

  export type rfid_cardUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<rfid_cardCreateWithoutStudentsInput, rfid_cardUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: rfid_cardCreateOrConnectWithoutStudentsInput
    upsert?: rfid_cardUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: rfid_cardWhereUniqueInput
    update?: XOR<rfid_cardUpdateWithoutStudentsInput, rfid_cardUncheckedUpdateWithoutStudentsInput>
  }

  export type inout_logUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutStudentsInput>, Enumerable<inout_logUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type inout_logUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<inout_logCreateWithoutStudentsInput>, Enumerable<inout_logUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<inout_logCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<inout_logUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<inout_logWhereUniqueInput>
    disconnect?: Enumerable<inout_logWhereUniqueInput>
    delete?: Enumerable<inout_logWhereUniqueInput>
    connect?: Enumerable<inout_logWhereUniqueInput>
    update?: Enumerable<inout_logUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<inout_logUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<inout_logScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type organization_groupCreateWithoutOrgInput = {
    name: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type organization_groupUncheckedCreateWithoutOrgInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type organization_groupCreateOrConnectWithoutOrgInput = {
    where: organization_groupWhereUniqueInput
    create: XOR<organization_groupCreateWithoutOrgInput, organization_groupUncheckedCreateWithoutOrgInput>
  }

  export type userCreateWithoutOrgInput = {
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    rfid_card?: rfid_cardCreateNestedOneWithoutUserInput
    user_group?: user_groupCreateNestedOneWithoutUserInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userUncheckedCreateWithoutOrgInput = {
    id?: number
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    user_group_id?: number | null
    rfid_card_id?: number | null
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userCreateOrConnectWithoutOrgInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrgInput, userUncheckedCreateWithoutOrgInput>
  }

  export type user_groupCreateWithoutOrgInput = {
    group_name: string
    permission: permissionCreateNestedOneWithoutUser_groupInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutUser_groupInput
    students?: studentsCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUncheckedCreateWithoutOrgInput = {
    id?: number
    group_name: string
    permission_id: number
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutUser_groupInput
    students?: studentsUncheckedCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupCreateOrConnectWithoutOrgInput = {
    where: user_groupWhereUniqueInput
    create: XOR<user_groupCreateWithoutOrgInput, user_groupUncheckedCreateWithoutOrgInput>
  }

  export type doorsCreateWithoutOrgInput = {
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logCreateNestedManyWithoutDoorInput
    devices_setup?: devices_setupCreateNestedManyWithoutDoorInput
  }

  export type doorsUncheckedCreateWithoutOrgInput = {
    id?: number
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutDoorInput
    devices_setup?: devices_setupUncheckedCreateNestedManyWithoutDoorInput
  }

  export type doorsCreateOrConnectWithoutOrgInput = {
    where: doorsWhereUniqueInput
    create: XOR<doorsCreateWithoutOrgInput, doorsUncheckedCreateWithoutOrgInput>
  }

  export type inout_logCreateWithoutOrgInput = {
    organization?: string | null
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door: doorsCreateNestedOneWithoutInout_logInput
    studentName?: string | null
    students: studentsCreateNestedOneWithoutInout_logInput
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logUncheckedCreateWithoutOrgInput = {
    id?: number
    organization?: string | null
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door_id: number
    studentName?: string | null
    student_id: number
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logCreateOrConnectWithoutOrgInput = {
    where: inout_logWhereUniqueInput
    create: XOR<inout_logCreateWithoutOrgInput, inout_logUncheckedCreateWithoutOrgInput>
  }

  export type studentsCreateWithoutOrgInput = {
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user_group?: user_groupCreateNestedOneWithoutStudentsInput
    rfid_card?: rfid_cardCreateNestedOneWithoutStudentsInput
    inout_log?: inout_logCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutOrgInput = {
    id?: number
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    user_group_id?: number | null
    rfid_card_id?: number | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutOrgInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutOrgInput, studentsUncheckedCreateWithoutOrgInput>
  }

  export type organization_groupUpsertWithWhereUniqueWithoutOrgInput = {
    where: organization_groupWhereUniqueInput
    update: XOR<organization_groupUpdateWithoutOrgInput, organization_groupUncheckedUpdateWithoutOrgInput>
    create: XOR<organization_groupCreateWithoutOrgInput, organization_groupUncheckedCreateWithoutOrgInput>
  }

  export type organization_groupUpdateWithWhereUniqueWithoutOrgInput = {
    where: organization_groupWhereUniqueInput
    data: XOR<organization_groupUpdateWithoutOrgInput, organization_groupUncheckedUpdateWithoutOrgInput>
  }

  export type organization_groupUpdateManyWithWhereWithoutOrgInput = {
    where: organization_groupScalarWhereInput
    data: XOR<organization_groupUpdateManyMutationInput, organization_groupUncheckedUpdateManyWithoutOrg_groupInput>
  }

  export type organization_groupScalarWhereInput = {
    AND?: Enumerable<organization_groupScalarWhereInput>
    OR?: Enumerable<organization_groupScalarWhereInput>
    NOT?: Enumerable<organization_groupScalarWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type userUpsertWithWhereUniqueWithoutOrgInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutOrgInput, userUncheckedUpdateWithoutOrgInput>
    create: XOR<userCreateWithoutOrgInput, userUncheckedCreateWithoutOrgInput>
  }

  export type userUpdateWithWhereUniqueWithoutOrgInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutOrgInput, userUncheckedUpdateWithoutOrgInput>
  }

  export type userUpdateManyWithWhereWithoutOrgInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUserInput>
  }

  export type userScalarWhereInput = {
    AND?: Enumerable<userScalarWhereInput>
    OR?: Enumerable<userScalarWhereInput>
    NOT?: Enumerable<userScalarWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    phone_no?: StringFilter | string
    address?: StringFilter | string
    description?: StringFilter | string
    user_img?: StringNullableFilter | string | null
    user_group_id?: IntNullableFilter | number | null
    rfid_card_id?: IntNullableFilter | number | null
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type user_groupUpsertWithWhereUniqueWithoutOrgInput = {
    where: user_groupWhereUniqueInput
    update: XOR<user_groupUpdateWithoutOrgInput, user_groupUncheckedUpdateWithoutOrgInput>
    create: XOR<user_groupCreateWithoutOrgInput, user_groupUncheckedCreateWithoutOrgInput>
  }

  export type user_groupUpdateWithWhereUniqueWithoutOrgInput = {
    where: user_groupWhereUniqueInput
    data: XOR<user_groupUpdateWithoutOrgInput, user_groupUncheckedUpdateWithoutOrgInput>
  }

  export type user_groupUpdateManyWithWhereWithoutOrgInput = {
    where: user_groupScalarWhereInput
    data: XOR<user_groupUpdateManyMutationInput, user_groupUncheckedUpdateManyWithoutUser_groupInput>
  }

  export type user_groupScalarWhereInput = {
    AND?: Enumerable<user_groupScalarWhereInput>
    OR?: Enumerable<user_groupScalarWhereInput>
    NOT?: Enumerable<user_groupScalarWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    group_name?: StringFilter | string
    permission_id?: IntFilter | number
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type doorsUpsertWithWhereUniqueWithoutOrgInput = {
    where: doorsWhereUniqueInput
    update: XOR<doorsUpdateWithoutOrgInput, doorsUncheckedUpdateWithoutOrgInput>
    create: XOR<doorsCreateWithoutOrgInput, doorsUncheckedCreateWithoutOrgInput>
  }

  export type doorsUpdateWithWhereUniqueWithoutOrgInput = {
    where: doorsWhereUniqueInput
    data: XOR<doorsUpdateWithoutOrgInput, doorsUncheckedUpdateWithoutOrgInput>
  }

  export type doorsUpdateManyWithWhereWithoutOrgInput = {
    where: doorsScalarWhereInput
    data: XOR<doorsUpdateManyMutationInput, doorsUncheckedUpdateManyWithoutDoorsInput>
  }

  export type doorsScalarWhereInput = {
    AND?: Enumerable<doorsScalarWhereInput>
    OR?: Enumerable<doorsScalarWhereInput>
    NOT?: Enumerable<doorsScalarWhereInput>
    id?: IntFilter | number
    org_id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    door_no?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type inout_logUpsertWithWhereUniqueWithoutOrgInput = {
    where: inout_logWhereUniqueInput
    update: XOR<inout_logUpdateWithoutOrgInput, inout_logUncheckedUpdateWithoutOrgInput>
    create: XOR<inout_logCreateWithoutOrgInput, inout_logUncheckedCreateWithoutOrgInput>
  }

  export type inout_logUpdateWithWhereUniqueWithoutOrgInput = {
    where: inout_logWhereUniqueInput
    data: XOR<inout_logUpdateWithoutOrgInput, inout_logUncheckedUpdateWithoutOrgInput>
  }

  export type inout_logUpdateManyWithWhereWithoutOrgInput = {
    where: inout_logScalarWhereInput
    data: XOR<inout_logUpdateManyMutationInput, inout_logUncheckedUpdateManyWithoutInout_logInput>
  }

  export type inout_logScalarWhereInput = {
    AND?: Enumerable<inout_logScalarWhereInput>
    OR?: Enumerable<inout_logScalarWhereInput>
    NOT?: Enumerable<inout_logScalarWhereInput>
    id?: IntFilter | number
    organization?: StringNullableFilter | string | null
    org_id?: IntFilter | number
    devicePort?: StringNullableFilter | string | null
    device_id?: IntNullableFilter | number | null
    doorNo?: StringNullableFilter | string | null
    door_id?: IntFilter | number
    studentName?: StringNullableFilter | string | null
    student_id?: IntFilter | number
    operation?: StringFilter | string
    log_date?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type studentsUpsertWithWhereUniqueWithoutOrgInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutOrgInput, studentsUncheckedUpdateWithoutOrgInput>
    create: XOR<studentsCreateWithoutOrgInput, studentsUncheckedCreateWithoutOrgInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutOrgInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutOrgInput, studentsUncheckedUpdateWithoutOrgInput>
  }

  export type studentsUpdateManyWithWhereWithoutOrgInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type studentsScalarWhereInput = {
    AND?: Enumerable<studentsScalarWhereInput>
    OR?: Enumerable<studentsScalarWhereInput>
    NOT?: Enumerable<studentsScalarWhereInput>
    id?: IntFilter | number
    org_id?: IntNullableFilter | number | null
    student_id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    address?: StringFilter | string
    isActive?: BoolNullableFilter | boolean | null
    barcode?: StringNullableFilter | string | null
    user_group_id?: IntNullableFilter | number | null
    rfid_card_id?: IntNullableFilter | number | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type organizationCreateWithoutOrg_groupInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutOrg_groupInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutOrg_groupInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutOrg_groupInput, organizationUncheckedCreateWithoutOrg_groupInput>
  }

  export type organizationUpsertWithoutOrg_groupInput = {
    update: XOR<organizationUpdateWithoutOrg_groupInput, organizationUncheckedUpdateWithoutOrg_groupInput>
    create: XOR<organizationCreateWithoutOrg_groupInput, organizationUncheckedCreateWithoutOrg_groupInput>
  }

  export type organizationUpdateWithoutOrg_groupInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutOrg_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type organizationCreateWithoutUserInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
  }

  export type rfid_cardCreateWithoutUserInput = {
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    students?: studentsCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardUncheckedCreateWithoutUserInput = {
    id?: number
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    students?: studentsUncheckedCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardCreateOrConnectWithoutUserInput = {
    where: rfid_cardWhereUniqueInput
    create: XOR<rfid_cardCreateWithoutUserInput, rfid_cardUncheckedCreateWithoutUserInput>
  }

  export type user_groupCreateWithoutUserInput = {
    org: organizationCreateNestedOneWithoutUser_groupInput
    group_name: string
    permission: permissionCreateNestedOneWithoutUser_groupInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    students?: studentsCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUncheckedCreateWithoutUserInput = {
    id?: number
    org_id: number
    group_name: string
    permission_id: number
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    students?: studentsUncheckedCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupCreateOrConnectWithoutUserInput = {
    where: user_groupWhereUniqueInput
    create: XOR<user_groupCreateWithoutUserInput, user_groupUncheckedCreateWithoutUserInput>
  }

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
  }

  export type organizationUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type rfid_cardUpsertWithoutUserInput = {
    update: XOR<rfid_cardUpdateWithoutUserInput, rfid_cardUncheckedUpdateWithoutUserInput>
    create: XOR<rfid_cardCreateWithoutUserInput, rfid_cardUncheckedCreateWithoutUserInput>
  }

  export type rfid_cardUpdateWithoutUserInput = {
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateManyWithoutRfid_cardNestedInput
  }

  export type rfid_cardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUncheckedUpdateManyWithoutRfid_cardNestedInput
  }

  export type user_groupUpsertWithoutUserInput = {
    update: XOR<user_groupUpdateWithoutUserInput, user_groupUncheckedUpdateWithoutUserInput>
    create: XOR<user_groupCreateWithoutUserInput, user_groupUncheckedCreateWithoutUserInput>
  }

  export type user_groupUpdateWithoutUserInput = {
    org?: organizationUpdateOneRequiredWithoutUser_groupNestedInput
    group_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateOneRequiredWithoutUser_groupNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUncheckedUpdateManyWithoutUser_groupNestedInput
  }

  export type organizationCreateWithoutUser_groupInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user?: userCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutUser_groupInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutUser_groupInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutUser_groupInput, organizationUncheckedCreateWithoutUser_groupInput>
  }

  export type permissionCreateWithoutUser_groupInput = {
    name: string
    description: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type permissionUncheckedCreateWithoutUser_groupInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type permissionCreateOrConnectWithoutUser_groupInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutUser_groupInput, permissionUncheckedCreateWithoutUser_groupInput>
  }

  export type userCreateWithoutUser_groupInput = {
    org: organizationCreateNestedOneWithoutUserInput
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    rfid_card?: rfid_cardCreateNestedOneWithoutUserInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userUncheckedCreateWithoutUser_groupInput = {
    id?: number
    org_id: number
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    rfid_card_id?: number | null
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userCreateOrConnectWithoutUser_groupInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_groupInput, userUncheckedCreateWithoutUser_groupInput>
  }

  export type studentsCreateWithoutUser_groupInput = {
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org?: organizationCreateNestedOneWithoutStudentsInput
    rfid_card?: rfid_cardCreateNestedOneWithoutStudentsInput
    inout_log?: inout_logCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutUser_groupInput = {
    id?: number
    org_id?: number | null
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    rfid_card_id?: number | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutUser_groupInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutUser_groupInput, studentsUncheckedCreateWithoutUser_groupInput>
  }

  export type organizationUpsertWithoutUser_groupInput = {
    update: XOR<organizationUpdateWithoutUser_groupInput, organizationUncheckedUpdateWithoutUser_groupInput>
    create: XOR<organizationCreateWithoutUser_groupInput, organizationUncheckedCreateWithoutUser_groupInput>
  }

  export type organizationUpdateWithoutUser_groupInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user?: userUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutUser_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type permissionUpsertWithoutUser_groupInput = {
    update: XOR<permissionUpdateWithoutUser_groupInput, permissionUncheckedUpdateWithoutUser_groupInput>
    create: XOR<permissionCreateWithoutUser_groupInput, permissionUncheckedCreateWithoutUser_groupInput>
  }

  export type permissionUpdateWithoutUser_groupInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateWithoutUser_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithWhereUniqueWithoutUser_groupInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutUser_groupInput, userUncheckedUpdateWithoutUser_groupInput>
    create: XOR<userCreateWithoutUser_groupInput, userUncheckedCreateWithoutUser_groupInput>
  }

  export type userUpdateWithWhereUniqueWithoutUser_groupInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutUser_groupInput, userUncheckedUpdateWithoutUser_groupInput>
  }

  export type userUpdateManyWithWhereWithoutUser_groupInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUserInput>
  }

  export type studentsUpsertWithWhereUniqueWithoutUser_groupInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutUser_groupInput, studentsUncheckedUpdateWithoutUser_groupInput>
    create: XOR<studentsCreateWithoutUser_groupInput, studentsUncheckedCreateWithoutUser_groupInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutUser_groupInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutUser_groupInput, studentsUncheckedUpdateWithoutUser_groupInput>
  }

  export type studentsUpdateManyWithWhereWithoutUser_groupInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type user_groupCreateWithoutPermissionInput = {
    org: organizationCreateNestedOneWithoutUser_groupInput
    group_name: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutUser_groupInput
    students?: studentsCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUncheckedCreateWithoutPermissionInput = {
    id?: number
    org_id: number
    group_name: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutUser_groupInput
    students?: studentsUncheckedCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupCreateOrConnectWithoutPermissionInput = {
    where: user_groupWhereUniqueInput
    create: XOR<user_groupCreateWithoutPermissionInput, user_groupUncheckedCreateWithoutPermissionInput>
  }

  export type user_groupUpsertWithWhereUniqueWithoutPermissionInput = {
    where: user_groupWhereUniqueInput
    update: XOR<user_groupUpdateWithoutPermissionInput, user_groupUncheckedUpdateWithoutPermissionInput>
    create: XOR<user_groupCreateWithoutPermissionInput, user_groupUncheckedCreateWithoutPermissionInput>
  }

  export type user_groupUpdateWithWhereUniqueWithoutPermissionInput = {
    where: user_groupWhereUniqueInput
    data: XOR<user_groupUpdateWithoutPermissionInput, user_groupUncheckedUpdateWithoutPermissionInput>
  }

  export type user_groupUpdateManyWithWhereWithoutPermissionInput = {
    where: user_groupScalarWhereInput
    data: XOR<user_groupUpdateManyMutationInput, user_groupUncheckedUpdateManyWithoutUser_groupInput>
  }

  export type organizationCreateWithoutDoorsInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user?: userCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutDoorsInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutDoorsInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutDoorsInput, organizationUncheckedCreateWithoutDoorsInput>
  }

  export type inout_logCreateWithoutDoorInput = {
    organization?: string | null
    org: organizationCreateNestedOneWithoutInout_logInput
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    studentName?: string | null
    students: studentsCreateNestedOneWithoutInout_logInput
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logUncheckedCreateWithoutDoorInput = {
    id?: number
    organization?: string | null
    org_id: number
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    studentName?: string | null
    student_id: number
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logCreateOrConnectWithoutDoorInput = {
    where: inout_logWhereUniqueInput
    create: XOR<inout_logCreateWithoutDoorInput, inout_logUncheckedCreateWithoutDoorInput>
  }

  export type devices_setupCreateWithoutDoorInput = {
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    device_type?: device_typeCreateNestedOneWithoutDevices_setupInput
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupUncheckedCreateWithoutDoorInput = {
    id?: number
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    devicesType?: number | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupCreateOrConnectWithoutDoorInput = {
    where: devices_setupWhereUniqueInput
    create: XOR<devices_setupCreateWithoutDoorInput, devices_setupUncheckedCreateWithoutDoorInput>
  }

  export type organizationUpsertWithoutDoorsInput = {
    update: XOR<organizationUpdateWithoutDoorsInput, organizationUncheckedUpdateWithoutDoorsInput>
    create: XOR<organizationCreateWithoutDoorsInput, organizationUncheckedCreateWithoutDoorsInput>
  }

  export type organizationUpdateWithoutDoorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user?: userUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutDoorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type inout_logUpsertWithWhereUniqueWithoutDoorInput = {
    where: inout_logWhereUniqueInput
    update: XOR<inout_logUpdateWithoutDoorInput, inout_logUncheckedUpdateWithoutDoorInput>
    create: XOR<inout_logCreateWithoutDoorInput, inout_logUncheckedCreateWithoutDoorInput>
  }

  export type inout_logUpdateWithWhereUniqueWithoutDoorInput = {
    where: inout_logWhereUniqueInput
    data: XOR<inout_logUpdateWithoutDoorInput, inout_logUncheckedUpdateWithoutDoorInput>
  }

  export type inout_logUpdateManyWithWhereWithoutDoorInput = {
    where: inout_logScalarWhereInput
    data: XOR<inout_logUpdateManyMutationInput, inout_logUncheckedUpdateManyWithoutInout_logInput>
  }

  export type devices_setupUpsertWithWhereUniqueWithoutDoorInput = {
    where: devices_setupWhereUniqueInput
    update: XOR<devices_setupUpdateWithoutDoorInput, devices_setupUncheckedUpdateWithoutDoorInput>
    create: XOR<devices_setupCreateWithoutDoorInput, devices_setupUncheckedCreateWithoutDoorInput>
  }

  export type devices_setupUpdateWithWhereUniqueWithoutDoorInput = {
    where: devices_setupWhereUniqueInput
    data: XOR<devices_setupUpdateWithoutDoorInput, devices_setupUncheckedUpdateWithoutDoorInput>
  }

  export type devices_setupUpdateManyWithWhereWithoutDoorInput = {
    where: devices_setupScalarWhereInput
    data: XOR<devices_setupUpdateManyMutationInput, devices_setupUncheckedUpdateManyWithoutDevices_setupInput>
  }

  export type devices_setupScalarWhereInput = {
    AND?: Enumerable<devices_setupScalarWhereInput>
    OR?: Enumerable<devices_setupScalarWhereInput>
    NOT?: Enumerable<devices_setupScalarWhereInput>
    id?: IntFilter | number
    friendlyName?: StringFilter | string
    locationId?: StringNullableFilter | string | null
    manufacturer?: StringFilter | string
    path?: StringFilter | string
    pnpId?: StringFilter | string
    productId?: StringNullableFilter | string | null
    serialNumber?: StringNullableFilter | string | null
    vendorId?: StringNullableFilter | string | null
    devicesType?: IntNullableFilter | number | null
    door_id?: IntNullableFilter | number | null
    isActive?: BoolFilter | boolean
    updatedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type devices_setupCreateWithoutDevice_typeInput = {
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    door?: doorsCreateNestedOneWithoutDevices_setupInput
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupUncheckedCreateWithoutDevice_typeInput = {
    id?: number
    friendlyName: string
    locationId?: string | null
    manufacturer: string
    path: string
    pnpId: string
    productId?: string | null
    serialNumber?: string | null
    vendorId?: string | null
    door_id?: number | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type devices_setupCreateOrConnectWithoutDevice_typeInput = {
    where: devices_setupWhereUniqueInput
    create: XOR<devices_setupCreateWithoutDevice_typeInput, devices_setupUncheckedCreateWithoutDevice_typeInput>
  }

  export type devices_setupUpsertWithWhereUniqueWithoutDevice_typeInput = {
    where: devices_setupWhereUniqueInput
    update: XOR<devices_setupUpdateWithoutDevice_typeInput, devices_setupUncheckedUpdateWithoutDevice_typeInput>
    create: XOR<devices_setupCreateWithoutDevice_typeInput, devices_setupUncheckedCreateWithoutDevice_typeInput>
  }

  export type devices_setupUpdateWithWhereUniqueWithoutDevice_typeInput = {
    where: devices_setupWhereUniqueInput
    data: XOR<devices_setupUpdateWithoutDevice_typeInput, devices_setupUncheckedUpdateWithoutDevice_typeInput>
  }

  export type devices_setupUpdateManyWithWhereWithoutDevice_typeInput = {
    where: devices_setupScalarWhereInput
    data: XOR<devices_setupUpdateManyMutationInput, devices_setupUncheckedUpdateManyWithoutDevices_setupInput>
  }

  export type organizationCreateWithoutInout_logInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user?: userCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    students?: studentsCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutInout_logInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    students?: studentsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutInout_logInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutInout_logInput, organizationUncheckedCreateWithoutInout_logInput>
  }

  export type doorsCreateWithoutInout_logInput = {
    org: organizationCreateNestedOneWithoutDoorsInput
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    devices_setup?: devices_setupCreateNestedManyWithoutDoorInput
  }

  export type doorsUncheckedCreateWithoutInout_logInput = {
    id?: number
    org_id: number
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    devices_setup?: devices_setupUncheckedCreateNestedManyWithoutDoorInput
  }

  export type doorsCreateOrConnectWithoutInout_logInput = {
    where: doorsWhereUniqueInput
    create: XOR<doorsCreateWithoutInout_logInput, doorsUncheckedCreateWithoutInout_logInput>
  }

  export type studentsCreateWithoutInout_logInput = {
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org?: organizationCreateNestedOneWithoutStudentsInput
    user_group?: user_groupCreateNestedOneWithoutStudentsInput
    rfid_card?: rfid_cardCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutInout_logInput = {
    id?: number
    org_id?: number | null
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    user_group_id?: number | null
    rfid_card_id?: number | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type studentsCreateOrConnectWithoutInout_logInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutInout_logInput, studentsUncheckedCreateWithoutInout_logInput>
  }

  export type organizationUpsertWithoutInout_logInput = {
    update: XOR<organizationUpdateWithoutInout_logInput, organizationUncheckedUpdateWithoutInout_logInput>
    create: XOR<organizationCreateWithoutInout_logInput, organizationUncheckedCreateWithoutInout_logInput>
  }

  export type organizationUpdateWithoutInout_logInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user?: userUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    students?: studentsUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutInout_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    students?: studentsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type doorsUpsertWithoutInout_logInput = {
    update: XOR<doorsUpdateWithoutInout_logInput, doorsUncheckedUpdateWithoutInout_logInput>
    create: XOR<doorsCreateWithoutInout_logInput, doorsUncheckedCreateWithoutInout_logInput>
  }

  export type doorsUpdateWithoutInout_logInput = {
    org?: organizationUpdateOneRequiredWithoutDoorsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices_setup?: devices_setupUpdateManyWithoutDoorNestedInput
  }

  export type doorsUncheckedUpdateWithoutInout_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices_setup?: devices_setupUncheckedUpdateManyWithoutDoorNestedInput
  }

  export type studentsUpsertWithoutInout_logInput = {
    update: XOR<studentsUpdateWithoutInout_logInput, studentsUncheckedUpdateWithoutInout_logInput>
    create: XOR<studentsCreateWithoutInout_logInput, studentsUncheckedCreateWithoutInout_logInput>
  }

  export type studentsUpdateWithoutInout_logInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: organizationUpdateOneWithoutStudentsNestedInput
    user_group?: user_groupUpdateOneWithoutStudentsNestedInput
    rfid_card?: rfid_cardUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutInout_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateWithoutRfid_cardInput = {
    org: organizationCreateNestedOneWithoutUserInput
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    user_group?: user_groupCreateNestedOneWithoutUserInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userUncheckedCreateWithoutRfid_cardInput = {
    id?: number
    org_id: number
    name: string
    email: string
    password: string
    phone_no: string
    address: string
    description: string
    user_img?: string | null
    user_group_id?: number | null
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type userCreateOrConnectWithoutRfid_cardInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRfid_cardInput, userUncheckedCreateWithoutRfid_cardInput>
  }

  export type studentsCreateWithoutRfid_cardInput = {
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org?: organizationCreateNestedOneWithoutStudentsInput
    user_group?: user_groupCreateNestedOneWithoutStudentsInput
    inout_log?: inout_logCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutRfid_cardInput = {
    id?: number
    org_id?: number | null
    student_id: string
    name: string
    email: string
    phone: string
    address: string
    isActive?: boolean | null
    barcode?: string | null
    user_group_id?: number | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutRfid_cardInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutRfid_cardInput, studentsUncheckedCreateWithoutRfid_cardInput>
  }

  export type userUpsertWithWhereUniqueWithoutRfid_cardInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRfid_cardInput, userUncheckedUpdateWithoutRfid_cardInput>
    create: XOR<userCreateWithoutRfid_cardInput, userUncheckedCreateWithoutRfid_cardInput>
  }

  export type userUpdateWithWhereUniqueWithoutRfid_cardInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRfid_cardInput, userUncheckedUpdateWithoutRfid_cardInput>
  }

  export type userUpdateManyWithWhereWithoutRfid_cardInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUserInput>
  }

  export type studentsUpsertWithWhereUniqueWithoutRfid_cardInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutRfid_cardInput, studentsUncheckedUpdateWithoutRfid_cardInput>
    create: XOR<studentsCreateWithoutRfid_cardInput, studentsUncheckedCreateWithoutRfid_cardInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutRfid_cardInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutRfid_cardInput, studentsUncheckedUpdateWithoutRfid_cardInput>
  }

  export type studentsUpdateManyWithWhereWithoutRfid_cardInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type device_typeCreateWithoutDevices_setupInput = {
    name: string
    description: string
    operation: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type device_typeUncheckedCreateWithoutDevices_setupInput = {
    id?: number
    name: string
    description: string
    operation: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type device_typeCreateOrConnectWithoutDevices_setupInput = {
    where: device_typeWhereUniqueInput
    create: XOR<device_typeCreateWithoutDevices_setupInput, device_typeUncheckedCreateWithoutDevices_setupInput>
  }

  export type doorsCreateWithoutDevices_setupInput = {
    org: organizationCreateNestedOneWithoutDoorsInput
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logCreateNestedManyWithoutDoorInput
  }

  export type doorsUncheckedCreateWithoutDevices_setupInput = {
    id?: number
    org_id: number
    name: string
    description: string
    door_no: string
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    inout_log?: inout_logUncheckedCreateNestedManyWithoutDoorInput
  }

  export type doorsCreateOrConnectWithoutDevices_setupInput = {
    where: doorsWhereUniqueInput
    create: XOR<doorsCreateWithoutDevices_setupInput, doorsUncheckedCreateWithoutDevices_setupInput>
  }

  export type device_typeUpsertWithoutDevices_setupInput = {
    update: XOR<device_typeUpdateWithoutDevices_setupInput, device_typeUncheckedUpdateWithoutDevices_setupInput>
    create: XOR<device_typeCreateWithoutDevices_setupInput, device_typeUncheckedCreateWithoutDevices_setupInput>
  }

  export type device_typeUpdateWithoutDevices_setupInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_typeUncheckedUpdateWithoutDevices_setupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doorsUpsertWithoutDevices_setupInput = {
    update: XOR<doorsUpdateWithoutDevices_setupInput, doorsUncheckedUpdateWithoutDevices_setupInput>
    create: XOR<doorsCreateWithoutDevices_setupInput, doorsUncheckedCreateWithoutDevices_setupInput>
  }

  export type doorsUpdateWithoutDevices_setupInput = {
    org?: organizationUpdateOneRequiredWithoutDoorsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUpdateManyWithoutDoorNestedInput
  }

  export type doorsUncheckedUpdateWithoutDevices_setupInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutDoorNestedInput
  }

  export type organizationCreateWithoutStudentsInput = {
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupCreateNestedManyWithoutOrgInput
    user?: userCreateNestedManyWithoutOrgInput
    user_group?: user_groupCreateNestedManyWithoutOrgInput
    doors?: doorsCreateNestedManyWithoutOrgInput
    inout_log?: inout_logCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    address: string
    contact_no: string
    contact_person: string
    description: string
    email?: string | null
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    org_group?: organization_groupUncheckedCreateNestedManyWithoutOrgInput
    user?: userUncheckedCreateNestedManyWithoutOrgInput
    user_group?: user_groupUncheckedCreateNestedManyWithoutOrgInput
    doors?: doorsUncheckedCreateNestedManyWithoutOrgInput
    inout_log?: inout_logUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutStudentsInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutStudentsInput, organizationUncheckedCreateWithoutStudentsInput>
  }

  export type user_groupCreateWithoutStudentsInput = {
    org: organizationCreateNestedOneWithoutUser_groupInput
    group_name: string
    permission: permissionCreateNestedOneWithoutUser_groupInput
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupUncheckedCreateWithoutStudentsInput = {
    id?: number
    org_id: number
    group_name: string
    permission_id: number
    isActive?: boolean | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutUser_groupInput
  }

  export type user_groupCreateOrConnectWithoutStudentsInput = {
    where: user_groupWhereUniqueInput
    create: XOR<user_groupCreateWithoutStudentsInput, user_groupUncheckedCreateWithoutStudentsInput>
  }

  export type rfid_cardCreateWithoutStudentsInput = {
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardUncheckedCreateWithoutStudentsInput = {
    id?: number
    card_no: string
    description: string
    isActive?: boolean
    updatedAt?: Date | string | null
    createdAt?: Date | string
    user?: userUncheckedCreateNestedManyWithoutRfid_cardInput
  }

  export type rfid_cardCreateOrConnectWithoutStudentsInput = {
    where: rfid_cardWhereUniqueInput
    create: XOR<rfid_cardCreateWithoutStudentsInput, rfid_cardUncheckedCreateWithoutStudentsInput>
  }

  export type inout_logCreateWithoutStudentsInput = {
    organization?: string | null
    org: organizationCreateNestedOneWithoutInout_logInput
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door: doorsCreateNestedOneWithoutInout_logInput
    studentName?: string | null
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logUncheckedCreateWithoutStudentsInput = {
    id?: number
    organization?: string | null
    org_id: number
    devicePort?: string | null
    device_id?: number | null
    doorNo?: string | null
    door_id: number
    studentName?: string | null
    operation: string
    log_date?: Date | string
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type inout_logCreateOrConnectWithoutStudentsInput = {
    where: inout_logWhereUniqueInput
    create: XOR<inout_logCreateWithoutStudentsInput, inout_logUncheckedCreateWithoutStudentsInput>
  }

  export type organizationUpsertWithoutStudentsInput = {
    update: XOR<organizationUpdateWithoutStudentsInput, organizationUncheckedUpdateWithoutStudentsInput>
    create: XOR<organizationCreateWithoutStudentsInput, organizationUncheckedCreateWithoutStudentsInput>
  }

  export type organizationUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUpdateManyWithoutOrgNestedInput
    user?: userUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUpdateManyWithoutOrgNestedInput
    doors?: doorsUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_no?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org_group?: organization_groupUncheckedUpdateManyWithoutOrgNestedInput
    user?: userUncheckedUpdateManyWithoutOrgNestedInput
    user_group?: user_groupUncheckedUpdateManyWithoutOrgNestedInput
    doors?: doorsUncheckedUpdateManyWithoutOrgNestedInput
    inout_log?: inout_logUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type user_groupUpsertWithoutStudentsInput = {
    update: XOR<user_groupUpdateWithoutStudentsInput, user_groupUncheckedUpdateWithoutStudentsInput>
    create: XOR<user_groupCreateWithoutStudentsInput, user_groupUncheckedCreateWithoutStudentsInput>
  }

  export type user_groupUpdateWithoutStudentsInput = {
    org?: organizationUpdateOneRequiredWithoutUser_groupNestedInput
    group_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateOneRequiredWithoutUser_groupNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutUser_groupNestedInput
  }

  export type rfid_cardUpsertWithoutStudentsInput = {
    update: XOR<rfid_cardUpdateWithoutStudentsInput, rfid_cardUncheckedUpdateWithoutStudentsInput>
    create: XOR<rfid_cardCreateWithoutStudentsInput, rfid_cardUncheckedCreateWithoutStudentsInput>
  }

  export type rfid_cardUpdateWithoutStudentsInput = {
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutRfid_cardNestedInput
  }

  export type rfid_cardUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    card_no?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutRfid_cardNestedInput
  }

  export type inout_logUpsertWithWhereUniqueWithoutStudentsInput = {
    where: inout_logWhereUniqueInput
    update: XOR<inout_logUpdateWithoutStudentsInput, inout_logUncheckedUpdateWithoutStudentsInput>
    create: XOR<inout_logCreateWithoutStudentsInput, inout_logUncheckedCreateWithoutStudentsInput>
  }

  export type inout_logUpdateWithWhereUniqueWithoutStudentsInput = {
    where: inout_logWhereUniqueInput
    data: XOR<inout_logUpdateWithoutStudentsInput, inout_logUncheckedUpdateWithoutStudentsInput>
  }

  export type inout_logUpdateManyWithWhereWithoutStudentsInput = {
    where: inout_logScalarWhereInput
    data: XOR<inout_logUpdateManyMutationInput, inout_logUncheckedUpdateManyWithoutInout_logInput>
  }

  export type organization_groupUpdateWithoutOrgInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organization_groupUncheckedUpdateManyWithoutOrg_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpdateWithoutOrgInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    rfid_card?: rfid_cardUpdateOneWithoutUserNestedInput
    user_group?: user_groupUpdateOneWithoutUserNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_groupUpdateWithoutOrgInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    permission?: permissionUpdateOneRequiredWithoutUser_groupNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutUser_groupNestedInput
    students?: studentsUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutUser_groupNestedInput
    students?: studentsUncheckedUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateManyWithoutUser_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    permission_id?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doorsUpdateWithoutOrgInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUpdateManyWithoutDoorNestedInput
    devices_setup?: devices_setupUpdateManyWithoutDoorNestedInput
  }

  export type doorsUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutDoorNestedInput
    devices_setup?: devices_setupUncheckedUpdateManyWithoutDoorNestedInput
  }

  export type doorsUncheckedUpdateManyWithoutDoorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    door_no?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUpdateWithoutOrgInput = {
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door?: doorsUpdateOneRequiredWithoutInout_logNestedInput
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    students?: studentsUpdateOneRequiredWithoutInout_logNestedInput
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: IntFieldUpdateOperationsInput | number
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateManyWithoutInout_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: IntFieldUpdateOperationsInput | number
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsUpdateWithoutOrgInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_group?: user_groupUpdateOneWithoutStudentsNestedInput
    rfid_card?: rfid_cardUpdateOneWithoutStudentsNestedInput
    inout_log?: inout_logUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutOrgInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpdateWithoutUser_groupInput = {
    org?: organizationUpdateOneRequiredWithoutUserNestedInput
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    rfid_card?: rfid_cardUpdateOneWithoutUserNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutUser_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsUpdateWithoutUser_groupInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: organizationUpdateOneWithoutStudentsNestedInput
    rfid_card?: rfid_cardUpdateOneWithoutStudentsNestedInput
    inout_log?: inout_logUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutUser_groupInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    rfid_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type user_groupUpdateWithoutPermissionInput = {
    org?: organizationUpdateOneRequiredWithoutUser_groupNestedInput
    group_name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateManyWithoutUser_groupNestedInput
    students?: studentsUpdateManyWithoutUser_groupNestedInput
  }

  export type user_groupUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUncheckedUpdateManyWithoutUser_groupNestedInput
    students?: studentsUncheckedUpdateManyWithoutUser_groupNestedInput
  }

  export type inout_logUpdateWithoutDoorInput = {
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org?: organizationUpdateOneRequiredWithoutInout_logNestedInput
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    students?: studentsUpdateOneRequiredWithoutInout_logNestedInput
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateWithoutDoorInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: IntFieldUpdateOperationsInput | number
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUpdateWithoutDoorInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: device_typeUpdateOneWithoutDevices_setupNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUncheckedUpdateWithoutDoorInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    devicesType?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUncheckedUpdateManyWithoutDevices_setupInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    devicesType?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUpdateWithoutDevice_typeInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    door?: doorsUpdateOneWithoutDevices_setupNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type devices_setupUncheckedUpdateWithoutDevice_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pnpId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpdateWithoutRfid_cardInput = {
    org?: organizationUpdateOneRequiredWithoutUserNestedInput
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group?: user_groupUpdateOneWithoutUserNestedInput
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutRfid_cardInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_img?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsUpdateWithoutRfid_cardInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: organizationUpdateOneWithoutStudentsNestedInput
    user_group?: user_groupUpdateOneWithoutStudentsNestedInput
    inout_log?: inout_logUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutRfid_cardInput = {
    id?: IntFieldUpdateOperationsInput | number
    org_id?: NullableIntFieldUpdateOperationsInput | number | null
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    user_group_id?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inout_log?: inout_logUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type inout_logUpdateWithoutStudentsInput = {
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org?: organizationUpdateOneRequiredWithoutInout_logNestedInput
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door?: doorsUpdateOneRequiredWithoutInout_logNestedInput
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inout_logUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: IntFieldUpdateOperationsInput | number
    devicePort?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    doorNo?: NullableStringFieldUpdateOperationsInput | string | null
    door_id?: IntFieldUpdateOperationsInput | number
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}