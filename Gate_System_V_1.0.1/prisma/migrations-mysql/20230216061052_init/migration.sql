/*
  Warnings:

  - You are about to drop the column `log_type` on the `device_log` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `device_log` table. All the data in the column will be lost.
  - Added the required column `operation` to the `device_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `device_log` table without a default value. This is not possible if the table is not empty.
  - Made the column `log_date` on table `device_log` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `device_log` DROP FOREIGN KEY `device_log_user_id_fkey`;

-- AlterTable
ALTER TABLE `device_log` DROP COLUMN `log_type`,
    DROP COLUMN `user_id`,
    ADD COLUMN `operation` VARCHAR(50) NOT NULL,
    ADD COLUMN `student_id` INTEGER NOT NULL,
    MODIFY `log_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `device_log` ADD CONSTRAINT `device_log_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
