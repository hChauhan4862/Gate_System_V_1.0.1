-- CreateTable
CREATE TABLE "organization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "contact_person" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "organization_group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "org_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "organization_group_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "org_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_img" TEXT,
    "user_group_id" INTEGER,
    "rfid_card_id" INTEGER,
    "isActive" BOOLEAN DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_rfid_card_id_fkey" FOREIGN KEY ("rfid_card_id") REFERENCES "rfid_card" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "user_user_group_id_fkey" FOREIGN KEY ("user_group_id") REFERENCES "user_group" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "org_id" INTEGER NOT NULL,
    "group_name" TEXT NOT NULL,
    "permission_id" INTEGER NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_group_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_group_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permission" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "permission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "doors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "org_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "door_no" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "doors_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "device_type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "inout_log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "organization" TEXT,
    "org_id" INTEGER NOT NULL,
    "devicePort" TEXT,
    "device_id" INTEGER,
    "doorNo" TEXT,
    "door_id" INTEGER NOT NULL,
    "studentName" TEXT,
    "student_id" INTEGER NOT NULL,
    "operation" TEXT NOT NULL,
    "log_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "inout_log_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "inout_log_door_id_fkey" FOREIGN KEY ("door_id") REFERENCES "doors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "inout_log_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "commands" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "command_value" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "rfid_card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card_no" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "devices_setup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "friendlyName" TEXT NOT NULL,
    "locationId" TEXT,
    "manufacturer" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "pnpId" TEXT NOT NULL,
    "productId" TEXT,
    "serialNumber" TEXT,
    "vendorId" TEXT,
    "devicesType" INTEGER,
    "door_id" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "devices_setup_devicesType_fkey" FOREIGN KEY ("devicesType") REFERENCES "device_type" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "devices_setup_door_id_fkey" FOREIGN KEY ("door_id") REFERENCES "doors" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "org_id" INTEGER,
    "student_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "barcode" TEXT,
    "user_group_id" INTEGER,
    "rfid_card_id" INTEGER,
    "updatedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "students_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "organization" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "students_user_group_id_fkey" FOREIGN KEY ("user_group_id") REFERENCES "user_group" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "students_rfid_card_id_fkey" FOREIGN KEY ("rfid_card_id") REFERENCES "rfid_card" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_rfid_card_id_key" ON "user"("id", "rfid_card_id");
