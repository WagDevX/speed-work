import whatsLogo from "../assets/images/whatsapp2.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Item {
  data: string;
  status: string;
  vaga: string;
  cliente: string;
  descricao: string;
  local: string;
  tipo: string;
  horario: string;
}

const lista: Item[] = [
  {
    data: "2024-01-31",
    status: "Aberto",
    vaga: "Desenvolvedor Front-end",
    cliente: "Empresa ABC",
    descricao: "Desenvolvimento de interfaces de usuário",
    local: "Cidade X",
    tipo: "Tempo Integral",
    horario: "9h - 18h",
  },
  {
    data: "2024-02-01",
    status: "Em andamento",
    vaga: "Analista de Dados",
    cliente: "Empresa XYZ",
    descricao: "Análise e interpretação de dados",
    local: "Cidade Y",
    tipo: "Meio Período",
    horario: "14h - 18h",
  },
  {
    data: "2024-02-15",
    status: "Fechado",
    vaga: "Engenheiro de Software",
    cliente: "Empresa 123",
    descricao: "Desenvolvimento de aplicações web",
    local: "Cidade Z",
    tipo: "Tempo Integral",
    horario: "9h - 17h",
  },
  {
    data: "2024-03-02",
    status: "Aberto",
    vaga: "Designer Gráfico",
    cliente: "Empresa DesignMaster",
    descricao: "Criação de elementos visuais para campanhas",
    local: "Cidade W",
    tipo: "Meio Período",
    horario: "10h - 14h",
  },
  {
    data: "2024-03-10",
    status: "Em andamento",
    vaga: "Analista de Qualidade",
    cliente: "Empresa TestePerfeito",
    descricao: "Garantia de qualidade de software",
    local: "Cidade V",
    tipo: "Tempo Integral",
    horario: "8h - 17h",
  },
  {
    data: "2024-03-20",
    status: "Fechado",
    vaga: "Gerente de Projetos",
    cliente: "Empresa Gerenciadora",
    descricao: "Coordenação de projetos e equipes",
    local: "Cidade U",
    tipo: "Tempo Integral",
    horario: "9h - 18h",
  },
  {
    data: "2024-04-05",
    status: "Aberto",
    vaga: "Analista de Suporte Técnico",
    cliente: "Empresa SuporteMaster",
    descricao: "Atendimento e suporte a usuários",
    local: "Cidade T",
    tipo: "Meio Período",
    horario: "13h - 17h",
  },
  {
    data: "2024-04-15",
    status: "Em andamento",
    vaga: "Desenvolvedor Full-stack",
    cliente: "Empresa TechAll",
    descricao: "Desenvolvimento de aplicativos completos",
    local: "Cidade S",
    tipo: "Tempo Integral",
    horario: "10h - 19h",
  },
];

export default function Dashboard(): JSX.Element {
  return (
    <>
      <div className=" mx-12">
        <table className="basic">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Data</th>
              <th>Status</th>
              <th>Vaga</th>
              <th>Cliente</th>
              <th>Descrição</th>
              <th>Local</th>
              <th>Tipo</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((vaga, index) => (
              <>
                <tr key={index}>
                  <td>{index}.</td>
                  <td>
                    <button>
                      <Image
                        src={whatsLogo}
                        alt="whatsapp"
                        height={40}
                        width={40}
                      />
                    </button>
                  </td>
                  <td>{vaga.data}</td>
                  <td>
                    <div
                      className={`flex ${
                        vaga.status === "Em andamento"
                          ? "bg-blue-400 text-blue-700"
                          : ""
                      }  ${
                        vaga.status === "Fechado"
                          ? "bg-red-400 text-red-700"
                          : ""
                      }
                      ${
                        vaga.status === "Aberto"
                          ? "bg-green-400 text-green-700"
                          : ""
                      } justify-center rounded-lg text-green-700 font-semibold`}
                    >
                      {vaga.status}
                    </div>
                  </td>
                  <td>{vaga.vaga}</td>
                  <td>{vaga.cliente}</td>
                  <td>{vaga.descricao}</td>
                  <td>{vaga.local}</td>
                  <td>{vaga.tipo}</td>
                  <td>{vaga.horario}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
