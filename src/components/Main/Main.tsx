import { Container } from "../index";
import { SneakersImages } from "./SneakersImages";
import { SneakersInfo } from "./SneakersInfo";

export const Main = () => {
  return (
    <main>
      <Container className="space-y-4 md:flex w-full md:py-10 lg:py-20">
        <SneakersImages />
        <SneakersInfo />
      </Container>
    </main>
  );
};
