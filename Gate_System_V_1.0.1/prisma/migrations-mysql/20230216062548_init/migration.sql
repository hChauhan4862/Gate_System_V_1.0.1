/*
  Warnings:

  - Added the required column `device_id` to the `inout_log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inout_log` ADD COLUMN `device_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `inout_log` ADD CONSTRAINT `inout_log_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `devices_setup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
