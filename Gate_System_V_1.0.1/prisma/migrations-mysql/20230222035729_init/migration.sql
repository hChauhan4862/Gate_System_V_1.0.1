/*
  Warnings:

  - You are about to alter the column `description` on the `commands` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `device_type` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `doors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `address` on the `organization` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `organization` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `organization_group` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `permission` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `rfid_card` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `address` on the `students` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `address` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `description` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `commands` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `command_value` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `device_type` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `operation` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `devices_setup` MODIFY `friendlyName` VARCHAR(191) NOT NULL,
    MODIFY `locationId` VARCHAR(191) NULL,
    MODIFY `manufacturer` VARCHAR(191) NOT NULL,
    MODIFY `path` VARCHAR(191) NOT NULL,
    MODIFY `pnpId` VARCHAR(191) NOT NULL,
    MODIFY `productId` VARCHAR(191) NULL,
    MODIFY `serialNumber` VARCHAR(191) NULL,
    MODIFY `vendorId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `doors` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `door_no` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inout_log` MODIFY `operation` VARCHAR(191) NOT NULL,
    MODIFY `devicePort` VARCHAR(191) NULL,
    MODIFY `doorNo` VARCHAR(191) NULL,
    MODIFY `organization` VARCHAR(191) NULL,
    MODIFY `studentName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `organization` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `contact_no` VARCHAR(191) NOT NULL,
    MODIFY `contact_person` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `organization_group` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `permission` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `rfid_card` MODIFY `card_no` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `students` MODIFY `student_id` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `phone_no` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `user_img` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user_group` MODIFY `group_name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `user_settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `theme` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_settings` ADD CONSTRAINT `user_settings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
