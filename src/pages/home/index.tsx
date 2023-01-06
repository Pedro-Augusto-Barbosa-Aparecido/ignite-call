import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import previewImage from "../../assets/app.svg";
import Image from "next/image";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size={"4xl"}>Agendamento Descomplicado</Heading>
        <Text size={"xl"}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando a aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}
