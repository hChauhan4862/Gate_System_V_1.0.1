-- DropForeignKey
ALTER TABLE `inout_log` DROP FOREIGN KEY `inout_log_device_id_fkey`;

-- AlterTable
ALTER TABLE `inout_log` MODIFY `device_id` INTEGER NULL;
