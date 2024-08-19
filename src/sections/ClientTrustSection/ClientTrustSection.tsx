import { useHeroTranslations } from '@helpers/translations'
import BinanceLogo from '@assets/brands/binance_logo.svg'
import BitcoinLogo from '@assets/brands/bitcoin_logo.svg'
import SolanaLogo from '@assets/brands/solana-sol-logo.svg'
import EtheriumLogo from '@assets/brands/etherium_logo.svg'
import TetherLogo from '@assets/brands/tether_logo.svg'
import XrpLogo from '@assets/brands/xrp_logo.svg'

const clientData = [
  {
    key: 1,
    name: 'Binance',
    logo: BinanceLogo,
  },
  {
    key: 2,
    name: 'Bitcoin',
    logo: BitcoinLogo,
  },
  {
    key: 3,
    name: 'Solana',
    logo: SolanaLogo,
  },
  {
    key: 4,
    name: 'Etherium',
    logo: EtheriumLogo,
  },
  {
    key: 5,
    name: 'Tether',
    logo: TetherLogo,
  },
  {
    key: 6,
    name: 'XRP',
    logo: XrpLogo,
  },
]

function ClientTrustSection() {
  const { trusted } = useHeroTranslations()

  return (
    <>
      <div className="container">
        <div className="title">{trusted}</div>
        <div className="clients">
          {clientData.map(({ key, ...client }) => {
            return (
              <div key={key}>
                <div className="img">
                  <img src={client.logo} alt="logo" />
                </div>
                <div className="client-name">{client.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ClientTrustSection
