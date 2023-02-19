-- CreateTable
CREATE TABLE `organization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `contact_no` VARCHAR(50) NOT NULL,
    `contact_person` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organization_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `phone_no` VARCHAR(50) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `user_img` LONGTEXT NULL,
    `user_group_id` INTEGER NULL,
    `rfid_card_id` INTEGER NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_id_rfid_card_id_key`(`id`, `rfid_card_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `group_name` VARCHAR(100) NOT NULL,
    `permission_id` INTEGER NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `door_no` VARCHAR(50) NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `operation` VARCHAR(50) NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `device_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NOT NULL,
    `door_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `log_type` VARCHAR(50) NOT NULL,
    `log_date` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `command_value` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rfid_card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `card_no` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `devices_setup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `friendlyName` VARCHAR(100) NOT NULL,
    `locationId` VARCHAR(100) NULL,
    `manufacturer` VARCHAR(100) NOT NULL,
    `path` VARCHAR(100) NOT NULL,
    `pnpId` VARCHAR(100) NOT NULL,
    `productId` VARCHAR(100) NULL,
    `serialNumber` VARCHAR(100) NULL,
    `vendorId` VARCHAR(100) NULL,
    `devicesType` INTEGER NULL,
    `door_id` INTEGER NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_id` INTEGER NULL,
    `student_id` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `barcode` VARCHAR(100) NULL,
    `user_group_id` INTEGER NULL,
    `rfid_card_id` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `organization_group` ADD CONSTRAINT `organization_group_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_rfid_card_id_fkey` FOREIGN KEY (`rfid_card_id`) REFERENCES `rfid_card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_user_group_id_fkey` FOREIGN KEY (`user_group_id`) REFERENCES `user_group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_group` ADD CONSTRAINT `user_group_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_group` ADD CONSTRAINT `user_group_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doors` ADD CONSTRAINT `doors_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `device_log` ADD CONSTRAINT `device_log_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `device_log` ADD CONSTRAINT `device_log_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `device_log` ADD CONSTRAINT `device_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices_setup` ADD CONSTRAINT `devices_setup_devicesType_fkey` FOREIGN KEY (`devicesType`) REFERENCES `device_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices_setup` ADD CONSTRAINT `devices_setup_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_user_group_id_fkey` FOREIGN KEY (`user_group_id`) REFERENCES `user_group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_rfid_card_id_fkey` FOREIGN KEY (`rfid_card_id`) REFERENCES `rfid_card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
