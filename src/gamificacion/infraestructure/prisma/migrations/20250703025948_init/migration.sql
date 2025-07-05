-- CreateTable
CREATE TABLE `Logro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `puntosOtorgados` INTEGER NOT NULL,
    `tipo` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioLogro` (
    `idUsuario` INTEGER NOT NULL,
    `idLogro` INTEGER NOT NULL,
    `fechaObtenido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idUsuario`, `idLogro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsuarioLogro` ADD CONSTRAINT `UsuarioLogro_idLogro_fkey` FOREIGN KEY (`idLogro`) REFERENCES `Logro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
