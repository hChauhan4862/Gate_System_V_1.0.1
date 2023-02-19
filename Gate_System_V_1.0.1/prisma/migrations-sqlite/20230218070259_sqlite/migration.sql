-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
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
INSERT INTO "new_user" ("address", "createdAt", "description", "email", "id", "isActive", "name", "org_id", "password", "phone_no", "rfid_card_id", "updatedAt", "user_group_id", "user_img") SELECT "address", "createdAt", "description", "email", "id", "isActive", "name", "org_id", "password", "phone_no", "rfid_card_id", "updatedAt", "user_group_id", "user_img" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_rfid_card_id_key" ON "user"("id", "rfid_card_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
