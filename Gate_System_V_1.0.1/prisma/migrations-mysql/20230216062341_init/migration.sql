/*
  Warnings:

  - You are about to drop the `device_log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `device_log` DROP FOREIGN KEY `device_log_door_id_fkey`;

-- DropForeignKey
ALTER TABLE `device_log` DROP FOREIGN KEY `device_log_org_id_fkey`;

-- DropForeignKey
ALTER TABLE `device_log` DROP FOREIGN KEY `device_log_student_id_fkey`;

-- DropTable
DROP TABLE `device_log`;

-- CreateTable
CREATE TABLE `inout_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `door_id` INTEGER NOT NULL,
    `student_id` INTEGER NOT NULL,
    `operation` VARCHAR(50) NOT NULL,
    `log_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inout_log` ADD CONSTRAINT `inout_log_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inout_log` ADD CONSTRAINT `inout_log_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inout_log` ADD CONSTRAINT `inout_log_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
