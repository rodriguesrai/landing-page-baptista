import { ContatosContainer } from '../styles/Contatos.styled'

export default function Contatos() {
  return (
    <>
      <ContatosContainer>
        <h1>Contatos</h1>

        <h2>Atendimento em Todo Brasil</h2>
        <p>
          Estamos dedicados a fornecer serviços jurídicos de qualidade para
          clientes em todo o Brasil. Independentemente da sua localização,
          estamos aqui para ajudar. Entre em contato conosco para obter
          assistência legal profissional e personalizada.
        </p>
        {/* Informações de Contato */}
        <div>
          <h2>Entre em Contato</h2>
          <p>Email: contato@baptistaadvocacia.com</p>
          <p>WhatsApp: (11) 1234-5678</p>
          <p>Instagram: @baptista.adv</p>
        </div>

        {/* Endereços */}
        <div>
          <h2>Nossos Endereços</h2>
          <p>Escritório Principal:</p>
          <p>Rua Principal, 123 - Centro</p>
          <p>Cidade - Estado</p>

          <p>Filial 1:</p>
          <p>Avenida Secundária, 456 - Bairro</p>
          <p>Cidade - Estado</p>
        </div>

        {/* Atendimento para Todo Brasil */}
        <div></div>
      </ContatosContainer>
    </>
  )
}
