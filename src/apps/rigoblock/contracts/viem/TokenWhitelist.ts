/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const tokenWhitelistAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAuthority',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isWhitelisted',
        type: 'bool',
      },
    ],
    name: 'Whitelisted',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: 'whitelisted',
        type: 'bool[]',
      },
    ],
    name: 'batchUpdateTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAuthority',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'isWhitelistedToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'removeToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'whitelistToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export type TokenWhitelist = typeof tokenWhitelistAbi;
export type TokenWhitelistContract = GetContractReturnType<TokenWhitelist, PublicClient>;

export class TokenWhitelist__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: tokenWhitelistAbi, publicClient: client });
  }
}
