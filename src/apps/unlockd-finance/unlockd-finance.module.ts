import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { UnlockdFinanceViemContractFactory } from './contracts';
import { EthereumUnlockdFinancePositionPresenter } from './ethereum/unlockd-finance.position-presenter';
import { EthereumUnlockdFinanceSupplyTokenFetcher } from './ethereum/unlockd-finance.supply.token-fetcher';
import { EthereumUnlockdFinanceVariableDebtTokenFetcher } from './ethereum/unlockd-finance.variable-debt.token-fetcher';

@Module({
  providers: [
    UnlockdFinanceViemContractFactory,
    EthereumUnlockdFinancePositionPresenter,
    EthereumUnlockdFinanceSupplyTokenFetcher,
    EthereumUnlockdFinanceVariableDebtTokenFetcher,
  ],
})
export class UnlockdFinanceAppModule extends AbstractApp() {}
