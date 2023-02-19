-- AlterTable
ALTER TABLE `inout_log` ADD COLUMN `devicePort` VARCHAR(100) NULL,
    ADD COLUMN `doorNo` VARCHAR(100) NULL,
    ADD COLUMN `organization` VARCHAR(100) NULL,
    ADD COLUMN `studentName` VARCHAR(100) NULL;
