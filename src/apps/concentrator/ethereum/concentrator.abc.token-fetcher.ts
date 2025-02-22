import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import { GetPricePerShareParams, GetUnderlyingTokensParams } from '~position/template/app-token.template.types';

import { ConcentratorViemContractFactory } from '../contracts';
import { AbcCvx } from '../contracts/viem';

@PositionTemplate()
export class EthereumConcentratorAbcCvxTokenFetcher extends AppTokenTemplatePositionFetcher<AbcCvx> {
  groupLabel = 'abcCVX';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(ConcentratorViemContractFactory) protected readonly contractFactory: ConcentratorViemContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.contractFactory.abcCvx({ address, network: this.network });
  }

  getAddresses() {
    return ['0xdec800c2b17c9673570fdf54450dc1bd79c8e359'];
  }

  async getUnderlyingTokenDefinitions({ contract }: GetUnderlyingTokensParams<AbcCvx>) {
    return [
      { address: await contract.read.curveLpToken(), network: this.network },
      { address: await contract.read.debtToken(), network: this.network },
    ];
  }

  async getPricePerShare({ contract }: GetPricePerShareParams<AbcCvx>) {
    const supply = await contract.read.totalSupply();
    const reserves = await Promise.all([contract.read.totalCurveLpToken(), contract.read.totalDebtToken()]);
    return reserves.map(r => Number(r) / Number(supply));
  }
}
