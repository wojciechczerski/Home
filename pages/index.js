import Text from "../components/Text";
import Button from "../components/Button";
import HStack from "../components/HStack";
import VStack from "../components/VStack";
import Project from "../components/Project";

export default function Index() {
  return (
    <div>
      <VStack>
        <HStack justify="flex-end">
          <VStack justify="center">
            <HStack justify="center">
              <Text>Wojciech Czerski</Text>
            </HStack>
            <HStack justify="center">
              <Button
                name="GitHub"
                image="/images/github-64.png"
                url="https://github.com/wojciechczerski"
              />
              <Button
                name="LinkedIn"
                image="/images/linkedin-64.png"
                url="https://www.linkedin.com/in/wojciechczerski/"
              />
              <Button
                name="E-Mail"
                image="/images/mail-64.png"
                url="mailto:contact@wojciechczerski.com"
              />
            </HStack>
          </VStack>
        </HStack>
        <VStack align="center">
          <Project
            title="Tomino"
            desc="The classical puzzle game - made with Unity - designed for mobile"
            images={[
              "/images/tomino-device-1.png",
              "/images/tomino-device-2.png"
            ]}
            buttons={[
              {
                title: "View on GitHub",
                url: "https://github.com/wojciechczerski/Tomino"
              }
            ]}
          />
        </VStack>
        <style jsx global>{`
          html {
            color: white;
            background-color: #00252d;
            font-size: 1em;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.4;
          }
        `}</style>
      </VStack>
    </div>
  );
}
