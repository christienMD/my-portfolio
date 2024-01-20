import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  email?: string;
  subject: string;
  message: string;
}

const PortfolioEmailTemplate = ({ email, subject, message }: Props) => {
  return (
    <Html>
      <Preview>{subject}</Preview>
      <Container>
        <Text>{message}</Text>
        <Link href={`https://${email}`}>{email}</Link>
      </Container>
    </Html>
  );
};

export default PortfolioEmailTemplate;
