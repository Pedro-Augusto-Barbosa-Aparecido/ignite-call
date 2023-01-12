import { Avatar, Heading, Text } from "@ignite-ui/react";
import { Container, UserHeader } from "./styles";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "../../../lib/prisma";
import { ScheduleForm } from "./ScheduleForm";
import { NextSeo } from "next-seo/lib/meta/nextSEO";

interface ScheduleProps {
  user: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function Schedule({
  user: { avatarUrl, bio, name },
}: ScheduleProps) {
  return (
    <Container>
      <NextSeo title={`Agendar com ${name} | Ignite Call`} />
      <UserHeader>
        <Avatar src={avatarUrl} alt={name} />
        <Heading>{name}</Heading>
        <Text>{bio}</Text>
      </UserHeader>

      <ScheduleForm />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
