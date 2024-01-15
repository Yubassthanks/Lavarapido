/*
  Warnings:

  - You are about to drop the column `dataTransacao` on the `agendamento` table. All the data in the column will be lost.
  - You are about to drop the column `formaPagamentoId` on the `agendamento` table. All the data in the column will be lost.
  - You are about to drop the column `dataTransacao` on the `transacao` table. All the data in the column will be lost.
  - You are about to drop the column `formaPagamentoId` on the `transacao` table. All the data in the column will be lost.
  - You are about to drop the `formadepagamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_formaPagamentoId_fkey`;

-- DropForeignKey
ALTER TABLE `transacao` DROP FOREIGN KEY `Transacao_formaPagamentoId_fkey`;

-- AlterTable
ALTER TABLE `agendamento` DROP COLUMN `dataTransacao`,
    DROP COLUMN `formaPagamentoId`;

-- AlterTable
ALTER TABLE `transacao` DROP COLUMN `dataTransacao`,
    DROP COLUMN `formaPagamentoId`;

-- DropTable
DROP TABLE `formadepagamento`;
