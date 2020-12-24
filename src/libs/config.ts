import AudiusLibs from '@audius/libs'

const ETH_TOKEN_ADDRESS = '0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998'
const ETH_REGISTRY_ADDRESS = '0xd976d3b4f4e22a238c1A736b6612D22f17b6f64C'
const ETH_PROVIDER_URLS = 'https://eth.audius.co'
const ETH_OWNER_WALLET = '0xC7310a03e930DD659E15305ed7e1F5Df0F0426C5'
const IDENTITY_SERVICE = 'https://identityservice.audius.co'
const WEB3_REGISTRY_ADDRESS = '0xC611C82150b56E6e4Ec5973AcAbA8835Dd0d75A2'
const WEB3_PROVIDER_URLS =
  'https://poa-gateway.audius.co,https://core.poa.network'

const makeLibsConfig = () => ({
  ethWeb3Config: AudiusLibs.configEthWeb3(
    ETH_TOKEN_ADDRESS,
    ETH_REGISTRY_ADDRESS,
    ETH_PROVIDER_URLS,
    ETH_OWNER_WALLET
  ),
  web3: AudiusLibs.configInternalWeb3(
    WEB3_REGISTRY_ADDRESS,
    WEB3_PROVIDER_URLS
  ),
  discoveryProviderConfig: AudiusLibs.configDiscoveryProvider(
    null /* whitelist */,
    null /* reslectTimeout */
  ),
  identityServiceConfig: AudiusLibs.configIdentityService(IDENTITY_SERVICE),
  /* TODO: not always isServer */
  isServer: true
})
export default makeLibsConfig
