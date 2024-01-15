/*
  Warnings:

  - You are about to drop the `transacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `transacao` DROP FOREIGN KEY `Transacao_automovelId_fkey`;

-- DropForeignKey
ALTER TABLE `transacao` DROP FOREIGN KEY `Transacao_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `transacao` DROP FOREIGN KEY `Transacao_servicoId_fkey`;

-- DropTable
DROP TABLE `transacao`;
